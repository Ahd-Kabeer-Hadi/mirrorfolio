"use client";

import Link from "next/link";
import { FolderGit2, Home, Mail, NotebookPen, User } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
  MotionValue,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", icon: Home, title: "Home" },
  { href: "/about", icon: User, title: "About" },
  { href: "/projects", icon: FolderGit2, title: "Projects" },
  { href: "/blog", icon: NotebookPen, title: "Blog" },
  { href: "/contact", icon: Mail, title: "Contact" },
];

export function BottomNav() {
  const [showNav, setShowNav] = useState(false);
  const { scrollY } = useScroll();
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  useEffect(() => {
    const updateScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 768); // md breakpoint
    };
    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  let mouseX = useMotionValue(Infinity);
  useMotionValueEvent(scrollY, "change", (latest) => {
    // showNav nav after first 100vh
    if( !isLargeScreen ) {
      return setShowNav(true);
    }
    const viewportHeight = window.innerHeight;
    if (latest > viewportHeight && !showNav) {
      setShowNav(true);
    } else if (latest <= viewportHeight && showNav) {
      setShowNav(false);
    }
  });

  return (
    <>
    {isLargeScreen && <motion.header
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: showNav ? 1 : 0, y: showNav ? 0 : 100 }}
        transition={{ duration: 0.3 }}
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="fixed inset-x-0 bottom-0 z-[99999] w-full px-4 pb-6 hidden md:block"
      >
        <motion.div className="mx-auto flex h-16 md:h-24 max-w-fit md:max-w-3xl md:items-center md:justify-between items-end gap-4 rounded-2xl border-[1px] border-card-border/20 bg-[#18181D]/60 md:px-8 md:py-6 px-4 py-3 backdrop-blur-md">
          {navItems.map((item) => (
            <IconContainer mouseX={mouseX} key={item.title} {...item} />
          ))}
        </motion.div>
      </motion.header>}
      
      <motion.header
        
        className="fixed inset-x-0 bottom-0 z-[99999] w-full px-4 pb-6 block md:hidden"
      >
        <motion.div className="mx-auto flex h-16 md:h-24 max-w-fit md:max-w-7xl md:items-center md:justify-between items-end gap-4 rounded-2xl border-[1px] border-card-border/20 bg-[#18181D]/60 md:px-8 md:py-6 px-4 py-3 backdrop-blur-md">
          {navItems.map((item) => (
            <IconContainer mouseX={mouseX} key={item.title} {...item} />
          ))}
        </motion.div>
      </motion.header>
    </>
  );
}

function IconContainer({
  mouseX,
  title,
  icon: Icon,
  href,
}: {
  mouseX: MotionValue;
  title: string;
  icon: React.ElementType;
  href: string;
}) {
  let ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  let widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  let heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  let iconSizeTransform = useTransform(distance, [-150, 0, 150], [20, 40, 20]);

  let width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  let height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  let iconSize = useSpring(iconSizeTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <Link href={href}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={cn(
          "relative flex aspect-square items-center justify-center rounded-full",
          "bg-white/10 text-light-gray transition-colors hover:bg-black/30 dark:hover:bg-white/10"
        )}
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="absolute -top-10 left-1/2 w-fit -translate-x-1/2  whitespace-nowrap rounded-xl border border-white/10 bg-[#18181D]/90 px-4 py-1 text-xs md:text-base text-white backdrop-blur-md"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: iconSize, height: iconSize }}
          className="flex items-center justify-center"
        >
          <Icon size={22} />
        </motion.div>
      </motion.div>
    </Link>
  );
}
