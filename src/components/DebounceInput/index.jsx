import React, { useEffect, useState } from "react";
import { TextField, CircularProgress, Backdrop } from "@material-ui/core";
import { useRef } from "react";

export default function DebounceInput({ value, setValue }) {
  const [typing, setTyping] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const timerRef = useRef(null);
  const content = useRef(null);
  const errorObj = useRef({ error: false, helperText: "" });

  const isStringEmpty = (str) => /^\s*$/g.test(str);

  const setErrorObj = (helperText, error) => {
    errorObj.current.helperText = helperText;
    errorObj.current.error = error;
  };

  useEffect(() => {
    if (!isStringEmpty(value)) {
      setErrorObj("Typing...", false);
      setTyping(true);

      timerRef.current && clearTimeout(timerRef.current);

      timerRef.current = setTimeout(() => {
        setTyping(false);
        setErrorObj("", false);
      }, 1000);
    }
  }, [value]);

  useEffect(() => {
    if (!isStringEmpty(value) && !typing) {
      setIsLoading(true);

      setTimeout(() => {
        fetch(value)
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
            console.debug(e);
            content.current = "";
            setErrorObj(e.toString(), true);
          })
          .finally(() => {
            setIsLoading(false);
          });
      }, 1000);
    }
  }, [typing]);

  return (
    <div>
      <TextField
        style={{ width: 500 }}
        value={value}
        onChange={(e) => {
          const { value } = e.target;
          setValue(value);
        }}
        helperText={errorObj.current.helperText}
        error={errorObj.current.error}
      />
      {isLoading && <CircularProgress size={26} />}

      {!typing && !isLoading && <div>{content.current}</div>}

      <Backdrop open={!typing && isLoading} style={{ zIndex: 0 }} />
    </div>
  );
}
