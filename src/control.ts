"use client";

import {
  CreateModalParams,
  createModal,
  DestroyModalParams,
  destroyModal,
  ResolveModalParams,
  resolveModal,
  RejectModalParams,
  rejectModal,
} from "./actions";
import { SlickModalStore } from "./store";

export function createModalControl(store: SlickModalStore) {
  return {
    open: (element: CreateModalParams[0], options?: CreateModalParams[2]) =>
      createModal(element, store, options),
    close: (key: DestroyModalParams[0]) => destroyModal(key, store),
    resolve: (key: ResolveModalParams[0], args: ResolveModalParams[1]) =>
      resolveModal(key, args, store),
    reject: (key: RejectModalParams[0], args: RejectModalParams[1]) =>
      rejectModal(key, args, store),
    closeAll: () => {
      store.callbacks = {};
      store.modals.set({});
    },
  };
}
