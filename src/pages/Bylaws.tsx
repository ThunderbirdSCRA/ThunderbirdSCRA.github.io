import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { ChevronLeft, ChevronRight, Download, ExternalLink, Loader2 } from "lucide-react";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { SITE } from "@/data/site";

// Use the bundled worker from pdfjs-dist via Vite's ?url import so it works on all devices/browsers
import pdfWorkerUrl from "pdfjs-dist/build/pdf.worker.min.mjs?url";
pdfjs.GlobalWorkerOptions.workerSrc = pdfWorkerUrl;

const Bylaws = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [width, setWidth] = useState<number>(800);

  useEffect(() => {
    const update = () => {
      if (containerRef.current) {
        setWidth(Math.min(containerRef.current.clientWidth - 24, 1000));
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <Layout>
      <PageHeader
        eyebrow="Chapter Governance"
        title="Bylaws"
        description="Read the Thunderbird Chapter bylaws directly in your browser. Use the download or open-in-new-tab options if you prefer."
      />

      <section className="container py-12">
        <div
          ref={containerRef}
          className="rounded-2xl border border-border bg-card shadow-card overflow-hidden flex flex-col items-center p-3"
        >
          <Document
            file={SITE.bylawsUrl}
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
            loading={
              <div className="flex items-center gap-2 py-24 text-muted-foreground">
                <Loader2 className="h-4 w-4 animate-spin" /> Loading bylaws…
              </div>
            }
            error={
              <div className="py-24 text-center text-sm text-muted-foreground">
                Unable to display the PDF here. Please use the download or open-in-new-tab buttons below.
              </div>
            }
          >
            <Page
              pageNumber={pageNumber}
              width={width}
              renderAnnotationLayer={false}
              renderTextLayer={false}
            />
          </Document>

          {numPages > 0 && (
            <div className="mt-4 flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setPageNumber((p) => Math.max(1, p - 1))}
                disabled={pageNumber <= 1}
              >
                <ChevronLeft className="h-4 w-4" /> Prev
              </Button>
              <span className="text-sm text-muted-foreground tabular-nums">
                Page {pageNumber} of {numPages}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setPageNumber((p) => Math.min(numPages, p + 1))}
                disabled={pageNumber >= numPages}
              >
                Next <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button asChild variant="hero">
            <a href={SITE.bylawsUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4" /> Open in new tab
            </a>
          </Button>
          <Button asChild variant="gold">
            <a href={SITE.bylawsUrl} download>
              <Download className="h-4 w-4" /> Download PDF
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Bylaws;