import React from "react";

// The signature motif for Sowik Wellness: a single herbal leaf vein that
// runs the width of the section, standing in for the "paisley" border you'd
// see on a salon site, but rooted in the plant-medicine subject instead.
export default function LeafDivider({ color = "#bd8a34" }) {
  return (
    <svg
      className="leaf-divider"
      viewBox="0 0 800 24"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M0 12 C 100 2, 160 22, 220 12 C 280 2, 340 22, 400 12 C 460 2, 520 22, 580 12 C 640 2, 700 22, 800 12"
        fill="none"
        stroke={color}
        strokeWidth="1.4"
        opacity="0.55"
      />
      {[80, 200, 320, 440, 560, 680].map((x, i) => (
        <path
          key={i}
          d={`M${x} 12 q 8 -8 16 0 q -8 8 -16 0 Z`}
          fill={color}
          opacity="0.7"
        />
      ))}
    </svg>
  );
}
