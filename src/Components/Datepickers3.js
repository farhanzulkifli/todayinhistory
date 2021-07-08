import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import React, { useState } from "react";
import { useHistory } from "react-router";
import classNames from "classnames";
import Font from "react-font";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function DatePickers3(props) {
  const [day, setDay] = useState(null);
  const [month, setMonth] = useState(null);
  // const [year, setYear] = useState(null);
  const history = useHistory();

  const handleextract = (event) => {
    const selectedDate = event.target.value;
    const selectedDay = new Date(selectedDate).getDate();
    const selectedMonth = new Date(selectedDate).getMonth() + 1;
    // const selectedYear = new Date(selectedDate).getFullYear()
    setDay(selectedDay);
    setMonth(selectedMonth);
    // setYear(selectedYear)
  };
  const change = () => {
    history.push(`/${month}/${day}/events`);
  };
  const changebirths = () => {
    history.push(`/${month}/${day}/births`);
  };
  const changedeaths = () => {
    history.push(`/${month}/${day}/deaths`);
  };
  const classes = useStyles();
  const classesbutton = classNames({
    multibutton: true,
    buttontry: true,
  });

  return (
    <>
      <Font family="Uchen">
        <div className="displaytext">Hey, tell me your birthday?</div>
      </Font>
      <div className="calendar">
        <TextField
          id="date"
          label="Birthday"
          type="date"
          defaultValue=""
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleextract}
        />
      </div>
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
