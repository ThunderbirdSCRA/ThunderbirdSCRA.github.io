import { ExternalLink, Mail } from "lucide-react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AWARDS, AWARD_FAQS, AWARDS_CONTACT_EMAIL } from "@/data/site";

const Awards = () => {
  return (
    <Layout>
      <PageHeader
        eyebrow="Recognition"
        title="Awards"
        description="The SCRA Awards Program honors members, supporters, and volunteers whose service strengthens the Association and the Signal Regiment."
      />

      <section className="container pt-12 pb-8">
        <div className="mb-6">
          <h2 className="font-display text-2xl md:text-3xl font-bold uppercase text-navy-deep">
            Awards
          </h2>
          <div className="mt-2 h-1 w-16 bg-gradient-gold rounded-full" />
          <p className="mt-3 max-w-2xl text-foreground/80">
            Expand any award to view its purpose and criteria.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {AWARDS.map((award, i) => (
            <AccordionItem key={award.name} value={`award-${i}`}>
              <AccordionTrigger className="text-left">
                <div className="flex flex-col gap-1 pr-4">
                  <span className="font-display uppercase tracking-wide text-navy-deep">
                    {award.name}
                  </span>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                    {award.eligibility}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-foreground/85">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-display text-sm font-bold uppercase tracking-wider text-navy-deep">
                      Purpose
                    </h3>
                    <p className="mt-1.5">{award.purpose}</p>
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-bold uppercase tracking-wider text-navy-deep">
                      Criteria
                    </h3>
                    <ul className="mt-1.5 list-disc space-y-1 pl-5">
                      {award.criteria.map((c, idx) => (
                        <li key={idx}>{c}</li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href={award.learnMoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
                  >
                    Learn more on signalcorps.org{" "}
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="container pb-16">
        <div className="rounded-2xl bg-gradient-hero text-primary-foreground p-10 text-center">
          <h3 className="font-display text-2xl md:text-3xl uppercase font-bold">
            Ready to Submit a Nomination?
          </h3>
          <p className="mt-3 max-w-2xl mx-auto text-primary-foreground/85">
            To submit a nomination, ask about pricing, or get help selecting
            the right award, contact the Chapter VP of Awards.
          </p>
          <div className="mt-6 flex justify-center">
            <Button asChild variant="gold" size="lg">
              <a
                href={`mailto:${AWARDS_CONTACT_EMAIL}?subject=Award%20Nomination%20Inquiry`}
                className="inline-flex items-center justify-center gap-2"
              >
                <Mail className="h-4 w-4" /> Contact the VP of Awards
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="container pb-20">
        <div className="mb-6">
          <h2 className="font-display text-2xl md:text-3xl font-bold uppercase text-navy-deep">
            Frequently Asked Questions
          </h2>
          <div className="mt-2 h-1 w-16 bg-gradient-gold rounded-full" />
          <p className="mt-3 max-w-2xl text-foreground/80">
            Planning awards around a ball, dinner, or other event? Start here.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {AWARD_FAQS.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left font-display uppercase tracking-wide text-navy-deep">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="whitespace-pre-line text-foreground/85">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </Layout>
  );
};

export default Awards;