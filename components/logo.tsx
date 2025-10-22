import Image from "next/image";

export function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <Image
      src="/movie.svg"
      alt="Logo"
      className={className}
      width="28"
      height="35"
    />
  );
}
