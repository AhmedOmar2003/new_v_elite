import { EliteWordmark } from "@/components/brand/EliteWordmark";

export function SitePreloader() {
  return (
    <div
      role="status"
      aria-label="Loading ELITƎ website"
      aria-busy="true"
      className="elite-preloader fixed inset-0 z-[100] flex items-center justify-center bg-background"
    >
      <div className="flex w-full flex-col items-center px-6" dir="ltr">
        <EliteWordmark className="elite-preloader-logo aspect-[3/2] w-[min(82vw,28rem)]" />
        <div className="-mt-[clamp(1rem,3vw,1.75rem)] h-px w-[min(68vw,22rem)] overflow-hidden bg-border">
          <div className="elite-preloader-progress h-full w-full origin-left bg-gold" />
        </div>
      </div>
    </div>
  );
}
