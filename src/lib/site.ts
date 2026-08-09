import {
  Code2,
  Lightbulb,
  Globe,
  PenTool,
  Palette,
  Video,
  ShieldCheck,
  MousePointerClick,
  Search,
  Target,
  TrendingUp,
  Share2,
  BarChart3,
  Users,
  type LucideIcon,
} from "lucide-react";

export const company = {
  name: "Urbanova Technologies Private Limited",
  shortName: "Urbanova Tech",
  cin: "U62099KA2026PTC224243",
  registrationDate: "16 July 2026",
  address: "No.28, St Bed 80ft Road, Koramangala, Bangalore South, Bangalore, Karnataka, India, 560034",
  phone: "+91 91597 72849",
  phoneHref: "tel:+919159772849",
  email: "info@urbanovatech.com",
  directors: [
    { name: "Kuppenahalli Somashekhr Vinod", din: "10437149" },
    { name: "Thirumurugan", din: "11830767" },
  ],
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/careers", label: "Careers" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export type Service = {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  whatsIncluded: string[];
  approach: string;
};

export type ServiceCategory = {
  id: string;
  title: string;
  blurb: string;
  icon: LucideIcon;
  image: string;
  imageAlt: string;
  services: Service[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: "build",
    title: "Build & Consult",
    blurb: "Software, web and app products, backed by strategic technology advice.",
    icon: Code2,
    image: "/images/stock/coding.jpg",
    imageAlt: "Close-up of code on a screen",
    services: [
      {
        slug: "custom-software-development",
        title: "Custom Software & Web/App Development",
        description:
          "Bespoke web applications, mobile apps, and software built around how your business actually operates.",
        icon: Code2,
        whatsIncluded: [
          "Requirements discovery and technical scoping",
          "Web application and mobile app development",
          "API design, integrations, and third-party services",
          "Cloud deployment and ongoing maintenance",
          "Code handover with documentation — no vendor lock-in",
        ],
        approach:
          "We start by understanding the workflow you're trying to fix or the product you're trying to ship, then break it into small releases so you see working software early instead of a big reveal at the end.",
      },
      {
        slug: "it-consulting-digital-transformation",
        title: "IT Consulting & Digital Transformation",
        description:
          "Technology strategy and roadmaps to help you modernize processes, systems, and workflows.",
        icon: Lightbulb,
        whatsIncluded: [
          "Technology and process audit",
          "Digital transformation roadmap",
          "Tool and platform selection",
          "Legacy system modernization planning",
          "Change management support for your team",
        ],
        approach:
          "We look at how your business actually runs today — not just the tech — and recommend changes that are realistic to adopt, prioritized by impact rather than novelty.",
      },
      {
        slug: "website-development",
        title: "Website Development",
        description:
          "Fast, responsive, SEO-ready websites — from marketing sites to complex web platforms.",
        icon: Globe,
        whatsIncluded: [
          "Custom design and responsive build",
          "SEO-friendly structure and performance tuning",
          "CMS setup for easy content updates",
          "Analytics and tracking configuration",
          "Hosting setup and launch support",
        ],
        approach:
          "Every site we build is fast, mobile-first, and structured so search engines and real visitors both understand it — design and technical SEO handled together, not bolted on after.",
      },
    ],
  },
  {
    id: "brand",
    title: "Design & Brand",
    blurb: "Visual identity and content that makes your brand instantly recognizable.",
    icon: Palette,
    image: "/images/stock/design-workspace.jpg",
    imageAlt: "Graphic designer's workspace",
    services: [
      {
        slug: "logo-brand-design",
        title: "Logo & Brand Design",
        description: "Distinctive logos and visual identity systems built to scale across every touchpoint.",
        icon: PenTool,
        whatsIncluded: [
          "Brand discovery and positioning",
          "Logo design and visual identity system",
          "Color palette, typography, and usage guidelines",
          "Brand style guide document",
          "Source files in every format you need",
        ],
        approach:
          "We design identities that hold up at every size and surface — a favicon, a signboard, a pitch deck — not just a logo that looks good on a single mockup.",
      },
      {
        slug: "graphic-design",
        title: "Graphic Design",
        description: "Print and digital design for campaigns, packaging, social, and everything in between.",
        icon: Palette,
        whatsIncluded: [
          "Campaign and social creative",
          "Packaging and print collateral",
          "Presentation and pitch deck design",
          "Ad creative for paid campaigns",
          "Ongoing design support on retainer",
        ],
        approach:
          "We work from your brand system so every piece — a flyer, an ad, a deck — looks like it came from the same company, not a different designer each time.",
      },
      {
        slug: "video-creation",
        title: "Video Creation",
        description: "Promotional, product, and social-first video content that gets watched and shared.",
        icon: Video,
        whatsIncluded: [
          "Concept and scripting",
          "Product and promotional video production",
          "Short-form social video edits",
          "Motion graphics and animation",
          "Platform-specific formatting (Reels, Shorts, YouTube)",
        ],
        approach:
          "We plan for where the video will actually be watched — a 6-second scroll on Instagram is a different edit than a 90-second product explainer — and shoot accordingly.",
      },
      {
        slug: "brand-management",
        title: "Brand Management",
        description: "Ongoing brand governance and creative direction to keep your identity consistent.",
        icon: ShieldCheck,
        whatsIncluded: [
          "Brand guideline enforcement across teams",
          "Creative direction for new campaigns",
          "Asset library management",
          "Vendor and agency creative oversight",
          "Periodic brand health reviews",
        ],
        approach:
          "As you add more people, tools, and vendors, your brand tends to drift. We act as the standing check that keeps everything on-brand without slowing your team down.",
      },
      {
        slug: "landing-pages-cro",
        title: "Landing Pages & CRO",
        description: "High-converting landing pages, tested and refined to turn visitors into customers.",
        icon: MousePointerClick,
        whatsIncluded: [
          "Landing page design and build",
          "Copy aligned to campaign intent",
          "A/B testing setup",
          "Conversion tracking and funnel analysis",
          "Iterative optimization based on real data",
        ],
        approach:
          "We treat a landing page as a hypothesis, not a finished product — ship it, measure what visitors actually do, and refine from there instead of guessing once and moving on.",
      },
    ],
  },
  {
    id: "growth",
    title: "Marketing & Growth",
    blurb: "Data-driven marketing to get your business found, chosen, and remembered.",
    icon: TrendingUp,
    image: "/images/stock/marketing-dashboard.jpg",
    imageAlt: "Marketing analytics dashboard on a screen",
    services: [
      {
        slug: "seo-services",
        title: "SEO Services",
        description: "Technical, on-page, and content SEO to grow qualified organic traffic sustainably.",
        icon: Search,
        whatsIncluded: [
          "Technical SEO audit and fixes",
          "Keyword research and content strategy",
          "On-page optimization",
          "Link building and authority growth",
          "Monthly ranking and traffic reporting",
        ],
        approach:
          "We prioritize fixes and content that compound over months, not tricks that spike traffic for a week and fade — sustainable organic growth takes patience, and we're upfront about that timeline.",
      },
      {
        slug: "sem-ppc",
        title: "SEM & PPC",
        description: "Search and paid campaigns managed for efficient spend and measurable return.",
        icon: Target,
        whatsIncluded: [
          "Campaign strategy and keyword planning",
          "Ad copywriting and creative",
          "Bid management and budget optimization",
          "Landing page alignment",
          "Weekly performance reporting",
        ],
        approach:
          "Every rupee of ad spend is tied to a tracked outcome. We'd rather tell you a channel isn't working and reallocate budget than keep running a campaign that looks busy but doesn't convert.",
      },
      {
        slug: "performance-marketing",
        title: "Performance Marketing",
        description: "Full-funnel paid strategy across channels, optimized against real business outcomes.",
        icon: TrendingUp,
        whatsIncluded: [
          "Cross-channel paid strategy (search, social, display)",
          "Creative testing and iteration",
          "Audience targeting and segmentation",
          "Attribution and ROI tracking",
          "Budget allocation across channels",
        ],
        approach:
          "We optimize toward the metric that actually matters to your business — signups, orders, qualified leads — rather than vanity numbers like impressions or clicks.",
      },
      {
        slug: "social-media-marketing",
        title: "Social Media Marketing",
        description: "Content, community, and campaigns tailored to each platform your audience lives on.",
        icon: Share2,
        whatsIncluded: [
          "Platform strategy and content calendar",
          "Organic content creation and scheduling",
          "Community management",
          "Paid social campaign support",
          "Monthly performance review",
        ],
        approach:
          "We pick platforms based on where your actual customers spend time, not where it's trendy to post, and build a content rhythm your team can sustain.",
      },
      {
        slug: "analytics-tracking",
        title: "Analytics & Tracking",
        description: "Clean, reliable tracking and dashboards so every decision is backed by real data.",
        icon: BarChart3,
        whatsIncluded: [
          "Analytics and tag setup (GA4, Meta Pixel, etc.)",
          "Conversion and event tracking",
          "Custom dashboard build",
          "Data accuracy audits",
          "Reporting cadence tailored to your team",
        ],
        approach:
          "Bad tracking leads to bad decisions. We set up measurement first, verify it's actually accurate, and only then start optimizing campaigns against it.",
      },
      {
        slug: "lead-management",
        title: "Lead Management",
        description: "Lead capture, scoring, and nurture systems that keep your pipeline moving.",
        icon: Users,
        whatsIncluded: [
          "Lead capture form and CRM setup",
          "Lead scoring and qualification rules",
          "Automated nurture sequences",
          "Sales and marketing handoff process",
          "Pipeline reporting",
        ],
        approach:
          "Generating leads is only half the job — we build the system that makes sure each one gets followed up with, scored, and routed instead of sitting in an inbox.",
      },
    ],
  },
];
