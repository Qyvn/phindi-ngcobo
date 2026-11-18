export const sessions = [
  {
    id: "one-on-one",
    title: "One-on-one counselling",
    summary: "A private conversation for one person.",
  },
  {
    id: "couples",
    title: "Couples and marriage counselling",
    summary: "A conversation for two people in a relationship.",
  },
  {
    id: "prayer",
    title: "Prayer and spiritual guidance",
    summary: "Time set aside for prayer and spiritual guidance.",
  },
  {
    id: "online",
    title: "Online video session",
    summary: "A session held by video, rather than in a room.",
  },
] as const;

export type SessionId = (typeof sessions)[number]["id"];

export const sampleSlots = ["09:00", "10:30", "12:00", "14:00", "15:30", "17:00"] as const;

export type SampleSlot = (typeof sampleSlots)[number];

export function isSessionId(value: string): value is SessionId {
  return sessions.some((session) => session.id === value);
}

export function sessionById(id: string) {
  return sessions.find((session) => session.id === id);
}

export function bookHref(sessionId?: string) {
  return sessionId ? `/counselling/book/?session=${sessionId}` : "/counselling/book/";
}
