export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Loai was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Loai’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Loai. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Loai was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'Imaginify - AI Photo Manipulation App',
    desc: 'Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.',
    subdesc:
      'Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.',
    href: 'https://imaginify-one-wheat.vercel.app/',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Framer',
    pos: 'Lead Prototyping Developer',
    duration: '2021 - Present',
    title:
      'My primary tool for creating interactive prototypes, enabling stakeholders to experience user flows before full development.',
    icon: '/assets/framer.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Figma',
    pos: 'UI/UX Collaboration Specialist',
    duration: '2021 - 2022',
    title:
      'Collaborative design platform for real-time teamwork and client feedback, streamlining design iterations and version control.',
    icon: '/assets/figma.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Notion',
    pos: 'Project Orchestration Lead',
    duration: '2021 - 2022',
    title:
      'Central hub for project management and documentation, integrating design notes, developer resources, and task tracking.',
    icon: '/assets/notion.svg',
    animation: 'salute',
  },
  {
    id: 4,
    name: 'Express.js',
    pos: 'Backend Solutions Architect',
    duration: '2022 - 2023',
    title:
      'Developed RESTful APIs and middleware solutions, enabling efficient server-side operations and third-party integrations.',
    icon: '/assets/skill-icons--expressjs-dark.svg',
    animation: 'salute',
  },
  {
    id: 5,
    name: 'Nest.js',
    pos: 'Enterprise Backend Developer',
    duration: '2022 - 2023',
    title: 'Built scalable server-side applications using modular architecture and TypeScript-first approach.',
    icon: '/assets/skill-icons--nestjs-dark.svg',
    animation: 'clapping',
  },
  {
    id: 6,
    name: 'Java',
    pos: 'Systems Programming Engineer',
    duration: '2023 - Present',
    title: 'Developed enterprise-level applications leveraging Java Spring ecosystem for high-performance systems.',
    icon: '/assets/skill-icons--java-dark.svg',
    animation: 'idle',
  },
  {
    id: 7,
    name: 'Next.js',
    pos: 'Full Stack Developer',
    duration: '2021 - 2023',
    title: 'Created SEO-friendly web applications with server-side rendering and static site generation capabilities.',
    icon: '/assets/skill-icons--nextjs-dark.svg',
    animation: 'clapping',
  },
  {
    id: 8,
    name: 'React.js',
    pos: 'Frontend Architect',
    duration: '2021 - Present',
    title: 'Built dynamic user interfaces with component-based architecture and state management solutions.',
    icon: '/assets/skill-icons--react-dark.svg',
    animation: 'idle',
  },
  {
    id: 9,
    name: 'Bun',
    pos: 'Runtime Specialist',
    duration: '2023 - Present',
    title:
      'Utilized Bun runtime for fast JavaScript/TypeScript execution and package management in development workflows.',
    icon: '/assets/skill-icons--bun-dark.svg',
    animation: 'victory',
  },
  {
    id: 10,
    name: 'Bitbucket',
    pos: 'Version Control Engineer',
    duration: '2021 - Present',
    title:
      'Managed code repositories and CI/CD pipelines using Bitbucket for team collaboration and deployment automation.',
    icon: '/assets/skill-icons--bitbucket-dark.svg',
    animation: 'idle',
  },
  {
    id: 11,
    name: 'GitHub',
    pos: 'Open Source Contributor',
    duration: '2020 - Present',
    title: 'Collaborated on open-source projects using GitHub for version control and community-driven development.',
    icon: '/assets/skill-icons--github-dark.svg',
    animation: 'salute',
  },
  {
    id: 12,
    name: 'Ubuntu',
    pos: 'Linux Environment Developer',
    duration: '2020 - Present',
    title:
      'Developed and deployed applications in Ubuntu environment ensuring Linux compatibility and server optimization.',
    icon: '/assets/skill-icons--ubnutu-dark.svg',
    animation: 'salute',
  },
];
