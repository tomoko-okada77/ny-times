import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { nytimesApi } from "@/services/nytimes";

export const store = configureStore({
  reducer: {
    [nytimesApi.reducerPath]: nytimesApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(nytimesApi.middleware),
});

setupListeners(store.dispatch);
