import React from "react";
import { FOUNDERS, BRAND } from "../data/services.js";

export default function FoundersSection() {
  return (
    <section className="section" id="founders" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="founders-card">
          <div className="founders-photo">
            <img
              src={FOUNDERS.photo}
              alt={FOUNDERS.caption}
              width="1200"
              height="801"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="founders-copy">
            <span className="eyebrow">Meet the Founders</span>
            <h3 style={{ marginTop: 12 }}>
              {FOUNDERS.names.join(" & ")}
            </h3>
            <p>
              {BRAND.name} was founded to bring genuine, classically-trained
              Ayurvedic care into people's homes across {BRAND.city} — built
              on hands-on experience, not a shortened spa menu.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
