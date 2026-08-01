import jamcoImg from "../assets/images/projects/jamco.jpeg";
import talithaImg from "../assets/images/projects/talitha.jpg";
import skyscoutImg from "../assets/images/projects/skyscout.jpg";

import jamcoDashboardImg from "../assets/images/projects/jamcodashboard.png";
import jamco1Img from "../assets/images/projects/jamco1.png";
import jamco2Img from "../assets/images/projects/jamco2.png";
import jamco3Img from "../assets/images/projects/jamco3.png";

import talithaDashboardImg from "../assets/images/projects/talithadashboard.png";
import tali1Img from "../assets/images/projects/tali1.png";
import tali2Img from "../assets/images/projects/tali2.png";

import analyst1Img from "../assets/images/projects/analyst1.png";
import analyst2Img from "../assets/images/projects/analyst2.png";
import analyst3Img from "../assets/images/projects/analyst3.png";
import analyst4Img from "../assets/images/projects/analyst4.png";

import ato1Img from "../assets/images/projects/ato1.png";
import ato2Img from "../assets/images/projects/ato2.png";
import ato3Img from "../assets/images/projects/ato3.png";
import ato4Img from "../assets/images/projects/ato4.png";

// `category` drives filter chips + section grouping ("Websites" / "Dashboards").
// `subCategory` is just the on-image badge label — purely display, no effect
// on filtering. Dashboards are private/authenticated tools, so their `url`
// points at a screenshot instead of a live link.
//
// `image` is the single cover shown on the homepage (FeaturedProjects never
// shows more than one). `images` is optional — when present, the Projects
// page renders a slider so visitors can page through every screenshot.
export const projects = [
  {
    title: "Jamco Builders",
    category: "Websites",
    subCategory: "Construction",
    tagline: "Construction & civil engineering company site",
    description:
      "A business site for a residential and civil construction company operating across Southern Africa, covering brickwork, plastering, paving, concrete slabs, and foundation work.",
    image: jamcoImg,
    url: "https://jamco-builders.vercel.app/",
    rotate: "-rotate-2",
    featured: true,
    tech: [
      "React", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Framer Motion",
      "Express", "MongoDB", "JWT", "REST APIs", "Cloudinary", "Git",
      "GitHub", "Render", "Vercel", "i18next", "Vite",
    ],
    highlights: ["React", "Express", "MongoDB", "REST APIs", "JWT"],
  },
  {
    title: "Talitha Cumi Accessories",
    category: "Websites",
    subCategory: "E-commerce",
    tagline: "E-commerce storefront for luxury accessories",
    description:
      "An online storefront for a luxury bags and watches brand in Zimbabwe, built around fast product browsing with WhatsApp-based ordering and delivery.",
    image: talithaImg,
    url: "https://talitha-cumi-accessories.vercel.app/",
    rotate: "rotate-2",
    featured: false,
    tech: [
      "React", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Framer Motion",
      "Cloudinary", "Git", "GitHub", "Vercel", "i18next", "Vite",
    ],
    highlights: ["React", "Tailwind CSS", "Framer Motion", "Cloudinary"],
  },
  {
    title: "SkyScout",
    category: "Websites",
    subCategory: "Travel & Bookings",
    tagline: "Flight search & price intelligence platform",
    description:
      "A full-stack flight search application that surfaces live fare data and price intelligence, with real-time airport arrivals/departures boards and automated email notifications.",
    image: skyscoutImg,
    url: "https://skyscout-sepia.vercel.app",
    rotate: "rotate-2",
    featured: true,
    tech: [
      "React", "Vite", "JavaScript", "Tailwind CSS", "shadcn/ui",
      "Framer Motion", "FastAPI", "Python", "REST APIs", "i18next",
      "Git", "GitHub", "Vercel", "Render",
    ],
    highlights: ["Python", "FastAPI", "React", "REST APIs", "shadcn/ui"],
  },
  {
    title: "Jamco Dashboard",
    category: "Dashboards",
    subCategory: "Admin Dashboard",
    tagline: "Internal admin dashboard for managing site content",
    description:
      "A private, authenticated admin dashboard built for the Jamco Builders team to manage projects, content, and incoming inquiries kept separate from the public-facing site.",
    image: jamcoDashboardImg,
    images: [jamcoDashboardImg, jamco1Img, jamco2Img, jamco3Img],
    url: jamcoDashboardImg,
    rotate: "-rotate-2",
    featured: true,
    tech: [
      "React", "JavaScript", "Tailwind CSS", "Express", "MongoDB", "JWT",
      "REST APIs", "Git", "GitHub", "Render",
    ],
    highlights: ["React", "Express", "MongoDB", "JWT", "REST APIs"],
  },
  {
    title: "Talitha Dashboard",
    category: "Dashboards",
    subCategory: "Admin Dashboard",
    tagline: "Internal admin dashboard for product & order management",
    description:
      "A private, authenticated admin dashboard for the Talitha Cumi Accessories team to manage products, images, and incoming orders kept separate from the public storefront.",
    image: talithaDashboardImg,
    images: [talithaDashboardImg, tali1Img, tali2Img],
    url: talithaDashboardImg,
    rotate: "rotate-2",
    featured: false,
    tech: [
      "React", "JavaScript", "Tailwind CSS", "Vercel", "JWT",
      "Cloudinary", "Git", "GitHub", "REST APIs", 
    ],
    highlights: ["React", "JWT", "Cloudinary", "Vercel"],
  },
  {
    title: "ATO Shield Analyst Console",
    category: "Dashboards",
    subCategory: "Fraud Detection",
    tagline: "Fraud operations console for account-takeover monitoring",
    description:
      "An internal console for fraud analysts to review flagged transactions, track risk scores, and approve, flag, or block accounts in real time with a live overview of case status across the platform.",
    image: analyst1Img,
    images: [analyst1Img, analyst2Img, analyst3Img, analyst4Img],
    url: analyst1Img,
    rotate: "-rotate-2",
    featured: true,
    tech: [
      "React", "Python", "FastAPI", "MongoDB", "JWT", "REST APIs",
      "Tailwind CSS", "Git", "GitHub", "Render","Model Training",
    ],
    highlights: ["Python", "FastAPI", "React", "MongoDB", "JWT"],
  },
  {
    title: "ATO Shield Customer App",
    category: "Dashboards",
    subCategory: "Fraud Detection",
    tagline: "Customer-facing banking app with built-in fraud protection",
    description:
      "A mobile banking experience showing how account-takeover protection looks from the customer's side secure transfers, account protection status, and recent activity, all backed by the same fraud detection engine.",
    image: ato1Img,
    images: [ato1Img, ato2Img, ato3Img, ato4Img],
    url: ato1Img,
    rotate: "rotate-2",
    featured: true,
    tech: [
      "React", "Tailwind CSS", "Framer Motion", "JWT", "REST APIs",
      "Python", "FastAPI", "Git", "GitHub", "Vercel",
    ],
    highlights: ["React", "Framer Motion", "JWT", "REST APIs", "Python"],
  },
];