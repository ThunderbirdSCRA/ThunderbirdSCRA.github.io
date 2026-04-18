// Central data file — easy for non-developers to edit.
// Update events, board members, and sponsorship tiers here.

export const SITE = {
  name: "Thunderbird Chapter",
  longName: "Thunderbird Chapter — Signal Corps Regimental Association",
  facebookUrl: "https://www.facebook.com/", // TODO: replace with actual chapter Facebook URL
  joinNowUrl: "https://signalcorps.org/memberships",
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
    title: "Annual Signal Corps Regimental Ball",
    date: "2025-06-14",
    location: "Oklahoma City, OK",
    description:
      "Join fellow Signaleers for an evening honoring our Regiment's heritage, leadership, and esprit de corps.",
  },
  {
    title: "Chapter General Membership Meeting",
    date: "2025-05-08",
    location: "Virtual / Microsoft Teams",
    description:
      "Quarterly business meeting open to all chapter members. Agenda distributed one week prior.",
  },
  {
    title: "NCOES Recognition Ceremony",
    date: "2025-08-22",
    location: "Fort Sill, OK",
    description:
      "Recognizing outstanding NCO leaders graduating from professional military education.",
  },
  {
    title: "Chapter Volunteer Day",
    date: "2025-11-11",
    location: "Oklahoma Veterans Center",
    description:
      "Veterans Day service project supporting local veterans alongside our chapter members and families.",
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

export const BOARD: BoardMember[] = [
  {
    name: "President",
    title: "Chapter President",
    email: "president@thunderbirdscra.org",
    bio: "Leads the chapter and represents members to the national association.",
  },
  {
    name: "Vice President",
    title: "Chapter Vice President",
    email: "vp@thunderbirdscra.org",
    bio: "Supports the President and oversees chapter committees.",
  },
  {
    name: "Secretary",
    title: "Chapter Secretary",
    email: "secretary@thunderbirdscra.org",
    bio: "Maintains records, meeting minutes, and chapter correspondence.",
  },
  {
    name: "Treasurer",
    title: "Chapter Treasurer",
    email: "treasurer@thunderbirdscra.org",
    bio: "Oversees finances, dues, and 501(c)(19) compliance.",
  },
  {
    name: "VP of Memberships",
    title: "VP of Memberships",
    email: "vpmembership@thunderbirdscra.org",
    bio: "Welcomes new members and coordinates recruitment.",
  },
  {
    name: "VP of Awards",
    title: "VP of Awards",
    email: "vpawards@thunderbirdscra.org",
    bio: "Oversees chapter awards, recognition, and ceremonies.",
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
    amount: "$250",
    perks: [
      "Recognition on chapter website",
      "Sponsor certificate",
      "Mention at one chapter event",
    ],
  },
  {
    name: "Silver Wig-Wag",
    amount: "$500",
    perks: [
      "All Bronze benefits",
      "Logo on event programs",
      "Recognition at the Annual Ball",
    ],
    highlight: true,
  },
  {
    name: "Gold Thunderbird",
    amount: "$1,000+",
    perks: [
      "All Silver benefits",
      "Premier logo placement at all events",
      "Reserved table at the Annual Regimental Ball",
      "Dedicated sponsor spotlight on chapter website",
    ],
  },
];

export const SPONSOR_CONTACT_EMAIL = "sponsorship@thunderbirdscra.org";
