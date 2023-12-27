import { HiOutlinePlus } from "react-icons/hi";
import Button from "./Button";
import list from "/list.svg";
export default function Landing({ onShowForm }: { onShowForm: () => void }) {
  return (
    <div className="mx-auto flex flex-col items-center pt-12 sm:pt-44 gap-8 ">
      <img src={list} className="w-52" />
      <h2 className="text-3xl font-bold text-stone-700">Follow Your Dreams</h2>
      <Button size="big" onClick={onShowForm}>
        <HiOutlinePlus /> Add new project
      </Button>
    </div>
  );
}
