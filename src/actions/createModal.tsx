"use client";

import { SlickModalKeyContext } from "../context";
import { SlickModalStore, defaultStore } from "../store";
import { SlickModalCreateOptions } from "../types";
import { generateModalKey } from "../utils";

function createModal<ResolveReturn extends unknown>(
  element: React.ReactNode,
  store?: SlickModalStore,
  options?: SlickModalCreateOptions
) {
  const key = options?.key ?? generateModalKey();
  // if no store is provided, use default store
  store ??= defaultStore;

  if (options?.throwOnDuplicate) {
    const existingModal = store.modals.get()[key];
    if (existingModal)
      throw Error(
        "duplicated modal: tried to create more than 1 instances of unique modal"
      );
  }
  if (!options?.preserveCallbacks) delete store.callbacks[key];

  const modalElement = (
    <SlickModalKeyContext.Provider value={key} key={key}>
      {element}
    </SlickModalKeyContext.Provider>
  );
  const data = {
    element: modalElement,
    state: {
      key,
    },
  };
  if (options?.closeOthers) {
    store.modals.set({
      [key]: data,
    });
  } else {
    store.modals.setKey(key, data);
  }

  if (!store.callbacks[key]) {
    let theResolve!: (arg: ResolveReturn) => void;
    let theReject!: (arg?: unknown) => void;
    const promise = new Promise<ResolveReturn>((resolve, reject) => {
      theResolve = resolve;
      theReject = reject;
    });
    store.callbacks[key] = {
      resolve: theResolve,
      reject: theReject,
      promise,
    };
  }
  return store.callbacks[key].promise as Promise<ResolveReturn>;
}

export type CreateModalParams = Parameters<typeof createModal>;

export default createModal;
