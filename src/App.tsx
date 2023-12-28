import { useRef, useState } from "react";

import { HiOutlinePlus } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { removeProject } from "./components/projects/projectSlice";

import ProjectDetails from "./components/projects/ProjectDetails";
import NewProject from "./components/projects/NewProject";
import Projects from "./components/projects/Projects";
import Sidebar from "./components/ui/Sidebar";
import Landing from "./components/ui/Landing";
import Button from "./components/ui/Button";
import Modal from "./components/ui/Modal";

export default function App() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
    null,
  );

  const dispatch = useDispatch();

  function handleShowForm() {
    dialogRef.current?.showModal();
  }
  function handleCloseForm() {
    dialogRef.current?.close();
  }

  function handleSelect(id: string) {
    setSelectedProjectId(id);
  }

  function handleDeleteProject(id: string) {
    if (!id) return;
    dispatch(removeProject({ id }));
    setSelectedProjectId(null);
  }

  return (
    <>
      <Modal ref={dialogRef}>
        <NewProject onClose={handleCloseForm} />
      </Modal>
      <div className="grid h-screen w-full grid-rows-[1fr,1fr] gap-12 sm:grid-cols-[18rem,1fr] xl:grid-cols-[24rem,1fr]">
        <Sidebar>
          <h1 className="text-4xl font-bold text-stone-100">Your Projects</h1>
          <Button onClick={handleShowForm}>
            <HiOutlinePlus /> Add Project
          </Button>
          <Projects selectedId={selectedProjectId} onSelect={handleSelect} />
        </Sidebar>
        <div>
          {!selectedProjectId && <Landing onShowForm={handleShowForm} />}
          {selectedProjectId && (
            <ProjectDetails
              onDeleteProject={handleDeleteProject}
              selectedId={selectedProjectId}
            />
          )}
        </div>
      </div>
    </>
  );
}
