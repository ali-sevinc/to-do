import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type Task = { taskId: string; task: string };
type Project = {
  id: string;
  title: string;
  description: string;
  date: string;
  tasks: Task[];
};

const DUMMY_PROJECTS: Project[] = [
  {
    id: "p1",
    title: "Learn React",
    description: "Follow courses, do practice",
    date: "01-21-2024",
    tasks: [{ taskId: "task1", task: "task-1" }],
  },
  {
    id: "p2",
    title: "Make Projects",
    description:
      "Your projects don't have to be original. \n You do your best!",
    date: "01-21-2024",
    tasks: [],
  },
];

export interface ProjectSlice {
  projects: Project[];
}

const initialState: ProjectSlice = {
  projects: DUMMY_PROJECTS,
};

export const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    addProject: (state, action: PayloadAction<Project>) => {
      state.projects.push(action.payload);
      // const updatedProjects = [...state.projects];
      // updatedProjects.push(action.payload);
      // state.projects = [...updatedProjects];
    },
    addTask: (
      state,
      action: PayloadAction<{
        id: string;
        task: { taskId: string; task: string };
      }>,
    ) => {
      state.projects = state.projects.map((project) =>
        project.id === action.payload.id
          ? { ...project, tasks: [...project.tasks, action.payload.task] }
          : project,
      );
    },
    removeProject: (state, action: PayloadAction<{ id: string }>) => {
      state.projects = state.projects.filter(
        (item) => item.id !== action.payload.id,
      );
    },
    removeTask: (
      state,
      action: PayloadAction<{ id: string; taskId: string }>,
    ) => {
      state.projects = state.projects.map((project) =>
        project.id === action.payload.id
          ? {
              ...project,
              tasks: project.tasks.filter(
                (item) => item.taskId !== action.payload.taskId,
              ),
            }
          : project,
      );
    },
  },
});

export const { addProject, addTask, removeProject, removeTask } =
  projectSlice.actions;
export default projectSlice.reducer;
