"use client";

import { usePathname } from "next/navigation";
import React from "react";
import { IoChevronBackSharp } from "react-icons/io5";

const blogs = [
  {
    title: "The Art of Writing Clean Code",
    date: "February 10, 2025",
    content:
      "Writing clean code is essential for maintainability and collaboration. This post explores key principles such as meaningful naming, single responsibility, and reducing complexity.",
  },
  {
    title: "Microservices vs Monoliths: Pros & Cons",
    date: "January 28, 2025",
    content:
      "Should you build a monolithic app or break it down into microservices? We compare the two architectures in terms of scalability, maintenance, and deployment flexibility.",
  },
  {
    title: "Understanding Event Driven Architecture",
    date: "January 15, 2025",
    content:
      "Event-driven systems enable better scalability and decoupling between services. This post covers core concepts, benefits, and real-world use cases.",
  },
  {
    title: "Optimizing React Performance: Tips & Tricks",
    date: "December 30, 2024",
    content:
      "From React.memo to lazy loading and virtualization, learn various techniques to improve your React application's speed and responsiveness.",
  },
  {
    title: "Kafka for Beginners: A Guide to Event Streaming",
    date: "December 12, 2024",
    content:
      "Apache Kafka is a powerful event streaming platform. This beginner-friendly guide covers Kafka's architecture, producers, consumers, and real-world applications.",
  },
  {
    title: "Next js Best Practices for 2025",
    date: "November 25, 2024",
    content:
      "Leverage the latest Next.js features, including improved server-side rendering (SSR), static site generation (SSG), and middleware for better performance and SEO.",
  },
  {
    title: "Exploring AI Powered Content Moderation",
    date: "November 5, 2024",
    content:
      "AI is transforming content moderation in social media and online platforms. Learn how NLP and image recognition help detect harmful content.",
  },
  {
    title: "The Future of WebSockets in Real Time Apps",
    date: "October 18, 2024",
    content:
      "WebSockets power real-time communication in apps like chat and live updates. This post discusses their scalability, challenges, and alternatives like SSE.",
  },
  {
    title: "A Deep Dive into MongoDB Schema Design",
    date: "October 2, 2024",
    content:
      "Designing efficient MongoDB schemas is crucial for performance. We explore normalization vs. denormalization, indexing, and common schema patterns.",
  },
  {
    title: "Building Scalable Node js Applications",
    date: "September 20, 2024",
    content:
      "Learn how to build high-performance, scalable Node.js applications using techniques like clustering, caching, and microservices.",
  },
];

const normalizeTitle = (title) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "") // Remove special characters
    .replace(/\s+/g, "-"); // Replace spaces with hyphens

const FullPost = () => {
  const pathname = usePathname(); // Get the full URL path
  const slug = pathname.split("/").pop(); // Get the last part of the path

  // Find the post by matching the normalized title
  const post = blogs.find((blog) => normalizeTitle(blog.title) === slug);

  if (!post) {
    return (
      <div className="text-center text-red-500 text-xl mt-10">
        Post not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col p-6 mx-auto max-w-4xl">
      <div className="flex gap-4 items-start mb-2">
        <button
          className="border p-2 w-fit h-fit hover:border-[#FF0000] hover:text-[#FF0000] active:border-[#FF0000] active:text-[#FF0000]"
          onClick={() => window.history.back()}
        >
          <IoChevronBackSharp size={20} />
        </button>

        <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      </div>
      <p className="text-gray-500 mb-6">{post.date}</p>
      <p className="text-lg leading-7">{post.content}</p>
    </div>
  );
};

export default FullPost;
