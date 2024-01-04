import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: builder => ({
    getPosts: builder.query({
      query: () => "/posts",
    }),
    getPosts: builder.query({
      query: () => "/users",
    }),
    getUserById: builder.query({
      query: id => `/posts/${id}`,
    }),
  }),
});

export const { useGetPostsQuery, useGetUserByIdQuery } = baseApi;

export default baseApi;
