import React, { useEffect, useState } from "react"
import ReactMarkdown from "react-markdown"
import { useParams } from "react-router-dom"
import matter from "gray-matter"
import rehypeHighlight from "rehype-highlight"
import remarkUnwrapImages from "remark-unwrap-images"
import "highlight.js/styles/github.css"
import { splitSentenceInMiddle } from "@/utils/utils.js"

import Code from "@/components/Code/Code"
import "./Post.css"

const modules = import.meta.glob("../../posts/*.md", {
  eager: true,
  as: "raw",
});

const posts = Object.entries(modules).map(([path, raw]) => {
  const { data, content } = matter(raw);
  const slug = path.split("/").pop().replace(".md", "");

  return {
    slug,
    data,
    content,
  };
});

export default function Post() {
  const { slug } = useParams()
  const post = posts.find(p => p.slug === slug)

  const [first, second] = splitSentenceInMiddle(post.data.title)
  const date = new Date(post.data.date)

  return (
    <div className="container post">
      <h1>{first} <span>{second}</span></h1>
      <strong>{date.toDateString()}</strong>
      <ReactMarkdown 
        remarkPlugins={[remarkUnwrapImages]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          a: ({ children, ...props }) => <a className="link" {...props} >{children}</a>,
          code: props => <Code {...props} />,
          img: ({ alt, ...props }) => (
            <figure className="image-wrapper">
              <img alt={alt} {...props}/>
              <figcaption>{alt}</figcaption>
            </figure>)
        }}
      >
        {post.content}
      </ReactMarkdown>
    </div>
  );
};
