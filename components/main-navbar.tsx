
import Link from "next/link";
import { Logo } from "@/components/logo";
import { ModeToggle } from "@/components/mode-toogle";

export function MainNav(){
    return (
      <header className="border-primary/20 bg-background  sticky top-0 z-50 w-full border-b">
        <div className="container mx-auto px-8 flex h-16 items-center ">
          <Link href="/" className="flex items-center gap-2">
            <Logo />
            <span className=" text-xl font-bold text-green-700">CineScope</span>
          </Link>
          <nav className="flex ml-auto gap-4 items-center">
            <Link href="/" className=" hover:text-green-300">
              Home
            </Link>
            <Link href="/movies" className=" hover:text-green-300">
              Movies
            </Link>
            <Link href="/movies" className=" hover:text-green-300">
              Genres
            </Link>
            <Link href="/movies" className=" hover:text-green-300">
              About
            </Link>
            <Link href="/movies" className=" hover:text-green-300">
              Admin
            </Link>
            <ModeToggle />
          </nav>
        </div>
      </header>
    );
}