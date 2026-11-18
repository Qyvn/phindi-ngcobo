"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { saveBooking, type MeetingFormat, type StoredBooking } from "@/lib/bookings";
import { isSessionId, sampleSlots, sessionById, sessions, type SampleSlot } from "@/lib/sessions";
import { cn } from "@/lib/utils";

type Errors = Partial<Record<"session" | "format" | "date" | "time" | "name" | "email" | "phone" | "note", string>>;

type Confirmation = {
  booking: StoredBooking;
  saved: boolean;
  count: number;
};

const fieldClass = "h-11 bg-card px-3 text-base md:text-base";

function todayIso() {
  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${now.getFullYear()}-${month}-${day}`;
}

function formatDate(iso: string) {
  const [year, month, day] = iso.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function BookingFlow() {
  const requested = useSearchParams().get("session") ?? "";
  const fromLink = isSessionId(requested) ? requested : "";
  const [sessionChoice, setSessionChoice] = useState<string | null>(null);
  const sessionId = sessionChoice ?? fromLink;
  const [format, setFormat] = useState<MeetingFormat | "">("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState<SampleSlot | "">("");
  const [errors, setErrors] = useState<Errors>({});
  const [confirmation, setConfirmation] = useState<Confirmation | null>(null);
  const minDate = todayIso();

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const note = String(data.get("note") ?? "").trim();
    const nextErrors: Errors = {};

    if (!isSessionId(sessionId)) nextErrors.session = "Please choose a session.";
    if (format !== "online" && format !== "in-person") {
      nextErrors.format = "Please choose online or in person.";
    }
    if (!date || date < minDate) nextErrors.date = "Please choose today or a later date.";
    if (!sampleSlots.includes(time as SampleSlot)) nextErrors.time = "Please choose a time.";
    if (name.length < 2) nextErrors.name = "Please add your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Please add an email address that looks complete.";
    }
    if ((phone.match(/\d/g) ?? []).length < 7) {
      nextErrors.phone = "Please add a phone number.";
    }
    if (note.length > 400) nextErrors.note = "Please keep the note shorter than 400 characters.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      const order = ["session", "format", "date", "time", "name", "email", "phone", "note"] as const;
      const first = order.find((key) => nextErrors[key]);
      if (first) form.querySelector<HTMLElement>(`#${first}`)?.focus();
      return;
    }

    const session = sessionById(sessionId);
    if (!session || (format !== "online" && format !== "in-person") || !sampleSlots.includes(time as SampleSlot)) {
      return;
    }

    const booking: StoredBooking = {
      id: crypto.randomUUID(),
      sessionId: session.id,
      sessionTitle: session.title,
      format,
      date,
      time: time as SampleSlot,
      name,
      email,
      phone,
      note,
      savedAt: new Date().toISOString(),
    };
    const result = saveBooking(booking);
    setConfirmation({ booking, saved: result.saved, count: result.count });
  }

  if (confirmation) {
    const { booking, saved, count } = confirmation;
    return (
      <div role="status" className="border border-border bg-card px-6 py-8 md:px-10 md:py-10">
        <p className="text-xs font-semibold tracking-[0.18em] text-gold uppercase">
          On this device
        </p>
        <h2 className="mt-3 text-4xl text-night">Your request is kept here</h2>
        <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
          {saved
            ? "Your request is kept on this device. It has not been sent, and it will not appear on another device."
            : "This screen is the only copy. It could not be stored, and it has not been sent."}
          {saved && count > 1 ? ` You now have ${count} requests kept on this device.` : ""}
        </p>
        <dl className="mt-8 max-w-xl divide-y divide-border border-y border-border">
          {[
            ["Session", booking.sessionTitle],
            ["Meeting", booking.format === "online" ? "Online" : "In person"],
            ["Date", formatDate(booking.date)],
            ["Time", booking.time],
            ["Name", booking.name],
            ["Email", booking.email],
            ["Phone", booking.phone],
            ["Note", booking.note || "No note added"],
          ].map(([label, value]) => (
            <div key={label} className="grid gap-1 py-3 sm:grid-cols-[8rem_1fr] sm:gap-6">
              <dt className="text-sm font-semibold tracking-wide text-gold uppercase">{label}</dt>
              <dd className="text-night">{value}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button
            type="button"
            className="h-12 bg-night px-6 text-base text-primary-foreground hover:bg-night/90"
            onClick={() => setConfirmation(null)}
          >
            Make another booking
          </Button>
          <Link
            href="/counselling"
            className="inline-flex h-12 items-center justify-center border border-border bg-background px-6 text-base text-night"
          >
            Back to sessions
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="border border-border bg-card px-6 py-8 md:px-10 md:py-10">
      <p className="text-sm leading-6 text-muted-foreground">
        Fee on enquiry. Length on enquiry. Your request is kept on this device
        and is not sent from this page.
      </p>

      <fieldset className="mt-8" aria-describedby={errors.session ? "session-error" : undefined}>
        <legend className="text-2xl text-night">1. Session</legend>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {sessions.map((session) => {
            const selected = sessionId === session.id;
            return (
              <label
                key={session.id}
                className={cn(
                  "flex cursor-pointer gap-3 border px-4 py-4",
                  selected ? "border-night bg-accent" : "border-border bg-background",
                )}
              >
                <input
                  id={session.id === sessions[0].id ? "session" : undefined}
                  className="mt-1 size-4 accent-night"
                  type="radio"
                  name="session"
                  value={session.id}
                  checked={selected}
                  onChange={() => setSessionChoice(session.id)}
                />
                <span>
                  <span className="block text-night">{session.title}</span>
                  <span className="mt-1 block text-sm leading-6 text-muted-foreground">
                    {session.summary} Length on enquiry. Fee on enquiry.
                  </span>
                </span>
              </label>
            );
          })}
        </div>
        {errors.session ? (
          <p id="session-error" className="mt-2 text-sm text-destructive">
            {errors.session}
          </p>
        ) : null}
      </fieldset>

      <fieldset className="mt-8" aria-describedby={errors.format ? "format-error" : undefined}>
        <legend className="text-2xl text-night">2. Online or in person</legend>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {[
            ["online", "Online", "A video meeting."],
            ["in-person", "In person", "Meet face to face."],
          ].map(([value, label, detail]) => {
            const selected = format === value;
            return (
              <label
                key={value}
                className={cn(
                  "flex cursor-pointer gap-3 border px-4 py-4",
                  selected ? "border-night bg-accent" : "border-border bg-background",
                )}
              >
                <input
                  id={value === "online" ? "format" : undefined}
                  className="mt-1 size-4 accent-night"
                  type="radio"
                  name="format"
                  value={value}
                  checked={selected}
                  onChange={() => setFormat(value as MeetingFormat)}
                />
                <span>
                  <span className="block text-night">{label}</span>
                  <span className="mt-1 block text-sm text-muted-foreground">{detail}</span>
                </span>
              </label>
            );
          })}
        </div>
        {errors.format ? (
          <p id="format-error" className="mt-2 text-sm text-destructive">
            {errors.format}
          </p>
        ) : null}
      </fieldset>

      <fieldset className="mt-8">
        <legend className="text-2xl text-night">3. Date and time</legend>
        <div className="mt-4 max-w-xs space-y-2">
          <Label htmlFor="date">Date</Label>
          <Input
            id="date"
            name="date"
            type="date"
            min={minDate}
            value={date}
            onChange={(event) => setDate(event.target.value)}
            className={fieldClass}
            aria-invalid={errors.date ? true : undefined}
            aria-describedby={errors.date ? "date-error" : undefined}
          />
          {errors.date ? (
            <p id="date-error" className="text-sm text-destructive">
              {errors.date}
            </p>
          ) : null}
        </div>
        <div className="mt-5">
          <p id="time-label" className="text-sm font-medium">
            Time
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Choose a time. Your request stays on this device.
          </p>
          <div
            className="mt-3 flex flex-wrap gap-2"
            role="radiogroup"
            aria-labelledby="time-label"
            aria-describedby={errors.time ? "time-error" : undefined}
          >
            {sampleSlots.map((slot, index) => {
              const selected = time === slot;
              return (
                <label
                  key={slot}
                  className={cn(
                    "cursor-pointer border px-4 py-2 text-sm",
                    selected ? "border-night bg-night text-primary-foreground" : "border-border bg-background text-night",
                  )}
                >
                  <input
                    id={index === 0 ? "time" : undefined}
                    className="sr-only"
                    type="radio"
                    name="time"
                    value={slot}
                    checked={selected}
                    onChange={() => setTime(slot)}
                  />
                  {slot}
                </label>
              );
            })}
          </div>
          {errors.time ? (
            <p id="time-error" className="mt-2 text-sm text-destructive">
              {errors.time}
            </p>
          ) : null}
        </div>
      </fieldset>

      <fieldset className="mt-8">
        <legend className="text-2xl text-night">4. Your details</legend>
        <div className="mt-4 grid gap-5 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">Your name</Label>
            <Input
              id="name"
              name="name"
              autoComplete="name"
              className={fieldClass}
              aria-invalid={errors.name ? true : undefined}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name ? (
              <p id="name-error" className="text-sm text-destructive">
                {errors.name}
              </p>
            ) : null}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className={fieldClass}
              aria-invalid={errors.email ? true : undefined}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email ? (
              <p id="email-error" className="text-sm text-destructive">
                {errors.email}
              </p>
            ) : null}
          </div>
          <div className="space-y-2 sm:col-span-2">
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              className={fieldClass}
              aria-invalid={errors.phone ? true : undefined}
              aria-describedby={errors.phone ? "phone-error" : undefined}
            />
            {errors.phone ? (
              <p id="phone-error" className="text-sm text-destructive">
                {errors.phone}
              </p>
            ) : null}
          </div>
          <div className="space-y-2 sm:col-span-2">
            <Label htmlFor="note">A short note</Label>
            <Textarea
              id="note"
              name="note"
              rows={4}
              className="min-h-28 bg-card px-3 py-3 text-base md:text-base"
              aria-invalid={errors.note ? true : undefined}
              aria-describedby={errors.note ? "note-error" : undefined}
            />
            {errors.note ? (
              <p id="note-error" className="text-sm text-destructive">
                {errors.note}
              </p>
            ) : null}
          </div>
        </div>
      </fieldset>

      <Button
        type="submit"
        className="mt-8 h-12 bg-night px-6 text-base text-primary-foreground hover:bg-night/90"
      >
        Book a session
      </Button>
    </form>
  );
}
