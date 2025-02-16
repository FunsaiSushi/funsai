"use client";

import { usePathname } from "next/navigation";
import PhotoModal from "@/app/ui/PhotoModal";
import React from "react";

const PhotoPage = () => {
  const pathname = usePathname();
  const imageName = decodeURIComponent(pathname.split("/").pop() || "");

  return (
    <div>
      <PhotoModal imageSrc={`/gallery/${imageName}.jpeg`} />
    </div>
  );
};

export default PhotoPage;
