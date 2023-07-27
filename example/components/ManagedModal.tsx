"use client";

import { createManagedModal } from "slick-modal";

function ManagedModal({ text }: { text: string }) {
  const { key, stackIndex, hide, resolve } = testManagedModal.useModal();

  return (
    <div className="w-full border rounded bg-white bg-opacity-50 h-64 backdrop-blur-sm">
      <div className="flex items-center justify-between p-4">
        <div>
          This is managed modal {key} at {stackIndex}
          <br />
          {text}
        </div>
        <button
          className="bg-zinc-200 px-4 py-3 rounded"
          onClick={() => {
            // typed resolve params
            resolve(`managed modal ${key} resolved`);
            hide();
          }}
        >
          close
        </button>
      </div>
    </div>
  );
}

export default ManagedModal;

export const testManagedModal = createManagedModal<
  string,
  React.ComponentProps<typeof ManagedModal>
>(ManagedModal);
