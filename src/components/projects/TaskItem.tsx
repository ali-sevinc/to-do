export default function TaskItem({
  task,
  onRemove,
}: {
  task: string;
  onRemove: () => void;
}) {
  return (
    <li className="flex items-center justify-between p-1">
      {task}
      <button onClick={onRemove} className="hover:text-red-500">
        Delete
      </button>
    </li>
  );
}
