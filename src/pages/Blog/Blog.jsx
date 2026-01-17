import React from "react"
import HTMLTag from "@/components/HTMLTag/HTMLTag"
import { Link } from "react-router-dom"
import Folder from "@/components/FileTree/Folder"
import File from "@/components/FileTree/File"
import './Blog.css'

const posts = [
  { slug: "test-post", title: "Test post", date: "2026-13-01" },
];

function Blog() {
  return (
    <div className="container">
      <section className="blog">
        <HTMLTag name="h1" className="hero-title">
          <h1>My <strong>blog</strong></h1>
        </HTMLTag>
      </section>

      <ul className="blog-list">
        {posts.map(post => (
          <li key={post.slug} className="blog-post">
            <Link to={`/blog/post/${post.slug}`} className="link" >
              <h2>{post.title}</h2>
              <small>{post.date}</small>
            </Link> 
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Blog;
