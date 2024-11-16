import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Restaurant } from "../models/restaurant";
import { OrderRequest } from "../models/order";

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fake-api-tau.vercel.app/api/efood",
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<Restaurant[], void>({
      query: () => "restaurantes",
    }),
    getRestaurant: builder.query<Restaurant, string>({
      query: (id) => `restaurantes/${id}`,
    }),
    order: builder.mutation<{ orderId: string }, OrderRequest>({
      query: (body) => ({
        url: "checkout",
        method: "POST",
        body,
      }),
    }),
  }),
});
export const {
  useGetRestaurantsQuery,
  useGetRestaurantQuery,
  useOrderMutation,
} = api;
export default api;
