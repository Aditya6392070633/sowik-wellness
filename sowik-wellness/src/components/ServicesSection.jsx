import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { CATEGORIES, BRAND } from "../data/services.js";
import LeafDivider from "./LeafDivider.jsx";

export default function ServicesSection() {
  const [activeId, setActiveId] = useState(CATEGORIES[0].id);
  const active = CATEGORIES.find((c) => c.id === activeId);

  const waHrefFor = (serviceName) =>
    `https://wa.me/${BRAND.phonePrimaryRaw}?text=${encodeURIComponent(
      `Hi Sowik Wellness, I'd like to book ${serviceName}.`
    )}`;

  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Our Services</span>
          <h2>Six therapies, one visit.</h2>
          <p>
            Every category below is delivered by the same trained therapist team,
            using authentic tools and herbal preparations — pick what your body
            needs today.
          </p>
        </div>

        <div className="category-tabs">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              className={`category-tab ${cat.id === activeId ? "active" : ""}`}
              onClick={() => setActiveId(cat.id)}
            >
              <span className="num">{cat.index}</span>
              {cat.title}
            </button>
          ))}
        </div>

        <div className="category-panel-head">
          <div>
            <h3>{active.title}</h3>
            <p>{active.intro}</p>
          </div>
        </div>

        <div className="service-grid">
          {active.services.map((service) => (
            <div className="service-card" key={service.name}>
              <span className="tag">{service.subtitle}</span>
              <h4>{service.name}</h4>
              <p>{service.description}</p>
              <a
                className="foot"
                href={waHrefFor(service.name)}
                target="_blank"
                rel="noreferrer"
              >
                Book this therapy
                <ArrowUpRight size={15} />
              </a>
            </div>
          ))}
        </div>
      </div>
      <div style={{ marginTop: 56 }}>
        <LeafDivider />
      </div>
    </section>
  );
}
