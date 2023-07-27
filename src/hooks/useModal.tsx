"use client";

import { useStore } from "@nanostores/react";
import { SlickModalContext, SlickModalKeyContext } from "../context";
import React from "react";
import { SlickModalHandler } from "../types";

function useModal<ResolveReturn extends unknown = unknown>(
  fallbackOptions?: SlickModalHandler
): SlickModalHandler<ResolveReturn> {
  const key = React.useContext(SlickModalKeyContext);
  const store = React.useContext(SlickModalContext);
  const modals = useStore(store.modals);

  const modalProps = React.useMemo(() => {
    if (!key) return undefined;
    return {
      key,
      hide: () => {
        store.modals.setKey(key, undefined);
        delete store.callbacks[key];
      },
      resolve: (arg: ResolveReturn) => {
        store.callbacks[key]?.resolve(arg);
        delete store.callbacks[key];
      },
      reject: (arg: unknown) => {
        store.callbacks[key]?.reject(arg);
        delete store.callbacks[key];
      },
    };
  }, [key, store.callbacks, store.modals]);

  const modalHandlerProps = React.useMemo(() => {
    if (!key) return undefined;
    return {
      stackIndex: (Object.keys(modals) as React.Key[]).indexOf(key),
    };
  }, [key, modals]);

  if (!key) {
    if (!fallbackOptions) throw Error("No fallback options provided");
    return fallbackOptions;
  }
  if (!modalProps || !modalHandlerProps) throw Error();
  return {
    ...modalProps,
    ...modalHandlerProps,
  };
}

export default useModal;
