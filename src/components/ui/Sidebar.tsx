import { ReactNode } from "react";

type PropsType = { children: ReactNode };
export default function Sidebar({ children }: PropsType) {
  return (
    <aside className="flex flex-col items-start gap-12 bg-stone-900 px-6 py-20 sm:min-h-screen sm:rounded-tr-3xl xl:px-12">
      {children}
    </aside>
  );
}
