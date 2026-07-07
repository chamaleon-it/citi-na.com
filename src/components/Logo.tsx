import Link from "next/link";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  light?: boolean;
}

export default function Logo({ className = "", iconOnly = false, light = false }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center gap-3 group ${className}`}>
      {/* Abstract N & Connection Icon */}
      <svg
        className="w-10 h-10 transition-transform duration-500 group-hover:scale-105"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Node 1: Top Left - Emerald */}
        <circle cx="25" cy="25" r="10" fill="#0F766E" />
        {/* Node 2: Bottom Left - Emerald */}
        <circle cx="25" cy="75" r="10" fill="#0F766E" />
        {/* Node 3: Top Right - Gold */}
        <circle cx="75" cy="25" r="10" fill="#C89B3C" />
        {/* Node 4: Bottom Right - Gold */}
        <circle cx="75" cy="75" r="10" fill="#C89B3C" />
        
        {/* Connection Lines forming an abstract N */}
        {/* Left vertical link */}
        <line x1="25" y1="25" x2="25" y2="75" stroke="#0F766E" strokeWidth="6" strokeLinecap="round" />
        {/* Right vertical link */}
        <line x1="75" y1="25" x2="75" y2="75" stroke="#C89B3C" strokeWidth="6" strokeLinecap="round" />
        {/* Diagonal link (connecting top left to bottom right) */}
        <line x1="25" y1="25" x2="75" y2="75" stroke="url(#n-gradient)" strokeWidth="6" strokeLinecap="round" />
        
        <defs>
          <linearGradient id="n-gradient" x1="25" y1="25" x2="75" y2="75" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0F766E" />
            <stop offset="100%" stopColor="#C89B3C" />
          </linearGradient>
        </defs>
      </svg>

      {!iconOnly && (
        <div className="flex flex-col select-none leading-none">
          <div className="flex items-baseline gap-1">
            <span
              className={`font-extrabold text-xl tracking-wider uppercase transition-colors duration-300 ${
                light ? "text-white" : "text-charcoal-dark"
              }`}
            >
              Citi
            </span>
            <span className="font-light text-xl tracking-wider text-emerald-primary uppercase">
              Nexus
            </span>
          </div>
          <span className="text-[10px] tracking-[0.25em] font-bold text-gold-warm uppercase mt-0.5">
            Agency
          </span>
        </div>
      )}
    </Link>
  );
}
