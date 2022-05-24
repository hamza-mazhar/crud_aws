import React, { useContext } from "react";
import { IPropsTodoList, todoItem } from "./todoTypes";
import { ThemeContext, ContextData } from "../App";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const TodoList: React.FC<IPropsTodoList> = ({ todoList, removeItem }) => {
  const removeTodo = (email: string) => {
    removeItem(email);
  };
  const { theme } = useContext<ContextData>(ThemeContext) as ContextData;

  const themeStyle = {
    background: theme ? "black" : "grey",
    color: theme ? "white" : "black",
    display: "flex",
    flexFlow: "row wrap",
  };

  return (
    <React.Fragment>
      <div style={themeStyle}>
        {todoList?.map((data: todoItem, idx: number) => (
          <div key={idx} style={{ margin: "5px" }}>
            <Card sx={{ maxWidth: 240 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Brandenburger_Tor_abends.jpg/1200px-Brandenburger_Tor_abends.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {data.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {data.email}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => removeTodo(data.email)}
                >
                  Remove
                </Button>
              </CardActions>
            </Card>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default TodoList;
