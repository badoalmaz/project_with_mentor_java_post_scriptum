import SearchIcon from "@mui/icons-material/Search";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  InputAdornment,
  Paper,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../contexts/ProductContextProvider";

const SideBar = () => {
  const { getProducts, fetchByParams } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("q") || "");

  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  //   console.log(window.location.search);

  return (
    <Paper sx={{ m: 5, display: "flex", flexDirection: "column", p: 5 }}>
      <TextField
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        id="input-with-icon-textfield"
        // label="TexxtField"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />

      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Category</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="all"
          name="radio-buttons-group"
          onChange={(e) => fetchByParams("type", e.target.value)}
        >
          <FormControlLabel value="all" control={<Radio />} label="all" />
          <FormControlLabel
            value="electronics"
            control={<Radio />}
            label="electronics"
          />
          <FormControlLabel value="sport" control={<Radio />} label="sport" />

          <FormControlLabel
            value="clothes"
            control={<Radio />}
            label="clothes"
          />
        </RadioGroup>
      </FormControl>
    </Paper>
  );
};

export default SideBar;
