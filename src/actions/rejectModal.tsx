"use client";

import { SlickModalStore, defaultStore } from "../store";

export type RejectModalParams = Parameters<typeof rejectModal>;

export function rejectModal(
  key: string,
  args: unknown,
  store?: SlickModalStore
) {
  store ??= defaultStore;

  store.callbacks[key]?.reject(args);
}
