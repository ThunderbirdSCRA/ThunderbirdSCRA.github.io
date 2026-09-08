import { Heart, Home } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";

const DonationComplete = () => {
  return (
    <Layout>
      <PageHeader
        eyebrow="Thank You"
        title="Donation Received"
        description="Your generosity keeps the Signal strong. We are deeply grateful for your support of the Thunderbird Chapter."
      />

      <section className="container py-16 md:py-20">
        <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-card p-8 text-center shadow-card md:p-12">
          <div className="mx-auto mb-6 inline-flex items-center justify-center rounded-full bg-secondary/10 p-5">
            <Heart className="h-12 w-12 text-secondary" strokeWidth={1.5} />
          </div>

          <h2 className="font-display text-2xl font-bold text-navy-deep md:text-3xl">
            Message Received Loud and Clear
          </h2>

          <p className="mt-4 text-foreground/85">
            Your contribution helps us recognize Signaleers, fund scholarships,
            host community events, and preserve the proud traditions of the
            Signal Corps.
          </p>

          <p className="mt-4 text-sm text-muted-foreground">
            The Thunderbird Chapter is a 501(c)(19) veterans organization. EIN
            33-1949070. Tax deductible where allowable by law.
          </p>

          <div className="mt-8">
            <Button asChild variant="gold" size="lg">
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2"
              >
                <Home className="h-4 w-4" /> Return to Home Base
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DonationComplete;
