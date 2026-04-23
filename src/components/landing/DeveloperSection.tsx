import { Terminal, Code2 } from "lucide-react";
import { SectionContainer, DisplayHeading } from "./primitives";

/**
 * Centered terminal window with stylized Invoice Intelligence CLI output.
 * Uses semantic spans so the coloring is predictable.
 */
export function DeveloperSection() {
  return (
    <SectionContainer width="wide" className="py-28 md:py-36">
      <div className="mx-auto max-w-[860px] text-center">
        <DisplayHeading className="mb-3">
          Designed for agents and engineers
        </DisplayHeading>
        <p className="mx-auto max-w-[620px] text-[16px] leading-[1.55] text-muted">
          Typed SDKs, an inspectable CLI, and webhook-driven automation hooks — so
          your team can script around invoice workflows and agents can act on
          them.
        </p>

        {/* Language pills */}
        <div className="mt-8 flex items-center justify-center gap-2">
          <Pill icon={<IconTs />} label="TypeScript" />
          <Pill icon={<IconPy />} label="Python" />
          <Pill icon={<Terminal className="size-3.5" />} label="CLI" />
          <Pill icon={<Code2 className="size-3.5" />} label="REST" />
        </div>
      </div>

      <div className="relative mx-auto mt-14 max-w-[980px]">
        {/* soft backlight */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10 translate-y-6 rounded-[24px] bg-[radial-gradient(50%_60%_at_50%_50%,rgba(106,164,255,0.24)_0%,rgba(106,164,255,0)_70%)] blur-2xl"
        />
        <div className="overflow-hidden rounded-[20px] border border-hairline-strong bg-[#05070c] shadow-[0_50px_120px_-40px_rgba(10,20,60,0.9)]">
          {/* chrome */}
          <div className="flex items-center gap-2 border-b border-hairline bg-black/50 px-4 py-2.5">
            <span className="size-2.5 rounded-full bg-[#ff5f56]" />
            <span className="size-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="size-2.5 rounded-full bg-[#27c93f]" />
            <span className="ml-2 text-[11.5px] text-muted">invoice-intelligence — zsh</span>
          </div>

          {/* body */}
          <pre className="m-0 overflow-x-auto px-6 py-6 font-mono text-[13.5px] leading-[1.75] text-foreground/90">
            <Line>
              <Prompt /> <Cmd>ii</Cmd> <Arg>invoices</Arg>{" "}
              <Arg>list</Arg> <Flag>--status=pending-approval</Flag>
            </Line>
            <Line>
              <Ok>✓</Ok> Found 42 invoices
            </Line>
            <Line muted>
              {"  ↳ "}
              <Kw>INV-2031</Kw>
              {"  Acme Parts           "}
              <Num>$14,820</Num>
            </Line>
            <Line muted>
              {"  ↳ "}
              <Kw>INV-2032</Kw>
              {"  Northwind Labs       "}
              <Num>$2,940</Num>
            </Line>
            <Line muted>{"  ↳ …and 40 more"}</Line>
            <Line>&nbsp;</Line>
            <Line>
              <Prompt /> <Cmd>ii</Cmd> <Arg>inbox</Arg>{" "}
              <Arg>sync</Arg> <Flag>--source=gmail</Flag>
            </Line>
            <Line>
              <Ok>✓</Ok> Synced 18 threads
            </Line>
            <Line>&nbsp;</Line>
            <Line>
              <Prompt /> <Cmd>ii</Cmd> <Arg>ai</Arg> <Arg>summarize</Arg>{" "}
              <Str>invoice-thread</Str> <Kw>inv_2031</Kw>
            </Line>
            <Line>
              <Ok>✓</Ok> Summary ready
            </Line>
            <Line muted>
              {"  Apex confirms shipping variance; PO needs update."}
            </Line>
            <Line muted>
              {"  Suggested: approve with note, sync to NetSuite."}
            </Line>
            <Line>&nbsp;</Line>
            <Line>
              <Prompt />
              <span className="blink ml-1 inline-block h-[1em] w-[0.55ch] bg-foreground align-[-0.1em]" />
            </Line>
          </pre>
        </div>
      </div>
    </SectionContainer>
  );
}

function Pill({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-hairline bg-white/[0.03] px-3 py-1 text-[12px] text-muted-strong">
      {icon}
      {label}
    </span>
  );
}

/* ───── Terminal token helpers ───── */
function Line({
  children,
  muted,
}: {
  children: React.ReactNode;
  muted?: boolean;
}) {
  return (
    <div className={muted ? "text-muted/90" : undefined}>{children}</div>
  );
}
function Prompt() {
  return <span className="text-[#63d4a0]">$</span>;
}
function Cmd({ children }: { children: React.ReactNode }) {
  return <span className="text-foreground">{children}</span>;
}
function Arg({ children }: { children: React.ReactNode }) {
  return <span className="text-[#a7c7ff]">{children}</span>;
}
function Flag({ children }: { children: React.ReactNode }) {
  return <span className="text-[#f5b648]">{children}</span>;
}
function Str({ children }: { children: React.ReactNode }) {
  return <span className="text-[#f2a7c9]">{children}</span>;
}
function Kw({ children }: { children: React.ReactNode }) {
  return <span className="text-foreground/95">{children}</span>;
}
function Num({ children }: { children: React.ReactNode }) {
  return <span className="text-[#63d4a0]">{children}</span>;
}
function Ok({ children }: { children: React.ReactNode }) {
  return <span className="text-[#63d4a0]">{children}</span>;
}

/* Language marks — simple enough to not need SVG fetch */
function IconTs() {
  return (
    <span className="grid size-4 place-items-center rounded-[3px] bg-[#3178c6] text-[8.5px] font-bold text-white">
      TS
    </span>
  );
}
function IconPy() {
  return (
    <span className="grid size-4 place-items-center rounded-[3px] bg-gradient-to-br from-[#306998] to-[#ffd43b] text-[8.5px] font-bold text-white">
      Py
    </span>
  );
}
