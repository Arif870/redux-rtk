import React from "react";

const PostCard = ({ post }) => {
  return (
    <div>
      <p className="bg-gray-500 text-white p-4 m-4 rounded-md">{post}</p>
    </div>
  );
};

export default PostCard;
