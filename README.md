# Slick Modal

Simple modal manager for React that does the trick.

## Introduction

Slick Modal is a small modal state manager for React focusing on simplicity and ease of use.
It is inspired by [nice-modal-react](https://github.com/eBay/nice-modal-react).

You can show and hide modals in a declarative way, with typesafe async and client component("use client") support.

## Install

```bash
npm install slick-modal
yarn add slick-modal
pnpm install slick-modal
```

## Usage

Store, Provider and Outlet

```tsx
"use client";

import {
  defaultStore,
  createModalStore,
  createModalControl,
  SlickModalProvider,
  SlickModalOutlet,
} from "slick-modal";

// default modal store is created by default and used if no store context is specifed
console.log(defaultStore);

const modalStore = createModalStore();

const modalControl = createModalControl(modalStore);

// you can externally control the modal store via modalControl
modalControl.open(<p>Hi There</p>);
modalControl
  .open(<p>Hi There</p>, {
    key: "my-modal-key",
  })
  .then((data) => {
    alert(data);
  });
modalControl.resolve("my-modal-key", "done");
modalControl.close("my-modal-key");
modalControl.closeAll();

// important: you don't have to specify default provider.
// if no provider is specified, slick modal will use the default provider.
function WithProvider({ children }: { children: React.ReactNode }) {
  return (
    // if no explict store is provided, the provider will automatically create a new internal store.
    <SlickModalProvider store={modalStore}>
      {children}
      <ModalOutlet />
    </SlickModalProvider>
  );
}

// default outlet
function ModalOutlet() {
  return <SlickModalOutlet />;
}

// you can also use render props to customize the outlet
function CustomModalOutlet() {
  return (
    <SlickModalOutlet>
      {(modals) => {
        return (
          <div
            className={
              modals.length > 0
                ? "bg-zinc-100 h-full -mx-4 p-4 rounded"
                : undefined
            }
          >
            {modals.map((modal, i) => (
              <div
                className="absolute inset-x-0"
                style={{
                  marginTop: `${i * 4}rem`,
                }}
                key={modal.state.key}
              >
                {modal.element}
              </div>
            ))}
          </div>
        );
      }}
    </SlickModalOutlet>
  );
}
```

Single use modals

```tsx
"use client";

import { useModal, createModal } from "slick-modal";

function Modal() {
  const { key, hide, resolve, stackIndex } = useModal();

  return (
    <div>
      <p>
        This is modal {key} at {stackIndex}
      </p>
      <button
        onClick={() => {
          resolve(`modal ${key} resolved`);
          hide();
        }}
      >
        close
      </button>
    </div>
  );
}

function ModalControl() {
  const openModal = () => {
    createModal(<Modal />).then((data) => {
      alert(data);
    });
  };

  return (
    <div>
      <button>Open</button>
    </div>
  );
}
```

Managed modals

```tsx
"use client";

function ManagedModal({ text }: { text: string }) {
  const { key, stackIndex, hide, resolve } = managedModal.useModal();

  return (
    <div>
      <div>
        This is managed modal {key} at {stackIndex}
        <br />
        {text}
      </div>
      <button
        onClick={() => {
          // typed resolve params
          resolve(`managed modal ${key} resolved`);
          hide();
        }}
      >
        close
      </button>
    </div>
  );
}

export const managedModal = createManagedModal<
  string,
  // typescript generic inference is all or nothing, so we have to manually specify the props type
  React.ComponentProps<typeof ManagedModal>
>(ManagedModal);

function ModalControl() {
  // by default, if same modal is opened multiple times, the previous modal will be closed, and resolve() will only resolve current modal instance.
  // you can optionally override this behavior.
  const openManagedModal = () => {
    // typed resolve params
    managedModal.open({ text: `hello ${Math.random()}` }).then((data) => {
      alert(data);
    });
  };

  return (
    <div>
      <button onClick={openManagedModal}>Open Managed</button>
    </div>
  );
}
```

## Demo

Clone the repo and run the example Next.JS app.

## To Do

- [ ] Add testings
- [ ] Add JSDoc
