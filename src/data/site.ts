// Central data file — easy for non-developers to edit.
// Update events, board members, and sponsorship tiers here.

export const SITE = {
  name: "Thunderbird Chapter",
  longName: "Thunderbird Chapter — Signal Corps Regimental Association",
  facebookUrl: "https://www.facebook.com/people/Thunderbird-Chapter-Oklahoma-SCRA/61573525888171/#",
  joinNowUrl: "https://signalcorps.org/memberships",
  bylawsUrl: encodeURI(
    "https://thunderbirdscra.org/Thunderbird Chapter Bylaws - Signed.pdf"
  ), //Will need to update as bylaws update. 
  candidUrl:
    "https://app.candid.org/profile/16412925/thunderbird-signal-corps-regimental-association-33-1949070", // Shouldn't need updating
  candidSealSrc:
    "https://widgets.guidestar.org/prod/v1/pdp/transparency-seal/16412925/svg", //Shouldn't need updating
};

// ---------------- EVENTS ----------------
// To add an event, copy a block and edit. Date format: "YYYY-MM-DD"
// Title, Date, Location, and Description are required fields. End Date and RSVP URL are optional.
export type ChapterEvent = {
  title: string;
  date: string; // ISO date
  endDate?: string;
  location: string;
  description: string;
  rsvpUrl?: string;
};

export const EVENTS: ChapterEvent[] = [
  {
    title: "Chapter General Membership Meeting",
    date: "2026-05-30",
    location: "Anthem Brewing - Oklahoma City, OK",
    description:
      "Quarterly business meeting open to all chapter members.",
  },
  {
    title: "Chapter General Membership Meeting",
    date: "2025-10-03",
    location: "Anthem Brewing - Oklahoma City, OK",
    description:
      "Quarterly business meeting open to all chapter members.",
  },
  {
    title: "Lawton Organge Call",
    date: "2026-02-20",
    location: "Rising Eagle Brewery - Elgin, OK",
    description:
      "",
  },
];

// ---------------- BOARD MEMBERS ----------------
// Update names, titles, and emails here.
export type BoardMember = {
  name: string;
  title: string;
  email: string;
  bio?: string;
  /**
   * Optional photo URL for the board member.
   * To add a picture: drop an image into `src/assets/board` (e.g. `president.jpg`),
   * import it below `import presidentPhoto from "@/assets/board/president.jpg";` , and set `photo: presidentPhoto` under the appropriate section.
   * Or use a hosted URL like "https://example.com/photo.jpg".
   */
  photo?: string;
};

import weeksPhoto from "@/assets/board/weeks.jpeg";
import bdixonPhoto from "@/assets/board/bdixon.jpeg";
import jdixonPhoto from "@/assets/board/jdixon.jpeg";
import aguilarPhoto from "@/assets/board/aguilar.jpeg";
import richardsPhoto from "@/assets/board/richards.jpeg";

export const BOARD: BoardMember[] = [
  {
    name: "Alex Weeks",
    title: "Chapter President",
    email: "president@thunderbirdscra.org",
    bio: "Leads the chapter and represents members to the national association.",
    photo: weeksPhoto,
  },
  {
    name: "Brandon Dixon",
    title: "Chapter Vice President",
    email: "vp@thunderbirdscra.org",
    bio: "Supports the President and oversees chapter committees.",
    photo: bdixonPhoto,
  },
  {
    name: "Jenny Dixon",
    title: "Chapter Secretary & Treasurer",
    email: "secretary@thunderbirdscra.org",
    bio: "Maintains records, oversees finances, dues, and 501(c)(19) compliance.",
    photo: jdixonPhoto,
  },
  {
    name: "Raquel Aguilar",
    title: "VP of Memberships",
    email: "vpmembership@thunderbirdscra.org",
    bio: "Welcomes new members and coordinates recruitment.",
    photo: aguilarPhoto,
  },
  {
    name: "Chaz Richards",
    title: "VP of Awards",
    email: "vpawards@thunderbirdscra.org",
    bio: "Oversees chapter awards and recognition.",
    photo: richardsPhoto,
  },
];

// ---------------- SPONSORSHIP TIERS ----------------
export type SponsorshipTier = {
  name: string;
  amount: string;
  perks: string[];
  highlight?: boolean;
};

export const SPONSORSHIP_TIERS: SponsorshipTier[] = [
  {
    name: "Bronze Signaleer",
    amount: "$500",
    perks: [
      "Recognition on chapter website",
      "Sponsor certificate",
      "Mention at one chapter event",
    ],
  },
  {
    name: "Silver Wig-Wag",
    amount: "$1,000",
    perks: [
      "All Bronze benefits",
      "Logo on event programs",
      "Recognition at the Annual Ball",
    ],
    highlight: false,
  },
  {
    name: "Gold Thunderbird",
    amount: "$1,500+",
    perks: [
      "All Silver benefits",
      "Premier logo placement at all events",
      "Reserved table at the Annual Regimental Ball",
      "Dedicated sponsor spotlight on chapter website",
    ],
  },
];

export const SPONSOR_CONTACT_EMAIL = "sponsorship@thunderbirdscra.org";
