"use client";
import postsData from "@/app/data/postsdata";
import Link from "next/link";
import React, { useState } from "react";

const Posts = () => {
  const [seletedAuthor, setSelectedAuthor] = useState("");

  // get authors
  const authors = [...new Set(postsData.map((post) => post.author))];

  // get filtered posts
  const filteredPosts = seletedAuthor
    ? postsData.filter((post) => post.author === seletedAuthor)
    : postsData;

  return (
    <div className="posts-container">
      <h2>All Posts</h2>

      <div className="filter-container">
        <label>Filter by Author:</label>
        <select
          value={seletedAuthor}
          onChange={(e) => setSelectedAuthor(e.target.value)}
        >
          {authors.map((author) => (
            <option key={author} value={author}>
              {author}
            </option>
          ))}
        </select>
      </div>

      <ul>
        {filteredPosts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
