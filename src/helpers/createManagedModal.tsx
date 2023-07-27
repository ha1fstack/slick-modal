"use client";

import { createModal } from "../actions";
import { useModal } from "../hooks";
import { SlickModalStore } from "../store";
import { SlickModalCreateOptions } from "../types";
import { generateModalKey } from "../utils";

function createManagedModal<ResolveReturn extends unknown, P extends {}>(
  element: React.FC<P>,
  store?: SlickModalStore,
  options?: SlickModalCreateOptions
): {
  open(
    props: P,
    options?: SlickModalCreateOptions
  ): ReturnType<typeof createModal<ResolveReturn>>;
  useModal: typeof useModal<ResolveReturn>;
};

function createManagedModal<ResolveReturn extends unknown>(
  element: React.ReactNode,
  store?: SlickModalStore,
  options?: SlickModalCreateOptions
): {
  open(
    options?: SlickModalCreateOptions
  ): ReturnType<typeof createModal<ResolveReturn>>;
  useModal: typeof useModal<ResolveReturn>;
};

function createManagedModal(
  element: React.ReactNode | React.FC,
  store?: SlickModalStore,
  options?: SlickModalCreateOptions
) {
  if (options) options.key ??= generateModalKey();
  if (!options)
    options = {
      key: generateModalKey(),
    };
  const _options = options;

  const open: any =
    typeof element === "function"
      ? (props: {}, options?: SlickModalCreateOptions) => {
          const Element = element;
          return createModal(<Element {...props} />, store, {
            ..._options,
            ...options,
          });
        }
      : (options?: SlickModalCreateOptions) => {
          return createModal(element, store, {
            ..._options,
            ...options,
          });
        };

  return {
    open,
    useModal,
  };
}

export default createManagedModal;
