import "./App.css";
import { useState } from "react";
import And from "./components/And";

function App() {
  const [inputValues, setInputValues] = useState([
    { value: "My Arg", ddval: false },
  ]);
  const [DDvalue, setDDvalue] = useState("undefined");
  const [selectvalue, setSelectvalue] = useState("Select...");
  const [selectDD, setSelectDD] = useState(true);
  const [option, setOption] = useState(true);

  const addInput = () => {
    setInputValues([...inputValues, { value: "newarg", ddval: false }]);
  };

  const handleInputChange = (index, event) => {
    const newInputValues = [...inputValues];
    newInputValues[index].value = event.target.value;
    setInputValues(newInputValues);
  };
  const handleddChange = (index, event) => {
    const newInputValues = [...inputValues];
    newInputValues[index].ddval = event.target.value;
    setInputValues(newInputValues);
    setDDvalue(newInputValues[index].ddval);
  };
  return (
    <div className="App">
      <div>
        {inputValues.map((value, index) => (
          <div key={index}>
            <input
              type="text"
              value={value.value}
              onChange={(e) => handleInputChange(index, e)}
            />
            <select
              value={value.ddval}
              onChange={(e) => handleddChange(index, e)}
            >
              <option value="false">false</option>
              <option value="true">true</option>
            </select>
          </div>
        ))}
        <button onClick={addInput}>+add arg</button>
      </div>
      <br />
      <br />
      <div style={{ display: "flex" }}>
        <select
          value={selectvalue}
          onChange={(e) => {
            setSelectvalue(e.target.value);
            setSelectDD(false);
            setOption(true);
            setDDvalue("false");
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
        ) : selectvalue === "and" ? (
          <select>
            <option>and</option>
            <option>or</option>
          </select>
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
      <div style={{ display: selectvalue == "and" ? "block" : "none" }}>
        <And inputValues={inputValues} />
      </div>
      <h2>result: {DDvalue}</h2>
    </div>
  );
}

export default App;
