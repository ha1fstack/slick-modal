"use client";

import { SlickModalStore, defaultStore } from "../store";

function resolveModal(key: string, arg: unknown, store?: SlickModalStore) {
  store ??= defaultStore;

  store.callbacks[key]?.resolve(arg);
}

export type ResolveModalParams = Parameters<typeof resolveModal>;

export default resolveModal;
