import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <span className="font-heading text-3xl font-bold gold-text">S.K</span>
            <p className="font-heading text-sm font-semibold text-foreground mt-1">
              Printing Hub
            </p>
            <p className="text-muted-foreground text-sm mt-4 leading-relaxed">
              Premium printing solutions for businesses, schools, events, and
              personal celebrations. Quality you can trust.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-primary tracking-wider uppercase mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Gallery", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-primary tracking-wider uppercase mb-6">
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Mail size={16} className="text-primary flex-shrink-0" />
                <a href="mailto:karuppusamy1912003@gmail.com" className="hover:text-primary transition-colors">
                  karuppusamy1912003@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Phone size={16} className="text-primary flex-shrink-0" />
                <a href="tel:+916369901863" className="hover:text-primary transition-colors">
                  +91 63699 01863
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground text-sm">
                <MapPin size={16} className="text-primary flex-shrink-0 mt-0.5" />
                <span>S.K Printing Hub, Tamil Nadu, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="gold-separator mt-12 mb-8" />

        <div className="text-center">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} S.K Printing Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
