"use client";

import { SlickModalOutlet } from "slick-modal";

function ModalOutet() {
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

export default ModalOutet;
