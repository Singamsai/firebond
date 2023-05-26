import { useState } from "react";

export default function Select({ inputValues }) {
  const [selectvalue, setSelectvalue] = useState("Select...");
  const [selectDD, setSelectDD] = useState(true);
  const [option, setOption] = useState(true);

  return (
    <div style={{ display: "flex" }}>
      <select
        value={selectvalue}
        onChange={(e) => {
          setSelectvalue(e.target.value);
          setSelectDD(false);
          setOption(true);
        }}
        style={{ display: selectDD ? "block" : "none" }}
      >
        <option disabled>Select...</option>
        <option value="constant">constant</option>
        <option value="argument">argument</option>
        <option value="and">and</option>
        <option value="or">or</option>
      </select>
      {selectvalue === "constant" && option ? (
        <select>
          <option>false</option>
          <option>true</option>
        </select>
      ) : selectvalue === "argument" ? (
        <div>
          <select>
            {inputValues.map((ele) => {
              return <option>{ele.value}</option>;
            })}
          </select>
        </div>
      ) : null}

      <button
        onClick={() => {
          setSelectDD(true);
          setSelectvalue("Select...");
          setOption(false);
        }}
      >
        X
      </button>
    </div>
  );
}
