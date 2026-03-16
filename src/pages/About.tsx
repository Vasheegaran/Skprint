import { motion } from "framer-motion";
import { Target, Eye, Cog, Award } from "lucide-react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import SectionTitle from "@/components/SectionTitle";
import GoldParticles from "@/components/GoldParticles";

const sections = [
  {
    icon: Target,
    title: "Our Mission",
    text: "To provide affordable, high-quality printing solutions that help businesses and individuals communicate their brand message effectively through vibrant, durable print materials.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    text: "To become the most trusted printing partner in Tamil Nadu, recognized for innovation, quality, and exceptional customer service in every print we deliver.",
  },
  {
    icon: Cog,
    title: "Printing Process",
    text: "We use state-of-the-art digital and offset printing technology. From design consultation to final delivery, every step follows strict quality standards to ensure your prints meet the highest benchmarks.",
  },
  {
    icon: Award,
    title: "Our Experience",
    text: "With years of experience serving businesses, schools, colleges, and event organizers, S.K Printing Hub has built a reputation for reliability, creativity, and consistency.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative section-padding overflow-hidden">
        <GoldParticles />
        <div className="container-max relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              About <span className="gold-text">S.K Printing Hub</span>
            </h1>
            <div className="gold-separator max-w-[80px] mx-auto mb-8" />
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
              S.K Printing Hub is a trusted printing press dedicated to delivering high-quality
              printing solutions for businesses, schools, and events. We focus on vibrant prints,
              durable materials, and timely delivery to ensure complete customer satisfaction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission / Vision / Process / Experience */}
      <section className="section-padding bg-secondary">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sections.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 0.1}>
                <div className="bg-card rounded-lg p-8 gold-border-glow card-hover h-full">
                  <div className="w-14 h-14 rounded-full gold-gradient flex items-center justify-center mb-6">
                    <s.icon size={24} className="text-primary-foreground" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-4">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding">
        <div className="container-max">
          <SectionTitle title="Our Track Record" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { num: "500+", label: "Happy Clients" },
              { num: "5000+", label: "Projects Completed" },
              { num: "11+", label: "Services Offered" },
              { num: "24/7", label: "Customer Support" },
            ].map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.1}>
                <div className="text-center p-6 rounded-lg bg-secondary gold-border-glow">
                  <p className="font-heading text-3xl md:text-4xl font-bold gold-text mb-2">
                    {stat.num}
                  </p>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
