type PropsType = {
  selectedId: string | null;
  title: string;
  id: string;
  onSelect: (id: string) => void;
};
export default function Project({
  title,
  id,
  onSelect,
  selectedId,
}: PropsType) {
  return (
    <li
      className={`rounded px-1 py-1 duration-100 hover:bg-stone-700 ${
        selectedId === id ? "bg-stone-600" : ""
      }`}
    >
      <button
        onClick={() => onSelect(id)}
        className="w-full text-start tracking-wider"
      >
        {title}
      </button>
    </li>
  );
}
