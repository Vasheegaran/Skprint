import { motion } from "framer-motion";
import {
  Printer, Sun, Shirt, CreditCard, FileText, Sticker, Tag,
  LayoutDashboard, Receipt, Megaphone, Image,
} from "lucide-react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import GoldParticles from "@/components/GoldParticles";

const services = [
  { icon: Printer, title: "Digital Flex", desc: "Large format digital flex printing for banners, hoardings, and outdoor displays. Vivid colors and weather-resistant materials ensure long-lasting impact." },
  { icon: Sun, title: "UV Printing", desc: "UV-cured printing on rigid and flexible materials including acrylic, wood, and metal. Scratch-resistant and vibrant finishes." },
  { icon: Shirt, title: "Cloth Printing", desc: "Custom prints on t-shirts, bags, and fabrics for events, promotions, and personal use. Durable and comfortable wearable prints." },
  { icon: CreditCard, title: "Visiting Cards", desc: "Premium business cards with options for matte, glossy, textured, and metallic finishes. Make a lasting first impression." },
  { icon: FileText, title: "Color Printouts", desc: "High quality color printing and photocopying services for documents, presentations, and educational materials." },
  { icon: Sticker, title: "Vinyl Stickers", desc: "Weather-resistant vinyl stickers and decals for vehicles, storefronts, and promotional materials. Available in custom shapes and sizes." },
  { icon: Tag, title: "PVC Branding Stickers", desc: "Professional PVC stickers for product labeling, branding, and industrial applications. Durable and water-resistant." },
  { icon: LayoutDashboard, title: "Foam Board / Sunpack", desc: "Lightweight foam boards and sunpack sheets for point-of-sale displays, exhibitions, and temporary signage." },
  { icon: Receipt, title: "Bill Book", desc: "Custom designed and printed bill books, receipt pads, and invoice books for businesses of all sizes." },
  { icon: Megaphone, title: "Multicolour Notice", desc: "Vibrant multicolour notices, flyers, and pamphlets for events, announcements, and promotions." },
  { icon: Image, title: "Wall Posters", desc: "Eye-catching wall posters in all sizes for advertising, decoration, and events. High resolution prints on premium paper." },
];

const Services = () => {
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
              Our <span className="gold-text">Printing Services</span>
            </h1>
            <div className="gold-separator max-w-[80px] mx-auto mb-6" />
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              Comprehensive printing solutions tailored to your needs. From small-scale prints to large format displays.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 0.05}>
                <div className="bg-card rounded-lg p-8 gold-border-glow card-hover h-full">
                  <div className="w-14 h-14 rounded-full gold-gradient flex items-center justify-center mb-6">
                    <s.icon size={24} className="text-primary-foreground" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-3">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
