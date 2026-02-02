export type Category = 'POS' | 'Healthcare' | 'Automobile' | 'Corporate' | 'E-Commerce' | 'Education' | 'SaaS' | 'Brand' | 'Service';

export interface Project {
    id: string;
    title: string;
    category: Category;
    description: string;
    url: string;
    image: string; // Placeholder or path
    techStack: string[];
    longDescription?: string;
    problem?: string;
    features?: string[];
}

export const projects: Project[] = [
    // --- POS / Billing ---
    {
        id: 'pos-1',
        title: 'Pettikadai POS',
        category: 'POS',
        description: 'Simple POS for small retail shops.',
        url: 'https://pettikadai-pos.pages.dev',
        image: '/images/placeholder-pos.jpg',
        techStack: ['React', 'Firebase']
    },
    {
        id: 'pos-2',
        title: 'Mooncakes Billing',
        category: 'POS',
        description: 'Billing for bakeries.',
        url: 'https://mooncakesbilling.pages.dev',
        image: '/images/placeholder-pos.jpg',
        techStack: ['Next.js', 'PostgreSQL']
    },
    {
        id: 'pos-3',
        title: 'Teakadaipos InstaCafe',
        category: 'POS',
        description: 'Cafe management system.',
        url: 'https://teakadaiposinstacafe.pages.dev',
        image: '/images/placeholder-pos.jpg',
        techStack: ['React']
    },
    {
        id: 'pos-4',
        title: 'ZMedical POS',
        category: 'POS',
        description: 'Pharmacy and medical shop billing.',
        url: 'https://zmedicalpos.pages.dev',
        image: '/images/placeholder-pos.jpg',
        techStack: ['React', 'Node.js']
    },
    {
        id: 'pos-5',
        title: 'Toy Store POS',
        category: 'POS',
        description: 'Inventory management for toy stores.',
        url: 'https://toystorepos.z3connect.com',
        image: '/images/placeholder-pos.jpg',
        techStack: ['Next.js']
    },
    {
        id: 'pos-6',
        title: 'Baithul Shawarma',
        category: 'POS',
        description: 'Restaurant billing solution.',
        url: 'https://baithul-shawarma.pages.dev',
        image: '/images/placeholder-pos.jpg',
        techStack: ['React']
    },

    // --- Healthcare ---
    {
        id: 'health-1',
        title: 'HMS DJ7',
        category: 'Healthcare',
        description: 'Hospital Management System.',
        url: 'https://hms-dj7.pages.dev',
        image: '/images/placeholder-health.jpg',
        techStack: ['MERN Stack']
    },

    // --- Automobile / Infra ---
    {
        id: 'auto-1',
        title: 'Khail Alahlam Autospare',
        category: 'Automobile',
        description: 'Auto spare parts inventory.',
        url: 'https://khail-alahlam-autospare.pages.dev/',
        image: '/images/placeholder-auto.jpg',
        techStack: ['Next.js']
    },
    {
        id: 'auto-2',
        title: 'Luxaar Company',
        category: 'Automobile',
        description: 'Premium automotive services.',
        url: 'https://www.luxaarcompany.com/',
        image: '/images/placeholder-auto.jpg',
        techStack: ['GSAP', 'React']
    },
    {
        id: 'auto-5',
        title: 'PD Turbotech',
        category: 'Automobile',
        description: 'Turbocharger specialists.',
        url: 'https://www.pdturbotech.com',
        image: '/images/placeholder-auto.jpg',
        techStack: ['Next.js']
    },

    // --- Corporate ---
    {
        id: 'corp-1',
        title: 'MWI Groups',
        category: 'Corporate',
        description: 'Multi-business group portfolio.',
        url: 'https://www.mwigroups.com',
        image: '/images/placeholder-corp.jpg',
        techStack: ['Next.js']
    },
    {
        id: 'corp-2',
        title: 'MetaGiants',
        category: 'Corporate',
        description: 'Digital agency corporate site.',
        url: 'https://www.metagiants.com',
        image: '/images/placeholder-corp.jpg',
        techStack: ['React', 'Framer Motion']
    },
    {
        id: 'corp-3',
        title: 'Lamstacks',
        category: 'Corporate',
        description: 'Technology solutions provider.',
        url: 'https://www.lamstacks.com',
        image: '/images/placeholder-corp.jpg',
        techStack: ['Next.js']
    },
    {
        id: 'corp-4',
        title: 'KSV Groups',
        category: 'Corporate',
        description: 'Enterprise group website.',
        url: 'https://ksvgroups-aeq.pages.dev',
        image: '/images/placeholder-corp.jpg',
        techStack: ['React']
    },
    {
        id: 'auto-3', // Moved from Automobile
        title: 'Atom Infra',
        category: 'Corporate',
        description: 'Infrastructure and construction.',
        url: 'https://www.atominfra.in/',
        image: '/images/placeholder-auto.jpg',
        techStack: ['React']
    },
    {
        id: 'auto-4', // Moved from Automobile
        title: 'Right Choice Constructing',
        category: 'Corporate',
        description: 'Construction project showcase.',
        url: 'https://rightchoicecontructing.pages.dev',
        image: '/images/placeholder-auto.jpg',
        techStack: ['React']
    },
    {
        id: 'brand-3', // Moved from Brand
        title: 'Flow by Z3Connect',
        category: 'Corporate',
        description: 'Agency portfolio showcase.',
        url: 'https://flowbyz3connectwebsite.pages.dev/',
        image: '/images/placeholder-brand.jpg',
        techStack: ['Three.js']
    },

    // --- E-Commerce ---
    {
        id: 'ecom-1',
        title: 'Pocket Delivery',
        category: 'E-Commerce',
        description: 'Delivery app landing page.',
        url: 'https://www.pocketdelivery.com',
        image: '/images/placeholder-ecom.jpg',
        techStack: ['React Native']
    },
    {
        id: 'ecom-2',
        title: 'High Surples',
        category: 'E-Commerce',
        description: 'Fashion e-commerce store.',
        url: 'https://highsurplesecommerce.pages.dev',
        image: '/images/placeholder-ecom.jpg',
        techStack: ['React', 'Shopify']
    },
    {
        id: 'ecom-3',
        title: 'Safuu Clothing',
        category: 'E-Commerce',
        description: 'Urban clothing brand.',
        url: 'https://www.safuuclothing.in',
        image: '/images/placeholder-ecom.jpg',
        techStack: ['React']
    },
    {
        id: 'ecom-4',
        title: 'Crazy Platform',
        category: 'E-Commerce',
        description: 'Online marketplace.',
        url: 'https://crazyplateform.pages.dev/',
        image: '/images/placeholder-ecom.jpg',
        techStack: ['React']
    },

    // --- Education ---
    {
        id: 'edu-1',
        title: 'LearnBy Z2Learn',
        category: 'Education',
        description: 'Interactive LMS platform.',
        url: 'https://learnby.z2learn.com',
        image: '/education-logo.png',
        techStack: ['Next.js', 'LMS']
    },
    {
        id: 'edu-2',
        title: 'Iqrah Academy',
        category: 'Education',
        description: 'Islamic academy website.',
        url: 'https://www.iqrahacademy.in',
        image: '/education-logo.png',
        techStack: ['React']
    },
    {
        id: 'edu-3',
        title: 'Quran Verse Tick',
        category: 'Education',
        description: 'Daily verse tracking app.',
        url: 'https://quranversetick.pages.dev',
        image: '/education-logo.png',
        techStack: ['Vue.js']
    },
    {
        id: 'corp-5', // Moved from Corporate
        title: 'CreatorBase',
        category: 'Education',
        description: 'Hub for digital creators.',
        url: 'https://creatorbase.in',
        image: '/images/placeholder-corp.jpg',
        techStack: ['Next.js']
    },
    {
        id: 'saas-1', // Moved from SaaS
        title: 'ZAssist',
        category: 'Education',
        description: 'AI-powered business assistance tool.',
        url: 'https://zassist.z3connect.com/',
        image: '/images/placeholder-saas.jpg',
        techStack: ['Python', 'AI']
    },

    // --- SaaS / Automation ---
    {
        id: 'saas-2',
        title: 'ZCRM',
        category: 'SaaS',
        description: 'Customer Relationship Management.',
        url: 'https://zcrm.z3connect.com/',
        image: '/images/placeholder-saas.jpg',
        techStack: ['SaaS']
    },
    {
        id: 'saas-3',
        title: 'Trolly Management',
        category: 'SaaS',
        description: 'Supermarket trolley tracking system.',
        url: 'https://trollymanagement.pages.dev',
        image: '/images/placeholder-saas.jpg',
        techStack: ['IoT', 'React']
    },
    {
        id: 'health-2', // Moved from Healthcare
        title: 'Peer Management System',
        category: 'SaaS',
        description: 'Management system for a glass work store.',
        url: 'https://peermanagement-system.pages.dev/',
        image: '/images/placeholder-health.jpg',
        techStack: ['React', 'Firebase']
    },

    // --- Brand / Portfolio ---
    {
        id: 'brand-1',
        title: 'Femmic',
        category: 'Brand',
        description: 'Feminine brand portfolio.',
        url: 'https://www.femmic.com',
        image: '/images/placeholder-brand.jpg',
        techStack: ['React', 'Minimal']
    },
    {
        id: 'brand-2',
        title: 'Shivs Photography',
        category: 'Brand',
        description: 'Photography portfolio.',
        url: 'https://www.shivsphotography.com',
        image: '/images/placeholder-brand.jpg',
        techStack: ['React', 'Gallery']
    },

    // --- Service ---
    {
        id: 'service-1',
        title: 'ZWash CFI',
        category: 'Service',
        description: 'Car wash booking service.',
        url: 'https://zwash-cfi.pages.dev',
        image: '/images/placeholder-service.jpg',
        techStack: ['React', 'Booking']
    }
];

export const allCategories: Category[] = [
    'POS', 'Healthcare', 'Automobile', 'Corporate', 'E-Commerce', 'Education', 'SaaS', 'Brand', 'Service'
];
