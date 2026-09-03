// Central data file — easy for non-developers to edit.
// Update events, board members, and sponsorship tiers here.

export const SITE = {
  name: "Thunderbird Chapter",
  longName: "Thunderbird Chapter — Signal Corps Regimental Association",
  facebookUrl: "https://www.facebook.com/people/Thunderbird-Chapter-Oklahoma-SCRA/61573525888171/",
  joinNowUrl: "https://signalcorps.org/memberships",
  donateUrl: "https://app.autobooks.co/pay/thunderbird-signal-corps-regimental-assc",
  bylawsUrl: "/Thunderbird-Chapter-Bylaws-Signed.pdf", // Place updated by-laws in the Public Directory. Will need to update as bylaws update.
  candidUrl: "https://app.candid.org/profile/16412925/thunderbird-signal-corps-regimental-association-33-1949070", // Shouldn't need updating
  candidSealSrc: "https://widgets.guidestar.org/prod/v1/pdp/transparency-seal/16412925/svg", //Shouldn't need updating
};

// ---------------- EVENTS ----------------
// To add an event, copy a block and edit. Date format: "YYYY-MM-DD"
// Required: title, date, location, summary (1–2 sentence teaser shown on the Home and Events pages).
// Everything else is optional — leave it out and it simply won't be shown.
//
// The event page URL slug is generated automatically from the title and date;
// set `slug` only if you want a custom URL.
export type ChapterEvent = {
  title: string;
  date: string; // ISO date "YYYY-MM-DD"
  location: string;
  summary: string; // Short teaser (1–2 sentences) shown in previews
  slug?: string; // Optional custom URL slug
  endDate?: string; // For multi-day events
  startTime?: string; // "18:00" (24-hour)
  endTime?: string; // "20:00" (24-hour)
  address?: string; // Full street address
  description?: string; // Full description, shown on the event detail page
  rsvpUrl?: string; // RSVP / registration link
  websiteUrl?: string; // External event website
  cost?: string; // e.g. "Free", "$25 per person"
  audience?: string; // Who the event is for
  additionalInfo?: string; // Parking, dress code, notes, etc.
  image?: string; // Optional event image (import an asset or use a URL)
  imageAlt?: string;
};

export const EVENTS: ChapterEvent[] = [
  {
    title: "Oklahoma Fallen Heroes Half Marathon",
    date: "2026-09-19",
    location: "SW 15th and Meridian - Oklahoma City, OK",
    summary: "Visit our table at the Fallen Heroes Half Marathon and grab your Thunderbird Chapter merch.",
    description: "Visit our table at the Fallen Heroes Half Marathon and grab your Thunderbird Chapter merch. Come see your chapter leadership, enjoy conversation, and either cheer on runners particiapting in the Half Marathon, or run yourself!"
    startTime: "06:00",
    endTime: "12:00",
    address: "4345 SW 15th St, Oklahoma City, OK 73108",
    websiteUrl: "https://okfallenheroes.org/",
    cost: "Free",
    additionalInfo: "The event is located at the Oklahoma River Cruises - Meridian Landing.",
  },
  {
    title: "Chapter General Membership Meeting",
    date: "2026-10-17",
    location: "Anthem Brewing - Oklahoma City, OK",
    summary: "Our quarterly business meeting — hear what the chapter is planning and have your say.",
    description: "Our quarterly business meeting — hear what the chapter is planning and have your say.",
    startTime: "18:00",
    endTime: "20:00",
    address: "908 SW 4th St, Oklahoma City, OK 73109",
    cost: "Free",
    audience: "All chapter members",
  },
  {
    title: "Signal Corps Ball",
    date: "2027-04-17",
    location: "Oklahoma National Guard Museum - Oklahoma City, OK",
    summary: "Save the date for an unforgettable evening celebrating the Signal Corps — details coming soon.",
    additionalInfo: "Additional details, ticket pricing and RSVP link to be provided at a later date. Keep your eyes peeled!",
    audience: "All chapter members"
  },
  {
    title: "Chapter General Membership Meeting",
    date: "2026-05-30",
    location: "Anthem Brewing - Oklahoma City, OK",
    summary: "Our quarterly business meeting — hear what the chapter is planning and have your say.",
    description: "Quarterly business meeting open to all chapter members.",
    audience: "All chapter members",
  },
  {
    title: "1/78 FA Orange Call",
    date: "2026-05-01",
    location: "Lake Elmer Thomas Recreation Area - Ft. Sill, Oklahoma",
    summary: "An Orange Call for 1/78 FA — meet the chapter and learn what the SCRA offers.",
    description: "Orange Call for all members and potential members in 1/78 FA.",
    audience: "Soldiers of 1/78 FA",
  },
  {
    title: "Chapter General Membership Meeting",
    date: "2025-10-03",
    location: "Anthem Brewing - Oklahoma City, OK",
    summary: "Our quarterly business meeting — hear what the chapter is planning and have your say.",
    description: "Quarterly business meeting open to all chapter members.",
    audience: "All chapter members",
  },
  {
    title: "Lawton Orange Call",
    date: "2026-02-20",
    location: "Rising Eagle Brewery - Elgin, OK",
    summary: "Join us in Lawton for an evening of fellowship with fellow Signaleers.",
  },
];

// ---------------- BOARD MEMBERS ----------------
// Update names, titles, and emails here.
export type BoardMember = {
  name: string;
  title: string;
  email: string;
  rank: string;
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
    rank: "WO1",
    bio: "Leads the chapter and represents members to the national association.",
    photo: weeksPhoto,
  },
  {
    name: "Brandon Dixon",
    title: "Chapter Vice President",
    email: "vp@thunderbirdscra.org",
    rank: "CW2",
    bio: "Supports the President and oversees chapter committees.",
    photo: bdixonPhoto,
  },
  {
    name: "Jenny Dixon",
    title: "Chapter Secretary & Treasurer",
    email: "secretary@thunderbirdscra.org",
    rank: "WO1",
    bio: "Maintains records, oversees finances, dues, and 501(c)(19) compliance.",
    photo: jdixonPhoto,
  },
  {
    name: "Raquel Aguilar",
    title: "VP of Memberships",
    email: "vpmembership@thunderbirdscra.org",
    rank: "SGT",
    bio: "Welcomes new members and coordinates recruitment.",
    photo: aguilarPhoto,
  },
  {
    name: "Chaz Richards",
    title: "VP of Awards",
    email: "vpawards@thunderbirdscra.org",
    rank: "SFC",
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
    perks: ["Recognition on chapter website", "Sponsor certificate", "Mention at one chapter event"],
  },
  {
    name: "Silver Wig-Wag",
    amount: "$1,000",
    perks: ["All Bronze benefits", "Logo on event programs", "Recognition at the Annual Ball"],
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

// ---------------- AWARDS ----------------
// Update award descriptions, eligibility, and links here.
export type Award = {
  name: string;
  category: "Mercury" | "Brevet Colonel" | "Wahatchee";
  eligibility: string;
  purpose: string;
  criteria: string[];
  learnMoreUrl: string;
};

export const AWARDS_CONTACT_EMAIL = "vpawards@thunderbirdscra.org";

export const AWARDS: Award[] = [
  {
    name: "Mercury Medal for Achievement (MMA)",
    category: "Mercury",
    eligibility: "SCRA members",
    purpose:
      "Recognizes SCRA members who, through their achievements or significant acts, distinguish themselves in ways that stand out among seniors, subordinates, and peers, contributing to the promotion of the Signal Regiment and the SCRA. As an achievement award, there is no length-of-service requirement. The MMA ranks below the Bronze Order of Mercury in level of precedence.",
    criteria: [
      "Demonstrate recognizable achievements which promote the SCRA and, by extension, the Signal Regiment.",
      "Be a current active SCRA member, affiliated with a local chapter where possible.",
      "Be of outstanding moral character and demonstrate the qualities of a Signal Corps professional.",
      "Nomination must be submitted by a separate active SCRA member.",
    ],
    learnMoreUrl: "https://signalcorps.org/awards/mercury-medal-of-achievement/",
  },
  {
    name: "Bronze Order of Mercury (BOM)",
    category: "Mercury",
    eligibility: "SCRA members",
    purpose:
      "Recognizes SCRA members who have demonstrated the highest standards of integrity, moral character, professional competence, and selflessness, and who have made long-term, significant contributions to BOTH the Signal Regiment and the SCRA. As a service award, length and level of service are significant factors.",
    criteria: [
      "Demonstrate numerous recognizable acts of service that promote the SCRA and the Signal Regiment.",
      "Be a current active SCRA member, affiliated with a local chapter or the SCRA Online Chapter.",
      "Be of outstanding moral character and demonstrate the qualities of a Signal Corps professional.",
      "Maintain an active SCRA membership for a minimum of six (6) months prior to submission.",
      "Nomination must be submitted by a separate active SCRA member.",
    ],
    learnMoreUrl: "https://signalcorps.org/awards/bronze-order-of-mercury/",
  },
  {
    name: "Silver Order of Mercury (SOM)",
    category: "Mercury",
    eligibility: "SCRA members",
    purpose:
      "Awarded to the select few SCRA members who stand above their peers and have made conspicuous long-term, significant contributions to both the Signal Regiment and the SCRA. Represents substantially greater contribution over a longer period than the Bronze Order of Mercury.",
    criteria: [
      "Documented conspicuous, long-term service impacting the entire SCRA.",
      "Previously awarded the Bronze Order of Mercury.",
      "Numerous recognizable acts of significant service that promote the SCRA and the Signal Regiment.",
      "Current active SCRA member, affiliated with a local chapter or the SCRA Online Chapter.",
      "Outstanding moral character and the qualities of a Signal Corps professional.",
      "Active SCRA membership maintained for decades prior to submission.",
      "Nomination submitted by a separate active SCRA member.",
    ],
    learnMoreUrl: "https://signalcorps.org/awards/silver-order-of-mercury/",
  },
  {
    name: "Gold Order of Mercury (GOM)",
    category: "Mercury",
    eligibility: "Fallen Signal Soldiers",
    purpose:
      "The highest honor, reserved for those who have sacrificed their lives in service to our Nation. Honors any Signal Soldier who died as a direct result of injuries or illness sustained while on duty. Presented at no cost to the family by an appropriate SCRA leader. The Gold Wahatchee may also be awarded to the spouse at no cost.",
    criteria: [
      "Honorable service prior to the award.",
      "Awardee died in the Line of Duty as a result of service to the Nation.",
      "Awardee was a member of the US Army Signal Regiment.",
    ],
    learnMoreUrl: "https://signalcorps.org/awards/gold-order-of-mercury/",
  },
  {
    name: "Brevet Colonel Award",
    category: "Brevet Colonel",
    eligibility: "Non-Signal service members & civilians",
    purpose:
      "Recognizes non-government personnel, government civilians, or uniformed members of the armed forces outside the Signal Regiment who have made significant contributions over time to the Regiment or the Association — including federal/state/local officials, military members from other branches, industry partners, and community leaders. Not intended for SCRA members or US Army Signal Corps members.",
    criteria: [
      "Numerous recognizable acts of service over a significant period that promote the SCRA and the US Army Signal Corps.",
      "Outstanding moral character and the qualities of a Signal Corps professional.",
      "Nomination submitted by a separate active SCRA member.",
      "An SCRA membership is NOT required to receive this award.",
    ],
    learnMoreUrl: "https://signalcorps.org/awards/brevet-colonel/",
  },
  {
    name: "Bronze Wahatchee",
    category: "Wahatchee",
    eligibility: "Volunteers & supporters",
    purpose:
      "Recognizes individuals who have made long-term, significant contributions to the Signal Regiment and the SCRA. Presented to volunteers, spouses, and supporters of the Signal Corps and SCRA. Not intended for SCRA members.",
    criteria: [
      "Numerous recognizable acts of service over a significant period that promote the SCRA and the US Army Signal Corps.",
      "Outstanding moral character and the qualities of a Signal Corps professional.",
      "Nomination submitted by an active SCRA member.",
      "An SCRA membership is NOT required to receive this award.",
    ],
    learnMoreUrl: "https://signalcorps.org/awards/bronze-wahatchee/",
  },
  {
    name: "Silver Wahatchee",
    category: "Wahatchee",
    eligibility: "Long-term volunteers & supporters",
    purpose:
      "Recognizes individuals who have made conspicuous long-term, significant contributions to the Signal Regiment and the SCRA. Presented to volunteers, spouses, and supporters of the Signal Corps and SCRA. Not intended for SCRA members.",
    criteria: [
      "Numerous recognizable acts of service over a significant period that promote the SCRA and the US Army Signal Corps.",
      "Outstanding moral character and the qualities of a Signal Corps professional.",
      "Nomination submitted by an active SCRA member.",
      "Awardees should have previously been awarded the Bronze Wahatchee when possible.",
      "An SCRA membership is NOT required to receive this award.",
    ],
    learnMoreUrl: "https://signalcorps.org/awards/silver-wahatchee/",
  },
];

export type AwardFAQ = { question: string; answer: string };

export const AWARD_FAQS: AwardFAQ[] = [
  {
    question:
      "We have a large event (like a ball or dinner) coming up. How far in advance do we need to submit award nominations?",
    answer:
      "We officially request a 30-day lead time for processing all awards. Our timeline depends heavily on the volume of current nominations and the administrative board's review schedule. Because our national staff manages these roles alongside other organizational responsibilities, the sooner you submit, the better.",
  },
  {
    question: "How can our chapter ensure a fast turnaround for a large batch of awards?",
    answer:
      "To expedite the process and avoid delays, chapters should follow a streamlined approach:\n\n• Provide an Advance List: Send a full roster of your intended awardees to National as soon as you can. Having this list before individual formal applications roll in allows us to track and cross-reference everything efficiently.\n\n• Designate a Centralized POC: It is significantly faster if a single chapter representative coordinates all payments and serves as the primary contact for any necessary edits or follow-ups.\n\n• Enforce Quality Control: Ensure every nomination meets all criteria — including the 6-month membership requirement for BOM eligibility — on the first pass. This prevents the back-and-forth that typically delays board and national approval.\n\n• Utilize Bulk Shipping: Processing and shipping the entire batch to a single location saves critical time and reduces shipping costs.",
  },
  {
    question: "Once everything is submitted, how long does approval and delivery take?",
    answer:
      "If we have your advance list ahead of time and the write-ups require no corrections, we can usually get the batch to the review board within a week. Payment links and bulk shipping will follow in the subsequent weeks once approved.",
  },
  {
    question: "Are there other awards we should consider for our event besides standard regimental medals?",
    answer:
      "Yes! When planning your presentation list, don't forget to look beyond the MMA and BOM for military personnel. Consider whether your chapter plans to recognize dedicated volunteers, supportive spouses, or non-signal personnel who have made outstanding contributions. Awards like the Wahatchee or the Brevet Colonel are excellent ways to honor these individuals at your event.",
  },
];
