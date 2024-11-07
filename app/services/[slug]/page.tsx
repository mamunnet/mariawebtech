import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ServiceDetail } from '@/components/sections/service-detail';

// This would typically come from a CMS or database
const services = {
  'ui-ux-design': {
    title: 'UI/UX Design',
    description: 'Create intuitive and engaging user experiences that delight your customers.',
    fullDescription: `Our UI/UX design service focuses on creating beautiful, functional, and user-friendly digital experiences. We combine aesthetics with usability to deliver interfaces that not only look great but also provide exceptional user experiences.`,
    features: [
      'User Research & Analysis',
      'Wireframing & Prototyping',
      'Visual Design',
      'Usability Testing',
      'Information Architecture',
      'Interaction Design',
      'User Journey Mapping',
      'Design Systems',
    ],
    process: [
      {
        title: 'Discovery',
        description: 'Understanding your business goals and user needs'
      },
      {
        title: 'Research',
        description: 'Analyzing user behavior and market trends'
      },
      {
        title: 'Design',
        description: 'Creating intuitive and beautiful interfaces'
      },
      {
        title: 'Testing',
        description: 'Ensuring optimal user experience'
      }
    ],
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=2000',
  },
  'web-development': {
    title: 'Web Development',
    description: 'Build fast, scalable, and secure web applications using cutting-edge technologies.',
    fullDescription: `Our web development service delivers robust, scalable, and high-performance digital solutions. We use modern technologies and best practices to create websites and applications that drive business growth.`,
    features: [
      'Front-end Development',
      'Back-end Development',
      'API Integration',
      'Database Design',
      'Performance Optimization',
      'Security Implementation',
      'Cloud Deployment',
      'Maintenance & Support',
    ],
    process: [
      {
        title: 'Planning',
        description: 'Defining technical requirements and architecture'
      },
      {
        title: 'Development',
        description: 'Building the solution using modern technologies'
      },
      {
        title: 'Testing',
        description: 'Ensuring quality and performance'
      },
      {
        title: 'Deployment',
        description: 'Launching and monitoring the solution'
      }
    ],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2000',
  },
  'digital-marketing': {
    title: 'Digital Marketing',
    description: 'Boost your online presence and reach your target audience effectively.',
    fullDescription: `Our digital marketing services help businesses grow their online presence and reach their target audience effectively. We create comprehensive strategies that drive engagement and conversions.`,
    features: [
      'SEO Optimization',
      'Content Strategy',
      'Social Media Marketing',
      'Email Marketing',
      'PPC Advertising',
      'Analytics & Reporting',
      'Conversion Optimization',
      'Brand Strategy',
    ],
    process: [
      {
        title: 'Analysis',
        description: 'Understanding your market and competition'
      },
      {
        title: 'Strategy',
        description: 'Developing targeted marketing plans'
      },
      {
        title: 'Execution',
        description: 'Implementing marketing campaigns'
      },
      {
        title: 'Optimization',
        description: 'Monitoring and improving results'
      }
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000',
  },
  'e-commerce': {
    title: 'E-commerce Solutions',
    description: 'Create powerful online stores that drive sales and enhance customer experience.',
    fullDescription: `Our e-commerce solutions help businesses establish and grow their online presence with powerful, secure, and user-friendly online stores. We create custom e-commerce experiences that drive sales and customer satisfaction.`,
    features: [
      'Custom E-commerce Development',
      'Payment Gateway Integration',
      'Inventory Management',
      'Shopping Cart Optimization',
      'Product Catalog Management',
      'Order Processing System',
      'Customer Account Management',
      'Analytics & Reporting',
    ],
    process: [
      {
        title: 'Planning',
        description: 'Defining your e-commerce strategy and requirements'
      },
      {
        title: 'Development',
        description: 'Building your custom online store'
      },
      {
        title: 'Integration',
        description: 'Setting up payment and shipping systems'
      },
      {
        title: 'Launch',
        description: 'Deploying and optimizing your store'
      }
    ],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=2000',
  },
  'responsive-design': {
    title: 'Responsive Design',
    description: 'Ensure your website looks and works perfectly on all devices and screen sizes.',
    fullDescription: `Our responsive design service ensures your website provides an optimal viewing and interaction experience across all devices. We create fluid, adaptive layouts that maintain functionality and aesthetics on any screen size.`,
    features: [
      'Mobile-First Design',
      'Cross-Browser Compatibility',
      'Performance Optimization',
      'Accessibility Standards',
      'Fluid Grid Layouts',
      'Responsive Images',
      'Touch-Friendly Interface',
      'Progressive Enhancement',
    ],
    process: [
      {
        title: 'Analysis',
        description: 'Understanding user device preferences'
      },
      {
        title: 'Design',
        description: 'Creating adaptive layouts'
      },
      {
        title: 'Development',
        description: 'Building responsive components'
      },
      {
        title: 'Testing',
        description: 'Ensuring cross-device compatibility'
      }
    ],
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&q=80&w=2000',
  },
  'maintenance-support': {
    title: 'Maintenance & Support',
    description: 'Keep your digital assets secure, updated, and performing at their best.',
    fullDescription: `Our maintenance and support services ensure your digital platforms remain secure, up-to-date, and performing optimally. We provide comprehensive support to keep your business running smoothly online.`,
    features: [
      'Regular Updates & Backups',
      'Security Monitoring',
      'Performance Optimization',
      '24/7 Technical Support',
      'Bug Fixes & Patches',
      'Content Updates',
      'Server Maintenance',
      'Analytics & Reporting',
    ],
    process: [
      {
        title: 'Monitoring',
        description: 'Continuous system oversight'
      },
      {
        title: 'Updates',
        description: 'Regular maintenance and upgrades'
      },
      {
        title: 'Support',
        description: 'Responsive technical assistance'
      },
      {
        title: 'Optimization',
        description: 'Ongoing performance improvements'
      }
    ],
    image: 'https://images.unsplash.com/photo-1581472723648-909f4851d4ae?auto=format&fit=crop&q=80&w=2000',
  },
};

// Generate static paths for all services
export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({
    slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = services[params.slug as keyof typeof services];
  
  if (!service) {
    return {
      title: 'Service Not Found - MariaWebTech',
    };
  }

  return {
    title: `${service.title} - MariaWebTech`,
    description: service.description,
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services[params.slug as keyof typeof services];
  
  if (!service) {
    notFound();
  }

  return <ServiceDetail {...service} />;
}