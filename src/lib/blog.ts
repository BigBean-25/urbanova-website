export type BlogBlock = { type: "p" | "h2"; text: string };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  imageAlt: string;
  content: BlogBlock[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "choosing-a-tech-stack-for-your-first-product",
    title: "How to Choose a Tech Stack for Your Startup's First Product",
    excerpt:
      "The tech stack you pick early on is hard to undo later. Here's how we think about the decision with early-stage teams.",
    category: "Build & Consult",
    date: "2026-07-28",
    readTime: "5 min read",
    image: "/images/stock/planning-whiteboard.jpg",
    imageAlt: "Hand pointing at app wireframes pinned to a planning wall",
    content: [
      {
        type: "p",
        text: "Every early-stage founder eventually asks the same question: what should we actually build this on? It feels like a huge decision, and in some ways it is — but the mistake we see most often isn't picking the \"wrong\" framework. It's spending three weeks debating options that would all have worked fine.",
      },
      { type: "h2", text: "Optimize for how fast you can learn, not for scale you don't have yet" },
      {
        type: "p",
        text: "At the first-product stage, your biggest risk usually isn't technical — it's building the wrong thing. Choose tools that let you ship, get real usage, and change direction quickly. Popular, well-documented frameworks (think Next.js, Rails, Django) exist for a reason: more Stack Overflow answers, more available developers, fewer surprises.",
      },
      {
        type: "p",
        text: "Save the exotic, highly scalable architecture for the problem you'll have once you actually have scale. A monolith that's easy to reason about will outperform a beautifully decomposed microservices architecture nobody on your two-person team can operate.",
      },
      { type: "h2", text: "Hire (or partner) for the stack, not the other way around" },
      {
        type: "p",
        text: "If you already have a technical co-founder or a development partner with deep expertise in a particular ecosystem, that's a legitimate input into the decision — the fastest stack is often the one your team already knows well, even if it's not the newest one.",
      },
      { type: "h2", text: "Three questions worth answering before you write any code" },
      {
        type: "p",
        text: "What does the product actually need to do on day one? What's the realistic budget and timeline to get there? And who is going to maintain this in a year — you, an in-house hire, or an outside team? The answers usually narrow the field to two or three sane choices, at which point the \"right\" one is whichever gets you to a working product fastest.",
      },
    ],
  },
  {
    slug: "signs-your-software-needs-modernizing",
    title: "5 Signs It's Time to Modernize Your Legacy Software",
    excerpt:
      "Slow releases, brittle integrations, and a team afraid to touch the codebase — the warning signs are usually visible long before a rewrite becomes urgent.",
    category: "Build & Consult",
    date: "2026-08-02",
    readTime: "6 min read",
    image: "/images/stock/coding.jpg",
    imageAlt: "Close-up of code on a screen",
    content: [
      {
        type: "p",
        text: "\"Legacy\" doesn't just mean old. Plenty of ten-year-old systems are still perfectly healthy. Legacy, in the sense that actually matters, means a system your team is afraid to change. Here are the signals we look for.",
      },
      { type: "h2", text: "1. Every release feels risky" },
      {
        type: "p",
        text: "If shipping a small feature requires an all-hands testing session and everyone holds their breath after deploy, that's not a process problem — it's a sign the codebase has accumulated more hidden coupling than anyone fully understands anymore.",
      },
      { type: "h2", text: "2. New hires take months to become productive" },
      {
        type: "p",
        text: "Healthy codebases are learnable. If a competent engineer needs three months before they can ship independently, the system is likely relying on tribal knowledge instead of clear structure.",
      },
      { type: "h2", text: "3. You're paying a growing \"integration tax\"" },
      {
        type: "p",
        text: "Every new tool, API, or partner integration takes noticeably longer than it should, because the system wasn't built with clean boundaries. This tax compounds — each new integration makes the next one harder.",
      },
      { type: "h2", text: "4. Performance problems get patched, not fixed" },
      {
        type: "p",
        text: "Caching layers bolted on top of caching layers, database indexes added reactively after an incident — these are signs of firefighting rather than addressing root causes.",
      },
      { type: "h2", text: "5. The people who understand it are one resignation away from leaving" },
      {
        type: "p",
        text: "This is the most urgent one. If critical knowledge lives in one or two people's heads instead of documentation and clean code, that's a business continuity risk, not just a technical debt line item.",
      },
      {
        type: "p",
        text: "Modernizing doesn't always mean a full rewrite — often it means incrementally carving out the riskiest parts of the system first. The right approach depends entirely on what's actually broken, which is why this is worth an honest audit before committing to a plan.",
      },
    ],
  },
  {
    slug: "brand-refresh-vs-rebrand",
    title: "Brand Refresh vs. Rebrand: How to Know Which One You Need",
    excerpt:
      "Not every brand problem needs a new logo. Here's how to tell whether you need a refresh, a full rebrand, or neither.",
    category: "Design & Brand",
    date: "2026-08-05",
    readTime: "4 min read",
    image: "/images/stock/brand-mockup.jpg",
    imageAlt: "Blank stationery mockup on a desk",
    content: [
      {
        type: "p",
        text: "\"Our brand feels dated\" is one of the most common things we hear — and it's rarely as simple as it sounds. Before reaching for a new logo, it's worth being precise about what's actually not working.",
      },
      { type: "h2", text: "A refresh is usually the right call when..." },
      {
        type: "p",
        text: "The core identity — name, positioning, target audience — still holds up, but the execution feels stale: dated typography, an inconsistent color palette, visuals that don't match how the company has grown. A refresh tightens the existing system without starting over: updated type, a cleaner logo mark, consistent templates across every touchpoint.",
      },
      { type: "h2", text: "A full rebrand is worth considering when..." },
      {
        type: "p",
        text: "The business itself has fundamentally changed — a pivot in what you sell, who you sell to, or how you position against competitors — and the existing brand actively works against the new story. If your name or visual identity is actively confusing customers about what you do, that's a rebrand conversation, not a refresh.",
      },
      { type: "h2", text: "Sometimes the answer is neither" },
      {
        type: "p",
        text: "If the brand itself is fine but marketing execution is inconsistent — different fonts on every landing page, a logo that gets stretched and recolored depending on who's making the slide — the fix is a style guide and some internal discipline, not new design work at all.",
      },
      {
        type: "p",
        text: "The honest first step is always the same: get clear on what's actually broken before deciding what to fix.",
      },
    ],
  },
  {
    slug: "why-visual-consistency-matters-more-than-a-fancy-logo",
    title: "Why Consistent Visual Identity Matters More Than a Fancy Logo",
    excerpt:
      "A great logo used inconsistently is worse than a simple one used everywhere the same way. Consistency is what actually builds recognition.",
    category: "Design & Brand",
    date: "2026-08-06",
    readTime: "4 min read",
    image: "/images/stock/design-workspace.jpg",
    imageAlt: "Graphic designer's workspace with sketches and a laptop",
    content: [
      {
        type: "p",
        text: "Founders often want their logo to do more work than a logo can realistically do. The mark itself is a small part of what makes a brand recognizable — the bigger driver is whether the same colors, type, and tone show up the same way everywhere, every time.",
      },
      { type: "h2", text: "Recognition is built through repetition, not cleverness" },
      {
        type: "p",
        text: "Some of the most recognizable brands in the world have fairly simple marks. What makes them instantly identifiable is that the same visual language shows up consistently across packaging, ads, apps, and physical spaces — never reinterpreted differently by whoever happens to be designing that week.",
      },
      { type: "h2", text: "Inconsistency quietly costs you trust" },
      {
        type: "p",
        text: "When a customer sees three different logo treatments, two different color palettes, and inconsistent tone across your website, social media, and a pitch deck, it reads — even subconsciously — as a company that isn't fully in control of its own operation.",
      },
      { type: "h2", text: "A style guide is the cheapest brand investment you can make" },
      {
        type: "p",
        text: "You don't need a full rebrand to fix this. A short, clear guideline document — approved colors, type, logo usage rules, tone of voice — and enough internal discipline to actually follow it will do more for how professional your brand feels than a redesign will.",
      },
    ],
  },
  {
    slug: "seo-and-paid-ads-better-together",
    title: "SEO and Paid Ads: Why the Best Growth Strategies Use Both",
    excerpt:
      "Treating SEO and paid search as competing budgets is a common mistake — the two channels actually make each other more efficient.",
    category: "Marketing & Growth",
    date: "2026-08-08",
    readTime: "5 min read",
    image: "/images/stock/marketing-dashboard.jpg",
    imageAlt: "Marketing analytics dashboard on a screen",
    content: [
      {
        type: "p",
        text: "We regularly hear a version of \"should we do SEO or run paid ads?\" as if it's an either/or decision. In practice, the two channels solve different problems on different timelines, and running them together tends to make both more effective.",
      },
      { type: "h2", text: "Paid ads buy you data SEO can't give you quickly" },
      {
        type: "p",
        text: "SEO takes months to show results because search engines need time to trust a page. Paid search gives you keyword and conversion data almost immediately — which headlines convert, which landing pages hold attention, which offers resonate. That data can directly inform what you invest SEO effort into.",
      },
      { type: "h2", text: "SEO lowers your dependence on rising ad costs" },
      {
        type: "p",
        text: "Paid channels get more expensive as competition increases — that's structural, not something any amount of optimization fully escapes. Organic visibility built over time acts as a hedge: traffic that keeps arriving even if you pause a campaign or a platform raises its rates.",
      },
      { type: "h2", text: "Showing up twice on a results page builds more trust than once" },
      {
        type: "p",
        text: "When a brand appears in both the paid and organic results for the same search, it reads as more established and trustworthy than either placement alone — and it's measurably more likely to get the click.",
      },
      {
        type: "p",
        text: "The right split between the two depends on your sales cycle, margins, and how fast you need results — but treating them as complementary, coordinated channels rather than a budget fight tends to outperform picking just one.",
      },
    ],
  },
  {
    slug: "building-a-social-content-engine-you-can-sustain",
    title: "How to Build a Social Media Content Engine You Can Actually Sustain",
    excerpt:
      "Most social strategies fail from burnout, not bad ideas. Here's how to build a content rhythm your team can keep up for the long run.",
    category: "Marketing & Growth",
    date: "2026-08-09",
    readTime: "5 min read",
    image: "/images/stock/social-content.jpg",
    imageAlt: "Smartphone screen showing social media apps",
    content: [
      {
        type: "p",
        text: "Most social media plans don't die because the content wasn't good enough. They die because the posting schedule assumed a level of ongoing effort nobody could actually sustain past week six.",
      },
      { type: "h2", text: "Pick fewer platforms and go deeper" },
      {
        type: "p",
        text: "Trying to maintain a strong presence on five platforms at once, with no dedicated team, produces mediocre content everywhere. Pick the one or two platforms where your actual customers spend time, and commit real effort there before expanding.",
      },
      { type: "h2", text: "Batch production, not daily improvisation" },
      {
        type: "p",
        text: "Scrambling to think of something to post every single day is exhausting and it shows. A monthly or biweekly content batch — planned, shot, and scheduled in advance — produces more consistent quality and removes the daily pressure entirely.",
      },
      { type: "h2", text: "Build a repeatable format library" },
      {
        type: "p",
        text: "Instead of reinventing the format every post, develop a small set of repeatable content types — a weekly tip, a behind-the-scenes clip, a customer question answered — that your audience starts to recognize and your team can produce without starting from zero each time.",
      },
      { type: "h2", text: "Measure engagement that actually predicts business outcomes" },
      {
        type: "p",
        text: "Follower counts are a vanity metric. Track saves, shares, replies, and — most importantly — how social traffic behaves once it reaches your website. That's the feedback loop that tells you whether the content engine is actually working.",
      },
    ],
  },
];
