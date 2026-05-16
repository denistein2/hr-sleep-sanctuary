import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import {
  getProductImages,
  getProductCoverImage,
  getFolderTitle,
  getFolderHierarchy,
  PRODUCT_SLUG_TO_FOLDER,
} from "@/data/productImages";

interface ProductGalleryProps {
  /** Subfolder slug (ex: "diamante") OU product slug do products.ts (ex: "flexibed-roma") */
  folder?: string;
  productSlug?: string;
  /** Lista explícita de nomes de arquivos ou caminhos completos */
  images?: string[];
  /** Máximo de imagens a exibir no grid. Padrão: todas */
  limit?: number;
  columns?: 2 | 3 | 4;
  className?: string;
}

export default function ProductGallery({
  folder: folderProp,
  productSlug,
  images: imagesProp,
  limit,
  columns = 3,
  className = "",
}: ProductGalleryProps) {
  const folder = folderProp ?? (productSlug ? PRODUCT_SLUG_TO_FOLDER[productSlug] : undefined);

  // Se recebermos uma lista explícita de imagens, usamos ela.
  // Se houver folder, assumimos que são nomes de arquivos dentro daquela pasta.
  let allImages: string[] = [];
  if (imagesProp && imagesProp.length > 0) {
    if (folder) {
      // BASE deve ser o mesmo de productImages.ts
      const BASE = "/produtos/colchoes";
      allImages = imagesProp.map(f => f.startsWith("/") ? f : `${BASE}/${folder}/${f}`);
    } else {
      allImages = imagesProp;
    }
  } else {
    allImages = folder ? getProductImages(folder) : [];
  }

  const images = limit ? allImages.slice(0, limit) : allImages;
  const hierarchy = folder ? getFolderHierarchy(folder) : null;
  const title = folder ? getFolderTitle(folder) : "";

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);

  const prev = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  }, [images.length]);

  const next = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i + 1) % images.length));
  }, [images.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIndex, prev, next]);

  // Bloqueia scroll do body quando lightbox está aberto
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightboxIndex]);

  if (images.length === 0) return null;

  const gridCols = {
    2: "grid-cols-2",
    3: "grid-cols-2 sm:grid-cols-3",
    4: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4",
  }[columns];

  return (
    <>


      <div className={`grid ${gridCols} gap-2 sm:gap-3 ${className}`}>
        {images.map((src, i) => (
          <motion.button
            key={src}
            type="button"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "0px 0px -60px 0px" }}
            transition={{ duration: 0.35, delay: (i % 12) * 0.04 }}
            onClick={() => openLightbox(i)}
            className="group relative aspect-square overflow-hidden rounded-lg bg-muted/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label={`Ver imagem ${i + 1} de ${title}`}
          >
            <img
              src={src}
              alt={`${title} — foto ${i + 1}`}
              loading="lazy"
              decoding="async"
              fetchPriority={i < 6 ? "high" : "auto"}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300 pointer-events-none" />
          </motion.button>
        ))}
      </div>

      {lightboxIndex !== null &&
        createPortal(
          <AnimatePresence>
            <motion.div
              key="lightbox"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
              onClick={closeLightbox}
            >
              <motion.img
                key={lightboxIndex}
                src={images[lightboxIndex]}
                alt={`${title} — foto ${lightboxIndex + 1}`}
                decoding="async"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
                className="max-h-[90vh] max-w-[90vw] w-auto h-auto object-contain rounded-lg shadow-2xl"
                onClick={(e: any) => e.stopPropagation()}
                draggable={false}
              />

              {/* Fechar */}
              <button
                type="button"
                onClick={closeLightbox}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Anterior */}
              {images.length > 1 && (
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); prev(); }}
                  className="absolute left-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                  aria-label="Foto anterior"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              )}

              {/* Próximo */}
              {images.length > 1 && (
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); next(); }}
                  className="absolute right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                  aria-label="Próxima foto"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              )}

              {/* Contador */}
              <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm tabular-nums">
                {lightboxIndex + 1} / {images.length}
              </span>
            </motion.div>
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}

// ─── Cover Image ──────────────────────────────────────────────────────────────
// Componente mínimo para exibir só a imagem de capa de um produto.
// Ideal para cards em CategoryPage.
interface ProductCoverProps {
  slug: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export function ProductCover({ slug, alt, className = "", priority = false }: ProductCoverProps) {
  const src = getProductCoverImage(slug);
  if (!src) return <div className={`bg-muted/30 ${className}`} />;
  return (
    <img
      src={src}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={priority ? "high" : "auto"}
      className={className}
    />
  );
}
