import React from "react";
import { ShieldCheck, Leaf, Sparkles, Clock } from "lucide-react";
import { TRUST_POINTS } from "../data/services.js";

const ICONS = [ShieldCheck, Leaf, Sparkles, Clock];

export default function TrustStrip() {
  return (
    <section className="trust-strip">
      <div className="container">
        <div className="trust-grid">
          {TRUST_POINTS.map((item, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <div className="trust-item" key={item.title}>
                <span className="icon">
                  <Icon size={18} />
                </span>
                <div>
                  <b>{item.title}</b>
                  <p>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
