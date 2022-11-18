import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import axios from "axios";
import styles from "./styles.module.css";
import { Stack } from "@mui/system";
const AllCurrentUrl = "https://restcountries.com/v3.1/all";
const AddressGetter = () => {
  const AllCountry = [];
  const GetCurrentCountry = () => {
    axios.get(AllCurrentUrl).then((response) => {
      response.data.map((item, i) => {
        AllCountry.push({ label: item.name.common, id: i });
      });
    });
  };
  GetCurrentCountry();

  return (
    <div className={styles.MainWrapper}>
      <Stack direction="row" spacing={5} >
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={AllCountry}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Country"
              className={styles.TextField}
            />
          )}
        />
        <TextField
          id="outlined-search"
          label="Street"
          type="search"
          className={styles.TextField}
        />
      </Stack>
    </div>
  );
};

export default AddressGetter;
