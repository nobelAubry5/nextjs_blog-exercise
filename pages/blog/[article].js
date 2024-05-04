import { useRouter } from "next/router";
import React from "react";

export default function article(props) {
  console.log(props);

  return (
    <div className="container">
      <h1 className="title">{props.article.title}</h1>
      <p className="paragraph">{props.article.body}</p>
    </div>
  );
}
export async function getStaticProps(context) {
  const id = context.params.article;
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const article = await data.json();
  return {
    props: { article },
  };
}
export async function getStaticPaths() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const articles = await data.json();

  const paths = articles.map((item) => ({
    params: { article: item.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
}
