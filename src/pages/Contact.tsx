import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import GoldParticles from "@/components/GoldParticles";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "karuppusamy1912003@gmail.com",
    href: "mailto:karuppusamy1912003@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 63699 01863",
    href: "tel:+916369901863",
  },
  {
    icon: MapPin,
    title: "Address",
    value: "S.K Printing Hub, Tamil Nadu, India",
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: "Mon - Sat: 9:00 AM - 8:00 PM",
  },
];

const Contact = () => {
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
              Contact <span className="gold-text">S.K Printing Hub</span>
            </h1>
            <div className="gold-separator max-w-[80px] mx-auto mb-6" />
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              Reach out to us for professional printing services. We'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {contactInfo.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="bg-card rounded-lg p-8 gold-border-glow card-hover text-center h-full">
                  <div className="w-16 h-16 rounded-full gold-gradient flex items-center justify-center mx-auto mb-6">
                    <item.icon size={28} className="text-primary-foreground" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-3">
                    {item.title}
                  </h3>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-muted-foreground text-sm hover:text-primary transition-colors break-all"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-muted-foreground text-sm">{item.value}</p>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Map */}
          <ScrollReveal>
            <div className="rounded-lg overflow-hidden gold-border-glow">
              <iframe
                title="S.K Printing Hub Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.0!2d78.0!3d10.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDAw!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
