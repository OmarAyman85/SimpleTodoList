import React, { useState } from "react";
import axios from "axios";

function Create() {
  const [task, setTask] = useState("");

  const handleAdd = () => {
    axios
      .post("http://localhost:3001/add", { task: task })
      .then((result) => {
        window.location.reload();
      })
      .catch((err) => console.log("Catched error:", err));
  };

  return (
    <>
      <form className="create_form">
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter a task"
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="button" type="submit" onClick={handleAdd}>
          Add
        </button>
      </form>
    </>
  );
}

export default Create;
