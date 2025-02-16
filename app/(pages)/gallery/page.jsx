"use client";

import React from "react";
import Masonry from "react-masonry-css";
import PhotoCard from "./PhotoCard";
import { MdHome } from "react-icons/md";
import Link from "next/link";
import { galleryData } from "@/data/galleryData";

export default function GalleryPage() {
  return (
    <div className="w-full min-h-screen container mx-auto">
      <div className="flex gap-4 items-start py-4">
        <Link
          href="/"
          className="border p-2 w-fit h-fit hover:border-[#FF0000] hover:text-[#FF0000] active:border-[#FF0000] active:text-[#FF0000]"
        >
          <MdHome size={20} />
        </Link>
        <h2 className="text-lg">Places I&apos;ve been to</h2>
      </div>

      <Masonry
        breakpointCols={{
          default: 5,
          1280: 4,
          1100: 3,
          900: 2,
        }}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {galleryData.flatMap(({ placeName, images }) =>
          images.map((src, index) => (
            <PhotoCard key={src} imageSrc={src} placeName={placeName} />
          ))
        )}
      </Masonry>
    </div>
  );
}
