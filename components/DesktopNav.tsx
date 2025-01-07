import Link from "next/link";
import { Separator } from "./ui/separator";

const navItems = [
  { href: "/about", label: "My story" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function DesktopNav() {
  return (
    <div className="flex items-center justify-end gap-2 md:gap-4">
      {navItems.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className="font-syne font-medium transition-transform transform hover:scale-105"
        >
          <div className="hidden md:flex">{item.label}</div>
        </Link>
      ))}
    </div>
  );
}