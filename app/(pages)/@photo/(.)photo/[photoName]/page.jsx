"use client";

import { usePathname } from "next/navigation";
import PhotoModal from "@/app/ui/PhotoModal";
import React from "react";

const PhotoPage = () => {
  const pathname = usePathname();
  const imageName = decodeURIComponent(pathname.split("/").pop() || "");

  // If image name is empty, display nothing or fallback
  if (!imageName) {
    return <div>Image not found</div>;
  }

  // Construct the correct image source path
  const imageSrc = `/gallery/${imageName}.jpeg`;
  console.log(imageSrc);

  return (
    // <div className="z-50">
    <PhotoModal imageSrc={imageSrc} />
    // </div>
  );
};

export default PhotoPage;
