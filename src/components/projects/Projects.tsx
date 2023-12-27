import { useSelector } from "react-redux";

import Project from "./Project";
import { RootState } from "../../store/store";

export default function Projects({
  onSelect,
  selectedId,
}: {
  selectedId: string | null;
  onSelect: (id: string) => void;
}) {
  const projects = useSelector((state: RootState) => state.projects.projects);

  return (
    <ul className="flex w-full flex-col gap-2 text-xl  text-stone-100">
      {projects.map((item) => (
        <Project
          selectedId={selectedId}
          onSelect={onSelect}
          key={item.id}
          title={item.title}
          id={item.id}
        />
      ))}
    </ul>
  );
}
