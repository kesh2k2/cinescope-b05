//RSC ----> REACT SERVER COMPONENT

import Link from "next/link";

export default function MoviesPage() {
  return (

      <main className="flex flex-col flex-12 bg-purple-400 text-4xl justify-center items-center">
        This Is Movie Page
        <Link
          href="/"
          className="bg-black text-white p-4 rounded-full align-middle  mt-4  hover:bg-blue-700 text-sm "
        >
          Go to Home
        </Link>
      </main>
     

  );
}
