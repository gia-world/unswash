import Link from "next/link";

export default function Header() {
  return (
    <header>
      <h1>
        <Link href="/">로고</Link>
      </h1>
      <nav>
        <Link href="/bookmark">북마크</Link>
      </nav>
    </header>
  );
}
