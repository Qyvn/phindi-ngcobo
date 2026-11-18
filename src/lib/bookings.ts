import type { SampleSlot, SessionId } from "@/lib/sessions";

export const bookingStorageKey = "phindi-ngcobo-bookings";

export type MeetingFormat = "online" | "in-person";

export type StoredBooking = {
  id: string;
  sessionId: SessionId;
  sessionTitle: string;
  format: MeetingFormat;
  date: string;
  time: SampleSlot;
  name: string;
  email: string;
  phone: string;
  note: string;
  savedAt: string;
};

export function readBookings(): StoredBooking[] {
  try {
    const raw = localStorage.getItem(bookingStorageKey);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    return Array.isArray(parsed) ? (parsed as StoredBooking[]) : [];
  } catch {
    return [];
  }
}

export function saveBooking(booking: StoredBooking): { saved: boolean; count: number } {
  try {
    const next = [...readBookings(), booking];
    localStorage.setItem(bookingStorageKey, JSON.stringify(next));
    return { saved: true, count: next.length };
  } catch {
    return { saved: false, count: 0 };
  }
}
