import {
  Users,
  Palette,
  Gauge,
  ShieldCheck,
  Smartphone,
  MessageCircle,
  Command,
  CheckCircle2,
} from "lucide-react";
import { SectionContainer, DisplayHeading } from "./primitives";

/**
 * "Built to scale" — 5 premium cards with varied aspect ratios,
 * laid out on a responsive grid using explicit row spans on wide screens.
 */
export function ScaleSection() {
  return (
    <SectionContainer width="xl" className="py-28 md:py-36">
      <DisplayHeading className="mb-3 max-w-[820px]">
        Built to scale with you
      </DisplayHeading>
      <p className="mb-12 max-w-[620px] text-[16px] leading-[1.55] text-muted">
        Enterprise-grade infrastructure with startup speed. From your first
        invoice to your ten-thousandth, the product moves at the pace you do.
      </p>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:grid-rows-[repeat(2,minmax(0,1fr))]">
        {/* Collaboration — spans 3 cols */}
        <Card className="md:col-span-3 md:row-span-1">
          <CardHeader
            title="Collaboration"
            description="Comments, mentions, and shared approval threads so finance, ops, and vendors stay aligned."
          />
          <CollabVisual />
        </Card>

        {/* Security — spans 3 cols */}
        <Card className="md:col-span-3 md:row-span-1">
          <CardHeader
            title="Security"
            description="SOC 2 Type II, SSO, role-based access, and audit trails for every invoice action."
          />
          <SecurityVisual />
        </Card>

        {/* Speed — 2 cols */}
        <Card className="md:col-span-2 md:row-span-1">
          <CardHeader
            title="Speed"
            description="Keyboard-first. Every workflow is one shortcut away."
            compact
          />
          <SpeedVisual />
        </Card>

        {/* Style / themes — 2 cols */}
        <Card className="md:col-span-2 md:row-span-1">
          <CardHeader
            title="Style"
            description="Dark, mid, and light modes. Your team, your defaults."
            compact
          />
          <StyleVisual />
        </Card>

        {/* Mobile + extension — 2 cols */}
        <Card className="md:col-span-2 md:row-span-1">
          <CardHeader
            title="Mobile &amp; extension"
            description="Approve on the go. Capture invoices from any browser tab."
            compact
          />
          <MobileVisual />
        </Card>
      </div>
    </SectionContainer>
  );
}

/* ───── Wrappers ───── */

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <article
      className={`group relative flex flex-col justify-between overflow-hidden rounded-[20px] border border-hairline bg-[linear-gradient(180deg,#0a1020_0%,#05080f_100%)] p-5 transition-all duration-300 hover:border-hairline-strong hover:-translate-y-0.5 ${className}`}
    >
      {children}
    </article>
  );
}

function CardHeader({
  title,
  description,
  compact,
}: {
  title: string;
  description: string;
  compact?: boolean;
}) {
  return (
    <header className={compact ? "mb-4" : "mb-5"}>
      <h3
        className={`font-display ${compact ? "text-[22px]" : "text-[26px]"} leading-[1.05] tracking-[-0.01em] text-foreground`}
      >
        {title}
      </h3>
      <p className="mt-1.5 max-w-[420px] text-[13px] leading-[1.55] text-muted">
        {description}
      </p>
    </header>
  );
}

/* ───── Visuals per card ───── */

function CollabVisual() {
  return (
    <div className="relative h-[220px] overflow-hidden rounded-[14px] border border-hairline bg-black/40 p-4">
      <div className="space-y-2.5">
        <CommentRow
          name="James Ko"
          initials="JK"
          tint="#6aa4ff"
          time="2m"
          message={
            <>
              Flagging the $14,820 line on <Kw>INV-4821</Kw> — freight doesn&rsquo;t match PO.
            </>
          }
        />
        <CommentRow
          name="Maya Chen"
          initials="MC"
          tint="#f5b648"
          time="1m"
          message={
            <>
              Got it — @<span className="text-[#a7c7ff]">elena</span> can you reconcile with the corrected invoice?
            </>
          }
        />
        <CommentRow
          name="Elena Costa"
          initials="EC"
          tint="#63d4a0"
          time="just now"
          message={
            <>
              Approving now. Will sync to NetSuite tonight.
            </>
          }
          active
        />
      </div>
      <Users className="absolute right-5 top-5 size-4 text-muted/70" />
    </div>
  );
}

function SecurityVisual() {
  return (
    <div className="relative h-[220px] overflow-hidden rounded-[14px] border border-hairline bg-black/40 p-4">
      <div className="flex items-start gap-4">
        {/* shield */}
        <div className="relative">
          <div className="grid size-20 place-items-center rounded-[18px] border border-hairline bg-[linear-gradient(180deg,rgba(106,164,255,0.16)_0%,rgba(106,164,255,0.03)_100%)]">
            <ShieldCheck className="size-9 text-[#a7c7ff]" />
          </div>
          <div
            aria-hidden
            className="absolute -inset-3 -z-10 rounded-[24px] bg-[radial-gradient(circle,rgba(106,164,255,0.3)_0%,transparent_70%)] blur-lg"
          />
        </div>
        <div className="flex-1 space-y-2">
          {[
            "SOC 2 Type II",
            "ISO 27001",
            "SSO · SAML · SCIM",
            "Row-level access",
            "Field-level encryption",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 text-[12.5px] text-muted-strong">
              <CheckCircle2 className="size-3.5 text-[#63d4a0]" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SpeedVisual() {
  const keys = [
    ["⌘", "K"],
    ["A"],
    ["E"],
    ["/"],
  ];
  return (
    <div className="relative h-[200px] overflow-hidden rounded-[14px] border border-hairline bg-black/40 p-4">
      <div className="grid h-full grid-cols-4 gap-2">
        {keys.map((combo, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-between rounded-[10px] border border-hairline bg-white/[0.03] p-2"
          >
            <div className="flex items-center gap-1">
              {combo.map((k, j) => (
                <kbd
                  key={j}
                  className="grid size-6 place-items-center rounded-md border border-hairline bg-black/60 text-[10.5px] font-semibold text-foreground"
                >
                  {k}
                </kbd>
              ))}
            </div>
            <div className="text-[10px] text-muted">
              {["Command bar", "Approve", "Email reply", "Search"][i]}
            </div>
          </div>
        ))}
      </div>
      <Command className="absolute right-3 top-3 size-4 text-muted/70" />
      <Gauge className="absolute left-3 bottom-3 size-4 text-muted/70" />
    </div>
  );
}

function StyleVisual() {
  return (
    <div className="relative h-[200px] overflow-hidden rounded-[14px] border border-hairline">
      <div className="grid h-full grid-cols-3">
        <div className="bg-[#05070b] p-3">
          <div className="mb-2 text-[10px] uppercase tracking-[0.14em] text-muted/70">
            Dark
          </div>
          <div className="space-y-1.5">
            <div className="h-1.5 w-16 rounded bg-white/20" />
            <div className="h-1.5 w-12 rounded bg-white/10" />
            <div className="h-1.5 w-20 rounded bg-white/10" />
          </div>
        </div>
        <div className="bg-[#141820] p-3">
          <div className="mb-2 text-[10px] uppercase tracking-[0.14em] text-muted/70">
            Mid
          </div>
          <div className="space-y-1.5">
            <div className="h-1.5 w-16 rounded bg-white/35" />
            <div className="h-1.5 w-12 rounded bg-white/20" />
            <div className="h-1.5 w-20 rounded bg-white/20" />
          </div>
        </div>
        <div className="bg-[#f5f6f8] p-3">
          <div className="mb-2 text-[10px] uppercase tracking-[0.14em] text-neutral-500">
            Light
          </div>
          <div className="space-y-1.5">
            <div className="h-1.5 w-16 rounded bg-neutral-800" />
            <div className="h-1.5 w-12 rounded bg-neutral-500" />
            <div className="h-1.5 w-20 rounded bg-neutral-500" />
          </div>
        </div>
      </div>
      <Palette className="absolute right-3 top-3 size-4 text-muted/70" />
    </div>
  );
}

function MobileVisual() {
  return (
    <div className="relative h-[200px] overflow-hidden rounded-[14px] border border-hairline bg-black/40 p-4">
      <div className="flex h-full items-end justify-center">
        <div className="relative h-[170px] w-[90px] rounded-[14px] border border-hairline bg-[linear-gradient(180deg,#0a1220,#04070d)] p-2 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.8)]">
          <div className="mb-1.5 h-1 w-6 mx-auto rounded-full bg-white/20" />
          <div className="space-y-1">
            {["INV-4821", "INV-4820", "INV-4819"].map((x, i) => (
              <div
                key={x}
                className="flex items-center justify-between rounded-[6px] border border-hairline bg-white/[0.03] px-1.5 py-1 text-[8.5px]"
              >
                <span className="font-semibold text-foreground/90">{x}</span>
                <span className={i === 0 ? "text-[#f5b648]" : "text-muted"}>
                  {i === 0 ? "Review" : "Done"}
                </span>
              </div>
            ))}
          </div>
          <div className="absolute inset-x-3 bottom-2 grid h-6 grid-cols-3 gap-1">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`grid place-items-center rounded ${i === 0 ? "bg-white/10" : "bg-white/[0.03]"}`}
              >
                <span className="size-1.5 rounded-full bg-white/60" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Smartphone className="absolute right-3 top-3 size-4 text-muted/70" />
      <MessageCircle className="absolute left-3 top-3 size-4 text-muted/70" />
    </div>
  );
}

function CommentRow({
  name,
  initials,
  tint,
  time,
  message,
  active,
}: {
  name: string;
  initials: string;
  tint: string;
  time: string;
  message: React.ReactNode;
  active?: boolean;
}) {
  return (
    <div
      className={`flex gap-2.5 rounded-[10px] border border-hairline bg-white/[0.03] p-2.5 ${
        active ? "ring-1 ring-[rgba(106,164,255,0.25)]" : ""
      }`}
    >
      <span
        className="grid size-6 shrink-0 place-items-center rounded-full text-[10px] font-semibold text-white"
        style={{ background: `linear-gradient(135deg, ${tint}cc, ${tint}55)` }}
      >
        {initials}
      </span>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2 text-[11.5px]">
          <span className="font-semibold text-foreground">{name}</span>
          <span className="text-muted">{time}</span>
        </div>
        <p className="text-[12px] leading-snug text-foreground/80">{message}</p>
      </div>
    </div>
  );
}

function Kw({ children }: { children: React.ReactNode }) {
  return <span className="font-semibold text-[#a7c7ff]">{children}</span>;
}
