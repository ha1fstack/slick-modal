"use client";

import { map } from "nanostores";
import React from "react";

import { SlickModalCallbacks, SlickModalState } from "./types";

export type SlickModalStore = ReturnType<typeof createModalStore>;

export const createModalStore = () => {
  const modals = map<{
    [key: React.Key]:
      | {
          element: React.ReactNode;
          state: SlickModalState;
        }
      | undefined;
  }>({});
  const callbacks: SlickModalCallbacks = {};

  return {
    modals,
    callbacks,
  };
};

export const defaultStore = createModalStore();
