// Sowik Wellness — service catalog
// Each category maps to one section of the "Our Services" menu.

export const BRAND = {
  name: "Sowik Wellness",
  tagline: "Ayurveda, Delivered Home",
  city: "Indirapuram, Ghaziabad",
  address: "Gyan Khand 1, Plot No. 70, Indirapuram, Ghaziabad, Uttar Pradesh",
  phonePrimary: "+91 96901 48288",
  phonePrimaryRaw: "919690148288",
  phoneSecondary: "+91 72486 32019",
  phoneSecondaryRaw: "917248632019",
};

export const FOUNDERS = {
  names: ["Sohit Yogi", "Vikas Kumar"],
  photo: "/images/founders.webp",
  caption: "Sohit Yogi & Vikas Kumar, Founders — Sowik Wellness",
};

export const CATEGORIES = [
  {
    id: "massage",
    index: "01",
    title: "Ayurvedic Rejuvenation Massages",
    intro: "Warm herbal oils and time-tested strokes to ease fatigue and restore balance.",
    services: [
      {
        name: "Full Body Abhyanga",
        subtitle: "Full Body Massage",
        description:
          "Traditional warm herbal oil massage to boost circulation and relieve daily fatigue.",
      },
      {
        name: "Potali Massage",
        subtitle: "Herbal Pouch Therapy",
        description:
          "Heated herbal bolus massage for deep muscle relaxation and stiffness relief.",
      },
      {
        name: "Chair Massage",
        subtitle: "Quick Stress Release",
        description:
          "Focused neck, shoulder and upper-back massage for rapid stress relief.",
      },
    ],
  },
  {
    id: "cupping",
    index: "02",
    title: "Specialized Cupping Therapy",
    intro: "Deep therapeutic suction to move stagnant blood and release built-up tension.",
    services: [
      {
        name: "Hijama",
        subtitle: "Dry & Wet Cupping",
        description:
          "Advanced therapeutic cupping to improve blood flow, release deep tissue tension and flush out toxins.",
      },
    ],
  },
  {
    id: "basti",
    index: "03",
    title: "Pain Management & Basti Services",
    intro: "Medicated oil-pooling therapies that target chronic joint, back and neck pain.",
    services: [
      {
        name: "Janu Basti",
        subtitle: "Knee Pain Relief",
        description:
          "Medicated oil pooling therapy for knee joint pain and arthritis relief.",
      },
      {
        name: "Greeva Basti",
        subtitle: "Cervical Pain Relief",
        description:
          "Targeted herbal oil treatment for neck stiffness, spondylitis and cervical pain.",
      },
      {
        name: "Kati Basti",
        subtitle: "Back Pain Relief",
        description:
          "Deep oil nourishment therapy for lower backache, sciatica and spinal discomfort.",
      },
    ],
  },
  {
    id: "navel",
    index: "04",
    title: "Navel Alignment & Care",
    intro: "A traditional, gentle technique passed down through generations of Ayurvedic practice.",
    services: [
      {
        name: "Navel Displacement Care",
        subtitle: "Nabhi Sthan",
        description:
          "Traditional manual technique to restore natural navel alignment and improve digestion.",
      },
    ],
  },
  {
    id: "shatkarma",
    index: "05",
    title: "Shatkarma Detox Therapies",
    subtitleLabel: "Nadi & Body Cleansing",
    intro: "Classical cleansing rituals (Shatkarma) that clear the body's channels from within.",
    services: [
      {
        name: "Jal Neti",
        subtitle: "Nasal Irrigation",
        description: "Warm saline water irrigation to clear sinus and respiratory passages.",
      },
      {
        name: "Rubber Neti",
        subtitle: "Advanced Nasal Cleansing",
        description: "Nasal cleansing using a specialised flexible tube for clearer breathing.",
      },
      {
        name: "Kunjal Kriya",
        subtitle: "Digestive Detox",
        description: "Digestive tract detox therapy for acidity, gas and stomach cleansing.",
      },
    ],
  },
  {
    id: "yoga",
    index: "06",
    title: "Yoga & Mind-Care Therapy",
    intro: "Guided breathwork and movement to steady the mind as much as the body.",
    services: [
      {
        name: "Pranayama",
        subtitle: "Breathwork",
        description: "Guided breathing techniques to manage anxiety, stress and energy levels.",
      },
      {
        name: "Shat Yoga",
        subtitle: "Short Yoga Sessions",
        description:
          "Customised 15–30 minute guided posture sessions designed for daily wellness and flexibility.",
      },
    ],
  },
];

// Salon & Beauty at Home — a second service vertical, alongside the
// Ayurvedic therapy menu above. Modelled on the category breakdown used by
// established home-salon platforms, written in Sowik Wellness's own words.
export const BEAUTY_CATEGORIES = [
  {
    id: "hair",
    title: "Hair Services",
    image: "/images/hair-services.webp",
    description:
      "Haircuts, wash, blow-dry, styling and hair spa — done at your mirror, by a trained stylist.",
  },
  {
    id: "makeup",
    title: "Makeup at Home",
    image: "/images/make-up.webp",
    description:
      "Party, festive or everyday makeup, matched to your outfit and the occasion.",
  },
  {
    id: "mehndi",
    title: "Mehndi at Home",
    image: "/images/mehndi.webp",
    description:
      "Bridal and festive henna, from fine detailed patterns to bold traditional motifs.",
  },
  {
    id: "prebridal",
    title: "Pre-Bridal Package",
    image: "/images/pre-bridal.webp",
    description:
      "A multi-session skin and body prep plan in the weeks leading up to the wedding.",
  },
  {
    id: "salon",
    title: "Salon at Home",
    image: "/images/salon-at-home.webp",
    description:
      "Waxing, clean-ups, mani-pedi and threading — the everyday salon run, without the drive.",
  },
  {
    id: "hydrafacial",
    title: "HydraFacial & Skin Glow",
    image: "/images/hydrafacial.webp",
    description:
      "Deep-cleansing, hydrating facial treatment for an instant, visible glow.",
  },
  {
    id: "laser",
    title: "Laser Hair Reduction",
    image: "/images/laser-hair-reduction.webp",
    description:
      "Progressive laser sessions for long-term hair reduction, done by a trained technician.",
  },
  {
    id: "malegrooming",
    title: "Male Grooming",
    image: "/images/male-grooming.webp",
    description:
      "Haircuts, beard shaping, facials and skin care built around men's grooming needs.",
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Call or WhatsApp us",
    description: "Tell us the therapy you need and your preferred time slot.",
  },
  {
    step: "02",
    title: "We confirm your therapist",
    description: "A trained Ayurvedic therapist is assigned and confirmed for your address.",
  },
  {
    step: "03",
    title: "Therapy at your home",
    description: "Your therapist arrives with sanitised tools and authentic herbal oils.",
  },
  {
    step: "04",
    title: "Rest, recover, repeat",
    description: "Book a follow-up session or a wellness plan that fits your routine.",
  },
];

export const TRUST_POINTS = [
  {
    title: "Trained Therapists",
    description: "Every therapist is trained in classical Ayurvedic technique, not just spa basics.",
  },
  {
    title: "Authentic Herbal Oils",
    description: "We carry our own medicated oils and tools — nothing improvised at your door.",
  },
  {
    title: "Hygiene First",
    description: "Fresh linens and sanitised equipment for every single visit.",
  },
  {
    title: "On Your Schedule",
    description: "Morning, evening or weekend — sessions built around your day.",
  },
];
