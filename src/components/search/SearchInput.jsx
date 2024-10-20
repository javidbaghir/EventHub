import {
  Button,
  IconButton,
  Input,
  InputAdornment,
  InputBase,
  Paper,
} from "@mui/material";
import React, { useState } from "react";
import { ApiGet } from "../../api/Api";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

function SearchInput() {
  const [searchTerm, setSearchTerm] = useState([]);
  const navigate = useNavigate();

  const search = async (event) => {
    event.preventDefault();
    const search = await ApiGet(
      `https://all-api.bitcode.az/api/news?title=${searchTerm}`
    );

    if (search.status === 200 && search.data.data) {
      navigate(`/search?title=${searchTerm}`, { state: { data: search.data.data } });
      setSearchTerm("");
    }
  };

  return (
    <Paper
      onSubmit={search}
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Tədbir axtar"
        inputProps={{ "aria-label": "Tədbir axtar" }}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>

  );
}

export default SearchInput;
