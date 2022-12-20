import "./styles.css";
import { useRef, useState } from "react";
export default function App() {
  const inputRef = useRef(null);
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Name:", inputRef.current.value);
  }

  function handleSubmit2(e) {
    e.preventDefault();
    console.log("Name2:", name);
  }

  return (
    <div className="App">
      {/* Uncontrolled Component: */}
      <form onSubmit={handleSubmit}>
        <label>Name :</label>
        <input ref={inputRef} />
      </form>

      {/* Controlled Component */}
      <form onSubmit={handleSubmit2}>
        <label>Name :</label>
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </form>
    </div>
  );
}
