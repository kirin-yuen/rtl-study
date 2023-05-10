import React, { useState } from "react";
import DebounceInput from "../components/DebounceInput";
import SimpleInput from "../components/SimpleInput";
import { Grid } from "@material-ui/core";

export default function AutoSave() {
  const [debValue, setDebValue] = useState("");
  const [simpValue, setSimDebValue] = useState("");

  return (
    <Grid container spacing={5} justifyContent="center">
      <Grid item xs>
        <DebounceInput value={debValue} setValue={setDebValue} />
      </Grid>
      <Grid item xs>
        <SimpleInput value={simpValue} setValue={setSimDebValue} />
      </Grid>
    </Grid>
  );
}
