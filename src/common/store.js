import {configureStore} from "@reduxjs/toolkit";
import {playersApi} from "../services/players.js";
import {setupListeners} from "@reduxjs/toolkit/query";
import {eventsApi} from "../services/events.js";
import {statsApi} from "../services/stats.js";

export const store = configureStore({
    reducer: {
        [playersApi.reducerPath]: playersApi.reducer,
        [eventsApi.reducerPath]: eventsApi.reducer,
        [statsApi.reducerPath]: statsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(playersApi.middleware)
        .concat(eventsApi.middleware)
        .concat(statsApi.middleware)
})

setupListeners(store.dispatch)