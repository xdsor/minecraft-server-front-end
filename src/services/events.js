import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {BACKEND_URL} from "../common/constants.js";

export const eventsApi = createApi({
    reducerPath: 'eventsApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${BACKEND_URL}/events` }),
    endpoints: (builder) => ({
        getEvents: builder.query({
            query: () => ``,
        }),
    }),
})

export const { useGetEventsQuery } = eventsApi