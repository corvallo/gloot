import { useState } from "react";

const Input: React.FC<{ defaultValue?: string | null }> = ({ defaultValue = null }) => {
  const [value, setValue] = useState<string>(defaultValue || "");
  return <input type="text" name="name" onChange={(e) => setValue(e.target.value)} value={value} aria-label={"Insert player name"} aria-required="true" />;
};
export default Input;
