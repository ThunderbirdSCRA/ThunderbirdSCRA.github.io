import { Mail } from "lucide-react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { BOARD } from "@/data/site";

const Board = () => {
  return (
    <Layout>
      <PageHeader
        eyebrow="Leadership"
        title="Board of Directors"
        description="The volunteers who guide the Thunderbird Chapter. Click any envelope icon to send a board member an email."
      />

      <section className="container py-16">
       
        <div className="grid gap-6 sm:grid-cols-2 lg:flex lg:flex-wrap lg:justify-center">
          {BOARD.map((m) => (
            <article
              key={m.title}
              className="
                group rounded-xl border border-border bg-card p-6 shadow-card
                hover:shadow-elegant transition-all hover:-translate-y-1
                flex flex-col
                lg:w-[340px]
              "
            >
              
              {m.photo ? (
                <img
                  src={m.photo}
                  alt={`Portrait of ${m.name}`}
                  className="h-24 w-24 rounded-full object-cover border-2 border-secondary shadow-card"
                  loading="lazy"
                />
              ) : (
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-muted border-2 border-dashed border-border text-muted-foreground text-xs text-center px-2">
                  Add photo
                </div>
              )}

              <h3 className="mt-5 font-display text-xl font-bold uppercase text-navy-deep">
                {m.name}
              </h3>

              <p className="text-sm font-semibold text-primary uppercase tracking-wider">
                {m.title}
              </p>

              
              {m.bio && (
                <p
                  className="
                    mt-3 text-sm text-muted-foreground leading-relaxed
                    overflow-hidden text-ellipsis
                    [display:-webkit-box]
                    [-webkit-line-clamp:4]
                    [-webkit-box-orient:vertical]
                  "
                >
                  {m.bio}
                </p>
              )}

              <a
                href={`mailto:${m.email}`}
                aria-label={`Email ${m.name}`}
                className="mt-auto pt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-gold text-secondary-foreground group-hover:scale-110 transition-transform">
                  <Mail className="h-5 w-5" />
                </span>
                {m.email}
              </a>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Board;
