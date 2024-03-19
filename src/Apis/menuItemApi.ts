import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_PATH } from "../constants";

const menuItemApi = createApi({
  reducerPath: "menuItemApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_PATH}`,
  }),
  tagTypes: ["menuItems"],
  endpoints: (builder) => ({
    getMenuItems: builder.query({
      query: () => ({
        url: `MenuItem`,
        method: "GET",
      }),
      providesTags: ["menuItems"],
    }),
    getMenuItemById: builder.query({
        query: (id) => ({
          url: `MenuItem/${id}`,
          method: "GET",
        }),
        providesTags: ["menuItems"],
      }),
  }),
});

export const { useGetMenuItemsQuery, useGetMenuItemByIdQuery } = menuItemApi;
export default menuItemApi;