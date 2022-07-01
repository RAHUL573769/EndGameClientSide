import React, { useRef } from "react";

const MainTodo = () => {
  const taskNameRef = useRef();
  const assignerRef = useRef();
  const dayRef = useRef();
  const handleClicking = () => {
    const name = taskNameRef.current.value;
    const assigner = assignerRef.current.value;
    const day = dayRef.current.value;

    console.log(name, assigner, day);

    const finalData = {
      name: name,
      assigner: assigner,
      day: day,
    };

    console.log(finalData);
    fetch("http://localhost:5000/todo", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(finalData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div class="card-body">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Name of Task</span>
            </label>
            <input
              placeholder="Add Task Name"
              ref={taskNameRef}
              type="text"
              class="input input-bordered"
              required
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text"> Task Assigned By</span>
            </label>
            <input
              placeholder="Task Assigner Name"
              ref={assignerRef}
              type="text"
              class="input input-bordered"
              required
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Task Assigned Day</span>
            </label>
            <input
              type="text"
              ref={dayRef}
              placeholder="Task Assigned Day Name"
              class="input input-bordered"
              required
            />
            <button class="btn btn-active btn-primary" onClick={handleClicking}>
              Click{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainTodo;
