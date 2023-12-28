type PropsType = {
  label: string;
  name: string;
  value: string;
  onChange: (value: string, name: string) => void;
  type?: "text" | "date" | "textarea";
};
export default function InputGroup({
  label,
  name,
  type = "text",
  value,
  onChange,
}: PropsType) {
  if (type === "textarea") {
    return (
      <div className="flex w-full flex-col text-2xl">
        <label htmlFor={name}>{label}</label>
        <textarea
          id={name}
          required
          value={value}
          onChange={(event) => onChange(event.target.value, event.target.name)}
          rows={3}
          name={name}
          className="whitespace-pre-line rounded-md border-b-4 bg-stone-100 px-2 py-1 text-stone-700 focus:border-b-stone-700 focus:outline-none"
        />
      </div>
    );
  }
  return (
    <div className="flex w-full flex-col text-2xl">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type={type}
        required
        value={value}
        name={name}
        onChange={(event) => onChange(event.target.value, event.target.name)}
        className="rounded-md border-b-4 bg-stone-100 px-2 py-1 text-stone-700 focus:border-b-stone-700 focus:outline-none"
      />
    </div>
  );
}
