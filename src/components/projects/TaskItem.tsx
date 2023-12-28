export default function TaskItem({
  task,
  onRemove,
}: {
  task: string;
  onRemove: () => void;
}) {
  return (
    <li className="flex items-center justify-between px-1 py-2">
      {task}
      <button onClick={onRemove} className="hover:text-red-500">
        Delete
      </button>
    </li>
  );
}
