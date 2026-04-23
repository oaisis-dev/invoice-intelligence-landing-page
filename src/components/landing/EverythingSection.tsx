"use client";

import { useState } from "react";
import {
  Inbox,
  Users,
  CheckCircle2,
  Scale,
  Send,
  Paperclip,
  Clock,
  type LucideIcon,
} from "lucide-react";
import { SectionContainer, DisplayHeading } from "./primitives";

type AccordionItem = {
  id: string;
  title: string;
  icon: LucideIcon;
  body: string;
  replaces: Array<{ label: string; glyph: React.ReactNode }>;
};

const items: AccordionItem[] = [
  {
    id: "inbox",
    title: "Invoice Inbox",
    icon: Inbox,
    body: "A fast, beautiful invoice inbox with AI-powered triage, duplicate detection, and scheduled follow-ups. Every invoice gets structured extraction — line items, totals, vendor, PO, tax — in seconds. Split inbox, keyboard shortcuts, undo send, and read receipts, all designed for speed.",
    replaces: [
      { label: "Gmail", glyph: <MiniBadge>Gm</MiniBadge> },
      { label: "Shared inboxes", glyph: <MiniBadge>In</MiniBadge> },
      { label: "Slack chasing", glyph: <MiniBadge>Sl</MiniBadge> },
    ],
  },
  { id: "vendor", title: "Vendor Context", icon: Users, body: "", replaces: [] },
  { id: "approvals", title: "Approvals", icon: CheckCircle2, body: "", replaces: [] },
  { id: "recon", title: "Reconciliation", icon: Scale, body: "", replaces: [] },
];

export function EverythingSection() {
  const [open, setOpen] = useState<string>("inbox");
  const active = items.find((i) => i.id === open) ?? items[0];

  return (
    <SectionContainer width="xl" className="py-28 md:py-36">
      <DisplayHeading className="mb-3 max-w-[900px]">
        One place for every invoice workflow
      </DisplayHeading>
      <p className="mb-14 max-w-[620px] text-[16px] leading-[1.55] text-muted">
        Everything you need to receive, understand, approve, and sync invoices —
        with AI that handles the busywork for you.
      </p>

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-14">
        {/* Left — accordion */}
        <div className="flex flex-col">
          <ul className="flex flex-col">
            {items.map((item, idx) => {
              const isOpen = open === item.id;
              return (
                <li
                  key={item.id}
                  className={`border-t border-hairline ${
                    idx === items.length - 1 ? "border-b" : ""
                  }`}
                >
                  <button
                    onClick={() => setOpen(item.id)}
                    aria-expanded={isOpen}
                    className="group flex w-full items-center gap-3 py-6 text-left"
                  >
                    <item.icon
                      className={`size-5 transition-colors ${
                        isOpen ? "text-foreground" : "text-muted"
                      }`}
                    />
                    <span
                      className={`font-display text-[26px] leading-none tracking-[-0.01em] transition-colors ${
                        isOpen ? "text-foreground" : "text-muted-strong group-hover:text-foreground"
                      }`}
                    >
                      {item.title}
                    </span>
                  </button>
                  <div
                    className={`grid overflow-hidden transition-[grid-template-rows] duration-500 ease-out ${
                      isOpen ? "grid-rows-[1fr] pb-7" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="min-h-0">
                      {item.body && (
                        <p className="max-w-[460px] pl-8 text-[15px] leading-[1.6] text-muted">
                          {item.body}
                        </p>
                      )}
                      {item.replaces.length > 0 && (
                        <div className="mt-5 flex items-center gap-2 pl-8">
                          <span className="text-[12.5px] text-muted">Replaces</span>
                          <div className="flex items-center gap-1.5">
                            {item.replaces.map((r, i) => (
                              <span key={i} aria-label={r.label}>
                                {r.glyph}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Right — product visual */}
        <div className="relative">
          <div
            className="relative overflow-hidden rounded-[22px] border border-hairline-strong bg-[linear-gradient(180deg,#0a1526_0%,#050812_100%)] p-5 md:p-7
            shadow-[0_40px_100px_-30px_rgba(10,20,60,0.8)]"
          >
            <EmailThreadScene context={active.id} />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

/* ───── Right-side visual: a mock email thread + send composer ───── */

function EmailThreadScene({ context }: { context: string }) {
  return (
    <div className="space-y-3">
      <Message
        direction="out"
        name="You"
        recipient={`to ${context === "vendor" ? "Hemlock Hardware" : "Apex Supplies"}`}
        time="Apr 19"
        body={
          context === "inbox"
            ? "Hey team — reviewing INV-4821. The PO line for freight doesn't match the invoice total — $14,820 vs $14,510. Can you resend with an updated breakdown before Friday?"
            : "Flagging INV-4821 for review — line items need reconciliation against the April PO."
        }
        openCount={6}
      />
      <Message
        direction="in"
        name="Apex Supplies"
        recipient="to You"
        time="10:24 AM"
        badge="Needs Response"
        body="Apologies — attaching corrected invoice. The variance was on shipping surcharges which we've now itemized. Let me know if anything else needs to change."
      />
      <Composer />
    </div>
  );
}

function Message({
  direction,
  name,
  recipient,
  time,
  body,
  openCount,
  badge,
}: {
  direction: "in" | "out";
  name: string;
  recipient: string;
  time: string;
  body: string;
  openCount?: number;
  badge?: string;
}) {
  return (
    <div className="rounded-[14px] border border-hairline bg-white/[0.03] p-3.5">
      <div className="mb-1.5 flex items-center gap-2">
        <Avatar name={name} />
        <span className="text-[12.5px] font-semibold text-foreground">{name}</span>
        <span className="text-[12px] text-muted">{recipient}</span>
        {openCount && (
          <span className="ml-2 rounded-full border border-hairline bg-black/40 px-1.5 py-0.5 text-[10px] text-muted">
            Opened {openCount} times
          </span>
        )}
        <div className="ml-auto flex items-center gap-2">
          {badge && (
            <span className="rounded-full bg-[rgba(245,182,72,0.16)] px-2 py-0.5 text-[10.5px] font-medium text-[#f5b648]">
              {badge}
            </span>
          )}
          <span className="text-[11.5px] text-muted">{time}</span>
        </div>
      </div>
      <p className="text-[13px] leading-[1.55] text-foreground/85">{body}</p>
      {direction === "out" && (
        <div className="mt-2.5 flex items-center gap-1 text-[11.5px] text-muted">
          <span>Sent by Invoice Intelligence AI</span>
        </div>
      )}
    </div>
  );
}

function Composer() {
  return (
    <div className="rounded-[14px] border border-hairline bg-white/[0.03] p-3.5">
      <div className="mb-2 flex items-center gap-2 text-[12px] text-muted">
        <span>To</span>
        <span className="text-foreground">Apex Supplies</span>
      </div>
      <p className="mb-3 text-[13px] leading-[1.55] text-foreground/85">
        Looks great — routing the corrected invoice into the approval queue. Nice
        work on the turnaround.
      </p>
      <div className="flex items-center gap-2">
        <button className="inline-flex items-center gap-1 rounded-[10px] bg-[#6aa4ff] px-2.5 py-1.5 text-[12.5px] font-medium text-[#071022]">
          <Send className="size-3" />
          Send
        </button>
        <button className="grid size-8 place-items-center rounded-[10px] border border-hairline text-muted-strong hover:bg-white/5">
          <Paperclip className="size-3.5" />
        </button>
        <div className="ml-auto flex items-center gap-1 rounded-[10px] border border-hairline bg-white/[0.03] px-2 py-1.5 text-[11.5px] text-muted">
          <Clock className="size-3" />
          Schedule send · Tomorrow morning
        </div>
      </div>
    </div>
  );
}

function Avatar({ name }: { name: string }) {
  const i = name
    .split(/\s+/)
    .slice(0, 2)
    .map((s) => s[0]?.toUpperCase())
    .join("");
  return (
    <span className="grid size-6 place-items-center rounded-full bg-[linear-gradient(135deg,#6aa4ff,#345699)] text-[10px] font-semibold text-white">
      {i}
    </span>
  );
}

function MiniBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="grid size-6 place-items-center rounded-[7px] border border-hairline bg-white/5 text-[10.5px] font-semibold text-muted-strong">
      {children}
    </span>
  );
}
