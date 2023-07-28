"use client";

import { SlickModalStore, defaultStore } from "../store";

export type DestroyModalParams = Parameters<typeof destroyModal>;

export function destroyModal(key: string, store?: SlickModalStore) {
  store ??= defaultStore;

  store.modals.setKey(key, undefined);
}
