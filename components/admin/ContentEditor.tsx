'use client';

import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';

interface ContentEditorProps {
  section: string;
}

export default function ContentEditor({ section }: ContentEditorProps) {
  const [content, setContent] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    loadContent();
  }, [section]);

  const loadContent = async () => {
    setLoading(true);
    setError('');
    try {
      const docRef = doc(db, 'content', section);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        setContent(docSnap.data());
      } else {
        setContent({});
      }
    } catch (err) {
      console.error('Error loading content:', err);
      setError('Failed to load content');
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    setError('');
    setSuccess(false);
    
    try {
      const docRef = doc(db, 'content', section);
      await setDoc(docRef, content);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      console.error('Error saving content:', err);
      setError('Failed to save content');
    } finally {
      setSaving(false);
    }
  };

  const handleFieldChange = (field: string, value: any) => {
    setContent((prev: any) => ({
      ...prev,
      [field]: value,
    }));
  };

  const getFieldsForSection = (section: string) => {
    switch (section) {
      case 'hero':
        return [
          { name: 'title', label: 'Title', type: 'text' },
          { name: 'subtitle', label: 'Subtitle', type: 'text' },
          { name: 'description', label: 'Description', type: 'textarea' },
          { name: 'buttonText', label: 'Button Text', type: 'text' },
        ];
      case 'about':
        return [
          { name: 'title', label: 'Title', type: 'text' },
          { name: 'content', label: 'Content', type: 'textarea' },
          { name: 'mission', label: 'Mission', type: 'textarea' },
          { name: 'buttonText', label: 'Button Text', type: 'text' },
        ];
      case 'services':
        return [
          { 
            name: 'services', 
            label: 'Services', 
            type: 'array',
            fields: [
              { name: 'icon', label: 'Icon', type: 'select', options: ['Palette', 'Code', 'Layout', 'Megaphone', 'Rocket', 'Shield'] },
              { name: 'title', label: 'Title', type: 'text' },
              { name: 'description', label: 'Description', type: 'textarea' },
              { name: 'features', label: 'Features', type: 'array', maxItems: 4, itemType: 'text' },
              { name: 'href', label: 'URL Path', type: 'text' },
            ]
          }
        ];
      default:
        return [];
    }
  };

  const renderField = (field: any) => {
    switch (field.type) {
      case 'text':
        return (
          <input
            type="text"
            value={content[field.name] || ''}
            onChange={(e) => handleFieldChange(field.name, e.target.value)}
            className="w-full p-2 bg-white/10 rounded-md border border-white/20 text-white"
          />
        );
      case 'textarea':
        return (
          <textarea
            value={content[field.name] || ''}
            onChange={(e) => handleFieldChange(field.name, e.target.value)}
            rows={4}
            className="w-full p-2 bg-white/10 rounded-md border border-white/20 text-white"
          />
        );
      case 'select':
        return (
          <select
            value={content[field.name] || ''}
            onChange={(e) => handleFieldChange(field.name, e.target.value)}
            className="w-full p-2 bg-white/10 rounded-md border border-white/20 text-white"
          >
            {field.options.map((option: string) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      case 'array':
        if (field.itemType) {
          // For simple arrays (like features)
          const items = content[field.name] || [];
          return (
            <div className="space-y-2">
              {items.map((item: string, index: number) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    value={item}
                    onChange={(e) => {
                      const newItems = [...items];
                      newItems[index] = e.target.value;
                      handleFieldChange(field.name, newItems);
                    }}
                    className="flex-1 p-2 bg-white/10 rounded-md border border-white/20 text-white"
                  />
                  <button
                    onClick={() => {
                      const newItems = items.filter((_: any, i: number) => i !== index);
                      handleFieldChange(field.name, newItems);
                    }}
                    className="px-3 py-1 bg-red-500/20 hover:bg-red-500/30 rounded-md"
                  >
                    Remove
                  </button>
                </div>
              ))}
              {(!field.maxItems || items.length < field.maxItems) && (
                <button
                  onClick={() => handleFieldChange(field.name, [...items, ''])}
                  className="px-3 py-1 bg-primary/20 hover:bg-primary/30 rounded-md"
                >
                  Add {field.label}
                </button>
              )}
            </div>
          );
        } else {
          // For complex arrays (like services)
          const items = content[field.name] || [];
          return (
            <div className="space-y-4">
              {items.map((item: any, index: number) => (
                <div key={index} className="p-4 bg-white/5 rounded-lg space-y-4">
                  <div className="flex justify-between items-center">
                    <h4 className="text-lg font-semibold">{field.label} #{index + 1}</h4>
                    <button
                      onClick={() => {
                        const newItems = items.filter((_: any, i: number) => i !== index);
                        handleFieldChange(field.name, newItems);
                      }}
                      className="px-3 py-1 bg-red-500/20 hover:bg-red-500/30 rounded-md"
                    >
                      Remove
                    </button>
                  </div>
                  {field.fields.map((subField: any) => (
                    <div key={subField.name} className="space-y-1">
                      <label className="text-sm text-gray-300">{subField.label}</label>
                      {subField.type === 'array' ? (
                        // Render nested array (features)
                        <div className="space-y-2">
                          {(item[subField.name] || []).map((feature: string, featureIndex: number) => (
                            <div key={featureIndex} className="flex gap-2">
                              <input
                                type="text"
                                value={feature}
                                onChange={(e) => {
                                  const newItems = [...items];
                                  const newFeatures = [...item[subField.name]];
                                  newFeatures[featureIndex] = e.target.value;
                                  newItems[index] = { ...item, [subField.name]: newFeatures };
                                  handleFieldChange(field.name, newItems);
                                }}
                                className="flex-1 p-2 bg-white/10 rounded-md border border-white/20 text-white"
                              />
                              <button
                                onClick={() => {
                                  const newItems = [...items];
                                  const newFeatures = item[subField.name].filter((_: any, i: number) => i !== featureIndex);
                                  newItems[index] = { ...item, [subField.name]: newFeatures };
                                  handleFieldChange(field.name, newItems);
                                }}
                                className="px-3 py-1 bg-red-500/20 hover:bg-red-500/30 rounded-md"
                              >
                                Remove
                              </button>
                            </div>
                          ))}
                          {(!subField.maxItems || item[subField.name].length < subField.maxItems) && (
                            <button
                              onClick={() => {
                                const newItems = [...items];
                                const newFeatures = [...(item[subField.name] || []), ''];
                                newItems[index] = { ...item, [subField.name]: newFeatures };
                                handleFieldChange(field.name, newItems);
                              }}
                              className="px-3 py-1 bg-primary/20 hover:bg-primary/30 rounded-md"
                            >
                              Add Feature
                            </button>
                          )}
                        </div>
                      ) : (
                        // Render other field types
                        <div>
                          {subField.type === 'select' ? (
                            <select
                              value={item[subField.name] || ''}
                              onChange={(e) => {
                                const newItems = [...items];
                                newItems[index] = { ...item, [subField.name]: e.target.value };
                                handleFieldChange(field.name, newItems);
                              }}
                              className="w-full p-2 bg-white/10 rounded-md border border-white/20 text-white"
                            >
                              {subField.options.map((option: string) => (
                                <option key={option} value={option}>
                                  {option}
                                </option>
                              ))}
                            </select>
                          ) : subField.type === 'textarea' ? (
                            <textarea
                              value={item[subField.name] || ''}
                              onChange={(e) => {
                                const newItems = [...items];
                                newItems[index] = { ...item, [subField.name]: e.target.value };
                                handleFieldChange(field.name, newItems);
                              }}
                              rows={3}
                              className="w-full p-2 bg-white/10 rounded-md border border-white/20 text-white"
                            />
                          ) : (
                            <input
                              type="text"
                              value={item[subField.name] || ''}
                              onChange={(e) => {
                                const newItems = [...items];
                                newItems[index] = { ...item, [subField.name]: e.target.value };
                                handleFieldChange(field.name, newItems);
                              }}
                              className="w-full p-2 bg-white/10 rounded-md border border-white/20 text-white"
                            />
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ))}
              <button
                onClick={() => {
                  const newItem = field.fields.reduce((acc: any, subField: any) => {
                    acc[subField.name] = subField.type === 'array' ? [] : '';
                    return acc;
                  }, {});
                  handleFieldChange(field.name, [...items, newItem]);
                }}
                className="px-4 py-2 bg-primary/20 hover:bg-primary/30 rounded-md w-full"
              >
                Add New {field.label.slice(0, -1)}
              </button>
            </div>
          );
        }
        return null;
      default:
        return null;
    }
  };

  if (loading) {
    return (
      <div className="p-6 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10">
        <div className="animate-pulse space-y-4">
          <div className="h-4 bg-white/10 rounded w-1/4"></div>
          <div className="space-y-3">
            <div className="h-4 bg-white/10 rounded"></div>
            <div className="h-4 bg-white/10 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    );
  }

  const fields = getFieldsForSection(section);

  return (
    <div className="p-6 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-medium text-white">Edit {section}</h2>
          <button
            onClick={handleSave}
            disabled={saving}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center ${
              saving
                ? 'bg-blue-500/50 cursor-not-allowed'
                : success
                ? 'bg-green-500/20 border border-green-500/50 text-green-400'
                : 'bg-blue-500/20 border border-blue-500/50 text-blue-400 hover:bg-blue-500/30'
            }`}
          >
            {saving ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Saving...
              </>
            ) : success ? (
              <>
                <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Saved!
              </>
            ) : (
              'Save Changes'
            )}
          </button>
        </div>

        {error && (
          <div className="bg-red-500/20 border border-red-500/50 text-red-200 px-4 py-3 rounded-lg text-sm">
            {error}
          </div>
        )}

        <div className="space-y-6">
          {fields.map((field) => (
            <div key={field.name} className="space-y-1">
              <label className="text-sm text-gray-300">{field.label}</label>
              {renderField(field)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
