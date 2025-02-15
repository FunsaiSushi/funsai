import Link from "next/link";

// import { IoLogoGithub } from "react-icons/io5";

import Bento from "./ui/Bento";
import Doors from "./ui/Doors";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      <Doors />
      <div className="relative container mx-auto min-h-screen flex justify-center items-center max-w-6xl">
        <div className="w-full z-10">
          <Bento />
        </div>
      </div>
      {/* <div className="absolute bottom-4 left-0 bg-[#E6E6FA] p-2 rounded-xl">
        Made with fun by <Link href="https://github.com/Muaz-Hasan">Muaz</Link>
      </div> */}
    </div>
  );
}
