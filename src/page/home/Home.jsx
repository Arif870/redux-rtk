import React from "react";
import PostCard from "../../components/PostCard";
import {
  useGetPostsQuery,
  useGetUserByIdQuery,
} from "../../redux/feature/api/baseApi";

const Home = () => {
  const { data: post } = useGetUserByIdQuery(5);
  return (
    <>
      <h1>News Feed</h1>
      {post && <PostCard key={post.id} post={post.title} />}
    </>
  );
};

export default Home;
