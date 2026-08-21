import React from "react";
import { Phone, MessageCircle, ShieldCheck } from "lucide-react";
import { BRAND } from "../data/services.js";
import LeafDivider from "./LeafDivider.jsx";

export default function Hero() {
  const waHref = `https://wa.me/${BRAND.phonePrimaryRaw}?text=${encodeURIComponent(
    "Hi Sowik Wellness, I'd like to book a home therapy session."
  )}`;

  return (
    <section className="hero" id="top">
      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="eyebrow">Home Ayurveda · {BRAND.city}</span>
          <h1 style={{ marginTop: 14 }}>
            Classical Ayurveda,
            <br />
            brought to <em>your door</em>.
          </h1>
          <p>
            Abhyanga massage, cupping, Basti therapy, Shatkarma detox and guided
            yoga — delivered by trained therapists, on your schedule, in the
            comfort of your own home.
          </p>

          <div className="hero-actions">
            <a href={`tel:${BRAND.phonePrimaryRaw}`} className="btn btn-primary">
              <Phone size={16} />
              Call {BRAND.phonePrimary}
            </a>
            <a href={waHref} target="_blank" rel="noreferrer" className="btn btn-ghost">
              <MessageCircle size={16} />
              Book on WhatsApp
            </a>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <b>6</b>
              <span>Therapy categories</span>
            </div>
            <div className="hero-stat">
              <b>100%</b>
              <span>At your home</span>
            </div>
            <div className="hero-stat">
              <b>Ghaziabad</b>
              <span>&amp; NCR coverage</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="frame">
            <img
              src="/images/spa-at-home.webp"
              alt="Ayurvedic wellness therapy at home"
              width="384"
              height="420"
              fetchpriority="high"
              decoding="async"
            />
          </div>
          <div className="hero-badge">
            <span className="icon">
              <ShieldCheck size={18} />
            </span>
            <div>
              <b>Trained Therapists</b>
              <span>Certified &amp; background-checked</span>
            </div>
          </div>
        </div>
      </div>
      <LeafDivider />
    </section>
  );
}
