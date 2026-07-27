import jamcoImg from "../assets/images/projects/jamco.jpeg";
import talithaImg from "../assets/images/projects/talitha.jpg";
import skyscoutImg from "../assets/images/projects/skyscout.jpg";

// Add a new project by pushing another object here — FeaturedProjects
// (homepage) and the full Projects page both read from this list, and the
// tech array drives the "Built With" filter automatically. Tech names must
// match a skill name in data/skills.js exactly, or it won't get an icon.
//
// `highlights` controls which tags show by default on the card — pick the
// 4-6 most meaningful ones. Everything else still lives in `tech` and still
// works for filtering, it's just tucked behind the "+N more" toggle.
export const projects = [
  {
    title: "Jamco Builders",
    category: "Construction",
    tagline: "Construction & civil engineering company site",
    description:
      "A business site for a residential and civil construction company operating across Southern Africa, covering brickwork, plastering, paving, concrete slabs, and foundation work.",
    image: jamcoImg,
    url: "https://jamco-builders.vercel.app/",
    rotate: "-rotate-2",
    featured: true,
    tech: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Framer Motion",
      "Express",
      "MongoDB",
      "JWT",
      "REST APIs",
      "Cloudinary",
      "Git",
      "GitHub",
      "Render",
      "Vercel",
       "i18next",
       "Vite"
    ],
    highlights: ["React", "Express", "MongoDB", "REST APIs", "JWT"],
  },
  {
    title: "Talitha Cumi Accessories",
    category: "E-commerce",
    tagline: "E-commerce storefront for luxury accessories",
    description:
      "An online storefront for a luxury bags and watches brand in Zimbabwe, built around fast product browsing with WhatsApp-based ordering and delivery.",
    image: talithaImg,
    url: "https://talitha-cumi-accessories.vercel.app/",
    rotate: "rotate-2",
    featured: true,
    tech: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Framer Motion",
      "Cloudinary",
      "Git",
      "GitHub",
      "Vercel",
       "i18next",
       "Vite"
    ],
    highlights: ["React", "Tailwind CSS", "Framer Motion", "Cloudinary"],
  },
  {
    title: "SkyScout",
    category: "Travel & Bookings",
    tagline: "Flight search & price intelligence platform",
    description:
      "A full-stack flight search application that surfaces live fare data and price intelligence, with real-time airport arrivals/departures boards and automated email notifications.",
    image: skyscoutImg,
    url: "https://skyscout-sepia.vercel.app",
    rotate: "rotate-2",
    featured: true,
    tech: [
      "React",
      "Vite",
      "JavaScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Framer Motion",
      "FastAPI",
      "Python",
      "REST APIs",
      "i18next",
      "Git",
      "GitHub",
      "Vercel",
      "Render"
    ],
    highlights: ["Python", "FastAPI", "React", "REST APIs","shadcn/ui"],
  },
];