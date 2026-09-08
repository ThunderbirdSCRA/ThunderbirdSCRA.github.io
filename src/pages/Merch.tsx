import { ArrowRight, Shirt, Truck } from "lucide-react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { MERCH } from "@/data/merch";

const Merch = () => {
  return (
    <Layout>
      <PageHeader
        eyebrow="Chapter Merch"
        title={MERCH.name}
        description="Limited shirts from our bulk order, available for members near and far."
      />

      <section className="container py-12 md:py-16">
        <div className="mx-auto max-w-4xl rounded-2xl border border-border bg-card p-6 md:p-10 shadow-card">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div className="overflow-hidden rounded-xl border border-border bg-muted">
              <img
                src={MERCH.photo}
                alt={`${MERCH.name} product photo`}
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>

            <div className="flex flex-col">
              <div className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.15em] text-secondary">
                <Shirt className="h-4 w-4" />
                Limited Availability
              </div>

              <h2 className="mt-3 font-display text-3xl font-bold uppercase text-navy-deep md:text-4xl">
                {MERCH.name}
              </h2>

              <p className="mt-1 font-display text-2xl font-bold text-primary">
                {MERCH.price}
              </p>

              <p className="mt-4 text-muted-foreground leading-relaxed">
                {MERCH.description}
              </p>

              <div className="mt-6 inline-flex items-start gap-3 rounded-lg bg-secondary/10 p-4 text-sm text-foreground/80">
                <Truck className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                <p>
                  After checkout, please reach out to coordinate local pickup
                  when possible. This helps us avoid shipping fees and puts more
                  of your purchase toward supporting the chapter.
                </p>
              </div>

              <Button
                asChild
                variant="gold"
                size="lg"
                className="mt-8 w-full md:w-auto"
              >
                <a
                  href={MERCH.checkoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2"
                >
                  Buy Now with PayPal <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Merch;
