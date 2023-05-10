import React, { useEffect, useRef } from "react";
import { TextField, CircularProgress, Backdrop } from "@material-ui/core";
import { useState } from "react";
import useDebounce from "../../hooks/useDebounce";

export default function Input({value, setValue}) {
  const debounceValue = useDebounce(value, 1000);
  const [isLoading, setIsLoading] = useState(false);
  const content = useRef(null);

  useEffect(() => {
    if (debounceValue) {
      setIsLoading(true);

      setTimeout(() => {
        fetch(debounceValue)
          .then((resp) => {
            if (resp.status === 200) {
              return resp.json();
            } else {
              throw new Error(resp.statusText);
            }
          })
          .then((data) => {
            content.current = JSON.stringify(data);
          })
          .catch((e) => {
            content.current = "";
            console.debug(e);
          })
          .finally(() => {
            setIsLoading(false);
          });
      }, 1000);
    }
  }, [debounceValue]);

  return (
    <div>
      <TextField
        style={{ width: 500 }}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {isLoading && <CircularProgress size={26} />}
      <p>{debounceValue}</p>
      <p>{content.current}</p>
      <Backdrop open={isLoading} invisible style={{ zIndex: 0 }} />
    </div>
  );
}
