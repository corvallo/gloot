import { useState } from "react";

interface IInput {
  defaultValue?: string | null;
}
const Input: React.FC<IInput> = ({ defaultValue = null }) => {
  const [value, setValue] = useState<string>(defaultValue || "");
  return <input type="text" name="name" onChange={(e) => setValue(e.target.value)} value={value} aria-label={"Insert player name"} aria-required="true" />;
};
export default Input;
