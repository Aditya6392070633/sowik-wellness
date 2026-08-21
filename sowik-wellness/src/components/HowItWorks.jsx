import React from "react";
import { PROCESS_STEPS } from "../data/services.js";

export default function HowItWorks() {
  return (
    <section className="section" id="process" style={{ background: "var(--surface)" }}>
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">How It Works</span>
          <h2>From call to consultation, in four steps.</h2>
        </div>

        <div className="process-rail">
          {PROCESS_STEPS.map((s) => (
            <div className="process-step" key={s.step}>
              <span className="step-num">{s.step}</span>
              <h4>{s.title}</h4>
              <p>{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
