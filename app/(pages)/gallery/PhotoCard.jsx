import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const PhotoCard = ({ imageSrc, placeName }) => {
  const [hover, setHover] = useState(false);

  // Extract filename without extension
  const imageName = imageSrc.split("/").pop()?.split(".")[0];

  return (
    <Link href={`/photo/${imageName}`} passHref>
      <div
        className="relative overflow-hidden border p-1 group cursor-pointer mb-4"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="overflow-hidden">
          <Image
            src={imageSrc}
            alt={placeName}
            width={400}
            height={400}
            className="object-cover w-full h-full scale-110 group-hover:scale-100 transition-transform duration-300 ease-in-out"
          />
        </div>
        {/* Overlay */}
        <div
          className={`absolute inset-x-0 bg-black bg-opacity-50 text-white text-sm sm:text-base font-medium flex items-center justify-center py-2 transition-all duration-300 ease-in-out ${
            hover ? "opacity-100 bottom-0" : "opacity-0 -bottom-10"
          }`}
        >
          {placeName}
        </div>
      </div>
    </Link>
  );
};

export default PhotoCard;
