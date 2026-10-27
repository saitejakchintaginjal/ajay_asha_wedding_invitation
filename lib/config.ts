// Edit this file to personalise the invitation.
export const wedding = {
  groom: "Ajaykumar",
  bride: "Asha",
  groomParents: "Smt. Soujanya G Ratimani",
  brideParents: ["Shri. Maruti F Goravanakolla", "Smt. Lakshmi M Goravanakolla"], // one entry per line
  // ISO local time of the wedding muhurtham
  date: "2026-11-29T12:31:00",
  venue: "Shri Vidyadhiraj Bhavan",
  address: "Amargol, Opp APMC (Behind Volkswagen Car Showroom), Hubballi",
  mapsQuery: "Shri Vidyadhiraj Bhavan, Amargol, Hubballi",
};

// Prayers shown at the very top of the invitation, one per line
export const invocations = [
  "Shree Gajanana Prasanna",
  "Shree Guru Ragavendra Prasanna",
  "Shree Renuka Devi Prasanna",
  "Shree Dhare Devara Prasanna",
];

export const events = [
  { name: "Wedding", date: "29 November 2026", time: "12:31 PM", timeLabel: "Muhurtham · 12:31 PM", venue: "Shri Vidyadhiraj Bhavan, Amargol, Opp APMC, Hubballi", note: "", featured: true },
];

// One map card per venue (the query is what Google Maps searches for)
export const venues = [
  { event: "Wedding", name: "Shri Vidyadhiraj Bhavan", address: "Amargol, Opp APMC (Behind Volkswagen Car Showroom), Hubballi", query: "Shri Vidyadhiraj Bhavan, Amargol, Hubballi" },
];
