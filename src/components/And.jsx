import { useState } from "react";
import Select from "./Select";

export default function And({ inputValues }) {
  const [andOption, setAndOption] = useState(["", ""]);

  return (
    <div>
      {andOption.map((ele) => {
        return (
          <div>
            <Select inputValues={inputValues} />
          </div>
        );
      })}
      <button
        onClick={() => {
          setAndOption([...andOption, ""]);
        }}
      >
        + add op
      </button>
    </div>
  );
}
