import React from "react";
import { Phone, MessageCircle } from "lucide-react";
import { BRAND } from "../data/services.js";

export default function ContactCTA() {
  const waHref = `https://wa.me/${BRAND.phonePrimaryRaw}?text=${encodeURIComponent(
    "Hi Sowik Wellness, I'd like to book a home therapy session."
  )}`;

  return (
    <section className="section" id="contact" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="cta-band">
          <div>
            <span className="eyebrow" style={{ color: "var(--gold)" }}>
              Ready when you are
            </span>
            <h3 style={{ marginTop: 12 }}>
              Book your therapist for {BRAND.city} today.
            </h3>
          </div>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a href={`tel:${BRAND.phonePrimaryRaw}`} className="btn btn-primary">
              <Phone size={16} />
              {BRAND.phonePrimary}
            </a>
            <a href={waHref} target="_blank" rel="noreferrer" className="btn btn-outline">
              <MessageCircle size={16} />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
