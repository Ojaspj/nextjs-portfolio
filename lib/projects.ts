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
    id: 8,
    title: "SakhiStudio",
    slug: "sakhi-studio",
    description:
      "A full-stack beauty studio web application with a public customer-facing storefront and a protected admin dashboard — built end to end from database schema to UI.",
    image: "/placeholder.svg?height=400&width=600",
    banner: "/placeholder.svg?height=800&width=1600",
    tags: ["Full-Stack", "SaaS", "Supabase", "Next.js"],
    features: [
      "Built a dual-surface architecture — public storefront and protected admin dashboard — from a single Next.js codebase",
      "Implemented Supabase Auth with Row-Level Security (RLS) policies for role-based access control across all database operations",
      "Added a Next.js middleware proxy layer enforcing auth checks on every admin route at the edge",
      "Designed a direct-to-storage image upload pipeline using signed URLs, bypassing server body limits and supporting files up to 10 MB",
      "Delivered a full CMS — services CRUD, gallery manager, and testimonials manager — via Next.js Server Actions with server-side auth on every mutation",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "React Hook Form",
      "Shadcn",
    ],
    demoUrl: "https://sakhistudio.vercel.app",
    githubUrl: "null",
    process:
      "SakhiStudio is a complete full-stack web application for a beauty studio, built end to end — from database schema design to the final UI. The platform has two sides: a public storefront for customers and a protected admin dashboard for the studio owner. I implemented Supabase Auth with Row-Level Security (RLS) policies for role-based access control, and added a Next.js middleware proxy layer to secure every admin route. Image uploads use a direct-to-storage approach with signed URLs, bypassing server body limits and supporting files up to 10 MB. The content management system covers services, gallery, and testimonials — all powered by Next.js Server Actions with server-side auth checks enforced on every mutation.",
    screenshots: [],
  },
  {
    id: 1,
    title: "Software Agency Website Template",
    slug: "software-agency-website-template",
    description:
      "A production-ready website template for software agencies and SaaS startups, covering service pages, a course catalog, and authentication flows.",
    image:
      "https://res.cloudinary.com/djmtejqkc/image/upload/v1753777596/software-web-1_fls60k.png",
    banner:
      "https://res.cloudinary.com/djmtejqkc/image/upload/v1753777596/software-web-1_fls60k.png",
    tags: ["Website", "Template", "SaaS", "UI/UX"],
    features: [
      "Built a multi-page marketing site using Next.js App Router with service highlights, course catalog, and a checkout flow",
      "Implemented authentication UI (login/signup) with client-side form validation",
      "Composed the entire UI from shadcn/ui primitives, maintaining a consistent design system across all pages",
      "Delivered full mobile responsiveness using Tailwind CSS with a utility-first layout approach",
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
      "A cross-platform mobile app for discovering and browsing recipes, with categorized browsing, detailed ingredient views, and video instructions.",
    image:
      "https://res.cloudinary.com/djmtejqkc/image/upload/v1753873566/Screenshot_2025-07-30_at_7.04.04_PM_vfwfkf.png",
    banner:
      "https://res.cloudinary.com/djmtejqkc/image/upload/v1753873566/Screenshot_2025-07-30_at_7.04.04_PM_vfwfkf.png",
    tags: ["Mobile App", "React Native", "Food", "API"],
    features: [
      "Integrated a third-party recipe API using Axios with categorized browsing across vegetarian, non-vegetarian, and bakery dishes",
      "Built a cross-platform mobile UI targeting both iOS and Android from a single React Native and Expo codebase",
      "Implemented smooth list and page transition animations using React Native Reanimated",
      "Styled with NativeWind (Tailwind CSS for React Native) for a consistent, utility-first design system",
    ],
    techStack: [
      "React Native",
      "Expo",
      "JavaScript",
      "React Native Reanimated",
      "Axios",
      "NativeWind",
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
    id: 3,
    title: "Investiaa",
    slug: "investiaa",
    description:
      "An online ecosystem connecting startups with incubators, angel investors, venture capitalists, and academic institutions — built as a Software Engineer on the core product team.",
    image: "/placeholder.svg?height=400&width=600",
    banner: "/placeholder.svg?height=800&width=1600",
    tags: ["Startup", "Investment", "Networking", "Full-Stack"],
    features: [
      "Contributed frontend features and GraphQL API integrations as a Software Engineer on the core product team",
      "Built startup and investor profile pages with search and filter functionality using React and Next.js",
      "Developed and integrated GraphQL queries and mutations connecting the frontend to a PostgreSQL-backed Node.js API",
      "Implemented KYC verification flow and admin dashboard components for user management",
    ],
    techStack: [
      "React",
      "Next.js",
      "GraphQL",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
    ],
    demoUrl: "null",
    githubUrl: "null",
    process:
      "Investiaa is an online ecosystem designed to empower startups by connecting them with incubators, angel investors, venture capitalists, and academic institutions. The platform enables seamless collaboration, access to funding, mentorship, and growth opportunities. I contributed to this project while working as a Software Engineer at Investiaa, focusing primarily on frontend development and also contributing to backend GraphQL APIs.",
    screenshots: [],
  },
  {
    id: 6,
    title: "Personal Loan Tracker",
    slug: "personal-loan-tracker",
    description:
      "A Firebase-backed personal finance app for tracking loans, payments, and interest calculations — with per-user data isolation and a real-time dashboard.",
    image: "/placeholder.svg?height=400&width=600",
    banner: "/placeholder.svg?height=800&width=1600",
    tags: ["Finance", "Productivity", "Firebase"],
    features: [
      "Built a Firestore-backed data layer for real-time loan records, payment history, and running balance tracking",
      "Designed a compound interest calculator with amortization schedule output",
      "Secured all user data with Firebase Authentication, scoping Firestore reads and writes strictly per user",
      "Shipped to production on Vercel with a TypeScript and Next.js project structure",
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
    process:
      "A personal finance tool for tracking loans and payments. Built with Firebase and Firestore for real-time data persistence, with Firebase Auth ensuring each user's data is fully isolated. The app includes a compound interest calculator and amortization schedule so users can understand their repayment timeline at a glance.",
    screenshots: [],
  },
  {
    id: 7,
    title: "Real Estate Listing Platform",
    slug: "real-estate-platform",
    description:
      "A modern real estate platform with property search, map-based browsing, and agent-client communication tools.",
    image: "/placeholder.svg?height=400&width=600",
    banner: "/placeholder.svg?height=800&width=1600",
    tags: ["Real Estate", "Marketplace", "Maps"],
    features: [
      "Built a property listing and search UI with filter controls for location, price range, and property type using Next.js",
      "Integrated Google Maps API for property location rendering and neighborhood map views",
      "Designed a PostgreSQL schema covering property listings, agent profiles, and saved favourites",
      "Implemented an agent-client messaging flow with a real-time conversation UI",
    ],
    techStack: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Google Maps API",
      "PostgreSQL",
    ],
    demoUrl: "null",
    githubUrl: "null",
    process:
      "A full-stack real estate platform for browsing and listing properties. The app integrates Google Maps for location-based property discovery and includes a PostgreSQL-backed data layer for listings, agents, and user favourites. Built with Next.js and TypeScript for a type-safe, scalable codebase.",
    screenshots: [],
  },
];
