import React, { useEffect, useState } from "react";
import axios from "axios";
import Create from "./Create";

const Home = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/get")
      .then((result) => setTodos(result.data))
      .catch((err) => console.log("Catched error:", err));
  }, []);

  return (
    <>
      <div className="home">
        <h2>Todo List</h2>
        <Create />
        {todos.length === 0 ? (
          <div>
            <h2>No Todos </h2>
          </div>
        ) : (
          todos.map((todo) => <div className="task">{todo.task}</div>)
        )}
      </div>
    </>
  );
};

export default Home;
