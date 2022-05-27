import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "../components/BoardCss.css";
import { useState, useEffect } from "react";
import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

interface UseNumberValue {
  0?: number;
  1?: number;
  2?: number;
  3?: number;
  4?: number;
  5?: number;
  6?: number;
  7?: number;
  8?: number;
}

export default function BasicTextFields() {
  const elements = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [usedNumbers, setUsedNumbers] = useState<UseNumberValue>({});
  const [indexActive, setIndexActive] = useState<number[]>([]);
  const [duped, setDuped] = useState<Boolean>(false);
  const [validChar, setValidChar] = useState<Boolean>(true);

  console.log(validChar);

  useEffect(() => {
    let compareNumbers = Object.values(usedNumbers).filter((el) => el);
    if (Object.values(usedNumbers).every((r) => elements.indexOf(r) >= 0)) {
      setValidChar(false);
    }

    if (
      Object.values(usedNumbers).filter((el) => el !== "").length !==
      new Set(Object.values(usedNumbers).filter((el) => el !== "")).size
    ) {
      setDuped(true);
    } else {
      setDuped(false);
      setValidChar(true);
    }
  }, [indexActive]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    idx: number
  ) => {
    const numberInput = event.target.value;

    setUsedNumbers({ ...usedNumbers, [idx]: numberInput });
    if (numberInput) {
      setIndexActive([...indexActive, idx]);
    } else {
      setIndexActive(indexActive.filter((el) => el !== idx));
    }
  };

  return (
    <div className="board__Container">
      <div className="input__container">
        <Box
          className="parent"
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "20ch" },
          }}
          noValidate
          autoComplete="off"
        >
          {elements.map((e, idx) => (
            <TextField
              key={idx}
              id="outlined-basic"
              label="Number"
              variant="outlined"
              // @ts-ignore
              onChange={(e) => handleChange(e, idx)}
            />
          ))}
        </Box>
      </div>
      {duped ? (
        <div className="error__container">
          <Stack spacing={1} alignItems="center">
            <Stack direction="row" spacing={1}>
              <Chip label="Duplicate Number" color="error" />
            </Stack>
          </Stack>
        </div>
      ) : null}
    </div>
  );
}
