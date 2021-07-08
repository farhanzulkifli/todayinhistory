import React, { useState } from "react";
import { useHistory } from "react-router";
import classNames from "classnames";
import Font from "react-font";
// import { format } from "date-fns";
import { enGB } from "date-fns/locale";
import { DatePickerCalendar } from "react-nice-dates";
import "react-nice-dates/build/style.css";

export default function DatePickers3(props) {
  const [date, setDate] = useState();
  const history = useHistory();
  const day = new Date(date).getDate();
  const month = new Date(date).getMonth();

  const change = () => {
    history.push(`/${month}/${day}/events`);
  };
  const changebirths = () => {
    history.push(`/${month}/${day}/births`);
  };
  const changedeaths = () => {
    history.push(`/${month}/${day}/deaths`);
  };
  const classesbutton = classNames({
    multibutton: true,
    buttontry: true,
  });

  return (
    <>
      <Font family="Quattrocento">
        <div className="displaytext">Hey, tell me your birthday?</div>
        <div className="displaytext4">I don't really wanna know your age tbh. So day and month is fine friend.</div>
      </Font>
      <div className="pickercalendar">
        <DatePickerCalendar date={date} onDateChange={setDate} locale={enGB} />
      </div>
      <Font family="Quattrocento">
        <div className="displaytext3">Then, pick a category.</div>
        <div className="displaytext4">Psssst. I like events the best.</div>
      </Font>
      <div className="multi-button">
        <button className={classesbutton} onClick={change} disabled={!day}>
          Events
        </button>
        <button
          className={classesbutton}
          onClick={changebirths}
          disabled={!day}
        >
          Births
        </button>
        <button
          className={classesbutton}
          onClick={changedeaths}
          disabled={!day}
        >
          Deaths
        </button>
      </div>
    </>
  );
}
