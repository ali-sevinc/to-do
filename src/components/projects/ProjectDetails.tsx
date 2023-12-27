import { useRef } from "react";
import { formatDate } from "../../utils/helpers";
import Button from "../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { addTask, removeTask } from "./projectSlice";
import { RootState } from "../../store/store";
import TaskItem from "./TaskItem";
import ConfirmModal from "../ui/ConfirmModal";

type PropsType = {
  selectedId: string;
  onDeleteProject: (id: string) => void;
};
export default function ProjectDetails({
  selectedId,
  onDeleteProject,
}: PropsType) {
  const inputRef = useRef<HTMLInputElement>(null);
  const confirmRef = useRef<HTMLDialogElement>(null);

  const selectedProject = useSelector(
    (state: RootState) => state.projects.projects,
  ).find((item) => item.id === selectedId);
  const dispatch = useDispatch();

  function handleAddTask() {
    const task = inputRef.current?.value;
    if (!task) return;
    const taskId = Math.random().toString();
    const data = { id: selectedId, task: { taskId, task } };
    dispatch(addTask(data));
    inputRef.current.value = "";
  }

  function handleRemoveTask(id: string, taskId: string) {
    dispatch(removeTask({ id, taskId }));
  }

  function handleConfirm() {
    confirmRef.current?.showModal();
  }

  if (!selectedProject)
    return <p className="pt-12 text-center text-2xl">No project found.</p>;

  return (
    <>
      <ConfirmModal
        ref={confirmRef}
        onConfirm={() => onDeleteProject(selectedId)}
      />
      <div className=" mx-4 flex max-w-3xl flex-col gap-8 py-8 sm:mx-0 md:mt-12">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl">{selectedProject.title}</h2>
          <Button onClick={handleConfirm} model="transparent">
            Delete
          </Button>
        </div>
        <time className="text-xl italic text-stone-600">
          {formatDate(selectedProject.date)}
        </time>
        <p className="text-xl">{selectedProject.description}</p>
        <div className="flex flex-col gap-1">
          <label>Add Task</label>
          <p className="flex items-center text-xl">
            <input
              ref={inputRef}
              required
              className="rounded-l-md border-b-2 px-2 py-1 focus:border-b-stone-700 focus:outline-none"
            />
            <button
              onClick={handleAddTask}
              className="rounded-r-md border-b-2 bg-stone-300 px-4 py-1 duration-200 hover:border-b-stone-700 hover:bg-stone-400"
            >
              Add
            </button>
          </p>
        </div>
        <div>
          <h2 className="py-2 text-xl">Project tasks</h2>
          {selectedProject.tasks.length === 0 && <p>No task found.</p>}
          {selectedProject.tasks.length > 0 && (
            <ul className="flex flex-col  divide-y-2 divide-stone-400 bg-stone-300 px-4 py-8 text-xl">
              {selectedProject.tasks.map((i) => (
                <TaskItem
                  key={i.taskId}
                  task={i.task}
                  onRemove={() => handleRemoveTask(selectedId, i.taskId)}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
