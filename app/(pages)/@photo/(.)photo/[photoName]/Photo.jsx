"use client";

import { usePathname } from "next/navigation";
import PhotoModal from "@/app/ui/PhotoModal";
import React from "react";
import { galleryData } from "@/data/galleryData"; // Import galleryData

const Photo = () => {
  const pathname = usePathname();
  const imageName = decodeURIComponent(pathname.split("/").pop() || "");

  // If image name is empty, display nothing or fallback
  if (!imageName) {
    return <div>Image not found</div>;
  }

  // Construct the correct image source path
  const imageSrc = `/gallery/${imageName}.jpeg`;

  // Find the placeName corresponding to the image
  const placeName = galleryData.find((item) =>
    item.images.some((image) => image.includes(imageName))
  )?.placeName;

  // If no matching place name is found, fallback to a default or empty string
  if (!placeName) {
    return <div>Place not found</div>;
  }

  return <PhotoModal imageSrc={imageSrc} placeName={placeName} />;
};

export default Photo;
