"use client";

interface BookCallButtonProps {
  className?: string;
  children: React.ReactNode;
}

export default function BookCallButton({ className, children }: BookCallButtonProps) {
  return (
    <button
      onClick={() => window.open('https://calendly.com/geoff-millerdesign', '_blank')}
      className={className}
    >
      {children}
    </button>
  );
}
