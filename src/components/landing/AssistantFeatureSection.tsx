import {
  Send,
  Search,
  CheckCircle2,
  FileText,
  Calendar,
  UserPlus,
  DollarSign,
  ArrowRight,
} from "lucide-react";
import { SectionContainer, DisplayHeading } from "./primitives";

/**
 * Three wide image-like cards. Each shows a believable in-product UI fragment.
 */
export function AssistantFeatureSection() {
  return (
    <SectionContainer width="xl" className="py-28 md:py-36">
      <DisplayHeading className="mb-3 max-w-[820px]">
        An AI assistant that does the work for you
      </DisplayHeading>
      <p className="mb-12 max-w-[620px] text-[16px] leading-[1.55] text-muted">
        Invoice Intelligence learns your workflow and handles the busywork —
        following up with vendors, matching POs, and keeping every record in
        sync.
      </p>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        <FeatureCard
          title="Takes actions for you"
          description="Sends follow-ups, creates exceptions, assigns approvers, and schedules payment reviews — all from a single command."
          active
        >
          <ActionMenuVisual />
        </FeatureCard>
        <FeatureCard
          title="Finds anything"
          description="Searches across invoices, vendor emails, ERP entries, and PDFs to surface the exact answer — not a results page."
        >
          <SearchVisual />
        </FeatureCard>
        <FeatureCard
          title="Updates records automatically"
          description="Moves invoices through Received → Review → Approved → Synced and keeps your ERP, spreadsheets, and docs in agreement."
        >
          <PipelineVisual />
        </FeatureCard>
      </div>
    </SectionContainer>
  );
}

/* ───── Cards ───── */

function FeatureCard({
  title,
  description,
  children,
  active,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <article
      className="group relative flex flex-col rounded-[20px] border border-hairline bg-[linear-gradient(180deg,#0b1426_0%,#05080f_100%)] p-5
      transition-all duration-300 hover:border-hairline-strong hover:-translate-y-0.5 hover:shadow-[0_30px_80px_-30px_rgba(10,20,60,0.8)]"
    >
      {/* inner visual area */}
      <div className="relative mb-4 aspect-[4/3] overflow-hidden rounded-[14px] border border-hairline bg-[radial-gradient(80%_60%_at_50%_30%,rgba(106,164,255,0.18)_0%,transparent_70%),linear-gradient(180deg,#0a1020_0%,#050812_100%)]">
        {/* star texture */}
        <div className="absolute inset-0 bg-stars opacity-50" />
        <div className="relative flex h-full w-full items-center justify-center p-5">
          {children}
        </div>
      </div>

      {/* blue progress underline when active */}
      <div
        className={`mb-3 h-px w-full bg-gradient-to-r ${
          active ? "from-transparent via-[#6aa4ff]/80 to-transparent" : "from-transparent via-hairline to-transparent"
        }`}
      />

      <h3 className="text-[15.5px] font-semibold text-foreground">{title}</h3>
      <p className="mt-1.5 text-[13.5px] leading-[1.55] text-muted">
        {description}
      </p>
    </article>
  );
}

/* ───── Visuals inside each card ───── */

function ActionMenuVisual() {
  const actions = [
    { icon: Send, label: "Send follow-up" },
    { icon: CheckCircle2, label: "Create exception" },
    { icon: UserPlus, label: "Assign approver" },
    { icon: Calendar, label: "Schedule payment review" },
    { icon: Search, label: "Search vendors" },
    { icon: FileText, label: "Write summary" },
  ];
  return (
    <div className="w-full max-w-[260px] space-y-3">
      <div className="rounded-[10px] border border-hairline bg-black/60 p-1.5 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)]">
        {actions.map((a, i) => (
          <div
            key={a.label}
            className={`flex items-center gap-2 rounded-[6px] px-2 py-1.5 text-[12px] ${
              i === 0 ? "bg-[rgba(106,164,255,0.14)] text-[#a7c7ff]" : "text-muted-strong"
            }`}
          >
            <a.icon className="size-3.5" />
            {a.label}
          </div>
        ))}
      </div>
      <div className="rounded-[10px] border border-hairline bg-white/[0.03] px-2.5 py-2">
        <div className="text-[11px] text-muted">Ask anything…</div>
        <div className="mt-1.5 flex items-center gap-1.5">
          <span className="rounded-md bg-[rgba(106,164,255,0.14)] px-1.5 py-0.5 text-[10px] text-[#a7c7ff]">
            ⚡ Skills
          </span>
          <div className="ml-auto grid size-5 place-items-center rounded-full bg-white/10 text-muted-strong">
            <ArrowRight className="size-3" />
          </div>
        </div>
      </div>
    </div>
  );
}

function SearchVisual() {
  return (
    <div className="w-full max-w-[260px] space-y-2">
      <div className="rounded-[10px] border border-hairline bg-white/[0.035] p-2.5">
        <p className="text-[12px] leading-snug text-foreground/90">
          What did Apex say about the variance on INV-4821?
        </p>
      </div>
      <div className="rounded-[10px] border border-hairline bg-white/[0.035] p-2.5">
        <div className="flex items-center gap-2">
          <span className="grid size-5 place-items-center rounded-full bg-[linear-gradient(135deg,#f5b648,#d47a1e)] text-[9px] font-bold text-white">
            AS
          </span>
          <span className="text-[11.5px] font-semibold text-foreground">
            Apex Supplies
          </span>
          <span className="text-[10.5px] text-muted">Supplier · Net 30</span>
        </div>
        <p className="mt-1.5 pl-7 text-[11px] text-muted">
          Re: Invoice #4821 variance
        </p>
        <p className="pl-7 text-[10.5px] text-muted/70">
          From billing@apex.co · 2h ago
        </p>
      </div>
      <div className="rounded-[10px] border border-hairline bg-white/[0.035] p-2.5">
        <div className="flex items-center gap-2 text-[11.5px] font-semibold text-foreground">
          <FileText className="size-3.5 text-muted" />
          Approval thread — Q1 freight
        </div>
        <p className="mt-1 pl-5 text-[10.5px] text-muted">
          Document · 3 linked invoices
        </p>
      </div>
    </div>
  );
}

function PipelineVisual() {
  const stages = [
    { label: "Received", count: 24, tone: "#6aa4ff" },
    { label: "Review", count: 11, tone: "#f5b648" },
    { label: "Approved", count: 38, tone: "#63d4a0" },
  ];
  return (
    <div className="flex w-full gap-2">
      {stages.map((s) => (
        <div
          key={s.label}
          className="flex-1 rounded-[10px] border border-hairline bg-white/[0.035] p-2.5"
        >
          <div className="flex items-center gap-1.5">
            <span
              className="size-2 rounded-full"
              style={{ backgroundColor: s.tone }}
            />
            <span className="text-[10.5px] uppercase tracking-[0.14em] text-muted/80">
              {s.label}
            </span>
          </div>
          <div className="mt-2 space-y-1.5">
            {Array.from({ length: 2 }).map((_, i) => (
              <div
                key={i}
                className="rounded-md border border-hairline bg-black/40 px-1.5 py-1"
              >
                <div className="flex items-center justify-between text-[10px]">
                  <span className="font-semibold text-foreground/85">
                    INV-48{s.count - i * 2}
                  </span>
                  <DollarSign className="size-2.5 text-muted" />
                </div>
                <div className="text-[9.5px] text-muted">
                  {s.label === "Approved"
                    ? "Synced → NetSuite"
                    : s.label === "Review"
                      ? "Needs approver"
                      : "New from Gmail"}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
