import { Link } from "react-router-dom";
import { ArrowRight, Shield, Users, Heart, Award } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { SITE } from "@/data/site";
import emblem from "@/assets/thunderbird-logo.jpg";
import hero from "@/assets/hero-signal.jpg";

const Home = () => {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${hero})` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-70" aria-hidden />
        <div className="relative container py-24 md:py-32 grid md:grid-cols-[1.3fr_1fr] gap-12 items-center">
          <div className="text-primary-foreground animate-fade-in">
            <span className="inline-block px-3 py-1 rounded-full bg-secondary/20 text-secondary text-xs font-semibold uppercase tracking-[0.2em] border border-secondary/40">
              Pro Patria Vigilans · Watchful for the Country
            </span>
            <h1 className="mt-6 font-display text-4xl md:text-6xl font-bold uppercase leading-[1.05]">
              Thunderbird Chapter
              <span className="block text-secondary mt-2">Signal Corps Regimental Association</span>
            </h1>
            <p className="mt-6 max-w-xl text-base md:text-lg text-primary-foreground/85 leading-relaxed">
              A 501(c)(19) nonprofit honoring the past, supporting the present,
              and inspiring the future of every Signaleer — active, reserve,
              guard, retired, and civilian.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="gold" size="lg">
                <a href={SITE.joinNowUrl} target="_blank" rel="noopener noreferrer">
                  Join Now <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-secondary bg-transparent text-secondary hover:bg-secondary hover:text-secondary-foreground">
                <Link to="/events">Upcoming Events</Link>
              </Button>
            </div>
          </div>
          <div className="hidden md:flex justify-center">
            <img
              src={emblem}
              alt="Thunderbird Chapter regimental emblem"
              className="w-[360px] drop-shadow-2xl"
              width={360}
              height={360}
            />
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="container py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold uppercase text-navy-deep">
            Our Mission
          </h2>
          <div className="mt-3 h-1 w-20 bg-gradient-gold mx-auto rounded-full" />
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            The Thunderbird Chapter of the Signal Corps Regimental Association
            is a private, nonprofit organization that provides an opportunity
            for all active, reserve, and national guard, officers, warrant
            officers, enlisted members and civilians, as well as any former
            members of the Signal Corps to aid in preserving for posterity the
            proud heritage of the U.S. Army Signal Corps Regiment, and Signal
            units throughout the world.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Shield,
              title: "Preserve Heritage",
              text: "Safeguarding the lessons of history and the proud traditions of the Signal Regiment.",
            },
            {
              icon: Users,
              title: "Build Community",
              text: "Connecting Signaleers across generations through fellowship and chapter events.",
            },
            {
              icon: Heart,
              title: "Support the Regiment",
              text: "Direct financial support for recruitment, NCO recognition, and Regiment events.",
            },
          ].map((c) => (
            <div
              key={c.title}
              className="group rounded-xl border border-border bg-card p-7 shadow-card hover:shadow-elegant transition-all hover:-translate-y-1"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-gold text-secondary-foreground">
                <c.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold uppercase text-navy-deep">
                {c.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {c.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA STRIPE */}
      <section className="bg-gradient-banner text-primary-foreground">
        <div className="container py-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Award className="h-10 w-10 text-secondary" />
            <div>
              <h3 className="font-display text-2xl uppercase font-bold">
                Become a Member Today
              </h3>
              <p className="text-primary-foreground/80 text-sm">
                Membership is open to all Signaleers and supporters.
              </p>
            </div>
          </div>
          <Button asChild variant="gold" size="lg">
            <a href={SITE.joinNowUrl} target="_blank" rel="noopener noreferrer">
              Join the SCRA <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
