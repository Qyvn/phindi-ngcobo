"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type Errors = {
  name?: string;
  email?: string;
  message?: string;
  understand?: string;
};

const fieldClass = "h-11 bg-card px-3 text-base md:text-base";

export function EnquiryForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [preview, setPreview] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const understand = data.get("understand") === "yes";
    const nextErrors: Errors = {};

    if (!name) nextErrors.name = "Please add your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Please add an email address that looks complete.";
    }
    if (message.length < 12) {
      nextErrors.message = "Please write at least a short sentence.";
    }
    if (!understand) {
      nextErrors.understand = "Please confirm that this note stays on this device.";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setPreview(false);
      const first = nextErrors.name
        ? "name"
        : nextErrors.email
          ? "email"
          : nextErrors.message
            ? "message"
            : "understand";
      form.querySelector<HTMLElement>(`#${first}`)?.focus();
      return;
    }

    setPreview(true);
  }

  if (preview) {
    return (
      <div
        role="status"
        className="border border-border bg-card px-6 py-8 md:px-8"
      >
        <p className="text-xs font-semibold tracking-[0.18em] text-gold uppercase">
          On this device
        </p>
        <h2 className="mt-3 text-3xl text-night">Your note stays here</h2>
        <p className="mt-4 leading-7 text-muted-foreground">
          It has not been sent, and no session is booked. If you need help in
          an emergency, contact your local emergency services.
        </p>
        <Button
          type="button"
          className="mt-6 h-12 bg-night px-6 text-base text-primary-foreground hover:bg-night/90"
          onClick={() => setPreview(false)}
        >
          Write another note
        </Button>
      </div>
    );
  }

  return (
    <form
      id="enquire"
      onSubmit={onSubmit}
      noValidate
      className="scroll-mt-28 border border-border bg-card px-6 py-8 md:px-8"
    >
      <h2 className="text-3xl text-night">Ask about a session</h2>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">
        To book, choose Book a session. A note here stays on this device and is
        not sent. If you need help in an emergency, contact your local
        emergency services.
      </p>

      <div className="mt-6 space-y-5">
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

        <div className="space-y-2">
          <Label htmlFor="message">What would you like to ask?</Label>
          <Textarea
            id="message"
            name="message"
            rows={6}
            className="min-h-36 bg-card px-3 py-3 text-base md:text-base"
            aria-invalid={errors.message ? true : undefined}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message ? (
            <p id="message-error" className="text-sm text-destructive">
              {errors.message}
            </p>
          ) : null}
        </div>

        <div className="space-y-2">
          <label htmlFor="understand" className="flex items-start gap-3 text-sm leading-6">
            <input
              id="understand"
              name="understand"
              type="checkbox"
              value="yes"
              className="mt-1 size-4 accent-night"
              aria-invalid={errors.understand ? true : undefined}
              aria-describedby={errors.understand ? "understand-error" : undefined}
            />
            <span>
              I understand this note stays on this device and does not book a session.
            </span>
          </label>
          {errors.understand ? (
            <p id="understand-error" className="text-sm text-destructive">
              {errors.understand}
            </p>
          ) : null}
        </div>
      </div>

      <Button
        type="submit"
        className="mt-6 h-12 w-full bg-night px-6 text-base text-primary-foreground hover:bg-night/90 sm:w-auto"
      >
        Leave a note
      </Button>
    </form>
  );
}
