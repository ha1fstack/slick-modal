"use client";

import { SlickModalStore, defaultStore } from "../store";

function destroyModal(key: string, store?: SlickModalStore) {
  store ??= defaultStore;

  store.modals.setKey(key, undefined);
}

export type DestroyModalParams = Parameters<typeof destroyModal>;

export default destroyModal;
