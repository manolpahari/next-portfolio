import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";

const Blog = () => {

  const PostLink = ({ title, slug }) => {
    return (
      <li>
        <Link as={`/${slug}`} href={`/post?title=${title}`}>
          <a>{title}</a>
        </Link>
      </li>
    );
  };
  return (
    <Layout title="My Blog">
      <ul>
        <PostLink title="React Post" slug="react-post" />
        <PostLink title="Angular Post" slug="angular-post"/>
        <PostLink title="Vue Post" slug="vue-post"/>
      </ul>
    </Layout>
  );
};

export default Blog;
