import React, { useState, createContext } from "react";
import TodoForm from "./components/todoForm";
import TodoList from "./components/todoList";
import { themeMaterialUI } from "./components/theme";
import { todoItem } from "./components/todoTypes";
import { Button } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import SearchTodo from "./components/search";

import "./App.css";

export type ContextData = {
  theme: boolean;
};

export const ThemeContext = createContext<ContextData>({
  theme: false,
});

function App() {
  const [todoList, setTodo] = useState<todoItem[]>([
    { name: "testing", email: "testing@gmail.com" },
  ]);
  const [theme, setTheme] = useState(true);
  const [tempList, setTemp] = useState<todoItem[]>([
    { name: "testing", email: "testing@gmail.com" },
  ]);
  const dataCollector = (dataObj: todoItem) => {
    setTodo([...todoList, dataObj]);
    setTemp([...todoList, dataObj]);
  };

  const removeTodo = (email: string) => {
    setTodo((prevState) => prevState.filter((item) => item.email !== email));
    setTemp((prevState) => prevState.filter((item) => item.email !== email));
  };

  const collectItemForSearch = (item: string) => {
    const filtered = todoList.filter((entry) =>
      Object.values(entry).some(
        (val) => typeof val === "string" && val.includes(item)
      )
    );
    setTodo((prevTodo) => filtered);
    if (item.length === 0) {
      setTodo((prevTodo) => tempList);
    }
  };

  const resetHandler = () => {
    setTodo((prevTodo) => tempList);
  };

  const handleTheme = () => {
    setTheme(!theme);
  };

  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              MUI
            </Typography>
            <SearchTodo
              collectItemForSearch={collectItemForSearch}
              resetHandler={resetHandler}
            />
          </Toolbar>
        </AppBar>
      </Box>
      <ThemeProvider theme={themeMaterialUI}>
        <ThemeContext.Provider value={{ theme }}>
          <Button onClick={handleTheme}>Theme</Button>
          <TodoForm dataCollector={dataCollector} />
          <TodoList todoList={todoList} removeItem={removeTodo} />
        </ThemeContext.Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
