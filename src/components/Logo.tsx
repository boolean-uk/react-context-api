interface LogoProps {
  className?: string;
}

export function Logo({ className = "" }: LogoProps) {
  const isSmall = className.includes('text-xs');
  
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className={`${isSmall ? 'text-sm' : 'text-4xl'} font-semibold text-white tracking-tight transition-all duration-300`}>
        Lumo
      </span>
    </div>
  );
}