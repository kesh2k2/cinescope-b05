//RSC ----> REACT SERVER COMPONENT

import Link from "next/link";
import Image from "next/image";



export default function Home() {
      
  return (
    <main className="flex flex-col flex-12 bg-purple-400 text-4xl justify-center items-center ">
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
  );
}
