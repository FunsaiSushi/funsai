"use client";

import Link from "next/link";
import React from "react";
import { MdHome } from "react-icons/md";
import { blogData } from "@/data/blogData"; // Import blogData

// Function to generate URL-friendly slug
const createSlug = (title) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const BlogPage = () => {
  return (
    <div className="min-h-screen flex flex-col py-4 lg:py-6 mx-auto max-w-4xl">
      <div className="flex gap-4 items-start">
        <Link
          href={"/"}
          className="border p-2 w-fit h-fit hover:border-[#FF0000] hover:text-[#FF0000] active:border-[#FF0000] active:text-[#FF0000]"
        >
          <MdHome size={20} />
        </Link>
        <h1 className="text-2xl font-semibold pb-4">Blog Posts</h1>
      </div>
      <div className="w-full">
        {blogData.map((blog, index) => {
          const slug = createSlug(blog.title);
          return (
            <Link
              key={index}
              href={`/post/${slug}`}
              className="block border-b border-t border-t-black border-x border-x-black hover:border-[#FF0000] p-3 mb-1 transition-all duration-200"
            >
              <h2 className="text-lg font-semibold">{blog.title}</h2>
              <p className="text-gray-500">{blog.date}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BlogPage;
