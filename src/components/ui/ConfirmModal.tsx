import { createPortal } from "react-dom";
import Button from "./Button";
import { Ref, forwardRef } from "react";

const ConfirmModal = forwardRef(function ConfirmModal(
  { onConfirm }: { onConfirm: () => void },
  ref: Ref<HTMLDialogElement>,
) {
  return createPortal(
    <dialog ref={ref}>
      <div className="flex flex-col gap-4 p-4 sm:w-[32rem]">
        <h2 className="text-3xl font-semibold">Are you sure?</h2>
        <p className="text-2xl">This action cannot be undone!</p>
        <div className="flex items-center justify-end">
          <form method="dialog">
            <Button model="transparent" size="small" type="submit">
              Cancel
            </Button>
          </form>
          <Button size="small" onClick={onConfirm}>
            Confirm
          </Button>
        </div>
      </div>
    </dialog>,
    document.getElementById("modal")!,
  );
});

export default ConfirmModal;
