//RSC ----> REACT SERVER COMPONENT

import Link from "next/link";
import Image from "next/image";
import { MainNav } from "@/components/main-navbar";



export default function Home() {
      
  return (
    <div className="flex flex-col min-h-screen">

      <MainNav/>

      <main className="flex flex-col flex-12 text-4xl justify-center items-center ">
        This Is Home Page
        <Link
          href="/movies"
          className="bg-black text-white p-4 rounded-full align-middle  mt-4  hover:bg-blue-700 text-sm "
        >
          Go to Movies
        </Link>
        <div className="p-5">
          <Image
            src="/assets/cover.jpeg"
            alt="cover Image"
            width={500}
            height={300}
          />
        </div>
      </main>
    </div>
  );
}
