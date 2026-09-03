import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  CalendarPlus,
  Clock,
  MapPin,
  Navigation,
  ExternalLink,
  Ticket,
  Users,
  Info,
  DollarSign,
} from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { EVENTS } from "@/data/site";
import {
  eventSlug,
  formatEventDate,
  formatEventTime,
  directionsUrl,
  downloadIcs,
} from "@/lib/events";

const EventDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const event = EVENTS.find((e) => eventSlug(e) === slug);

  if (!event) {
    return (
      <Layout>
        <section className="container py-24 text-center">
          <h1 className="font-display text-3xl font-bold uppercase text-navy-deep">
            Event Not Found
          </h1>
          <p className="mt-4 text-muted-foreground">
            We couldn't find that event. It may have been moved or removed.
          </p>
          <Button asChild variant="hero" className="mt-8">
            <Link to="/events">
              <ArrowLeft className="h-4 w-4" /> Back to Events
            </Link>
          </Button>
        </section>
      </Layout>
    );
  }

  const dateLabel =
    event.endDate && event.endDate !== event.date
      ? `${formatEventDate(event.date)} – ${formatEventDate(event.endDate)}`
      : formatEventDate(event.date);

  const timeLabel = event.startTime
    ? `${formatEventTime(event.startTime)}${event.endTime ? ` – ${formatEventTime(event.endTime)}` : ""}`
    : undefined;

  return (
    <Layout>
      {/* Header */}
      <section className="bg-gradient-hero text-primary-foreground">
        <div className="container py-16">
          <Button asChild variant="ghost" size="sm" className="text-primary-foreground/80 hover:text-secondary hover:bg-transparent -ml-3">
            <Link to="/events">
              <ArrowLeft className="h-4 w-4" /> All Events
            </Link>
          </Button>
          <h1 className="mt-4 font-display text-fluid-xl font-bold uppercase leading-tight max-w-3xl">
            {event.title}
          </h1>
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-primary-foreground/85">
            <span className="inline-flex items-center gap-2">
              <Calendar className="h-4 w-4 text-secondary" /> {dateLabel}
            </span>
            {timeLabel && (
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4 text-secondary" /> {timeLabel}
              </span>
            )}
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-secondary" /> {event.location}
            </span>
          </div>
        </div>
      </section>

      <section className="container py-14 grid gap-10 lg:grid-cols-[1.6fr_1fr] items-start">
        {/* Main content */}
        <div className="space-y-8">
          {event.image && (
            <img
              src={event.image}
              alt={event.imageAlt ?? event.title}
              className="w-full rounded-xl shadow-elegant"
              loading="lazy"
            />
          )}
          {event.description && (
            <div>
              <h2 className="font-display text-fluid-lg font-bold uppercase text-navy-deep">
                About This Event
              </h2>
              <div className="mt-3 h-1 w-16 bg-gradient-gold rounded-full" />
              <p className="mt-5 text-foreground/85 leading-relaxed whitespace-pre-line">
                {event.description}
              </p>
            </div>
          )}
          {event.additionalInfo && (
            <div className="rounded-xl border border-border bg-muted/40 p-6">
              <h2 className="inline-flex items-center gap-2 font-display text-base font-bold uppercase text-navy-deep">
                <Info className="h-5 w-5 text-primary" /> Additional Information
              </h2>
              <p className="mt-3 text-sm text-foreground/85 leading-relaxed whitespace-pre-line">
                {event.additionalInfo}
              </p>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <aside className="space-y-4 rounded-xl border border-border bg-card p-6 shadow-card lg:sticky lg:top-24">
          {event.address && (
            <div>
              <h3 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                Address
              </h3>
              <p className="mt-1 text-sm text-foreground/85">{event.address}</p>
            </div>
          )}
          {event.cost && (
            <div>
              <h3 className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                <DollarSign className="h-3.5 w-3.5" /> Cost
              </h3>
              <p className="mt-1 text-sm text-foreground/85">{event.cost}</p>
            </div>
          )}
          {event.audience && (
            <div>
              <h3 className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                <Users className="h-3.5 w-3.5" /> Who Should Attend
              </h3>
              <p className="mt-1 text-sm text-foreground/85">{event.audience}</p>
            </div>
          )}

          <div className="pt-2 flex flex-col gap-2.5">
            {event.rsvpUrl && (
              <Button asChild variant="gold">
                <a href={event.rsvpUrl} target="_blank" rel="noopener noreferrer">
                  <Ticket className="h-4 w-4" /> RSVP / Register
                </a>
              </Button>
            )}
            <Button variant="hero" onClick={() => downloadIcs(event)}>
              <CalendarPlus className="h-4 w-4" /> Add to Calendar
            </Button>
            <Button asChild variant="outline">
              <a href={directionsUrl(event)} target="_blank" rel="noopener noreferrer">
                <Navigation className="h-4 w-4" /> Get Directions
              </a>
            </Button>
            {event.websiteUrl && (
              <Button asChild variant="outline">
                <a href={event.websiteUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" /> Event Website
                </a>
              </Button>
            )}
          </div>
        </aside>
      </section>
    </Layout>
  );
};

export default EventDetail;
