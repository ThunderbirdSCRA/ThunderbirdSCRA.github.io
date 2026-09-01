import { Calendar, MapPin, ExternalLink } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { EVENTS } from "@/data/site";
import PageHeader from "@/components/PageHeader";

const formatDate = (iso: string) => {
  const d = new Date(iso + "T12:00:00");
  return d.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const Events = () => {
  const today = new Date().toISOString().slice(0, 10);
  const upcoming = EVENTS.filter((e) => e.date >= today).sort((a, b) =>
    a.date.localeCompare(b.date)
  );
  const past = EVENTS.filter((e) => e.date < today).sort((a, b) =>
    b.date.localeCompare(a.date)
  );

  return (
    <Layout>
      <PageHeader
        eyebrow="Stay Connected"
        title="Chapter Events"
        description="Ceremonies, meetings, and gatherings of the Thunderbird Chapter. Mark your calendar and join us."
      />

      <section className="container py-16">
        <h2 className="font-display text-2xl uppercase font-bold text-navy-deep">
          Upcoming Events
        </h2>
        <div className="mt-6 grid gap-5">
          {upcoming.length === 0 && (
            <p className="text-muted-foreground italic">
              No upcoming events scheduled. Check back soon.
            </p>
          )}
          {upcoming.map((e) => (
            <article
              key={e.title + e.date}
              className="grid md:grid-cols-[180px_1fr_auto] gap-6 items-center rounded-xl border border-border bg-card p-6 shadow-card hover:shadow-elegant transition-shadow"
            >
              <div className="flex flex-col items-center justify-center rounded-lg bg-gradient-hero text-primary-foreground py-4 px-3">
                <span className="text-xs uppercase tracking-widest text-secondary">
                  {new Date(e.date + "T12:00:00").toLocaleString("en-US", { month: "short" })}
                </span>
                <span className="font-display text-4xl font-bold leading-none">
                  {new Date(e.date + "T12:00:00").getDate()}
                </span>
                <span className="text-xs text-primary-foreground/80 mt-1">
                  {new Date(e.date + "T12:00:00").getFullYear()}
                </span>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold uppercase text-navy-deep">
                  {e.title}
                </h3>
                <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="h-4 w-4 text-primary" /> {formatDate(e.date)}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-4 w-4 text-primary" /> {e.location}
                  </span>
                </div>
                <p className="mt-3 text-sm text-foreground/80 leading-relaxed">
                  {e.description}
                </p>
              </div>
              {e.rsvpUrl && (
                <Button asChild variant="hero">
                  <a href={e.rsvpUrl} target="_blank" rel="noopener noreferrer">
                    RSVP <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              )}
            </article>
          ))}
        </div>

        {past.length > 0 && (
          <>
            <h2 className="mt-16 font-display text-2xl uppercase font-bold text-navy-deep">
              Past Events
            </h2>
            <div className="mt-6 grid gap-3">
              {past.map((e) => (
                <div
                  key={e.title + e.date}
                  className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-border bg-muted/40 px-5 py-4"
                >
                  <div>
                    <h3 className="font-semibold text-navy-deep">{e.title}</h3>
                    <p className="text-xs text-muted-foreground">
                      {formatDate(e.date)} · {e.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </section>
    </Layout>
  );
};

export default Events;
