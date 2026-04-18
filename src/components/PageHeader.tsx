type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
};

const PageHeader = ({ eyebrow, title, description }: Props) => {
  return (
    <section className="bg-gradient-hero text-primary-foreground">
      <div className="container py-16 md:py-20 text-center">
        {eyebrow && (
          <span className="inline-block px-3 py-1 rounded-full bg-secondary/20 text-secondary text-xs font-semibold uppercase tracking-[0.2em] border border-secondary/40">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-4 font-display text-4xl md:text-5xl font-bold uppercase">
          {title}
        </h1>
        <div className="mt-3 h-1 w-20 bg-gradient-gold mx-auto rounded-full" />
        {description && (
          <p className="mt-5 max-w-2xl mx-auto text-primary-foreground/85">
            {description}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHeader;
