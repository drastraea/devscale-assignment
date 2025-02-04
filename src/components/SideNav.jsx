"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function SideNav() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/home", label: "home" },
    { href: "/about", label: "about" },
    { href: "/blog", label: "blog" },
    { href: "/admin", label: "manage" },
  ];

  return (
    <div className="sidenav">
      <div className="logo-wrapper">{/* Logo */}</div>
      {navLinks.map(({ href, label }) => (
        <motion.div
          key={href}
          whileHover={{ scale: 1.1, x: 5, backgroundColor: "#4f46e5", borderRadius: "8px" }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <Link
            href={href}
            className={`sidenav-link ${pathname === href ? "font-bold text-indigo-400" : ""}`}
          >
            {label}
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
