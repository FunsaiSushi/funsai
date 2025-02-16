"use client";

import Link from "next/link";
import React from "react";
import { MdHome } from "react-icons/md";

const blogs = [
  { title: "The Art of Writing Clean Code", date: "February 10, 2025" },
  {
    title: "Microservices vs Monoliths: Pros & Cons",
    date: "January 28, 2025",
  },
  {
    title: "Understanding Event-Driven Architecture",
    date: "January 15, 2025",
  },
  {
    title: "Optimizing React Performance: Tips & Tricks",
    date: "December 30, 2024",
  },
  {
    title: "Kafka for Beginners: A Guide to Event Streaming",
    date: "December 12, 2024",
  },
  { title: "Next.js Best Practices for 2025", date: "November 25, 2024" },
  {
    title: "Exploring AI-Powered Content Moderation",
    date: "November 5, 2024",
  },
  {
    title: "The Future of WebSockets in Real-Time Apps",
    date: "October 18, 2024",
  },
  { title: "A Deep Dive into MongoDB Schema Design", date: "October 2, 2024" },
  {
    title: "Building Scalable Node.js Applications",
    date: "September 20, 2024",
  },
];

// Function to generate URL-friendly slug
const createSlug = (title) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const BlogPage = () => {
  return (
    <div className="min-h-screen flex flex-col p-6 mx-auto max-w-4xl">
      <div className="flex gap-4 items-start">
        <Link
          href={"/"}
          className="border p-2 w-fit h-fit hover:border-[#FF0000] hover:text-[#FF0000] active:border-[#FF0000] active:text-[#FF0000]"
        >
          <MdHome size={20} />
        </Link>
        <h1 className="text-4xl pb-4">Blog Posts</h1>
      </div>
      <div className="w-full">
        {blogs.map((blog, index) => {
          const slug = createSlug(blog.title);
          return (
            <Link
              key={index}
              href={`/post/${slug}`}
              className="block border-b border-t border-t-black border-x border-x-black hover:border-[#FF0000] p-3 mb-1 transition-all duration-200"
            >
              <h2 className="text-xl font-semibold">{blog.title}</h2>
              <p className="text-gray-500">{blog.date}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BlogPage;
