"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <div className="header">
      {pathname === "/admin" ? (
        <>
          <h2>Content Lists</h2>
          <Link href="/admin/new">Add</Link>
        </>
      ) : pathname === "/admin/new" ? (
        <>
          <h2>Create Content</h2>
          <Link href="/admin">Back</Link>
        </>
      ) : pathname.includes("/admin/edit") ? (
        <>
          <h2>Update Content</h2>
          <Link href="/admin">Back</Link>
        </>
      ) : null}
    </div>
  );
}
