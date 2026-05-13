"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const fd = new FormData(e.currentTarget);
    const data = {
      firstName: String(fd.get("firstName") ?? ""),
      lastName: String(fd.get("lastName") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      message: String(fd.get("message") ?? ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(`status ${res.status}`);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="ba-contact-form ba-contact-form-success">
        <div className="ba-contact-form-success-icon" aria-hidden>✓</div>
        <h2>Bedankt!</h2>
        <p>
          Je bericht is verstuurd. We nemen binnen 24 uur contact met je op.
        </p>
        <button
          type="button"
          className="ba-contact-form-reset"
          onClick={() => setStatus("idle")}
        >
          Nog een bericht versturen
        </button>
      </div>
    );
  }

  return (
    <form className="ba-contact-form" onSubmit={handleSubmit}>
      <h2 className="ba-contact-form-title">Stuur ons een bericht</h2>
      <p className="ba-contact-form-sub">
        We reageren meestal binnen 24 uur.
      </p>

      <div className="ba-contact-form-row">
        <label className="ba-contact-form-field">
          <span>Voornaam *</span>
          <input
            type="text"
            name="firstName"
            required
            autoComplete="given-name"
            placeholder="Jouw voornaam"
          />
        </label>
        <label className="ba-contact-form-field">
          <span>Achternaam *</span>
          <input
            type="text"
            name="lastName"
            required
            autoComplete="family-name"
            placeholder="Jouw achternaam"
          />
        </label>
      </div>

      <label className="ba-contact-form-field">
        <span>E-mail *</span>
        <input
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="naam@voorbeeld.nl"
        />
      </label>

      <label className="ba-contact-form-field">
        <span>Telefoon <em>(optioneel)</em></span>
        <input
          type="tel"
          name="phone"
          autoComplete="tel"
          placeholder="06 12 34 56 78"
        />
      </label>

      <label className="ba-contact-form-field">
        <span>Bericht *</span>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Schrijf hier je vraag of bericht..."
        />
      </label>

      <button
        type="submit"
        className="ba-contact-form-submit"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Versturen..." : "Verstuur bericht →"}
      </button>

      {status === "error" && (
        <p className="ba-contact-form-error">
          Er ging iets mis. Probeer het opnieuw of mail rechtstreeks naar info@burrito-azteca.nl.
        </p>
      )}
    </form>
  );
}
