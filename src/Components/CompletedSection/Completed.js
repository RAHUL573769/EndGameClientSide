import React, { useEffect, useState } from "react";
import Comp from "./Comp";

const Completed = () => {
  const [completed, setCompleted] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/todo")
      .then((res) => res.json())
      .then((data) => setCompleted(data));

    // console.log(completed);
  });
  return (
    <div>
      {/* <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">{completed.name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div> */}

      {completed?.map((c) => {
        <Comp></Comp>;
      })}
    </div>
  );
};

export default Completed;
