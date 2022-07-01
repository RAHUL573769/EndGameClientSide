import React, { useEffect, useState } from "react";
import SingleTodo from "./SingleTodo";

const ToDo = () => {
  const [todos, setTodos] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/todo")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  });
  console.log(todos);
  return (
    <div class="grid  md:grid-cols-2 lg:grid-cols-3 my-7">
      {todos?.map((t) => (
        <SingleTodo></SingleTodo>
      ))}
    </div>
  );
};

export default ToDo;
