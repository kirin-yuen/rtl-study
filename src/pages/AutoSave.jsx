import React, { useState } from "react";
import DebounceInput from "../components/DebounceInput";
import SimpleInput from "../components/SimpleInput";
import { Grid } from "@material-ui/core";

export default function AutoSave() {
  const [debValue, setDebValue] = useState("");

  return (
    <Grid container spacing={5} justifyContent="center">
      <Grid item xs>
        <DebounceInput value={debValue} setValue={setDebValue} />
      </Grid>
    </Grid>
  );
}
