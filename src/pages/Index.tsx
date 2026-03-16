import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Printer, Sun, Shirt, CreditCard, FileText, Sticker, Tag,
  LayoutDashboard, Receipt, Megaphone, Image, Star, Truck,
  DollarSign, Palette, HeartHandshake, ArrowRight,
} from "lucide-react";
import Layout from "@/components/Layout";
import GoldParticles from "@/components/GoldParticles";
import ScrollReveal from "@/components/ScrollReveal";
import SectionTitle from "@/components/SectionTitle";
import heroPrinting from "@/assets/hero-printing.jpg";
import galleryWedding from "@/assets/gallery-wedding.jpg";
import galleryCards from "@/assets/gallery-cards.jpg";
import galleryShopboard from "@/assets/gallery-shopboard.jpg";
import galleryEvent from "@/assets/gallery-event.jpg";
import galleryPosters from "@/assets/gallery-posters.jpg";

const services = [
  { icon: Printer, title: "Digital Flex", desc: "Large format digital flex printing for banners and hoardings" },
  { icon: Sun, title: "UV Printing", desc: "Durable UV-cured prints on various materials" },
  { icon: Shirt, title: "Cloth Printing", desc: "Custom prints on t-shirts, bags, and fabrics" },
  { icon: CreditCard, title: "Visiting Cards", desc: "Premium business cards with custom finishes" },
  { icon: FileText, title: "Color Printouts", desc: "High quality color printing and photocopying" },
  { icon: Sticker, title: "Vinyl Stickers", desc: "Weather-resistant vinyl stickers and decals" },
  { icon: Tag, title: "PVC Branding Stickers", desc: "Professional PVC stickers for branding" },
  { icon: LayoutDashboard, title: "Foam Board / Sunpack", desc: "Lightweight boards for displays and signage" },
  { icon: Receipt, title: "Bill Book", desc: "Custom printed bill books and receipt pads" },
  { icon: Megaphone, title: "Multicolour Notice", desc: "Vibrant multicolour notices and flyers" },
  { icon: Image, title: "Wall Posters", desc: "Eye-catching wall posters in all sizes" },
];

const whyChoose = [
  { icon: Star, title: "High Quality Printing", desc: "State-of-the-art technology for vibrant, crisp prints" },
  { icon: Truck, title: "Fast Delivery", desc: "Quick turnaround times without compromising quality" },
  { icon: DollarSign, title: "Affordable Pricing", desc: "Competitive rates for all printing services" },
  { icon: Palette, title: "Custom Designs", desc: "Tailored designs to match your brand identity" },
  { icon: HeartHandshake, title: "Professional Service", desc: "Dedicated support from start to finish" },
];

const portfolio = [
  { src: galleryWedding, label: "Wedding Banners" },
  { src: galleryEvent, label: "Event Banners" },
  { src: galleryShopboard, label: "Shop Boards" },
  { src: galleryCards, label: "Business Cards" },
  { src: galleryPosters, label: "Wall Posters" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary" />
        <GoldParticles />
        <div className="container-max relative z-10 px-4 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold logo-animate light-sweep inline-block gold-text">
                S.K
              </h1>
              <p className="font-heading text-xs tracking-[0.3em] text-primary mt-2 uppercase">
                Printing Hub
              </p>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="font-heading text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4"
            >
              Premium Printing Solutions for Every Occasion
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-primary text-sm font-body tracking-wider mb-4"
            >
              Flex Printing | Event Banners | Visiting Cards | Posters | Branding Materials
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-muted-foreground text-base leading-relaxed mb-8 max-w-lg"
            >
              At S.K Printing Hub we deliver high quality printing solutions for businesses,
              schools, events, and personal celebrations. Our advanced printing technology
              ensures vibrant colors, durable materials, and professional results.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/services" className="btn-gold">View Services</Link>
              <Link to="/contact" className="btn-outline-gold">Contact Us</Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="hidden lg:block"
          >
            <div className="rounded-lg overflow-hidden gold-border-glow">
              <img
                src={heroPrinting}
                alt="Professional printing press machines"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-secondary">
        <div className="container-max">
          <SectionTitle
            title="Our Printing Services"
            subtitle="From digital flex to premium business cards, we offer a complete range of printing solutions."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.slice(0, 8).map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 0.05}>
                <div className="bg-card rounded-lg p-6 gold-border-glow card-hover">
                  <s.icon size={28} className="text-primary mb-4" />
                  <h3 className="font-heading text-base font-semibold text-foreground mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal className="text-center mt-10">
            <Link to="/services" className="btn-outline-gold inline-flex items-center gap-2">
              View All Services <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-max">
          <SectionTitle
            title="Why Choose S.K Printing Hub"
            subtitle="We combine quality, speed, and affordability to deliver the best printing experience."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {whyChoose.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.08}>
                <div className="text-center p-6 rounded-lg bg-secondary gold-border-glow card-hover">
                  <div className="w-14 h-14 rounded-full gold-gradient flex items-center justify-center mx-auto mb-4">
                    <item.icon size={24} className="text-primary-foreground" />
                  </div>
                  <h3 className="font-heading text-sm font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="section-padding bg-secondary">
        <div className="container-max">
          <SectionTitle title="Our Recent Works" subtitle="A glimpse of our premium printing projects." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolio.map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 0.08}>
                <div className="gallery-item gold-border-glow">
                  <img src={item.src} alt={item.label} className="w-full h-64 object-cover" />
                </div>
                <p className="text-center text-sm text-muted-foreground mt-3 font-body">{item.label}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding relative overflow-hidden">
        <GoldParticles />
        <div className="container-max relative z-10 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Need Professional Printing Services?
            </h2>
            <p className="text-muted-foreground text-base mb-8 max-w-xl mx-auto">
              Contact S.K Printing Hub today for high quality printing solutions.
            </p>
            <Link to="/contact" className="btn-gold">Contact Us</Link>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
