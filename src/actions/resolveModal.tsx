"use client";

import { SlickModalStore, defaultStore } from "../store";

export type ResolveModalParams = Parameters<typeof resolveModal>;

export function resolveModal(
  key: string,
  arg: unknown,
  store?: SlickModalStore
) {
  store ??= defaultStore;

  store.callbacks[key]?.resolve(arg);
}
