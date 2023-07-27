"use client";

import { defaultStore, createModal, createModalControl } from "slick-modal";
import { testManagedModal } from "./ManagedModal";
import Modal from "./Modal";

const modalControl = createModalControl(defaultStore);

function ModalControl() {
  const openModal = () => {
    createModal(<Modal />).then((data) => {
      alert(data);
    });
  };

  const openManagedModal = () => {
    // typed resolve params
    testManagedModal.open({ text: `hello ${Math.random()}` }).then((data) => {
      alert(data);
    });
  };

  const closeAllModals = () => {
    modalControl.closeAll();
  };

  return (
    <div className="space-x-3 text-sm">
      <button className="bg-zinc-200 px-3 py-2 rounded" onClick={openModal}>
        Open
      </button>
      <button
        className="bg-zinc-200 px-3 py-2 rounded"
        onClick={openManagedModal}
      >
        Open Managed
      </button>
      <button
        className="bg-zinc-200 px-3 py-2 rounded"
        onClick={closeAllModals}
      >
        Close All
      </button>
    </div>
  );
}

export default ModalControl;
