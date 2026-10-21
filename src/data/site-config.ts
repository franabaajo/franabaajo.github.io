import profilePhoto from '../assets/images/profile-francisco-abajo.jpg';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://franabaajo.github.io',
    title: 'Francisco Abajo Lis',
    subtitle: 'Applied Mathematics & Applied Physics | Data, Modelling & Automation',
    description:
        'Portfolio of Francisco Abajo Lis, an Applied Mathematics and Applied Physics graduate interested in quantitative analysis, data, modelling, optimisation, AI, and automation.',
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Experience',
            href: '/experience'
        },
        {
            text: 'About',
            href: '/about'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        { text: 'Experience', href: '/experience' },
        { text: 'Projects', href: '/projects' }
    ],
    socialLinks: [
        {
            text: 'GitHub',
            href: 'https://github.com/franabaajo'
        },
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/francisco-abajo-lis/'
        }
    ],
    hero: {
        title: 'Quantitative problem solving, from models to working systems.',
        text: "I'm **Francisco Abajo Lis**, an Applied Mathematics and Applied Physics graduate based in Madrid. I enjoy turning complex, open-ended problems into clear analyses, dependable software, and practical automation.\n\nI'm interested in early-career opportunities across **quantitative analysis, data, modelling, optimisation, AI, and technical automation**. My experience spans data-driven flow modelling, software validation at ASML, and agentic AI development.",
        image: {
            src: profilePhoto,
            alt: 'Portrait of Francisco Abajo Lis'
        },
        actions: [
            {
                text: 'Explore my projects',
                href: '/projects'
            },
            {
                text: 'View experience',
                href: '/experience'
            }
        ]
    },
    subscribe: {
        enabled: false
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
