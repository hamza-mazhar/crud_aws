import React from "react";
import { Input } from "@mui/material";

interface ITodoSearchProps {
  collectItemForSearch: (item: string) => void;
  resetHandler: () => void;
}

const TodoSearch: React.FC<ITodoSearchProps> = ({
  collectItemForSearch,
  resetHandler,
}) => {
  const getSearchItem = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    collectItemForSearch(e.target.value);
  };

  return (
    <div>
      <Input
        style={{ color: "white" }}
        inputProps={{ "aria-label": "search" }}
        onChange={getSearchItem}
        placeholder="Search…"
      />
      {/* <button onClick={() => resetHandler()}>Reset</button> */}
    </div>
  );
};

export default TodoSearch;
