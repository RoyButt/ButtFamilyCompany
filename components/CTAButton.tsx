import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
};

export default function CTAButton({ href, children, variant = "primary", size = "md", className = "" }: Props) {
  const base = "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 gap-2";

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const variants = {
    primary: "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40",
    secondary: "bg-white text-gray-900 hover:bg-gray-50 border border-gray-200 shadow-sm",
    outline: "border-2 border-white text-white hover:bg-white hover:text-gray-900",
  };

  return (
    <Link href={href} className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
