type Props = { className?: string };

const darkLogo = "/Logo/Logo%20Elite%20-%20dark.png";
const whiteLogo = "/Logo/Logo%20Elite%20-%20white.png";

/** Official ELITƎ wordmark lockup, selected for the active surface theme. */
export function EliteWordmark({ className }: Props) {
  return (
    <span
      role="img"
      aria-label="ELITƎ"
      className={`relative inline-block shrink-0 ${className ?? ""}`}
    >
      <img
        src={darkLogo}
        alt=""
        aria-hidden
        draggable={false}
        className="absolute inset-0 size-full object-contain dark:hidden"
      />
      <img
        src={whiteLogo}
        alt=""
        aria-hidden
        draggable={false}
        className="absolute inset-0 hidden size-full object-contain dark:block"
      />
    </span>
  );
}

/** Symmetric E + Ǝ monogram, used for the favicon, badges and loaders. */
export function EliteMark({ className }: Props) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="currentColor"
      role="img"
      aria-label="ELITƎ monogram"
      className={className}
    >
      <rect x="4" y="12" width="3.5" height="40" />
      <rect x="4" y="12" width="24" height="3.5" />
      <rect x="4" y="30.25" width="17.5" height="3.5" />
      <rect x="4" y="48.5" width="24" height="3.5" />
      <rect x="56.5" y="12" width="3.5" height="40" />
      <rect x="36" y="12" width="24" height="3.5" />
      <rect x="42.5" y="30.25" width="17.5" height="3.5" />
      <rect x="36" y="48.5" width="24" height="3.5" />
    </svg>
  );
}
