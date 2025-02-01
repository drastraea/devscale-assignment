import Link from "next/link";

export default function Nav() {
  return (
    <header className="main-nav">
      <div className="nav-container">
      <div className="font-semibold text-xl tracking-tight">
        CRUD playground
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
      </div>
    </header>
  );
}