"use client";

import { usePathname } from "next/navigation";
import React from "react";
import { IoChevronBackSharp } from "react-icons/io5";
import { blogData } from "@/data/blogData";

const normalizeTitle = (title) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "") // Remove special characters
    .replace(/\s+/g, "-"); // Replace spaces with hyphens

const Post = () => {
  const pathname = usePathname(); // Get the full URL path
  const slug = pathname.split("/").pop(); // Get the last part of the path

  // Find the post by matching the normalized title
  const post = blogData.find((blog) => normalizeTitle(blog.title) === slug);

  if (!post) {
    return (
      <div className="text-center text-red-500 text-xl mt-10">
        Post not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col py-4 lg:py-6 mx-auto max-w-6xl">
      <div className="flex gap-4 items-start mb-2">
        <button
          className="border p-2 w-fit h-fit hover:border-[#FF0000] hover:text-[#FF0000] active:border-[#FF0000] active:text-[#FF0000]"
          onClick={() => window.history.back()}
        >
          <IoChevronBackSharp size={20} />
        </button>

        <h1 className="text-xl font-bold mb-2">{post.title}</h1>
      </div>
      <p className="text-gray-500 mb-6">{post.date}</p>
      <p className="leading-7">{post.content}</p>
    </div>
  );
};

export default Post;
