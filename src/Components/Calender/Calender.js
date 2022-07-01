import { format } from "date-fns";
import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const Calender = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <div>
        <DayPicker mode="single" selected={date} onSelect={setDate} />;
      </div>
      <p>You have selected :{format(date, "PP")}</p>
    </div>
  );
};

export default Calender;
