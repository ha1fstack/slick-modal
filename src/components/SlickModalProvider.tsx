"use client";

import React from "react";

import { SlickModalContext } from "../context/modal";
import { SlickModalStore, createModalStore } from "../store";

function SlickModalProvider({
  children,
  store,
}: React.PropsWithChildren<{
  store?: SlickModalStore;
}>) {
  const [_store] = React.useState(createModalStore());

  return (
    <SlickModalContext.Provider value={store ?? _store}>
      {children}
    </SlickModalContext.Provider>
  );
}

export default SlickModalProvider;
