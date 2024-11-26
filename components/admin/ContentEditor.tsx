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

  const handleChange = (field: string, value: string) => {
    setContent((prev: any) => ({
      ...prev,
      [field]: value,
    }));
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
          <h2 className="text-lg font-medium text-white">Edit {getSectionName(section)}</h2>
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
            <div key={field.id} className="space-y-1">
              <label htmlFor={field.id} className="block text-sm font-medium text-gray-200">
                {field.label}
              </label>
              {field.type === 'textarea' ? (
                <textarea
                  id={field.id}
                  rows={4}
                  className="mt-2 block w-full rounded-lg bg-gray-900/50 border border-gray-700/50 text-gray-100 placeholder-gray-500 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-200 text-sm px-4 py-3 resize-y"
                  value={content[field.id] || ''}
                  onChange={(e) => handleChange(field.id, e.target.value)}
                  placeholder={`Enter ${field.label.toLowerCase()}`}
                />
              ) : (
                <input
                  type={field.type}
                  id={field.id}
                  className="mt-2 block w-full rounded-lg bg-gray-900/50 border border-gray-700/50 text-gray-100 placeholder-gray-500 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-200 text-sm h-11 px-4"
                  value={content[field.id] || ''}
                  onChange={(e) => handleChange(field.id, e.target.value)}
                  placeholder={`Enter ${field.label.toLowerCase()}`}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function getSectionName(section: string): string {
  const names: { [key: string]: string } = {
    hero: 'Hero Section',
    about: 'About Company',
    services: 'Services',
    work: 'Featured Work',
    cta: 'CTA Section',
  };
  return names[section] || section;
}

function getFieldsForSection(section: string) {
  const fields: { [key: string]: Array<{ id: string; label: string; type: string }> } = {
    hero: [
      { id: 'title', label: 'Title', type: 'text' },
      { id: 'subtitle', label: 'Subtitle', type: 'text' },
      { id: 'description', label: 'Description', type: 'textarea' },
      { id: 'buttonText', label: 'Button Text', type: 'text' },
      { id: 'buttonLink', label: 'Button Link', type: 'text' },
    ],
    about: [
      { id: 'title', label: 'Title', type: 'text' },
      { id: 'content', label: 'Content', type: 'textarea' },
      { id: 'mission', label: 'Mission Statement', type: 'textarea' },
      { id: 'vision', label: 'Vision Statement', type: 'textarea' },
    ],
    services: [
      { id: 'title', label: 'Section Title', type: 'text' },
      { id: 'description', label: 'Section Description', type: 'textarea' },
      { id: 'services', label: 'Services (JSON)', type: 'textarea' },
    ],
    work: [
      { id: 'title', label: 'Section Title', type: 'text' },
      { id: 'description', label: 'Section Description', type: 'textarea' },
      { id: 'projects', label: 'Projects (JSON)', type: 'textarea' },
    ],
    cta: [
      { id: 'title', label: 'Title', type: 'text' },
      { id: 'description', label: 'Description', type: 'textarea' },
      { id: 'buttonText', label: 'Button Text', type: 'text' },
      { id: 'buttonLink', label: 'Button Link', type: 'text' },
    ],
  };
  
  return fields[section] || [];
}
