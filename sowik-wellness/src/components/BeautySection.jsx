import React from "react";
import { ArrowUpRight } from "lucide-react";
import { BEAUTY_CATEGORIES, BRAND } from "../data/services.js";

export default function BeautySection() {
  const waHrefFor = (name) =>
    `https://wa.me/${BRAND.phonePrimaryRaw}?text=${encodeURIComponent(
      `Hi Sowik Wellness, I'd like to book ${name}.`
    )}`;

  return (
    <section className="section" id="beauty" style={{ background: "var(--surface)" }}>
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Salon &amp; Beauty at Home</span>
          <h2>Everything else on your self-care list.</h2>
          <p>
            Alongside our Ayurvedic therapies, Sowik Wellness also brings salon
            and grooming services to your door — hair, makeup, mehndi, skin
            and more.
          </p>
        </div>

        <div className="beauty-grid">
          {BEAUTY_CATEGORIES.map((item) => (
            <a
              className="beauty-card"
              key={item.id}
              href={waHrefFor(item.title)}
              target="_blank"
              rel="noreferrer"
            >
              <div className="beauty-card-image">
                <img src={item.image} alt={item.title} loading="lazy" />
              </div>
              <div className="beauty-card-body">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <span className="foot">
                  Book on WhatsApp
                  <ArrowUpRight size={15} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
