import { createModal } from "./actions";
import { createManagedModal } from "./helpers";

export interface SlickModalState {
  key: React.Key;
}

export interface SlickModalCreateOptions {
  /**
   * Unique key for the modal. If not provided, a random key will be generated.
   */
  key?: React.Key;
  /**
   * Whether to throw an error when opening modal if a modal with the same key already exists.
   */
  throwOnDuplicate?: boolean;
  /**
   * Whether to preserve previous promise callbacks when opening modal if a modal with the same key already exists.
   */
  preserveCallbacks?: boolean;
  /**
   * Whether to close all other modals in the store when current one is opened.
   */
  closeOthers?: boolean;
}

export interface SlickModalCallbacks {
  [key: React.Key]: {
    resolve: (arg: any) => void;
    reject: (arg: unknown) => void;
    promise: Promise<unknown>;
  };
}

export type ManagedModal = ReturnType<typeof createManagedModal>;

export interface SlickModalHandler<ResolveReturn extends unknown = unknown> {
  key: React.Key;
  /**
   * Hide (remove) the modal.
   */
  hide: () => void;
  /**
   * Resolve the promise returned by {@link createModal | createModal} or {@link ManagedModal.open | open}.
   * @param arg the argument to pass to the promise.
   */
  resolve: (arg: ResolveReturn) => void;
  /**
   * Reject the promise returned by {@link createModal | createModal} or {@link ManagedModal.open | open}.
   * @param arg the argument to pass to the promise.
   */
  reject: (arg: unknown) => void;
  /**
   * Helper to run both resolve and hide.
   */
  resolveHide: (arg: ResolveReturn) => void;
  /**
   * Helper to run both reject and hide.
   */
  rejectHide: (arg: unknown) => void;
  stackIndex: number;
}
