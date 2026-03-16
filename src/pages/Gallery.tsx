import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import GoldParticles from "@/components/GoldParticles";
import galleryWedding from "@/assets/gallery-wedding.jpg";
import galleryCards from "@/assets/gallery-cards.jpg";
import galleryShopboard from "@/assets/gallery-shopboard.jpg";
import galleryEvent from "@/assets/gallery-event.jpg";
import galleryPosters from "@/assets/gallery-posters.jpg";
import galleryStickers from "@/assets/gallery-stickers.jpg";
import heroPrinting from "@/assets/hero-printing.jpg";

const galleryItems = [
  { src: galleryWedding, label: "Wedding Banners", category: "Banners" },
  { src: galleryEvent, label: "Event Banners", category: "Banners" },
  { src: galleryCards, label: "Business Cards & Invitations", category: "Cards" },
  { src: galleryShopboard, label: "Shop Boards & Signage", category: "Signage" },
  { src: galleryPosters, label: "Wall Posters & Art Prints", category: "Posters" },
  { src: galleryStickers, label: "Vinyl Stickers & Decals", category: "Stickers" },
  { src: heroPrinting, label: "Large Format Flex Printing", category: "Flex" },
];

const Gallery = () => {
  return (
    <Layout>
      <section className="relative section-padding overflow-hidden">
        <GoldParticles />
        <div className="container-max relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="gold-text">Printing Gallery</span>
            </h1>
            <div className="gold-separator max-w-[80px] mx-auto mb-6" />
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              Browse through our collection of premium printing projects delivered to satisfied clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 0.08}>
                <div className="gallery-item gold-border-glow group relative">
                  <img
                    src={item.src}
                    alt={item.label}
                    className="w-full h-72 object-cover"
                  />
                  <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <div>
                      <span className="text-primary text-xs font-body uppercase tracking-wider">
                        {item.category}
                      </span>
                      <h3 className="font-heading text-base font-semibold text-foreground mt-1">
                        {item.label}
                      </h3>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
