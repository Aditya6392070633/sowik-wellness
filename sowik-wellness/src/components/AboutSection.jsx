import React from "react";
import { Leaf, Home, HeartHandshake } from "lucide-react";

const POINTS = [
  {
    icon: Leaf,
    title: "Rooted in classical technique",
    description:
      "Our therapists are trained in Abhyanga, Basti and Shatkarma the traditional way — not a shortened spa-menu version.",
  },
  {
    icon: Home,
    title: "Your home, set up properly",
    description:
      "We bring the massage table, herbal oils and linens — you just choose the room.",
  },
  {
    icon: HeartHandshake,
    title: "One team, ongoing care",
    description:
      "Book a single session or a recurring wellness plan with the same therapist each time.",
  },
];

export default function AboutSection() {
  return (
    <section className="section" id="about">
      <div className="container split">
        <div className="frame">
          <img
            src="/images/male-spa.webp"
            alt="Guest relaxing during an Ayurvedic home therapy session"
            width="256"
            height="256"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div>
          <span className="eyebrow">Why Sowik Wellness</span>
          <h2 style={{ marginTop: 14, fontSize: "clamp(26px, 3.6vw, 38px)" }}>
            Ayurveda done with the discipline it deserves.
          </h2>
          <p style={{ marginTop: 16, color: "var(--muted)", fontSize: 16, maxWidth: 520 }}>
            Sowik Wellness was built around one idea: home service shouldn't mean
            a diluted experience. Every therapy on our menu is delivered the way
            it's meant to be — with the right oils, the right pressure, and a
            therapist who knows the difference.
          </p>

          <div className="split-list">
            {POINTS.map((point) => {
              const Icon = point.icon;
              return (
                <div className="split-list-item" key={point.title}>
                  <span className="icon">
                    <Icon size={17} />
                  </span>
                  <div>
                    <b>{point.title}</b>
                    <p>{point.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
