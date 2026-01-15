---
title: "Test post"
date: "2026-01-10"
---

## Header 1 

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

## Header 2

```jsx
export default function Post() {
  const { slug } = useParams()
  const post = posts.find(p => p.slug === slug)

  return (
    <div className="post">
      <h1>{post.data.title}</h1>
      <p>{post.data.date}</p>
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </div>
  );
};
```

### Header 3

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum

![Steeling chainsaw's heart](/posts-images/csm01.jpeg)

This is a [link](/blog) to the blog list. This is a bullet point list :

- Item 1
- Item 2
- Item 3
    - Nested 1
    - Nested 2 
        - Double nested

Numeral list :

1. Item 1 
2. Item 2
3. Item 3
