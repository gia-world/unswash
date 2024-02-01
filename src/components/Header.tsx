import Link from "next/link";
import LayoutContainer from "./ui/LayoutContainer";

export default function Header() {
  return (
    <header>
      <LayoutContainer className={"flex items-center justify-between h-14"}>
        <h1>
          <Link href="/" className="flex gap-1 items-baseline">
            <p className="rounded-full bg-blue-600 text-white font-extrabold h-7 w-7 flex items-center justify-center text-2xl italic">
              W
            </p>
            <span className="font-bold italic text-xl">unswash</span>
          </Link>
        </h1>
        <nav>
          <Link href="/bookmark">
            <p className="border border-neutral-400 rounded-md px-1">북마크</p>
          </Link>
        </nav>
      </LayoutContainer>
    </header>
  );
}
