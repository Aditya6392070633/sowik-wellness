import React, { useState } from "react";
import { Menu, X, Phone, Leaf } from "lucide-react";
import { BRAND } from "../data/services.js";

const LINKS = [
  { href: "#services", label: "Ayurveda" },
  { href: "#beauty", label: "Salon & Beauty" },
  { href: "#process", label: "How It Works" },
  { href: "#about", label: "Why Sowik" },
  { href: "#contact", label: "Contact" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#top" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">
            <Leaf size={18} />
          </span>
          {BRAND.name}
        </a>

        <nav className="nav-links">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-cta">
          <a href={`tel:${BRAND.phonePrimaryRaw}`} className="btn btn-outline">
            <Phone size={15} />
            Call Now
          </a>
          <button
            className="nav-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${open ? "open" : ""}`}>
        {LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
        <a href={`tel:${BRAND.phonePrimaryRaw}`} className="btn btn-primary" style={{ marginTop: 14 }}>
          <Phone size={15} />
          Call {BRAND.phonePrimary}
        </a>
      </div>
    </header>
  );
}
