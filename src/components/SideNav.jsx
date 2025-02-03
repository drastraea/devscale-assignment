"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function SideNav() {
  const pathname = usePathname()
  
  const navLinks = [
    { href: '/home', label: 'home' },
    { href: '/about', label: 'about' },
    { href: '/blog', label: 'blog' },
    { href: '/admin', label: 'manage' },
  ]

  return (
    <div className="sidenav">
      <div className="logo-wrapper">
        {/* Logo */}
      </div>
      {navLinks.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={`sidenav-link ${
            pathname === href ? 'font-medium' : ''
          }`}
        >
          {label}
        </Link>
      ))}
    </div>
  )
}