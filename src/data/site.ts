// Central data file — easy for non-developers to edit.
// Update events, board members, and sponsorship tiers here.

export const SITE = {
  name: "Thunderbird Chapter",
  longName: "Thunderbird Chapter — Signal Corps Regimental Association",
  facebookUrl: "https://www.facebook.com/", // TODO: replace with actual chapter Facebook URL
  joinNowUrl: "https://signalcorps.org/memberships",
  bylawsUrl:
    "https://thunderbirdscra.org/Thunderbird%20Chapter%20Bylaws%20-%20Signed.pdf",
  candidUrl:
    "https://app.candid.org/profile/16412925/thunderbird-signal-corps-regimental-association-33-1949070",
  candidSealSrc:
    "https://widgets.guidestar.org/prod/v1/pdp/transparency-seal/16412925/svg",
};

// ---------------- EVENTS ----------------
// To add an event, copy a block and edit. Date format: "YYYY-MM-DD"
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
    location: "Virtual / Microsoft Teams",
    description:
      "Quarterly business meeting open to all chapter members.",
  },
  {
    title: "Lawton Organge Call",
    date: "2026-02-20",
    location: "Elgin, OK",
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
   * To add a picture: drop an image into `src/assets/` (e.g. `jane-doe.jpg`),
   * import it at the top of this file, and set `photo: janeDoePhoto`.
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
    name: "President",
    title: "Chapter President",
    email: "president@thunderbirdscra.org",
    bio: "Leads the chapter and represents members to the national association.",
    photo: weeksPhoto,
  },
  {
    name: "Vice President",
    title: "Chapter Vice President",
    email: "vp@thunderbirdscra.org",
    bio: "Supports the President and oversees chapter committees.",
    photo: bdixonPhoto,
  },
  {
    name: "Secretary",
    title: "Chapter Secretary",
    email: "secretary@thunderbirdscra.org",
    bio: "Maintains records, meeting minutes, and chapter correspondence.",
    photo: jdixonPhoto,
  },
  {
    name: "Treasurer",
    title: "Chapter Treasurer",
    email: "treasurer@thunderbirdscra.org",
    bio: "Oversees finances, dues, and 501(c)(19) compliance.",
    photo: jdixonPhoto,
  },
  {
    name: "VP of Memberships",
    title: "VP of Memberships",
    email: "vpmembership@thunderbirdscra.org",
    bio: "Welcomes new members and coordinates recruitment.",
    photo: aguilarPhoto,
  },
  {
    name: "VP of Awards",
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
