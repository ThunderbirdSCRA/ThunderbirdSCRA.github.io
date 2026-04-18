import { NavLink, Link } from "react-router-dom";
import { Facebook, Menu, X } from "lucide-react";
import { useState } from "react";
import { SITE } from "@/data/site";
import emblem from "@/assets/thunderbird-logo.jpg";
import { Button } from "@/components/ui/button";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/events", label: "Events" },
  { to: "/sponsorship", label: "Sponsorship" },
  { to: "/board", label: "Board Members" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="container flex h-20 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={emblem}
            alt="Thunderbird Chapter emblem"
            className="h-12 w-12 object-contain transition-transform group-hover:scale-105"
            width={48}
            height={48}
          />
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="font-display text-lg font-bold uppercase tracking-wide text-navy-deep">
              Thunderbird Chapter
            </span>
            <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Signal Corps Regimental Assoc.
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `px-4 py-2 text-sm font-semibold uppercase tracking-wider transition-colors rounded-md ${
                  isActive
                    ? "text-primary"
                    : "text-foreground/80 hover:text-primary"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={SITE.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Facebook page"
            className="hidden sm:inline-flex h-10 w-10 items-center justify-center rounded-full text-navy hover:bg-navy hover:text-primary-foreground transition-colors"
          >
            <Facebook className="h-5 w-5" />
          </a>
          <Button asChild variant="hero" size="sm" className="hidden sm:inline-flex">
            <a href={SITE.joinNowUrl} target="_blank" rel="noopener noreferrer">
              Join Now
            </a>
          </Button>
          <button
            type="button"
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-muted"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container flex flex-col py-3">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-2 py-3 text-sm font-semibold uppercase tracking-wider ${
                    isActive ? "text-primary" : "text-foreground/80"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="flex items-center gap-3 pt-3 pb-2">
              <a
                href={SITE.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-navy text-primary-foreground"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <Button asChild variant="hero" className="flex-1">
                <a href={SITE.joinNowUrl} target="_blank" rel="noopener noreferrer">
                  Join Now
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
