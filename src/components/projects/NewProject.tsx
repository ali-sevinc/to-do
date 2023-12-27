import { createPortal } from "react-dom";
import InputGroup from "../ui/InputGroup";
import Button from "../ui/Button";
import { FormEvent, forwardRef, Ref, useState } from "react";
import { useDispatch } from "react-redux";
import { addProject } from "./projectSlice";

const NewProject = forwardRef(function (
  { onClose }: { onClose: () => void },
  ref: Ref<HTMLDialogElement>,
) {
  const [values, setValues] = useState({
    title: "",
    description: "",
    date: "",
  });

  const dispatch = useDispatch();

  function handleChange(value: string, name: string) {
    setValues((prev) => ({ ...prev, [name]: value }));
    // console.log(value);
  }
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const title = values.title;
    const description = values.description;
    const date = values.date;
    if (!title || !description || !date) return;
    const id = Math.random().toString();
    const data = {
      title,
      description,
      date,
      id,
      tasks: [],
    };
    dispatch(addProject(data));

    setValues({
      title: "",
      description: "",
      date: "",
    });

    onClose();
  }

  return createPortal(
    <dialog ref={ref} className="inset-0 rounded-xl">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 rounded-xl px-8 py-12  sm:w-[44rem]"
      >
        <InputGroup
          value={values.title}
          onChange={handleChange}
          label="Title"
          name="title"
        />
        <InputGroup
          value={values.description}
          onChange={handleChange}
          label="Description"
          name="description"
          type="textarea"
        />
        <InputGroup
          value={values.date}
          onChange={handleChange}
          label="Date"
          name="date"
          type="date"
        />
        <div className="mt-8  flex items-center justify-end">
          <Button onClick={onClose} type="button" model="transparent">
            Cancel
          </Button>
          <Button type="submit">Add</Button>
        </div>
      </form>
    </dialog>,
    document.getElementById("modal")!,
  );
});

export default NewProject;
