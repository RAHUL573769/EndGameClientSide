import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Updating = () => {
  const { id } = useParams();

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const day = event.target.day.value;
    // console.log(name, day);

    const updatedUser = { name, day };
    fetch(`http://localhost:5000/todo/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        window.location.reload();
        toast("Data Updated Successfully");
      });
  };

  const [user, setUser] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/todo/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUser(data));
  });

  console.log(user);
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        action="
          "
      >
        <input
          type="text"
          placeholder="Type Name"
          name="name"
          class="input input-bordered input-info w-full max-w-xs"
        />
        <br />
        <input
          type="text"
          placeholder="Type Day"
          name="day"
          class="input input-bordered input-info w-full max-w-xs"
        />
        <br />
        <input
          class="btn btn-active btn-primary"
          type="submit"
          value="Update User"
        />
      </form>
      <ToastContainer />

      <h1 className="text-center text-bold">
        {" "}
        User After Updating:{user.name} <br />
        Day after Updating:{user.day}
      </h1>
    </div>
  );
};

export default Updating;
