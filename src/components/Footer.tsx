
import { Facebook } from "lucide-react";
import { SITE } from "@/data/site";
import { NavLink } from "@/components/NavLink";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 bg-navy-deep text-primary-foreground">
      <div className="container py-12 grid gap-10 md:grid-cols-3 items-start">
        <div>
          <h3 className="font-display text-xl font-bold uppercase tracking-wide text-secondary">
            Thunderbird Chapter
          </h3>
          <p className="mt-3 text-sm text-primary-foreground/75 leading-relaxed">
            A 501(c)(19) nonprofit veterans organization preserving the heritage
            of the U.S. Army Signal Corps Regiment.
          </p>
          <a
            href={SITE.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Facebook page"
            className="mt-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-secondary hover:text-secondary-foreground transition-colors"
          >
            <Facebook className="h-5 w-5" />
          </a>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-[0.18em] text-secondary">
            Quick Links
          </h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <NavLink to="/" className="hover:text-secondary transition-colors">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/events" className="hover:text-secondary transition-colors">
                Events
              </NavLink>
            </li>
            <li>
              <NavLink to="/sponsorship" className="hover:text-secondary transition-colors">
                Sponsorship
              </NavLink>
            </li>
            <li>
              <NavLink to="/board" className="hover:text-secondary transition-colors">
                Board Members
              </NavLink>
            </li>
            <li>
              <a
                href={SITE.joinNowUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
              >
                Join the Association
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-start md:items-end">
          <a
            href={SITE.candidUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary-foreground/95 rounded-md p-2"
          >
            <img
              src={SITE.candidSealSrc}
              alt="Candid Transparency Seal"
              className="h-28 w-auto"
              loading="lazy"
            />
          </a>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container py-5 space-y-3 text-center">
          <p className="text-[11px] uppercase tracking-[0.15em] text-secondary font-semibold leading-relaxed">
            This is a non-federal entity. It is not a part of the Department of Defense or any of its components and it has no governmental status.
          </p>
          <p className="text-xs text-primary-foreground/60">
            © {year} Thunderbird Chapter, Signal Corps Regimental Association.
            All rights reserved. · EIN 33-1949070 · 501(c)(19) Veterans Organization
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
