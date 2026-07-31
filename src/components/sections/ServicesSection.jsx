import { motion, useReducedMotion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { services, getWhatsAppLink } from "../../data/services";

export default function ServicesSection() {
  const shouldReduceMotion = useReducedMotion();

  const headerLeft = {
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : -32 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: "easeOut" } },
  };
  const headerRight = {
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : 32 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.55, ease: "easeOut", delay: 0.1 },
    },
  };

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15, delayChildren: 0.15 },
    },
  };

  const item = {
    hidden: (i) => ({
      opacity: 0,
      x: shouldReduceMotion ? 0 : i % 2 === 0 ? -48 : 48,
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.55, ease: "easeOut" },
    },
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-20 md:py-28 overflow-x-hidden">
      <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
          variants={headerLeft}
        >
          <p className="font-mono text-xs uppercase tracking-widest text-accent mb-2">
            How I Can Help
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-text">
            Services
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
          variants={headerRight}
        >
          <NavLink
            to="/services"
            className="inline-flex items-center gap-2 border border-border px-5 py-2.5 rounded-full font-medium text-sm text-text hover:border-accent hover:text-accent transition-colors"
          >
            View All Services <ArrowUpRight size={16} />
          </NavLink>
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={container}
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <motion.div key={service.id} custom={i} variants={item} className="group relative">
              <div
                className={`absolute -inset-3 bg-gradient-to-br from-accent/15 via-surface to-accent-2/10 rounded-[2.5rem] border border-border ${service.rotate} transition-transform duration-300 group-hover:rotate-0`}
              />

              <motion.div
                whileHover={shouldReduceMotion ? {} : { y: -6 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="relative z-10 h-full flex flex-col bg-surface border border-border rounded-3xl p-6 hover:border-accent transition-colors"
              >
                <div className="w-11 h-11 rounded-full bg-accent/10 flex items-center justify-center mb-5">
                  <Icon size={20} className="text-accent" />
                </div>

                <h3 className="font-heading text-lg font-semibold text-text mb-1.5">
                  {service.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-5 flex-1">
                  {service.tagline}
                </p>

                {service.status === "in-development" ? (
                  <span className="inline-block text-xs font-medium text-accent bg-accent/10 rounded-full px-3 py-1 mb-4 w-fit">
                    In Development
                  </span>
                ) : (
                  <p className="font-mono text-sm text-text mb-4">{service.price}</p>
                )}

                <a
                  href={getWhatsAppLink(service.title)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:gap-2.5 transition-all duration-200"
                >
                  {service.cta} <ArrowUpRight size={14} />
                </a>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}