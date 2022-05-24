import React, { useState } from "react";
import { todoItem } from "./todoTypes";
import { Button, TextField, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";

interface ITodoForm {
  dataCollector: (data: todoItem) => void;
}
const useStyles = makeStyles((theme: any) => ({
  button: {
    margin: theme.spacing(1),
  },
  leftIcon: {
    marginRight: theme.spacing(1),
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
  iconSmall: {
    fontSize: 20,
  },
  root: {
    padding: theme.spacing(3, 2),
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 400,
  },
}));

const TodoForm: React.FC<ITodoForm> = ({ dataCollector }) => {
  const classes = useStyles();
  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
  });

  const handleInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const name = evt.target.name;
    const newValue = evt.target.value;
    setFormInput({
      ...formInput,
      [name]: newValue,
    });
  };

  const handleSubmit = (evt: React.SyntheticEvent<EventTarget>) => {
    evt.preventDefault();
    dataCollector(formInput);
    setFormInput({ name: "", email: "" });
  };
  return (
    <div>
      <Paper className={classes.root}>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <TextField
            label="Name"
            id="margin-normal"
            name="name"
            required
            helperText="Enter your full name"
            onChange={handleInput}
            variant="standard"
            size="small"
            value={formInput.name}
          />
          <TextField
            label="Email"
            id="margin-normal"
            name="email"
            type="email"
            value={formInput.email}
            required
            helperText="e.g. name@gmail.com"
            onChange={handleInput}
            variant="standard"
            size="small"
          />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default TodoForm;
