import Button from "./Button";

type PropsType = { onConfirm: () => void; title: string };

export default function ConfirmModal({ onConfirm, title }: PropsType) {
  return (
    <div className=" flex flex-col gap-4 p-8 sm:w-[32rem]">
      <h2 className="text-3xl font-semibold">Are you sure?</h2>
      <p className="text-2xl">
        Do you really want to delete <strong>"{title}"</strong> project?
      </p>
      <p className="pb-2 text-lg">This action cannot be undone!</p>
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
  );
}
