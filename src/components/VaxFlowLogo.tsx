const VaxFlowLogo = ({ className = "w-10 h-10" }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Horizontal bar of the plus/cross */}
      <rect
        x="4"
        y="20"
        width="40"
        height="8"
        rx="2"
        fill="url(#gradient-primary)"
      />
      
      {/* Syringe body (vertical) */}
      <rect
        x="20"
        y="6"
        width="8"
        height="32"
        rx="2"
        fill="url(#gradient-primary)"
      />
      
      {/* Syringe plunger top */}
      <rect
        x="22"
        y="2"
        width="4"
        height="6"
        rx="1"
        fill="url(#gradient-accent)"
      />
      
      {/* Plunger handle */}
      <rect
        x="19"
        y="0"
        width="10"
        height="3"
        rx="1.5"
        fill="url(#gradient-accent)"
      />
      
      {/* Needle */}
      <path
        d="M23 38 L24 46 L25 38"
        fill="hsl(220, 20%, 70%)"
        stroke="hsl(220, 20%, 60%)"
        strokeWidth="0.5"
      />
      
      {/* Measurement marks on syringe body */}
      <rect x="21" y="10" width="6" height="1" rx="0.5" fill="hsl(0, 0%, 100%)" opacity="0.6" />
      <rect x="21" y="14" width="6" height="1" rx="0.5" fill="hsl(0, 0%, 100%)" opacity="0.6" />
      <rect x="21" y="18" width="6" height="1" rx="0.5" fill="hsl(0, 0%, 100%)" opacity="0.6" />
      <rect x="21" y="30" width="6" height="1" rx="0.5" fill="hsl(0, 0%, 100%)" opacity="0.6" />
      <rect x="21" y="34" width="6" height="1" rx="0.5" fill="hsl(0, 0%, 100%)" opacity="0.6" />
      
      {/* Measurement marks on horizontal bar */}
      <rect x="8" y="23" width="1" height="2" rx="0.5" fill="hsl(0, 0%, 100%)" opacity="0.5" />
      <rect x="12" y="23" width="1" height="2" rx="0.5" fill="hsl(0, 0%, 100%)" opacity="0.5" />
      <rect x="16" y="23" width="1" height="2" rx="0.5" fill="hsl(0, 0%, 100%)" opacity="0.5" />
      <rect x="31" y="23" width="1" height="2" rx="0.5" fill="hsl(0, 0%, 100%)" opacity="0.5" />
      <rect x="35" y="23" width="1" height="2" rx="0.5" fill="hsl(0, 0%, 100%)" opacity="0.5" />
      <rect x="39" y="23" width="1" height="2" rx="0.5" fill="hsl(0, 0%, 100%)" opacity="0.5" />
      
      {/* Gradients */}
      <defs>
        <linearGradient id="gradient-primary" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(220, 60%, 25%)" />
          <stop offset="100%" stopColor="hsl(220, 60%, 18%)" />
        </linearGradient>
        <linearGradient id="gradient-accent" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(185, 70%, 45%)" />
          <stop offset="100%" stopColor="hsl(185, 70%, 38%)" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default VaxFlowLogo;
