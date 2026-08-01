import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import { techIcons } from "../../data/skills";
import { slugify } from "../../lib/slugify";

const tagClass =
  "inline-flex items-center gap-1.5 text-[11px] font-mono text-muted bg-bg border border-border rounded-full px-2.5 py-1 mt-3";

export default function ProjectCard({ project, variants, autoOpen = false }) {
  const [imgIndex, setImgIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const cardRef = useRef(null);

  const images = project.images && project.images.length > 0 ? project.images : [project.image];
  const hasMultiple = images.length > 1;
  const hiddenTech = project.tech.filter((t) => !project.highlights.includes(t));

  const isDashboard = project.category === "Dashboards";
  const visitLabel = isDashboard ? (hasMultiple ? "View Gallery" : "View Screenshot") : "Visit Site";

  const prevImage = () => setImgIndex((i) => (i - 1 + images.length) % images.length);
  const nextImage = () => setImgIndex((i) => (i + 1) % images.length);

  const openLightbox = (e) => {
    e?.preventDefault();
    setLightboxOpen(true);
  };

  // Only dashboards deep-link and auto-open a lightbox — live websites
  // should just be visited directly, so this is a no-op for them.
  useEffect(() => {
    if (!autoOpen || !isDashboard) return;

    cardRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    const timer = setTimeout(() => setLightboxOpen(true), 500);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Keyboard nav + escape while lightbox is open
  useEffect(() => {
    if (!lightboxOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightboxOpen]);

  const imageContent = (
    <div className="relative aspect-video overflow-hidden bg-bg">
      <AnimatePresence mode="wait">
        <motion.img
          key={imgIndex}
          src={images[imgIndex]}
          alt={`${project.title} screenshot ${imgIndex + 1}`}
          loading="lazy"
          decoding="async"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity pointer-events-none" />
      <span className="absolute top-4 left-4 text-[10px] font-mono uppercase tracking-widest px-3 py-1.5 rounded-full bg-bg/80 backdrop-blur border border-border text-muted group-hover:text-accent group-hover:border-accent transition-colors">
        {project.subCategory || project.category}
      </span>
    </div>
  );

  return (
    <>
      <motion.div
        ref={cardRef}
        id={slugify(project.title)}
        layout
        variants={variants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="group relative scroll-mt-28"
      >
        <div
          className={`absolute -inset-3 bg-gradient-to-br from-accent/15 via-surface to-accent-2/10 rounded-[2.5rem] border border-border ${project.rotate} transition-transform duration-300 group-hover:rotate-0`}
        />

        <div className="relative z-10 bg-surface border border-border rounded-3xl overflow-hidden hover:border-accent transition-colors">
          <div className="relative">
            {isDashboard ? (
              <button
                type="button"
                onClick={openLightbox}
                className="block w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                aria-label={`Open ${project.title} image ${imgIndex + 1} of ${images.length}`}
              >
                {imageContent}
              </button>
            ) : (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              >
                {imageContent}
              </a>
            )}

            {/* Slider controls only ever apply to dashboards — websites
                have a single screenshot and no lightbox to page through */}
            {isDashboard && hasMultiple && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  aria-label="Previous image"
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-bg/80 backdrop-blur border border-border text-text hover:border-accent hover:text-accent transition-colors"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  aria-label="Next image"
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-bg/80 backdrop-blur border border-border text-text hover:border-accent hover:text-accent transition-colors"
                >
                  <ChevronRight size={16} />
                </button>
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setImgIndex(i);
                      }}
                      aria-label={`Go to image ${i + 1}`}
                      className={`w-1.5 h-1.5 rounded-full transition-colors ${
                        i === imgIndex ? "bg-accent" : "bg-bg/80 border border-border"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="p-6 pb-4">
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-heading text-xl font-semibold text-text">{project.title}</h3>
              {isDashboard ? (
                <button type="button" onClick={openLightbox} aria-label={visitLabel}>
                  <ArrowUpRight
                    size={20}
                    className="shrink-0 text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                </button>
              ) : (
                <a href={project.url} target="_blank" rel="noopener noreferrer" aria-label={visitLabel}>
                  <ArrowUpRight
                    size={20}
                    className="shrink-0 text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                </a>
              )}
            </div>
            <p className="mt-1 text-sm text-accent font-medium">{project.tagline}</p>
            <p className="mt-3 text-sm text-muted leading-relaxed">{project.description}</p>
          </div>

          <div className="px-6 pb-6 pt-2 border-t border-border/60 mt-2">
            <div className="flex flex-wrap gap-2">
              {project.highlights.map((tech) => {
                const Icon = techIcons[tech];
                return (
                  <span key={tech} className={tagClass}>
                    {Icon && <Icon size={12} className="text-accent" />}
                    {tech}
                  </span>
                );
              })}

              <AnimatePresence>
                {expanded &&
                  hiddenTech.map((tech) => {
                    const Icon = techIcons[tech];
                    return (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.15 }}
                        className={tagClass}
                      >
                        {Icon && <Icon size={12} className="text-accent" />}
                        {tech}
                      </motion.span>
                    );
                  })}
              </AnimatePresence>
            </div>

            {hiddenTech.length > 0 && (
              <button
                onClick={() => setExpanded((e) => !e)}
                className="mt-3 inline-flex items-center gap-1 text-[11px] font-mono text-muted hover:text-accent transition-colors"
              >
                <ChevronDown size={12} className={`transition-transform ${expanded ? "rotate-180" : ""}`} />
                {expanded ? "Show less" : `+${hiddenTech.length} more`}
              </button>
            )}
          </div>
        </div>
      </motion.div>

      {/* Lightbox — dashboards only */}
      {isDashboard && (
        <AnimatePresence>
          {lightboxOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[100] bg-bg/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
              onClick={() => setLightboxOpen(false)}
            >
              <button
                type="button"
                onClick={() => setLightboxOpen(false)}
                aria-label="Close"
                className="absolute top-5 right-5 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-surface border border-border text-text hover:border-accent hover:text-accent transition-colors"
              >
                <X size={20} />
              </button>

              {hasMultiple && (
                <span className="absolute top-6 left-6 font-mono text-xs text-muted">
                  {imgIndex + 1} / {images.length}
                </span>
              )}

              <AnimatePresence mode="wait">
                <motion.img
                  key={imgIndex}
                  src={images[imgIndex]}
                  alt={`${project.title} screenshot ${imgIndex + 1}`}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                  onClick={(e) => e.stopPropagation()}
                  className="max-w-full max-h-[85vh] object-contain rounded-xl border border-border"
                />
              </AnimatePresence>

              {hasMultiple && (
                <>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage();
                    }}
                    aria-label="Previous image"
                    className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-surface border border-border text-text hover:border-accent hover:text-accent transition-colors"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage();
                    }}
                    aria-label="Next image"
                    className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-surface border border-border text-text hover:border-accent hover:text-accent transition-colors"
                  >
                    <ChevronRight size={20} />
                  </button>

                  <div
                    className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {images.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setImgIndex(i)}
                        aria-label={`Go to image ${i + 1}`}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          i === imgIndex ? "bg-accent" : "bg-surface border border-border"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </>
  );
}