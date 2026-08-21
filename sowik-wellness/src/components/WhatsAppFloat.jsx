import React from "react";
import { MessageCircle } from "lucide-react";
import { BRAND } from "../data/services.js";

export default function WhatsAppFloat() {
  const waHref = `https://wa.me/${BRAND.phonePrimaryRaw}?text=${encodeURIComponent(
    "Hi Sowik Wellness, I'd like to book a home therapy session."
  )}`;

  return (
    <a
      href={waHref}
      target="_blank"
      rel="noreferrer"
      className="wa-float"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={26} />
    </a>
  );
}
