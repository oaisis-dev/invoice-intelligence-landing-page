"use client";

import { useState } from "react";
import {
  Sparkles,
  Zap,
  Mail,
  Search,
  FileText,
  TrendingUp,
  Clock,
  Filter,
  MessageSquare,
  Link2,
  AlertCircle,
  GitCompareArrows,
  ClipboardCheck,
  type LucideIcon,
} from "lucide-react";
import { SectionContainer, DisplayHeading } from "./primitives";

const tabs = [
  "Featured",
  "AP Teams",
  "Controllers",
  "Startups",
  "Enterprise",
  "Vendors",
  "Email & Messaging",
  "ERP",
];

type Automation = {
  title: string;
  description: string;
  icon: LucideIcon;
  badges: string[];
};

const cards: Automation[] = [
  {
    title: "Morning Exceptions Briefing",
    description:
      "Daily digest of invoices that need attention — duplicates, PO mismatches, and stale approvals.",
    icon: Sparkles,
    badges: ["Gmail", "Slack", "NetSuite"],
  },
  {
    title: "Follow-up Finder",
    description:
      "Spots vendors you haven't heard from in N days and drafts the nudge for you.",
    icon: Clock,
    badges: ["Gmail", "Outlook"],
  },
  {
    title: "Inbox Triage",
    description:
      "Sorts incoming invoices by vendor priority, routes exceptions, and archives the rest.",
    icon: Filter,
    badges: ["Gmail", "HubSpot"],
  },
  {
    title: "Weekly AP Recap",
    description:
      "Generates a clean summary of invoices processed, approved, exceptions, and cash out.",
    icon: TrendingUp,
    badges: ["Slack", "Notion"],
  },
  {
    title: "Payment Run Prep",
    description:
      "Builds the approved-invoice batch for your next payment run and syncs it to your ERP.",
    icon: ClipboardCheck,
    badges: ["NetSuite", "QuickBooks"],
  },
  {
    title: "Vendor Research",
    description:
      "One-click dossier on a vendor — their terms, past issues, and recent contact history.",
    icon: Search,
    badges: ["Gmail", "Web"],
  },
];

const skills: Array<{ label: string; icon: LucideIcon }> = [
  { label: "Prep me", icon: Sparkles },
  { label: "Draft email", icon: Mail },
  { label: "Research vendor", icon: Search },
  { label: "Summarize thread", icon: MessageSquare },
  { label: "Match PO", icon: Link2 },
  { label: "Find duplicates", icon: AlertCircle },
  { label: "Explain discrepancy", icon: GitCompareArrows },
  { label: "What changed", icon: FileText },
  { label: "Flag exceptions", icon: Zap },
];

export function AutomationSection() {
  const [active, setActive] = useState<string>("Featured");

  return (
    <SectionContainer width="xl" className="py-28 md:py-36">
      <DisplayHeading className="mb-3 max-w-[900px]">
        Skills and automations set finance in motion
      </DisplayHeading>
      <p className="mb-10 max-w-[640px] text-[16px] leading-[1.55] text-muted">
        Compose AI actions into automations that run on a schedule, on a trigger,
        or on demand — spanning email, ERP, and your team&rsquo;s shared context.
      </p>

      {/* Category tabs */}
      <div className="mb-10 flex flex-wrap gap-1.5">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`rounded-full border border-hairline px-3.5 py-1.5 text-[12.5px] transition-colors ${
              active === tab
                ? "bg-white/[0.08] text-foreground border-hairline-strong"
                : "bg-white/[0.02] text-muted-strong hover:bg-white/[0.05] hover:text-foreground"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Automation cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((c) => (
          <article
            key={c.title}
            className="group relative overflow-hidden rounded-[18px] border border-hairline bg-white/[0.025] p-5 transition-all duration-300 hover:border-hairline-strong hover:-translate-y-0.5 hover:bg-white/[0.04]"
          >
            <div className="mb-4 flex items-center gap-2">
              <span className="grid size-8 place-items-center rounded-[10px] border border-hairline bg-[rgba(106,164,255,0.08)]">
                <c.icon className="size-4 text-[#a7c7ff]" />
              </span>
              <span className="text-[10.5px] uppercase tracking-[0.14em] text-muted/80">
                Automation
              </span>
            </div>
            <h3 className="text-[15px] font-semibold text-foreground">{c.title}</h3>
            <p className="mt-1.5 text-[13px] leading-[1.55] text-muted">
              {c.description}
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-1.5">
              {c.badges.map((b) => (
                <span
                  key={b}
                  className="rounded-md border border-hairline bg-black/40 px-1.5 py-0.5 text-[10.5px] text-muted-strong"
                >
                  {b}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      {/* Skill chips */}
      <div className="mt-12">
        <p className="mb-4 text-[12.5px] uppercase tracking-[0.14em] text-muted/80">
          Composable skills
        </p>
        <div className="flex flex-wrap gap-2">
          {skills.map((s) => (
            <button
              key={s.label}
              className="group inline-flex items-center gap-1.5 rounded-[10px] border border-hairline bg-white/[0.03] px-3 py-2 text-[13px] text-muted-strong transition-colors hover:bg-white/[0.07] hover:text-foreground"
            >
              <s.icon className="size-3.5 text-[#a7c7ff]" />
              {s.label}
            </button>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
