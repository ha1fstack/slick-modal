"use client";

import { useStore } from "@nanostores/react";
import React from "react";

import { SlickModalContext } from "../context/modal";
import { SlickModalStore } from "../store";
import { SlickModalState } from "../types";

function SlickModalOutlet({
  children,
  store,
}: {
  children?: (
    modals: {
      element: React.ReactNode;
      state: SlickModalState;
    }[],
    store: SlickModalStore
  ) => React.ReactNode;
  store?: SlickModalStore;
}) {
  const storeContext = React.useContext(SlickModalContext);
  const storeSelected = store ?? storeContext;
  const modalStore = useStore(storeSelected.modals);

  if (children)
    return <>{children(Object.values(modalStore) as any, storeSelected)}</>;
  return <>{Object.values(modalStore).map((modal) => modal?.element)}</>;
}

export default SlickModalOutlet;
