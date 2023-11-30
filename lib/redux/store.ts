"use client";
import { configureStore } from "@reduxjs/toolkit";
import targetSlice from "@/lib/redux/slice/targetSlice";

export const store = configureStore({
    reducer: {
        targetSlice: targetSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
    // devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;