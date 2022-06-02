import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "../components/BoardCss.css";
import { useState, useEffect } from "react";
import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import CollumnsInfo from "../components/CollumnsInfo";
import RowsInfo from "../components/RowsInfo";
import DiagonalInfo from "../components/DiagonalInfo";
import possibleRowOutcomes from "../possibleRowOutcomes";

export interface UseNumberValue {
  1?: number;
  2?: number;
  3?: number;
  4?: number;
  5?: number;
  6?: number;
  7?: number;
  8?: number;
  9?: number;
  0?: 0;
}

interface ActivateCollumn {
  collumnOne?: boolean;
  collumnTwo?: boolean;
  collumnThree?: boolean;
}

export default function BasicTextFields() {
  const elements = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [usedNumbers, setUsedNumbers] = useState<UseNumberValue>({});
  const [indexActive, setIndexActive] = useState<number[]>([]);
  const [duped, setDuped] = useState<Boolean>(false);
  const [validChar, setValidChar] = useState<Boolean>(true);
  const [collumnActivate, setCollumnActivate] = useState<ActivateCollumn>({});

  useEffect(() => {
    if (
      Object.values(usedNumbers).filter((el) => el !== "").length !==
      new Set(Object.values(usedNumbers).filter((el) => el !== "")).size
    ) {
      setDuped(true);
    } else {
      setDuped(false);
    }
  }, [indexActive]);

  useEffect(() => {
    let compareValidElements = Object.values(usedNumbers)
      .filter((el) => el !== 0)
      .every((r) => elements.toString().indexOf(r) >= 0);

    if (compareValidElements) {
      setValidChar(true);
    } else {
      setValidChar(false);
    }
  }, [indexActive]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    idx: number
  ) => {
    const numberInput = parseInt(event.target.value);
    const nullNumberInput = event.target.value;
    const bestPossibleOutcome = numberInput;
    if (idx === 0 || idx === 2 || idx === 6 || idx === 8) {
      if (numberInput) {
        let userInputCornerNumber = numberInput;
      }
      console.log("corner input");
    }
    if (idx === 4) {
      console.log("middle input");
    }
    if (idx === 1 || idx === 3 || idx === 5 || idx === 7) {
      console.log("inner input");
    }

    setIndexActive([...indexActive, idx]);
    if (numberInput) {
      setUsedNumbers({ ...usedNumbers, [idx]: numberInput });
    } else {
      setIndexActive(indexActive.filter((el) => el !== idx));

      setUsedNumbers({ ...usedNumbers, [idx]: nullNumberInput });
    }
  };

  return (
    <div className="board__Container">
      <CollumnsInfo usedNumbers={usedNumbers} indexActive={indexActive} />
      <RowsInfo usedNumbers={usedNumbers} indexActive={indexActive} />
      <DiagonalInfo usedNumbers={usedNumbers} indexActive={indexActive} />
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
      {!validChar ? (
        <div className="error__container">
          <Stack spacing={1} alignItems="center">
            <Stack direction="row" spacing={1}>
              <Chip label="Invalid Input" color="error" />
            </Stack>
          </Stack>
        </div>
      ) : null}
    </div>
  );
}
