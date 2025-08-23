import { techStack } from "./tech-stack";

export interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string;
  banner?: string;
  tags: string[];
  features: string[];
  techStack: string[];
  demoUrl?: string;
  githubUrl?: string;
  process?: string;
  screenshots?: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Software Agency Website Template",
    slug: "software-agency-website-template",
    description:
      "A comprehensive website template for software agencies, featuring service highlights, course listings, and a modern UI.",
    image:
      "https://res.cloudinary.com/djmtejqkc/image/upload/v1753777596/software-web-1_fls60k.png",
    banner:
      "https://res.cloudinary.com/djmtejqkc/image/upload/v1753777596/software-web-1_fls60k.png",
    tags: ["Website", "Template", "Saas", "UI/UX"],
    features: [
      "🧩 Homepage with service highlights",
      "📦 Service detail sections",
      "🎓 Courses listing & details",
      "🛒 Course checkout flow (UI only)",
      "🔐 Authentication (Login/Signup pages)",
      "📞 Contact page with form",
      "📱 Responsive design for all devices",
      "🎨 Modern UI using shadcn/ui components",
    ],
    techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Shadcn"],
    demoUrl: "https://software-company-web-template.vercel.app/",
    githubUrl: "https://github.com/Ojaspj/software-company-web-template",
    process:
      "A modern, responsive website template for a software agency or tech startup. The site showcases services offered by the agency, allows users to browse and purchase courses, and includes fully functional login/signup forms. Built with a clean UI and smooth user experience in mind, it's ideal for SaaS companies or software service providers looking for a professional online presence.",
    screenshots: [
      "https://res.cloudinary.com/djmtejqkc/image/upload/v1753777596/software-web-1_fls60k.png",
      "https://res.cloudinary.com/djmtejqkc/image/upload/v1753870139/Screenshot_2025-07-30_at_6.05.28_PM_akrmgk.png",
      "https://res.cloudinary.com/djmtejqkc/image/upload/v1753870139/Screenshot_2025-07-30_at_6.05.55_PM_rgargd.png",
      "https://res.cloudinary.com/djmtejqkc/image/upload/v1753870141/Screenshot_2025-07-30_at_6.06.25_PM_uy2ld8.png",
      "https://res.cloudinary.com/djmtejqkc/image/upload/v1753870142/Screenshot_2025-07-30_at_6.06.48_PM_hxvbrz.png",
    ],
  },
  {
    id: 5,
    title: "Recipe Finder App",
    slug: "recipe-finder-app",
    description:
      "A unified dashboard for managing multiple social media accounts, scheduling posts, and analyzing engagement metrics.",
    image:
      "https://res.cloudinary.com/djmtejqkc/image/upload/v1753873566/Screenshot_2025-07-30_at_7.04.04_PM_vfwfkf.png",
    banner:
      "https://res.cloudinary.com/djmtejqkc/image/upload/v1753873566/Screenshot_2025-07-30_at_7.04.04_PM_vfwfkf.png",
    tags: ["Mobile App", "Recipe", "Food", "React Native"],
    features: [
      "🔍 Recipe search using public recipe API",
      "📖 Detailed recipe pages with ingredients and instructions",
      "🍽️ Categories for vegetarian, non-vegetarian, and bakery items",
      "🎥 Video instructions for selected recipes",
      "💡 Ingredients and cooking steps listed clearly",
      "🎨 Smooth and modern UI with React Native Reanimated",
      "📱 Cross-platform support for iOS and Android",
    ],
    techStack: [
      "React Native",
      "Expo",
      "React",
      "JavaScript",
      "React Native Reanimated",
      "Axios",
      "Nativewind CSS",
    ],
    demoUrl: "null",
    githubUrl: "https://github.com/Ojaspj/recipe-app-react-native",
    process:
      "A cross-platform mobile recipe app built using React Native and Expo. Users can search for recipes using an external API and view categorized dishes including vegetarian, non-vegetarian, and bakery items. The app features detailed recipe pages with video instructions, rich visuals, and smooth animations for an engaging, user-friendly experience.",
    screenshots: [
      "https://res.cloudinary.com/djmtejqkc/image/upload/v1753873566/Screenshot_2025-07-30_at_7.04.04_PM_vfwfkf.png",
      "https://res.cloudinary.com/djmtejqkc/image/upload/v1753873646/1_uuhgjz.png",
      "https://res.cloudinary.com/djmtejqkc/image/upload/v1753873648/2_tf1hnq.png",
      "https://res.cloudinary.com/djmtejqkc/image/upload/v1753873648/3_jl47jn.png",
    ],
  },
  {
    id: 2,
    title: "Film Guide App",
    slug: "film-guide-app",
    description:
      "A comprehensive film guide application that provides users with detailed information about movies, including cast, crew, and reviews.",
    image:
      "https://res.cloudinary.com/djmtejqkc/image/upload/v1753870933/Screenshot_2025-07-30_at_6.19.56_PM_ohqudv.png",
    banner:
      "https://res.cloudinary.com/djmtejqkc/image/upload/v1753870933/Screenshot_2025-07-30_at_6.19.56_PM_ohqudv.png",
    tags: ["Movies", "Entertainment", "Search", "API"],
    features: [
      "🔍 Movie search with live results",
      "📚 Detailed movie information",
      "⭐️ Ratings and reviews",
      "🎥 Poster and media gallery",
      "📱 Fully responsive design",
      "⚡️ Fast and smooth UI",
    ],
    techStack: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "API Integration",
    ],
    demoUrl: "https://film-guide.vercel.app/",
    githubUrl: "https://github.com/example/project",
    process:
      "A lightweight and intuitive movie search application built during my internship period. Users can search for any film by name and instantly view detailed information including title, synopsis, rating, release date, and poster. The app fetches real-time data from The Movie Database (TMDb) API and displays it in a clean, responsive UI, making it a perfect tool for film enthusiasts.",
    screenshots: [
      "https://res.cloudinary.com/djmtejqkc/image/upload/v1753870933/Screenshot_2025-07-30_at_6.19.56_PM_ohqudv.png",
      "https://res.cloudinary.com/djmtejqkc/image/upload/v1753870935/Screenshot_2025-07-30_at_6.20.31_PM_ddrucf.png",
      "https://res.cloudinary.com/djmtejqkc/image/upload/v1753870935/Screenshot_2025-07-30_at_6.20.58_PM_ftfohh.png",
    ],
  },
  {
    id: 3,
    title: "Investiaa",
    slug: "investiaa",
    description:
      "An online ecosystem designed to empower startups by connecting them with incubators, angel investors, venture capitalists, and academic institutions.",
    image: "/placeholder.svg?height=400&width=600",
    banner: "/placeholder.svg?height=800&width=1600",
    tags: ["Startup", "Investment", "Networking", "AI"],
    features: [
      "🤝 Connection system between startups, investors, and incubators",
      "🧑‍🏫 Academic and mentorship integration",
      "🔍 Search and filter functionality",
      "📄 Startup profile pages with detailed info",
      "🛠 User authentication",
      "🧾 KYC verification process",
      "🛠 Admin dashboard to manage users",
      "📱 Responsive design for all devices",
      "️🎨 Modern UI with shadcn/ui components",
      "🎯 Focused on user experience and accessibility",
      "🎨 Clean, accessible, and responsive UI",
      "🚀 Built for scale and performance",
    ],

    techStack: [
      "React",
      "Next.js",
      "GraphQL API",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
    ],
    demoUrl: "null",
    githubUrl: "null",
    process:
      "Investiaa is an online ecosystem designed to empower startups by connecting them with incubators, angel investors, venture capitalists, and academic institutions. The platform enables seamless collaboration, access to funding, mentorship, and growth opportunities. I contributed to this project while working as a Software Engineer at Investiaa, focusing primarily on frontend development and also contributing to backend GraphQL APIs.",
    screenshots: [
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
    ],
  },
  {
    id: 4,
    title: "To-Do App",
    slug: "to-do-app",
    description:
      "A simple and intuitive to-do application built with Chakra UI and local storage, allowing users to manage tasks efficiently.",
    image:
      "https://res.cloudinary.com/djmtejqkc/image/upload/v1753872748/Screenshot_2025-07-30_at_6.50.36_PM_jcalzc.png",
    banner:
      "https://res.cloudinary.com/djmtejqkc/image/upload/v1753872748/Screenshot_2025-07-30_at_6.50.36_PM_jcalzc.png",
    tags: ["Productivity", "Task Management", "Chakra UI"],
    features: [
      "✅ Task creation and deletion",
      "💾 Data persistence using localStorage",
      "🌙 Dark/Light mode toggle",
      "⚡️ Fast performance with Vite",
      "📱 Responsive design",
    ],
    techStack: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Chakra UI",
      "Local Storage",
    ],
    demoUrl: "https://todoapp-ojaspj.vercel.app/",
    githubUrl: "null",
    process:
      "A simple and responsive to-do list application built using React and Chakra UI. This was my first project exploring Chakra’s component system and theme toggling. The app stores all tasks in the browser using localStorage, ensuring persistence without requiring login.",
    screenshots: [
      "https://res.cloudinary.com/djmtejqkc/image/upload/v1753872748/Screenshot_2025-07-30_at_6.50.36_PM_jcalzc.png",
      "https://res.cloudinary.com/djmtejqkc/image/upload/v1753872748/Screenshot_2025-07-30_at_6.50.55_PM_xclhdy.png",
      "https://res.cloudinary.com/djmtejqkc/image/upload/v1753872748/Screenshot_2025-07-30_at_6.50.11_PM_y7lvcr.png",
    ],
  },

  {
    id: 6,
    title: "Personal Loan Tracker",
    slug: "personal-loan-tracker",
    description:
      "A personal loan tracking application that helps users manage their loans effectively.",
    image: "/placeholder.svg?height=400&width=600",
    banner: "/placeholder.svg?height=800&width=1600",
    tags: ["Finance", "Productivity"],
    features: [
      "Loan application management",
      "Payment tracking",
      "Interest rate calculator",
      "Document upload and storage",
      "User-friendly dashboard",
    ],
    techStack: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Firebase",
      "Firestore",

    ],
    demoUrl: "https://loan-tracker-rho.vercel.app/",
    githubUrl: "https://github.com/Ojaspj/loan-tracker",
    screenshots: [
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
    ],
  },
  {
    id: 7,
    title: "Real Estate Listing Platform",
    slug: "real-estate-platform",
    description:
      "A modern real estate platform with advanced search capabilities, virtual tours, and agent-client communication tools.",
    image: "/placeholder.svg?height=400&width=600",
    banner: "/placeholder.svg?height=800&width=1600",
    tags: ["Real Estate", "Marketplace", "Maps"],
    features: [
      "Advanced property search",
      "Virtual property tours",
      "Agent-client messaging",
      "Saved favorites",
      "Neighborhood insights",
    ],
    techStack: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Google Maps API",
      "PostgreSQL",
    ],
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/example/project",
    screenshots: [
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
    ],
  },
];
