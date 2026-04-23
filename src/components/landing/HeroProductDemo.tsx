"use client";

import { useState, useMemo } from "react";
import {
  Search,
  Home,
  Inbox,
  Building2,
  Users,
  FileText,
  CheckCircle2,
  Zap,
  Plus,
  ChevronDown,
  Mic,
  Sparkles,
  AlertCircle,
  CircleDot,
  Mail,
  Calendar,
  SquareStack,
  Sun,
  Moon,
  Music2,
  MessageSquare,
  Briefcase,
  type LucideIcon,
} from "lucide-react";

/* ───────────────────────────────────────────────
   Data — sidebar items, automation rows, inbox rows
   Centralized so tab-switching is trivial to extend.
   ─────────────────────────────────────────────── */

type SidebarItem = { label: string; icon: LucideIcon };
const sidebarNav: SidebarItem[] = [
  { label: "Home", icon: Home },
  { label: "Inbox", icon: Inbox },
  { label: "Vendors", icon: Users },
  { label: "Companies", icon: Building2 },
  { label: "Approvals", icon: CheckCircle2 },
  { label: "Documents", icon: FileText },
  { label: "Automations", icon: Zap },
];

const lists = [
  { label: "Pending approvals", color: "#f5b648" },
  { label: "High-value invoices", color: "#6aa4ff" },
  { label: "Exceptions", color: "#f07178" },
];

const chats = [
  { label: "Summarize invoice thread", icon: MessageSquare },
  { label: "Draft follow-up to vendor", icon: Mail },
  { label: "Explain discrepancy", icon: AlertCircle },
];

type Automation = {
  label: string;
  time: string;
  state: "processing" | "done" | "alert";
};
const automations: Automation[] = [
  { label: "Route invoice from Acme Logistics", time: "9:12 AM", state: "processing" },
  { label: "Flag duplicate payment risk — INV-4820", time: "8:45 AM", state: "alert" },
  { label: "Sync approved invoice to NetSuite", time: "8:30 AM", state: "done" },
];

type InboxRow = {
  vendor: string;
  subject: string;
  preview: string;
  time: string;
  unreadCount?: number;
  accent?: string;
};

const inboxByTab: Record<string, InboxRow[]> = {
  Important: [
    {
      vendor: "Apex Supplies",
      subject: "Missing PO on invoice #4821",
      preview: "Hi Maya — we noticed invoice #4821 came in without a matching PO…",
      time: "2m",
      unreadCount: 3,
      accent: "#f5b648",
    },
    {
      vendor: "Northwind Labs",
      subject: "Updated payment terms — Net 45",
      preview: "Per our call, we're moving to Net 45 starting with the April batch.",
      time: "18m",
    },
    {
      vendor: "Greenline Freight",
      subject: "Approval requested for $14,820",
      preview: "Final freight batch for Q1, ready for your sign-off before EOD.",
      time: "1h",
      unreadCount: 4,
    },
    {
      vendor: "James Ko",
      subject: "Exceptions report — March",
      preview: "12 flagged, 4 resolved. Notes are in the shared doc.",
      time: "2h",
      unreadCount: 2,
    },
    {
      vendor: "Elena Costa",
      subject: "Partnership proposal — procurement",
      preview: "Proposing a pilot with our AP team starting next cycle.",
      time: "3h",
    },
    {
      vendor: "David Park, You",
      subject: "Weekly AP sync",
      preview: "David confirmed the payment run schedule — Tuesday 10am.",
      time: "5h",
      unreadCount: 5,
    },
  ],
  Exceptions: [
    {
      vendor: "Apex Supplies",
      subject: "Duplicate invoice detected",
      preview: "INV-4821 appears to match INV-4719 submitted 11 days ago.",
      time: "2m",
      accent: "#f07178",
    },
    {
      vendor: "Contoso Logistics",
      subject: "Amount mismatch vs PO",
      preview: "Invoice reads $8,420, PO authorizes $8,120. Variance 3.6%.",
      time: "14m",
      accent: "#f07178",
    },
    {
      vendor: "Pacific Print Co.",
      subject: "Tax line missing",
      preview: "No sales tax captured — required for CA jurisdiction.",
      time: "1h",
      accent: "#f5b648",
    },
  ],
  Vendors: [
    {
      vendor: "Hemlock Hardware",
      subject: "Net terms renegotiation",
      preview: "Proposing shift from Net 30 → Net 60 to align with EO quarter.",
      time: "32m",
    },
    {
      vendor: "Orbit Data Co.",
      subject: "Invoice schedule update",
      preview: "Will send monthly bundled invoice on the 1st of each month.",
      time: "2h",
    },
  ],
  "All DMs": [
    {
      vendor: "Maya Chen",
      subject: "Can you approve the Apex batch?",
      preview: "It's been sitting for two days — want me to escalate?",
      time: "9m",
      unreadCount: 1,
    },
    {
      vendor: "Sam Ortega",
      subject: "Helped with the Greenline mismatch",
      preview: "Reconciled — variance was a rounding issue on shipping.",
      time: "1h",
    },
  ],
  Other: [
    { vendor: "No-reply", subject: "Payroll summary", preview: "Weekly payroll summary is attached.", time: "yesterday" },
  ],
};

type BottomTab = { label: string; icon: LucideIcon };
const bottomTabs: BottomTab[] = [
  { label: "Home", icon: Home },
  { label: "AI Chat", icon: Sparkles },
  { label: "Email", icon: Mail },
  { label: "Document", icon: FileText },
  { label: "Task", icon: CheckCircle2 },
  { label: "Company", icon: Building2 },
  { label: "Person", icon: Users },
  { label: "Event", icon: Calendar },
  { label: "CRM", icon: SquareStack },
  { label: "Ops", icon: Briefcase },
];

/* ───────────────────────────────────────────────
   Component
   ─────────────────────────────────────────────── */

export function HeroProductDemo() {
  const [activeSidebar, setActiveSidebar] = useState("Home");
  const [activeBottom, setActiveBottom] = useState("Home");
  const [inboxTab, setInboxTab] = useState<keyof typeof inboxByTab>("Important");
  const [theme, setTheme] = useState<"dark" | "mid">("dark");

  const rows = useMemo(() => inboxByTab[inboxTab] ?? [], [inboxTab]);

  return (
    <div className="relative mx-auto w-full">
      {/* Outer "macOS window" frame */}
      <div
        className={`relative overflow-hidden rounded-[22px] border border-hairline-strong
        bg-[linear-gradient(180deg,#0a1220_0%,#06091199_100%)]
        shadow-[0_40px_120px_-40px_rgba(10,20,60,0.9),0_0_0_1px_rgba(255,255,255,0.03)_inset]`}
      >
        {/* Window chrome — traffic lights */}
        <div className="flex items-center gap-2 border-b border-hairline bg-black/30 px-4 py-2.5">
          <span className="size-2.5 rounded-full bg-[#ff5f56]" />
          <span className="size-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="size-2.5 rounded-full bg-[#27c93f]" />
        </div>

        <div className="grid grid-cols-[220px_1fr] md:grid-cols-[240px_1fr]">
          {/* ───── Sidebar ───── */}
          <aside className="border-r border-hairline bg-black/30 p-3">
            {/* Workspace switcher */}
            <button className="mb-3 flex w-full items-center gap-2 rounded-[10px] px-2 py-2 text-left transition-colors hover:bg-white/5">
              <span className="grid size-5 place-items-center rounded bg-[linear-gradient(135deg,#6aa4ff,#345699)] text-[10px] font-bold text-white">
                II
              </span>
              <span className="flex-1 text-[13px] font-medium text-foreground">
                Acme Finance
              </span>
              <ChevronDown className="size-3.5 text-muted" />
            </button>

            {/* Search */}
            <div className="mb-3 flex items-center gap-2 rounded-[10px] bg-white/[0.03] px-2 py-1.5 text-[12.5px] text-muted">
              <Search className="size-3.5" />
              <span className="flex-1">Search</span>
              <Plus className="size-3.5 opacity-60" />
            </div>

            {/* Main nav */}
            <nav className="space-y-0.5">
              {sidebarNav.map((item) => (
                <button
                  key={item.label}
                  onClick={() => setActiveSidebar(item.label)}
                  className={`flex w-full items-center gap-2 rounded-[8px] px-2 py-1.5 text-left text-[12.5px] transition-colors ${
                    activeSidebar === item.label
                      ? "bg-white/[0.08] text-foreground"
                      : "text-muted-strong hover:bg-white/[0.04]"
                  }`}
                >
                  <item.icon className="size-3.5" />
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Lists */}
            <div className="mt-4">
              <div className="mb-1 flex items-center justify-between px-2 text-[10.5px] uppercase tracking-[0.12em] text-muted/70">
                <span>Lists</span>
                <div className="flex items-center gap-1">
                  <Plus className="size-3" />
                  <ChevronDown className="size-3" />
                </div>
              </div>
              <ul className="space-y-0.5">
                {lists.map((l) => (
                  <li key={l.label}>
                    <button className="flex w-full items-center gap-2 rounded-[8px] px-2 py-1.5 text-left text-[12.5px] text-muted-strong transition-colors hover:bg-white/[0.04]">
                      <span
                        className="size-2.5 rounded-[3px]"
                        style={{ backgroundColor: l.color }}
                      />
                      {l.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Chats */}
            <div className="mt-4">
              <div className="mb-1 flex items-center justify-between px-2 text-[10.5px] uppercase tracking-[0.12em] text-muted/70">
                <span>AI shortcuts</span>
                <div className="flex items-center gap-1">
                  <Plus className="size-3" />
                  <ChevronDown className="size-3" />
                </div>
              </div>
              <ul className="space-y-0.5">
                {chats.map((c) => (
                  <li key={c.label}>
                    <button className="flex w-full items-center gap-2 rounded-[8px] px-2 py-1.5 text-left text-[12.5px] text-muted-strong transition-colors hover:bg-white/[0.04]">
                      <c.icon className="size-3.5 text-muted/80" />
                      <span className="truncate">{c.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* ───── Main pane ───── */}
          <main className="relative min-h-[620px] p-5 md:p-7">
            {/* Greeting */}
            <div className="mb-5 flex items-center gap-3">
              <div className="grid size-10 place-items-center rounded-full bg-[linear-gradient(135deg,#ffdb88_0%,#6aa4ff_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]">
                <Sun className="size-5 text-white/90" />
              </div>
              <div>
                <h3 className="font-display text-[26px] leading-tight text-foreground">
                  Good morning, Maya
                </h3>
                <p className="text-[12.5px] text-muted">
                  Thursday, April 21 · San Francisco, CA · 58°F
                </p>
              </div>
            </div>

            {/* AI input */}
            <div className="mb-4 rounded-[14px] border border-hairline bg-white/[0.025] p-3">
              <p className="px-1.5 pb-2 text-[13.5px] text-muted">
                Ask Invoice Intelligence anything…
              </p>
              <div className="flex items-center gap-2 pl-1">
                <button className="grid size-6 place-items-center rounded-md border border-hairline bg-white/5 text-muted-strong transition-colors hover:bg-white/10">
                  <Plus className="size-3.5" />
                </button>
                <div className="flex flex-wrap gap-1.5">
                  {["Extract fields", "Draft reply", "Match PO", "Find missing approvals"].map(
                    (chip) => (
                      <button
                        key={chip}
                        className="inline-flex items-center gap-1 rounded-[8px] border border-hairline bg-[rgba(106,164,255,0.08)] px-2 py-1 text-[11.5px] text-[#9dc0ff] transition-colors hover:bg-[rgba(106,164,255,0.14)]"
                      >
                        <Sparkles className="size-3" />
                        {chip}
                      </button>
                    )
                  )}
                </div>
                <div className="ml-auto">
                  <button className="grid size-7 place-items-center rounded-full border border-hairline text-muted-strong transition-colors hover:bg-white/10">
                    <Mic className="size-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Automations */}
            <div className="mb-4 rounded-[14px] border border-hairline bg-white/[0.02]">
              <div className="px-4 pt-3 pb-2 text-[11px] uppercase tracking-[0.14em] text-muted/80">
                Automations
              </div>
              <ul className="divide-y divide-hairline">
                {automations.map((a) => (
                  <li
                    key={a.label}
                    className="flex items-center gap-3 px-4 py-2.5 text-[13px] text-foreground/90 transition-colors hover:bg-white/[0.02]"
                  >
                    <StateDot state={a.state} />
                    <span className="flex-1 truncate">{a.label}</span>
                    <span className="text-[11.5px] text-muted">{a.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Inbox */}
            <div className="rounded-[14px] border border-hairline bg-white/[0.02]">
              <div className="flex items-center gap-4 border-b border-hairline px-4 pt-3 pb-3">
                <span className="text-[11px] uppercase tracking-[0.14em] text-muted/80">
                  Inbox
                </span>
                <div className="flex items-center gap-1">
                  {(Object.keys(inboxByTab) as Array<keyof typeof inboxByTab>).map(
                    (tab) => (
                      <button
                        key={tab}
                        onClick={() => setInboxTab(tab)}
                        className={`rounded-[8px] px-2.5 py-1 text-[12px] transition-colors ${
                          inboxTab === tab
                            ? "bg-white/[0.08] text-foreground"
                            : "text-muted-strong hover:bg-white/[0.04]"
                        }`}
                      >
                        {tab}
                      </button>
                    )
                  )}
                </div>
              </div>
              <ul className="divide-y divide-hairline">
                {rows.map((r) => (
                  <li
                    key={r.vendor + r.subject}
                    className="group flex items-center gap-3 px-4 py-2.5 transition-colors hover:bg-white/[0.03]"
                  >
                    <Avatar name={r.vendor} accent={r.accent} />
                    <span className="w-[130px] shrink-0 truncate text-[12.5px] font-medium text-foreground/90">
                      {r.vendor}
                    </span>
                    {r.unreadCount && (
                      <span className="grid size-4 place-items-center rounded-full bg-[rgba(106,164,255,0.18)] text-[10px] font-medium text-[#a7c7ff]">
                        {r.unreadCount}
                      </span>
                    )}
                    <span className="hidden sm:inline shrink-0 text-[12.5px] font-medium text-foreground/90">
                      {r.subject}
                    </span>
                    <span className="hidden md:inline min-w-0 flex-1 truncate text-[12.5px] text-muted">
                      {r.preview}
                    </span>
                    <span className="shrink-0 text-[11.5px] text-muted">{r.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom floating tab bar */}
            <div className="pointer-events-none absolute inset-x-0 bottom-4 flex justify-center">
              <div className="pointer-events-auto flex items-center gap-0.5 rounded-[14px] border border-hairline-strong bg-[rgba(10,14,21,0.85)] px-1.5 py-1.5 backdrop-blur-xl shadow-[0_20px_60px_-20px_rgba(0,0,0,0.7)]">
                {bottomTabs.map((t) => (
                  <button
                    key={t.label}
                    onClick={() => setActiveBottom(t.label)}
                    className={`flex items-center gap-1.5 rounded-[10px] px-2.5 py-1.5 text-[12px] transition-colors ${
                      activeBottom === t.label
                        ? "bg-white/[0.1] text-foreground"
                        : "text-muted-strong hover:bg-white/[0.05]"
                    }`}
                  >
                    <t.icon className="size-3.5" />
                    <span className="hidden lg:inline">{t.label}</span>
                  </button>
                ))}
                {/* theme toggle */}
                <button
                  onClick={() => setTheme(theme === "dark" ? "mid" : "dark")}
                  className="ml-1 grid size-7 place-items-center rounded-[10px] border border-hairline text-muted-strong transition-colors hover:bg-white/5"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? <Moon className="size-3.5" /> : <Sun className="size-3.5" />}
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Corner floats — music + theme, matching reference */}
      <div className="pointer-events-none absolute -bottom-5 right-3 flex gap-2">
        <button
          aria-label="Ambient music"
          className="pointer-events-auto grid size-9 place-items-center rounded-full border border-hairline-strong bg-[rgba(10,14,21,0.9)] text-muted-strong backdrop-blur transition-colors hover:bg-white/10"
        >
          <Music2 className="size-3.5" />
        </button>
        <button
          aria-label="Toggle theme"
          className="pointer-events-auto grid size-9 place-items-center rounded-full border border-hairline-strong bg-[rgba(10,14,21,0.9)] text-muted-strong backdrop-blur transition-colors hover:bg-white/10"
        >
          <Sun className="size-3.5" />
        </button>
      </div>
    </div>
  );
}

/* ───── small local parts ───── */

function StateDot({ state }: { state: "processing" | "done" | "alert" }) {
  const color =
    state === "done"
      ? "var(--state-green)"
      : state === "alert"
        ? "var(--state-amber)"
        : "var(--accent)";
  return (
    <span className="relative grid size-4 shrink-0 place-items-center">
      <CircleDot
        className="size-4"
        style={{ color }}
        aria-label={state}
      />
    </span>
  );
}

function Avatar({ name, accent }: { name: string; accent?: string }) {
  const initials = name
    .split(/\s+/)
    .slice(0, 2)
    .map((s) => s[0]?.toUpperCase())
    .join("");
  return (
    <span
      aria-hidden
      className="grid size-6 shrink-0 place-items-center rounded-full text-[10px] font-semibold text-white/90"
      style={{
        background:
          accent ??
          `linear-gradient(135deg, rgba(106,164,255,0.4), rgba(52,86,153,0.7))`,
      }}
    >
      {initials}
    </span>
  );
}
