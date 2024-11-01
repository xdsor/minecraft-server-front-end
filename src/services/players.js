import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {BACKEND_URL} from "../common/constants.js";

export const playersApi = createApi({
    reducerPath: 'playersApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${BACKEND_URL}/players` }),
    endpoints: (builder) => ({
        getOnlinePlayers: builder.query({
            query: () => `/online`,
        }),
    }),
})

export const { useGetOnlinePlayersQuery } = playersApi