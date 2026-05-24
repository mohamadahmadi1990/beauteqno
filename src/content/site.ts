import {
  Bot,
  BrainCircuit,
  Building2,
  Cpu,
  FlaskConical,
  Gem,
  Mail,
  MapPin,
  MessagesSquare,
  MonitorSmartphone,
  ScanFace,
  Sparkles,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";

export type NavItem = {
  href: string;
  label: string;
};

export type IconContent = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type FeatureGroup = {
  label: string;
  title: string;
  icon: LucideIcon;
  items: readonly string[];
};

export type StackGroup = {
  label: string;
  items: readonly string[];
};

type PageMetadataContent = {
  title: string;
  description: string;
};

type HeroContent = {
  badge: string;
  title: string;
  supportingText: string;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
  moments: readonly string[];
};

type IntegratedPillarsContent = {
  kicker: string;
  title: string;
  description: string;
  quote: string;
  pillars: readonly IconContent[];
};

type AiCompanionContent = {
  kicker: string;
  title: string;
  description: string;
  groups: readonly FeatureGroup[];
};

type InfrastructureContent = {
  kicker: string;
  title: string;
  description: string;
  groups: readonly StackGroup[];
};

type WaitlistContent = {
  kicker: string;
  title: string;
  description: string;
  bullets: readonly string[];
};

type AboutContent = {
  metadata: PageMetadataContent;
  badge: string;
  title: string;
  intro: string;
  body: string;
  pointOfView: {
    kicker: string;
    title: string;
    description: string;
    visionLabel: string;
    vision: string;
  };
  principles: readonly IconContent[];
  cta: {
    kicker: string;
    title: string;
    href: string;
    label: string;
  };
};

type ContactContent = {
  metadata: PageMetadataContent;
  badge: string;
  title: string;
  description: string;
  reasons: readonly IconContent[];
};

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] satisfies readonly NavItem[];

const integratedPillarItems = [
  {
    title: "AI Hardware Mask",
    description:
      "A precision beauty device integrating light therapy, micro-current, thermal zones, and real-time skin sensors - controlled and personalized by AI.",
    icon: ScanFace,
  },
  {
    title: "SaaS Platform",
    description:
      "Web and mobile products that pair with the mask, delivering AI-driven routines, progress tracking, guided care, and always-on digital continuity.",
    icon: MonitorSmartphone,
  },
  {
    title: "Clinic Network",
    description:
      "In-person clinics offering specialist consultations, massage therapy, guided face yoga, and advanced treatments - all connected back to the app.",
    icon: Building2,
  },
  {
    title: "Premium Products",
    description:
      "Science-backed skincare, supplements, and tools designed to complement treatments and extend results beyond the session.",
    icon: FlaskConical,
  },
] satisfies readonly IconContent[];

const aiCompanionGroups = [
  {
    label: "Core",
    title: "Mask Control & AI Analysis",
    icon: ScanFace,
    items: [
      "Real-time skin scanning and scoring",
      "AI treatment customization",
      "Before-and-after photo tracking",
      "Progress timeline and insights",
      "Automated session scheduling",
      "Skin health trend reports",
    ],
  },
  {
    label: "AI Core",
    title: "Intelligent Coaching",
    icon: Bot,
    items: [
      "Personalized daily routine builder",
      "Push notifications and reminders",
      "Step-by-step treatment instructions",
      "30-day transformation challenges",
      "Product recommendations by skin type",
      "AI chat assistant powered by GPT-4o",
    ],
  },
  {
    label: "Premium",
    title: "Holistic Wellness",
    icon: Sparkles,
    items: [
      "Complete diet and nutrition program",
      "Supplement recommendations",
      "Hydration and sleep tracking integrations",
      "Face yoga guided video library",
      "Facial massage tutorials",
      "Stress management and skin correlation",
    ],
  },
  {
    label: "Community",
    title: "Content & Consulting",
    icon: MessagesSquare,
    items: [
      "Live video consulting with specialists",
      "Expert-curated video content library",
      "Clinic appointment booking",
      "Community and progress sharing",
      "Specialist Q&A sessions",
      "Personalized email digests",
    ],
  },
] satisfies readonly FeatureGroup[];

const infrastructureGroups = [
  {
    label: "AI / ML",
    items: [
      "GPT-4o reasoning",
      "Gemini Vision image analysis",
      "OpenAI Realtime API",
      "Custom fine-tuned skin model",
      "LangChain orchestration",
    ],
  },
  {
    label: "Mobile app",
    items: [
      "React Native for iOS and Android",
      "Expo",
      "BLE SDK for mask connectivity",
      "Push notifications",
      "Video player integration",
    ],
  },
  {
    label: "Web SaaS",
    items: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Vercel Edge Runtime",
      "Motion-rich interfaces",
    ],
  },
  {
    label: "Backend / API",
    items: [
      "Node.js services",
      "PostgreSQL",
      "Redis caching",
      "ORM-backed data modeling",
      "GraphQL and REST delivery",
    ],
  },
  {
    label: "Payments & commerce",
    items: [
      "Subscriptions",
      "D2C product sales",
      "Clinic booking integrations",
      "Digital agreements and onboarding",
    ],
  },
  {
    label: "Hardware firmware",
    items: [
      "Embedded C / RTOS stack",
      "BLE-enabled device control",
      "OTA update delivery",
      "On-device inference support",
    ],
  },
] satisfies readonly StackGroup[];

const aboutPrinciples = [
  {
    title: "Intelligent hardware",
    description:
      "Beauty devices should sense, adapt, and personalize rather than deliver the same session to everyone.",
    icon: Cpu,
  },
  {
    title: "Connected software",
    description:
      "The digital layer should translate treatment data into routines, recommendations, scheduling, and measurable progress.",
    icon: BrainCircuit,
  },
  {
    title: "Clinical continuity",
    description:
      "In-clinic expertise and at-home care should feel like one journey instead of separate touchpoints.",
    icon: Stethoscope,
  },
  {
    title: "Premium reinforcement",
    description:
      "Skincare, supplements, education, and support should extend the value of every treatment beyond the device itself.",
    icon: Gem,
  },
] satisfies readonly IconContent[];

const contactReasons = [
  {
    title: "Early access",
    description:
      "Request updates, demos, and launch information for the connected beauty platform.",
    icon: Sparkles,
  },
  {
    title: "Clinic & specialist partnerships",
    description:
      "Connect with us about consultations, treatment integration, and service-layer collaboration.",
    icon: MapPin,
  },
  {
    title: "Strategic collaboration",
    description:
      "We welcome conversations with investors, operators, distributors, and ecosystem partners.",
    icon: Mail,
  },
] satisfies readonly IconContent[];

export const siteConfig = {
  name: "Beauteqno",
  shortName: "Beauteqno",
  title: "Beauteqno | Intelligent Beauty Ecosystem",
  description:
    "Beauteqno is an integrated beauty ecosystem combining AI-powered hardware, intelligent software, in-clinic services, and premium skincare.",
  openGraphDescription:
    "AI-powered beauty hardware, intelligent software, in-clinic services, and premium skincare in one connected ecosystem.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.beauteqno.com",
  keywords: [
    "Beauteqno",
    "AI beauty",
    "beauty ecosystem",
    "beauty technology",
    "AI skincare",
    "beauty hardware",
    "intelligent beauty companion",
  ],
  navItems,
} as const;

export const homeContent = {
  hero: {
    badge: "",
    title: "AI Powered Beauty Bundle",
    supportingText:
      "An integrated beauty ecosystem combining AI-powered hardware, intelligent software, in-clinic services, and premium skincare - engineered to transform how people experience facial care.",
    primaryCtaLabel: "Request early access",
    secondaryCtaLabel: "Explore the ecosystem",
    moments: [
      "AI-powered hardware",
      "Intelligent software",
      "In-clinic services",
      "Premium skincare",
    ],
  } satisfies HeroContent,
  integratedPillars: {
    kicker: "Integrated ecosystem",
    title: "Four integrated pillars. One seamless journey.",
    description:
      "Each pillar reinforces the others, creating a flywheel of data, loyalty, and outcomes that no single-product beauty company can replicate.",
    quote:
      '"The next winner in beauty will not be a cream or a clinic - it will be the brand that owns the full stack: data, device, experience, and outcome."',
    pillars: integratedPillarItems,
  } satisfies IntegratedPillarsContent,
  aiCompanion: {
    kicker: "Your AI beauty companion",
    title:
      "A unified web and mobile platform acting as a personal beauty coach, nutritionist, therapist, and consultant.",
    description:
      "Powered by AI and synced with mask data, the platform turns every session into a smarter routine, a clearer plan, and a more measurable journey.",
    groups: aiCompanionGroups,
  } satisfies AiCompanionContent,
  infrastructure: {
    kicker: "Infrastructure",
    title: "Built on best-in-class infrastructure.",
    description:
      "A modular, API-first architecture designed for rapid iteration, multi-platform delivery, and AI model flexibility across hardware, software, and services.",
    groups: infrastructureGroups,
  } satisfies InfrastructureContent,
  waitlist: {
    kicker: "Early access",
    title: "Start the conversation around access, pilots, and partnerships.",
    description:
      "Whether you are exploring clinic deployment, strategic collaboration, or personal early access, Beauteqno is being built as a full-stack beauty platform with long-term continuity at its core.",
    bullets: [
      "Request product updates, demos, or partner conversations.",
      "Share whether you are a clinic, investor, brand, operator, or early adopter.",
      "Join the next wave of intelligent beauty experiences.",
    ],
  } satisfies WaitlistContent,
} as const;

export const aboutContent = {
  metadata: {
    title: "About | Beauteqno",
    description:
      "Discover how Beauteqno connects AI-powered hardware, intelligent software, clinics, and skincare into one beauty ecosystem.",
  },
  badge: "About Beauteqno",
  title: "Beauty is no longer a single product. It is an intelligent ecosystem.",
  intro:
    "Beauteqno is building an integrated beauty platform where AI-powered hardware, intelligent software, in-clinic services, and premium skincare work as one connected journey.",
  body:
    "Instead of treating facial care as isolated products or one-off appointments, we are designing a full-stack experience that learns from every session, personalizes every recommendation, and improves continuity across device, treatment, and outcome.",
  pointOfView: {
    kicker: "Our point of view",
    title: "The next winner in beauty will own the full stack.",
    description:
      "Not just a cream. Not just a clinic. Not just a device. The future belongs to brands that connect data, device, experience, and outcome into one intelligent loop.",
    visionLabel: "Why it matters",
    vision:
      "When hardware, software, services, and skincare reinforce one another, results improve, loyalty compounds, and beauty care becomes a guided experience rather than a disconnected routine.",
  },
  principles: aboutPrinciples,
  cta: {
    kicker: "Next step",
    title: "Want to explore partnerships, pilots, or early access with Beauteqno?",
    href: "/contact",
    label: "Go to contact",
  },
} satisfies AboutContent;

export const contactContent = {
  metadata: {
    title: "Contact | Beauteqno",
    description:
      "Contact Beauteqno about early access, clinic partnerships, strategic collaboration, and ecosystem opportunities.",
  },
  badge: "Contact Beauteqno",
  title: "Start a conversation about early access, clinics, or strategic growth.",
  description:
    "If you want to explore Beauteqno as a clinic partner, strategic collaborator, investor, operator, or early user, this is the place to begin.",
  reasons: contactReasons,
} satisfies ContactContent;
