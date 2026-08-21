import React from "react";
import { Leaf, MapPin, Phone, Mail } from "lucide-react";
import { BRAND, CATEGORIES } from "../data/services.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#top" className="brand">
              <span className="brand-mark">
                <Leaf size={18} />
              </span>
              {BRAND.name}
            </a>
            <p>
              Classical Ayurvedic massage, cupping, Basti and detox therapies,
              delivered to your home in {BRAND.city}.
            </p>
          </div>

          <div>
            <h5>Services</h5>
            <ul>
              {CATEGORIES.slice(0, 5).map((c) => (
                <li key={c.id}>
                  <a href="#services">{c.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5>Explore</h5>
            <ul>
              <li>
                <a href="#services">Ayurvedic Therapies</a>
              </li>
              <li>
                <a href="#beauty">Salon &amp; Beauty</a>
              </li>
              <li>
                <a href="#process">How It Works</a>
              </li>
              <li>
                <a href="#about">Why Sowik</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h5>Get in Touch</h5>
            <ul>
              <li style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <MapPin size={16} style={{ flexShrink: 0, marginTop: 2 }} />
                {BRAND.address}
              </li>
              <li style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <Phone size={16} />
                <a href={`tel:${BRAND.phonePrimaryRaw}`}>{BRAND.phonePrimary}</a>
              </li>
              <li style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <Phone size={16} />
                <a href={`tel:${BRAND.phoneSecondaryRaw}`}>{BRAND.phoneSecondary}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</span>
          <span>Serving Indirapuram &amp; Ghaziabad NCR</span>
        </div>
      </div>
    </footer>
  );
}
