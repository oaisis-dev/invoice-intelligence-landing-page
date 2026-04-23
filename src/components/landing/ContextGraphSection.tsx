import {
  FileText,
  Mail,
  Users,
  Database,
  Calendar,
  CheckCircle2,
  DollarSign,
  AlertCircle,
  Layers,
  Link2,
  Boxes,
  GitBranch,
  type LucideIcon,
} from "lucide-react";
import { SectionContainer, DisplayHeading } from "./primitives";

/**
 * A compositional "graph" visualization — not a real force-directed layout,
 * just floating cards with connecting SVG lines, positioned absolutely.
 */
type NodeDef = {
  id: string;
  label: string;
  sub: string;
  icon: LucideIcon;
  x: number; // % horizontal
  y: number; // % vertical
  accent?: string;
  drift?: "slow" | "slower";
};

const nodes: NodeDef[] = [
  { id: "inv", label: "INV-4821", sub: "Apex Supplies · $14,820", icon: FileText, x: 48, y: 32, accent: "#6aa4ff", drift: "slow" },
  { id: "mail", label: "Vendor thread", sub: "Re: Variance clarification", icon: Mail, x: 18, y: 20, drift: "slower" },
  { id: "vendor", label: "Apex Supplies", sub: "Supplier · Net 30", icon: Users, x: 10, y: 55, accent: "#f5b648" },
  { id: "erp", label: "NetSuite entry", sub: "Journal #JE-2031 synced", icon: Database, x: 82, y: 22, accent: "#63d4a0", drift: "slow" },
  { id: "cal", label: "Payment run", sub: "Tuesday · 10:00 AM", icon: Calendar, x: 86, y: 60 },
  { id: "approve", label: "Approval task", sub: "@james · due today", icon: CheckCircle2, x: 52, y: 70, drift: "slower" },
  { id: "pay", label: "Payment terms", sub: "Net 30 → $14,820", icon: DollarSign, x: 24, y: 80 },
  { id: "except", label: "Exception flag", sub: "Shipping line variance", icon: AlertCircle, x: 70, y: 82, accent: "#f07178" },
];

/** Edges are id-id pairs. */
const edges: Array<[string, string]> = [
  ["inv", "mail"],
  ["inv", "vendor"],
  ["inv", "erp"],
  ["inv", "approve"],
  ["inv", "except"],
  ["approve", "cal"],
  ["vendor", "pay"],
  ["except", "erp"],
];

export function ContextGraphSection() {
  return (
    <SectionContainer width="xl" className="py-28 md:py-36">
      <DisplayHeading className="mb-3 max-w-[900px]">
        Powered by your team&rsquo;s financial context graph
      </DisplayHeading>
      <p className="mb-12 max-w-[680px] text-[16px] leading-[1.55] text-muted">
        Invoice Intelligence unifies documents, messages, approvals, vendors, ERP
        records, and actions into a single living graph — so the right context is
        always one click away.
      </p>

      {/* Graph canvas */}
      <div className="relative h-[560px] overflow-hidden rounded-[22px] border border-hairline bg-[radial-gradient(60%_60%_at_50%_40%,rgba(106,164,255,0.14)_0%,transparent_60%),linear-gradient(180deg,#070b14_0%,#04070d_100%)]">
        <div className="absolute inset-0 bg-stars opacity-50" />

        {/* edges */}
        <svg
          aria-hidden
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="edge" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="rgba(106,164,255,0.05)" />
              <stop offset="50%" stopColor="rgba(106,164,255,0.38)" />
              <stop offset="100%" stopColor="rgba(106,164,255,0.05)" />
            </linearGradient>
          </defs>
          {edges.map(([from, to], i) => {
            const a = nodes.find((n) => n.id === from)!;
            const b = nodes.find((n) => n.id === to)!;
            return (
              <line
                key={i}
                x1={`${a.x}%`}
                y1={`${a.y}%`}
                x2={`${b.x}%`}
                y2={`${b.y}%`}
                stroke="url(#edge)"
                strokeWidth={1}
                strokeLinecap="round"
              />
            );
          })}
        </svg>

        {/* nodes */}
        {nodes.map((n) => (
          <GraphNode key={n.id} {...n} />
        ))}
      </div>

      {/* Capabilities below */}
      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
        <Capability
          icon={Link2}
          title="2,000+ integrations"
          description="ERPs, banks, email, storage, and the long tail of finance tools."
        />
        <Capability
          icon={Layers}
          title="Structured data"
          description="Every invoice becomes typed fields — vendor, totals, tax, PO, lines."
        />
        <Capability
          icon={Boxes}
          title="Custom objects"
          description="Model your own workflows on top of the graph without code."
        />
        <Capability
          icon={GitBranch}
          title="Interconnected workflows"
          description="Actions in one place ripple through every related record automatically."
        />
      </div>
    </SectionContainer>
  );
}

function GraphNode({
  id,
  label,
  sub,
  icon: Icon,
  x,
  y,
  accent,
  drift,
}: NodeDef) {
  return (
    <div
      className={`absolute -translate-x-1/2 -translate-y-1/2 ${drift === "slow" ? "drift-slow" : drift === "slower" ? "drift-slower" : ""}`}
      style={{ left: `${x}%`, top: `${y}%` }}
      data-node-id={id}
    >
      <div
        className="flex items-center gap-2.5 rounded-[12px] border border-hairline-strong bg-[rgba(10,14,21,0.85)] px-3 py-2 backdrop-blur-sm shadow-[0_10px_30px_-10px_rgba(10,20,60,0.6)]"
      >
        <span
          className="grid size-7 place-items-center rounded-[8px] border border-hairline"
          style={{
            background: accent
              ? `linear-gradient(135deg, ${accent}33, ${accent}0d)`
              : "rgba(255,255,255,0.04)",
          }}
        >
          <Icon
            className="size-3.5"
            style={{ color: accent ?? "var(--muted-strong)" }}
          />
        </span>
        <div className="leading-tight">
          <div className="text-[12.5px] font-semibold text-foreground">{label}</div>
          <div className="text-[10.5px] text-muted">{sub}</div>
        </div>
      </div>
    </div>
  );
}

function Capability({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-[16px] border border-hairline bg-white/[0.02] p-5">
      <Icon className="size-5 text-[#a7c7ff]" />
      <h4 className="mt-3 text-[14.5px] font-semibold text-foreground">{title}</h4>
      <p className="mt-1.5 text-[12.5px] leading-[1.55] text-muted">{description}</p>
    </div>
  );
}
