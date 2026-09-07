import { createFileRoute } from "@tanstack/react-router";
import { Camera, Check, ScanLine } from "lucide-react";

import {
  AppButton,
  Feed,
  PageHead,
  Panel,
  PanelBody,
  PanelFoot,
  PanelHead,
  RichText,
} from "@/components/app/ui";
import { checkIns } from "@/lib/app-data";
import { demo } from "@/lib/demo";

export const Route = createFileRoute("/app/scanner")({
  head: () => ({ meta: [{ title: "Creator check-ins | ELITƎ workspace" }] }),
  component: Scanner,
});

function Scanner() {
  return (
    <>
      <PageHead
        crumbs={[{ label: "Dashboard", to: "/app" }, { label: "Creator check-ins" }]}
        title="Creator check-ins"
        lede="Confirm a creator’s arrival in seconds. One scan updates their campaign status from Confirmed to Visited."
      />

      <section className="grid gap-5 lg:grid-cols-[1.6fr_1fr]">
        <Panel>
          <PanelBody className="px-6 py-16 text-center">
            <div className="relative mx-auto grid aspect-square w-[min(300px,80vw)] place-content-center rounded-[var(--r-md)] border border-[color:var(--border-subtle)] bg-[color:var(--bg-sunken)]">
              <ScanLine className="size-16 text-gold" />
              <span
                aria-hidden
                className="pointer-events-none absolute inset-[18px] rounded-xl border-2 border-dashed border-gold/40"
              />
            </div>
            <h2 className="mt-8 text-lg font-semibold">Scan the creator’s ELITƎ pass</h2>
            <p className="mx-auto mt-4 max-w-[44ch] text-sm text-muted-foreground">
              Find the pass in the creator’s ELITƎ app under this campaign. If you are offline, the
              scan will sync when you reconnect.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <AppButton
                tone="primary"
                size="lg"
                onClick={() =>
                  demo(
                    "Scanning is simulated in this demo.",
                    "Use a connected workspace to scan a live ELITƎ pass.",
                  )
                }
              >
                <Camera className="size-4" /> Start scanning
              </AppButton>
              <AppButton
                size="lg"
                onClick={() => demo("Manual check-in is simulated in this demo.")}
              >
                Enter code manually
              </AppButton>
            </div>
          </PanelBody>
        </Panel>

        <Panel>
          <PanelHead title="Checked in today" sub="Al Faisaliah · 3 creators" />
          <PanelBody>
            <Feed
              items={checkIns.map((entry) => ({
                icon: <Check />,
                text: <RichText value={`**${entry.name}** checked in`} />,
                time: `${entry.time} · ${entry.campaign}`,
              }))}
            />
          </PanelBody>
          <PanelFoot>
            <span className="text-muted-foreground">Expected today: 5 · Checked in: 3</span>
          </PanelFoot>
        </Panel>
      </section>
    </>
  );
}
