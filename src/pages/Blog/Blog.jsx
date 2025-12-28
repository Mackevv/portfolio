import React from "react"
import HTMLTag from "@/components/HTMLTag/HTMLTag"
import './Blog.css'

function Blog() {
  return (
    <div className="container">
      <section className="blog">
        <HTMLTag name="h1" className="hero-title">
          <h1>My <strong>blog</strong></h1>
        </HTMLTag>
      </section>
    </div>
  )
}

export default Blog;
