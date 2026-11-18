"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function SignupForm() {
  const [error, setError] = useState("");
  const [preview, setPreview] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const email = String(new FormData(form).get("email") ?? "").trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please add an email address that looks complete.");
      setPreview(false);
      form.querySelector<HTMLElement>("#signup-email")?.focus();
      return;
    }
    setError("");
    setPreview(true);
  }

  if (preview) {
    return (
      <div role="status" className="border border-border bg-card px-6 py-8">
        <h2 className="text-3xl text-night">Not subscribed</h2>
        <p className="mt-3 leading-7 text-muted-foreground">
          This address was not saved. There is no mailing list yet. When Phindi
          opens one, the page will say so.
        </p>
        <Button
          type="button"
          className="mt-6 h-12 bg-night px-6 text-base text-primary-foreground hover:bg-night/90"
          onClick={() => setPreview(false)}
        >
          Try the placeholder again
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="border border-border bg-card px-6 py-8">
      <h2 className="text-3xl text-night">Be told when an issue is real</h2>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">
        Sign-up is a placeholder. An address entered here is not stored and is
        not added to a list.
      </p>
      <div className="mt-6 space-y-2">
        <Label htmlFor="signup-email">Email</Label>
        <Input
          id="signup-email"
          name="email"
          type="email"
          autoComplete="email"
          className="h-11 bg-background px-3 text-base md:text-base"
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? "signup-error" : undefined}
        />
        {error ? (
          <p id="signup-error" className="text-sm text-destructive">
            {error}
          </p>
        ) : null}
      </div>
      <Button
        type="submit"
        className="mt-6 h-12 bg-night px-6 text-base text-primary-foreground hover:bg-night/90"
      >
        Preview sign-up
      </Button>
    </form>
  );
}
