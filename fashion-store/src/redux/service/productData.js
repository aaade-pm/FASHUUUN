import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products",
    }),
    getProduct: builder.query({
      query: (id) => `/products/${id}`,
    }),
    getTrending: builder.query({
      query: () => "/products?limit=3",
    }),
  }),
});

export const { useGetProductsQuery, useGetProductQuery, useGetTrendingQuery } =
  productApi;
