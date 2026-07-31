import { Code2, Layers, BarChart3, Sparkles } from "lucide-react";


export const services = [
  {
    id: "frontend",
    title: "Frontend Development",
    tagline: "Fast, responsive websites that look sharp on every screen",
    icon: Code2,
    status: "available",
    rotate: "rotate-2",
    description:
      "A clean, modern website that makes the right first impression built to load fast, look great on any device, and turn visitors into customers.",
    features: [
      "Looks great on phones, tablets, and desktops",
      "Fast loading, no clunky delays",
      "Smooth, polished animations and interactions",
      "Live and ready for visitors from day one",
    ],
    price: "From $100",
    priceNote: "Final price depends on scope happy to negotiate",
    cta: "Start a Project",
  },
  {
    id: "fullstack",
    title: "Full-Stack Web Development",
    tagline: "Websites that need a backend, database, or login system",
    icon: Layers,
    status: "available",
    rotate: "-rotate-2",
    description:
      "A complete web application built to actually run your business user accounts, secure logins, and a database behind the scenes, all working together reliably.",
    features: [
      "User accounts and secure logins",
      "A database to store and manage your data",
      "Custom features built around your workflow",
      "Reliable performance as your business grows",
    ],
    price: "From $150",
    priceNote: "Final price depends on scope happy to negotiate",
    cta: "Start a Project",
  },
  {
    id: "data",
    title: "Data Analysis & Dashboards",
    tagline: "Turning raw data into charts and insights you can act on",
    icon: BarChart3,
    status: "available",
    rotate: "rotate-2",
    description:
      "Your raw numbers turned into a clear picture clean, easy-to-read visuals and dashboards that make it obvious what's working and what needs attention.",
    features: [
      "Messy data cleaned up and organized",
      "Clear charts that highlight what matters",
      "Interactive dashboards you can explore yourself",
      "Delivered as a report or a live dashboard",
    ],
    price: "From $170",
    priceNote: "Final price depends on scope — happy to negotiate",
    cta: "Start a Project",
  },
  {
    id: "ai",
    title: "AI-Powered Features",
    tagline: "Smart features layered on top of your website or data",
    icon: Sparkles,
    status: "in-development",
    rotate: "-rotate-2",
    description:
      "Smart, automated features that do the work for you from recommendations to predictions. Still in active development, so pricing is flexible and scoped around what you actually need.",
    features: [
      "Smart recommendations tailored to your users",
      "Automated insights pulled from your data",
      "Predictive features built around your goals",
      "Shaped closely with you as we go",
    ],
    price: null,
    priceNote: "In development let's talk about what you need",
    cta: "Let's Discuss",
  },
];

export const getWhatsAppLink = (serviceTitle) =>
  `https://wa.me/919764506058?text=${encodeURIComponent(
    `Hi Leo, I'm interested in your "${serviceTitle}" service. Can we talk?`
  )}`;