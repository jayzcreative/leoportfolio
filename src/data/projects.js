import jamcoImg from "../assets/images/projects/jamco.jpeg";
import talithaImg from "../assets/images/projects/talitha.jpg";
import skyscoutImg from "../assets/images/projects/skyscout.jpg";
import jamcoDashboardImg from "../assets/images/projects/jamcodashboard.png";
import talithaDashboardImg from "../assets/images/projects/talithadashboard.png";

// `category` drives filter chips + section grouping ("Websites" / "Dashboards").
// `subCategory` is just the on-image badge label (e.g. "E-commerce",
// "Construction") — it has no effect on filtering, purely display.
// Dashboards are private/authenticated tools, so their `url` points
// straight at the screenshot instead of a live link.
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
    url: talithaDashboardImg,
    rotate: "rotate-2",
    featured: true,
    tech: [
      "React", "JavaScript", "Tailwind CSS", "JWT",
      "Cloudinary", "Git", "GitHub", "Vercel"
    ],
    highlights: ["React", "JWT",  "Cloudinary", "Vercel"],
  },
];