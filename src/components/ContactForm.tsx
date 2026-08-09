"use client";

import { useState } from "react";
import { company } from "@/lib/site";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const mailtoHref = `mailto:${company.email}?subject=${encodeURIComponent(
    `Project inquiry from ${name || "your website"}`
  )}&body=${encodeURIComponent(
    `${message}\n\n---\nName: ${name}\nEmail: ${email}\nPhone: ${phone || "Not provided"}`
  )}`;

  return (
    <form
      className="space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        window.location.href = mailtoHref;
      }}
    >
      <div>
        <label htmlFor="name" className="text-sm font-medium text-navy">
          Name
        </label>
        <input
          id="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1.5 w-full rounded-lg border border-navy/15 px-4 py-2.5 text-sm text-navy outline-none transition-colors focus:border-brand-blue"
          placeholder="Your name"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="text-sm font-medium text-navy">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-navy/15 px-4 py-2.5 text-sm text-navy outline-none transition-colors focus:border-brand-blue"
            placeholder="you@company.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-medium text-navy">
            Phone <span className="font-normal text-navy/40">(optional)</span>
          </label>
          <input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-navy/15 px-4 py-2.5 text-sm text-navy outline-none transition-colors focus:border-brand-blue"
            placeholder="+91 98765 43210"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-navy">
          What are you looking to build?
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-1.5 w-full rounded-lg border border-navy/15 px-4 py-2.5 text-sm text-navy outline-none transition-colors focus:border-brand-blue"
          placeholder="Tell us a bit about your project..."
        />
      </div>
      <button
        type="submit"
        className="brand-gradient-bg w-full rounded-full px-6 py-3 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
      >
        Send message
      </button>
      <p className="text-xs text-navy/50">
        This opens your email app with the message pre-filled, addressed to {company.email}.
      </p>
    </form>
  );
}
