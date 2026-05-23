import {
  BrainCircuit,
  Gem,
  Mail,
  MapPin,
  MessagesSquare,
  type LucideIcon,
  Waves,
} from "lucide-react";

export const siteConfig = {
  name: "Beauteqno",
  shortName: "Beauteqno",
  title: "Beauteqno | AI Beauty Devices and Personalized Beauty SaaS",
  description:
    "Meet Beauteqno, the AI beauty-tech platform connecting intelligent beauty devices with personalized routines, recommendations, and insights.",
  openGraphDescription:
    "AI beauty devices paired with a premium SaaS layer for personalized beauty experiences.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.beauteqno.com",
  keywords: [
    "Beauteqno",
    "AI beauty",
    "beauty technology",
    "beauty devices",
    "personalized skincare",
    "beauty SaaS",
    "Toronto tech event",
  ],
  navItems: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
} as const;

export const homeContent = {
  hero: {
    badge: "Toronto launch presentation",
    title: "AI-Powered",
    accentTitle: "Beauty Solutions",
    description:
      "Intelligent beauty devices and a refined mobile layer that personalize treatments, routines, and follow-up care from the first glance.",
    primaryCtaLabel: "Join the waitlist",
    secondaryCtaLabel: "Explore the platform",
    moments: [
      "AI beauty hardware",
      "Real-time personalization",
      "Mobile ritual guidance",
      "Partner-ready software",
    ],
  },
  productArchitecture: {
    kicker: "Product architecture",
    title:
      "A visual-first landing page that explains the core product before users read the second paragraph.",
    description:
      "The hardware shape, the app surface, and the AI language now work together as one story instead of separate bullets.",
  },
  experienceLoop: {
    kicker: "Experience loop",
    title:
      "The app becomes the translation layer between treatment hardware and personal beauty behavior.",
    description:
      "This is where Beauteqno can stand out: not just beautiful devices, but a guided ritual system that feels bespoke, intelligent, and premium at the same time.",
    steps: [
      {
        step: "01",
        title: "Scan the need",
        description:
          "A client profile, treatment goals, and device context create the starting layer for intelligent care.",
      },
      {
        step: "02",
        title: "Shape the ritual",
        description:
          "The app translates that signal into settings, cadence, and a guided at-home or in-studio routine.",
      },
      {
        step: "03",
        title: "Keep improving",
        description:
          "Every use adds feedback so the system can sharpen recommendations and preserve premium continuity.",
      },
    ],
  },
  waitlist: {
    kicker: "Event conversion",
    title:
      "Give visitors a premium first impression, then capture the contact while the product story is still hot.",
    description:
      "The waitlist panel is now part of the same visual system, so the CTA feels like a natural extension of the hero rather than a separate form.",
    bullets: [
      "Use at your Toronto event to pitch investors and studio partners.",
      "Add the Neon string and submissions will flow into PostgreSQL.",
      "Swap the hero copy later without rebuilding the interaction model.",
    ],
  },
} as const;

export const aboutContent = {
  metadata: {
    title: "About | Beauteqno",
    description:
      "Learn how Beauteqno combines luxury beauty hardware with AI-powered personalization and a premium software layer.",
  },
  badge: "About Beauteqno",
  title: "Where luxury beauty treatment meets intelligent product design.",
  intro:
    "Beauteqno is building an AI-powered beauty platform that pairs premium hardware with a thoughtful mobile layer, so every device interaction feels more personal, more elegant, and more effective.",
  body:
    "We believe the future of beauty-tech is not just smarter hardware. It is a complete ritual system where the device, the data, and the software experience move together with the same level of care as a modern luxury brand.",
  pointOfView: {
    kicker: "Our point of view",
    title: "Technology should elevate the ritual, not interrupt it.",
    description:
      "Beauteqno is designed around a simple idea: users should feel the sophistication of AI in the quality of the experience, not in complicated interfaces or clinical friction.",
    visionLabel: "Product vision",
    vision:
      "Elegant devices. Adaptive routines. Software that makes beauty care feel bespoke at scale.",
  },
  principles: [
    {
      title: "Beauty-first design",
      description:
        "The product should feel aspirational before it explains a single technical detail.",
      icon: Gem,
    },
    {
      title: "Calm intelligence",
      description:
        "AI should clarify routines and improve outcomes without adding noise or intimidation.",
      icon: BrainCircuit,
    },
    {
      title: "Connected rituals",
      description:
        "Hardware, software, and aftercare guidance should work like one consistent experience.",
      icon: Waves,
    },
  ] satisfies ReadonlyArray<IconContent>,
  cta: {
    kicker: "Next step",
    title:
      "Want to see how the product story comes to life for investors, partners, or launch events?",
    href: "/contact",
    label: "Go to contact",
  },
} as const;

export const contactContent = {
  metadata: {
    title: "Contact | Beauteqno",
    description:
      "Contact Beauteqno for demos, launch-event introductions, partnership conversations, and early access interest.",
  },
  badge: "Contact Beauteqno",
  title: "Let's talk about demos, partnerships, and launch momentum.",
  description:
    "If you want to explore Beauteqno for an event, a strategic introduction, or early product access, this is the right place to start.",
  reasons: [
    {
      title: "Demo requests",
      description:
        "Use the form to request a product walkthrough, event-ready preview, or launch conversation.",
      icon: MessagesSquare,
    },
    {
      title: "Partnerships",
      description:
        "We welcome conversations with studios, operators, investors, and strategic collaborators.",
      icon: Mail,
    },
    {
      title: "Launch availability",
      description:
        "Toronto event positioning, founder intros, and follow-up coordination can all start here.",
      icon: MapPin,
    },
  ] satisfies ReadonlyArray<IconContent>,
} as const;

export type IconContent = {
  title: string;
  description: string;
  icon: LucideIcon;
};
