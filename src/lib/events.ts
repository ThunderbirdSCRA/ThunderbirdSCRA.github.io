import type { ChapterEvent } from "@/data/site";

/** URL-safe slug for an event. Uses event.slug when set, otherwise generated from title + date. */
export const eventSlug = (event: ChapterEvent): string =>
  event.slug ??
  `${event.title}-${event.date}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const todayISO = () => new Date().toISOString().slice(0, 10);

/** The soonest upcoming event, or undefined when none are scheduled. */
export const getNextEvent = (events: ChapterEvent[]): ChapterEvent | undefined =>
  events
    .filter((e) => e.date >= todayISO())
    .sort((a, b) => a.date.localeCompare(b.date))[0];

export const formatEventDate = (iso: string) =>
  new Date(iso + "T12:00:00").toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

/** "18:00" -> "6:00 PM" */
export const formatEventTime = (time: string) => {
  const [h, m] = time.split(":").map(Number);
  const d = new Date();
  d.setHours(h, m ?? 0, 0, 0);
  return d.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
};

/** Google Maps search URL for the event's address (falling back to location). */
export const directionsUrl = (event: ChapterEvent) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    event.address ?? event.location
  )}`;

const pad = (n: number) => String(n).padStart(2, "0");

/** Build and trigger a download of an .ics calendar file for the event. */
export const downloadIcs = (event: ChapterEvent) => {
  const [y, mo, d] = event.date.split("-").map(Number);
  const end = event.endDate ?? event.date;
  const [ey, emo, ed] = end.split("-").map(Number);

  const toStamp = (yy: number, mm: number, dd: number, time: string | undefined, fallback: string) => {
    const [hh, mi] = (time ?? fallback).split(":").map(Number);
    return `${yy}${pad(mm)}${pad(dd)}T${pad(hh)}${pad(mi ?? 0)}00`;
  };

  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Thunderbird Chapter//Events//EN",
    "BEGIN:VEVENT",
    `UID:${eventSlug(event)}@thunderbirdscra.org`,
    `DTSTAMP:${toStamp(y, mo, d, undefined, "12:00")}`,
    `DTSTART:${toStamp(y, mo, d, event.startTime, "09:00")}`,
    `DTEND:${toStamp(ey, emo, ed, event.endTime ?? event.startTime, "10:00")}`,
    `SUMMARY:${event.title}`,
    `LOCATION:${(event.address ?? event.location).replace(/,/g, "\\,")}`,
    event.description ? `DESCRIPTION:${event.description.replace(/\n/g, "\\n").replace(/,/g, "\\,")}` : "",
    "END:VEVENT",
    "END:VCALENDAR",
  ].filter(Boolean);

  const blob = new Blob([lines.join("\r\n")], { type: "text/calendar" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${eventSlug(event)}.ics`;
  a.click();
  URL.revokeObjectURL(url);
};
