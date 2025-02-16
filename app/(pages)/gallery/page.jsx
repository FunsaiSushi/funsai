"use client";

import React from "react";
import Masonry from "react-masonry-css";
import PhotoCard from "./PhotoCard";
import { MdHome } from "react-icons/md";
import Link from "next/link";

const cards = [
  {
    placeName: "Dhaka",
    images: ["/gallery/dhaka.jpeg"],
  },
  {
    placeName: "Bandarban",
    images: ["/gallery/bandarban1.jpeg", "/gallery/bandarban2.jpeg"],
  },
  {
    placeName: "Panam City",
    images: ["/gallery/panam1.jpeg", "/gallery/panam2.jpeg"],
  },
  {
    placeName: "Sonargaon",
    images: [
      "/gallery/sonargaon1.jpeg",
      "/gallery/sonargaon2.jpeg",
      "/gallery/sonargaon3.jpeg",
      "/gallery/sonargaon4.jpeg",
    ],
  },
  {
    placeName: "Baytech Shipyard",
    images: [
      "/gallery/ship1.jpeg",
      "/gallery/ship2.jpeg",
      "/gallery/ship3.jpeg",
      "/gallery/ship4.jpeg",
      "/gallery/ship5.jpeg",
      "/gallery/ship6.jpeg",
    ],
  },
  {
    placeName: "CUET Rag Concert",
    images: [
      "/gallery/concert1.jpeg",
      "/gallery/concert2.jpeg",
      "/gallery/concert3.jpeg",
    ],
  },
];

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
        <h2 className="text-2xl">Places I&apos;ve been to</h2>
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
        {cards.flatMap(({ placeName, images }) =>
          images.map((src, index) => (
            <PhotoCard key={src} imageSrc={src} placeName={placeName} />
          ))
        )}
      </Masonry>
    </div>
  );
}
