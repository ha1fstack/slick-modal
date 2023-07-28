"use client";

import React from "react";

import { SlickModalContext } from "../context/modal";
import { SlickModalStore, createModalStore } from "../store";

export type SlickModalProviderProps = React.PropsWithChildren<{
  store?: SlickModalStore;
}>;

export function SlickModalProvider({
  children,
  store,
}: SlickModalProviderProps) {
  const [_store] = React.useState(createModalStore());

  return (
    <SlickModalContext.Provider value={store ?? _store}>
      {children}
    </SlickModalContext.Provider>
  );
}
