export interface Project {
  id: number
  title: string
  slug: string
  description: string
  image: string
  banner?: string
  tags: string[]
  features: string[]
  techStack: string[]
  demoUrl?: string
  githubUrl?: string
  process?: string
  screenshots?: string[]
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    slug: "ecommerce-dashboard",
    description:
      "A comprehensive dashboard for managing an e-commerce platform with real-time analytics and inventory management.",
    image: "/placeholder.svg?height=400&width=600",
    banner: "/placeholder.svg?height=800&width=1600",
    tags: ["Dashboard", "E-Commerce", "Analytics"],
    features: [
      "Real-time sales analytics",
      "Inventory management",
      "Customer insights",
      "Order processing",
      "Product management",
    ],
    techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/example/project",
    process:
      "This project was built with a focus on performance and user experience. I started with wireframing the UI, then implemented the core features using Next.js and React. The backend uses Prisma with PostgreSQL for data storage.",
    screenshots: [
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
    ],
  },
  {
    id: 2,
    title: "Task Management App",
    slug: "task-management",
    description:
      "A collaborative task management application with real-time updates, team workspaces, and progress tracking.",
    image: "/placeholder.svg?height=400&width=600",
    banner: "/placeholder.svg?height=800&width=1600",
    tags: ["Productivity", "Team Collaboration", "SaaS"],
    features: [
      "Team workspaces",
      "Real-time collaboration",
      "Task assignment and tracking",
      "Progress visualization",
      "Deadline notifications",
    ],
    techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Supabase", "WebSockets"],
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/example/project",
    process:
      "I built this application to solve my own productivity challenges. The design process involved extensive user research and multiple iterations to ensure the UI was intuitive and efficient.",
    screenshots: [
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
    ],
  },
  {
    id: 3,
    title: "AI Content Generator",
    slug: "ai-content-generator",
    description:
      "An AI-powered content generation tool that helps creators produce high-quality articles, social media posts, and marketing copy.",
    image: "/placeholder.svg?height=400&width=600",
    banner: "/placeholder.svg?height=800&width=1600",
    tags: ["AI", "Content Creation", "Productivity"],
    features: [
      "Multiple content formats",
      "Customizable tone and style",
      "SEO optimization",
      "Content history and editing",
      "Export to various platforms",
    ],
    techStack: ["React", "Next.js", "OpenAI API", "Tailwind CSS", "Vercel AI SDK"],
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/example/project",
    screenshots: ["/placeholder.svg?height=800&width=1200", "/placeholder.svg?height=800&width=1200"],
  },
  {
    id: 4,
    title: "Finance Tracker",
    slug: "finance-tracker",
    description:
      "A personal finance application that helps users track expenses, set budgets, and visualize spending patterns.",
    image: "/placeholder.svg?height=400&width=600",
    banner: "/placeholder.svg?height=800&width=1600",
    tags: ["Finance", "Personal", "Analytics"],
    features: ["Expense tracking", "Budget setting", "Spending analytics", "Financial goals", "Recurring transactions"],
    techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Chart.js", "Supabase"],
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/example/project",
    screenshots: [
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
    ],
  },
  {
    id: 5,
    title: "Social Media Dashboard",
    slug: "social-media-dashboard",
    description:
      "A unified dashboard for managing multiple social media accounts, scheduling posts, and analyzing engagement metrics.",
    image: "/placeholder.svg?height=400&width=600",
    banner: "/placeholder.svg?height=800&width=1600",
    tags: ["Social Media", "Marketing", "Analytics"],
    features: [
      "Multi-platform integration",
      "Content scheduling",
      "Engagement analytics",
      "Audience insights",
      "Performance reporting",
    ],
    techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Social Media APIs"],
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/example/project",
    screenshots: ["/placeholder.svg?height=800&width=1200", "/placeholder.svg?height=800&width=1200"],
  },
  {
    id: 6,
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
    techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Google Maps API", "PostgreSQL"],
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/example/project",
    screenshots: [
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
    ],
  },
]
