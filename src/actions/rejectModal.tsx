"use client";

import { SlickModalStore, defaultStore } from "../store";

function rejectModal(key: string, args: unknown, store?: SlickModalStore) {
  store ??= defaultStore;

  store.callbacks[key]?.reject(args);
}

export type RejectModalParams = Parameters<typeof rejectModal>;

export default rejectModal;
