import React from "react";
import PostCard from "../../components/PostCard";
import {
  useGetPostsQuery,
  useGetUserByIdQuery,
  usePostUserMutation,
} from "../../redux/feature/api/baseApi";

const Home = () => {
  const { data: post } = useGetUserByIdQuery(5);
  const [setPost, { data: posts }] = usePostUserMutation();

  return (
    <>
      <h1>News Feed</h1>
      {post && <PostCard key={post.id} post={post.title} />}
    </>
  );
};

export default Home;
