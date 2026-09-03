import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Radio } from "lucide-react";
import Layout from "@/components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <div className="flex flex-1 items-center justify-center bg-gradient-to-b from-background to-muted px-4 py-20">
        <div className="max-w-lg text-center">
          <div className="mb-6 inline-flex items-center justify-center rounded-full bg-navy/10 p-5">
            <Radio className="h-12 w-12 text-navy" strokeWidth={1.5} />
          </div>
          <p className="text-fluid-xl font-display font-semibold uppercase tracking-widest text-muted-foreground">
            404 – Lost Comms
          </p>
          <h1 className="mt-3 text-5xl font-bold tracking-tight text-navy md:text-6xl">
            Page Not Found
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            We checked every frequency, but this route isn't coming in loud and clear.
          </p>
          <div className="mt-8">
            <a
              href="/"
              className="inline-flex items-center justify-center rounded-md bg-regimental-red px-6 py-3 text-base font-semibold text-primary-foreground shadow-card transition-all hover:bg-regimental-red/90 hover:shadow-elegant focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              Return to Home Base
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
