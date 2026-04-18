import { Check, Mail } from "lucide-react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { SPONSORSHIP_TIERS, SPONSOR_CONTACT_EMAIL } from "@/data/site";

const Sponsorship = () => {
  return (
    <Layout>
      <PageHeader
        eyebrow="Partner With Us"
        title="Sponsorship Opportunities"
        description="Your support directly funds NCO recognition, recruitment efforts, scholarships, and chapter events that strengthen the Signal Corps community."
      />

      <section className="container py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {SPONSORSHIP_TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl border-2 p-8 transition-all hover:-translate-y-1 flex flex-col h-full ${
                tier.highlight
                  ? "border-secondary bg-card shadow-gold"
                  : "border-border bg-card shadow-card hover:shadow-elegant"
              }`}
            >
              {tier.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-gold px-4 py-1 text-xs font-bold uppercase tracking-widest text-secondary-foreground">
                  Most Popular
                </span>
              )}

              <h3 className="font-display text-xl font-bold uppercase text-navy-deep">
                {tier.name}
              </h3>

              <div className="mt-3 flex items-baseline gap-1">
                <span className="font-display text-4xl font-bold text-primary">
                  {tier.amount}
                </span>
              </div>

              <ul className="mt-6 space-y-3 flex-1">
                {tier.perks.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm">
                    <Check className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-foreground/85">{p}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-6">
                <Button
                  asChild
                  variant={tier.highlight ? "gold" : "hero"}
                  className="w-full"
                >
                  <a
                    href={`mailto:${SPONSOR_CONTACT_EMAIL}?subject=Sponsorship%20Inquiry%20-%20${encodeURIComponent(
                      tier.name
                    )}`}
                    className="inline-flex items-center justify-center gap-2"
                  >
                    <Mail className="h-4 w-4" /> Become a Sponsor
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl bg-gradient-hero text-primary-foreground p-10 text-center">
          <h3 className="font-display text-2xl md:text-3xl uppercase font-bold">
            Custom Sponsorship Packages Available
          </h3>
          <p className="mt-3 max-w-2xl mx-auto text-primary-foreground/85">
            Looking for something tailored to your organization? We welcome
            in-kind donations, event sponsorships, and corporate partnerships.
          </p>

          
          <div className="mt-6 flex flex-col items-center">
            <Button
              asChild
              variant="gold"
              size="lg"
              className="w-full sm:w-auto"
            >
              <a
                href={`mailto:${SPONSOR_CONTACT_EMAIL}?subject=Custom%20Sponsorship%20Inquiry`}
                
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2"
              >
                <Mail className="h-4 w-4" /> Contact Our Sponsorship Team
              </a>
            </Button>

            <p className="mt-4 max-w-2xl text-center text-xs text-primary-foreground/70">
              The Thunderbird Chapter is a 501(c)(19) veterans organization. EIN
              33-1949070.
            </p>
          </div>
          
        </div>
      </section>
    </Layout>
  );
};

export default Sponsorship;
