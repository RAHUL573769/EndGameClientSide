import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SingleTodo = ({ t }) => {
  const handleDelete = (_id) => {
    const proceed = window.confirm("Are you sure you want to Delete?");

    if (proceed) {
      const url = `http://localhost:5000/todo/${t._id}`;

      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);

          if (data.deletedCount > 0) {
            window.location.reload();
            toast("Data Deleted Succesfully");
          }
        });
    }
  };
  return (
    <div>
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">{t.name}</h2>
          <p>{t.assigner}</p>
          <p>{t.day}</p>
          <div class="card-actions justify-end">
            <Link to={`/update/${t._id}`}>
              <button>Update</button>
            </Link>
            <button
              onClick={() => handleDelete(t._id)}
              class="btn btn-active btn-warning"
            >
              Delete
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTodo;
