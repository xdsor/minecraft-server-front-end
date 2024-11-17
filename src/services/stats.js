import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {BACKEND_URL} from "../common/constants.js";

export const statsApi = createApi({
    reducerPath: 'statsApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${BACKEND_URL}/stats` }),
    endpoints: (builder) => ({
        getAllStats: builder.query({
           query: () => ``,
        }),
        getPlayerStats: builder.query({
            query: (name) => `/${name}`,
        }),
        getServerTime: builder.query({
            query: () => `/server/time`,
        }),
    }),
})

export const { useGetServerTimeQuery, useGetAllStatsQuery, useGetPlayerStatsQuery } = statsApi