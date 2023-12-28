import { ReactNode, Ref, forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import { HiOutlineX } from "react-icons/hi";

const Modal = forwardRef(function Modal(
  { children }: { children: ReactNode },
  ref: Ref<HTMLDialogElement>,
) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  useImperativeHandle(ref, () => {
    return {
      showModal() {
        dialogRef.current?.showModal();
      },
      close() {
        dialogRef.current?.close();
      },
    } as HTMLDialogElement;
  });

  return createPortal(
    <dialog
      ref={dialogRef}
      className="relative inset-0 rounded-xl backdrop:bg-stone-700/80"
    >
      <form method="dialog" className="absolute right-5 top-5">
        <button className="text-xl duration-200 hover:text-red-400">
          <HiOutlineX />
        </button>
      </form>
      {children}
    </dialog>,
    document.getElementById("modal")!,
  );
});

export default Modal;
