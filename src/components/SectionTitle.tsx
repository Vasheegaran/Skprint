import ScrollReveal from "./ScrollReveal";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionTitle = ({ title, subtitle, centered = true }: SectionTitleProps) => (
  <ScrollReveal className={centered ? "text-center" : ""}>
    <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
      {title}
    </h2>
    {subtitle && (
      <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
        {subtitle}
      </p>
    )}
    <div className="gold-separator max-w-[80px] mx-auto mt-6 mb-12" />
  </ScrollReveal>
);

export default SectionTitle;
