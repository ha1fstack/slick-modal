"use client";

import { useModal } from "slick-modal";

function Modal() {
  const { key, hide, resolve, stackIndex } = useModal();

  return (
    <div className="w-full border rounded bg-white bg-opacity-50 h-64 backdrop-blur-sm">
      <div className="flex items-center justify-between p-4">
        <div>
          This is modal {key} at {stackIndex}
        </div>
        <button
          className="bg-zinc-200 px-4 py-3 rounded"
          onClick={() => {
            resolve(`modal ${key} resolved`);
            hide();
          }}
        >
          close
        </button>
      </div>
    </div>
  );
}

export default Modal;
