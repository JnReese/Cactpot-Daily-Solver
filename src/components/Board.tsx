import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "../components/BoardCss.css";
import { useState, useEffect } from "react";
import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import CollumnsInfo from "../components/CollumnsInfo";

export interface UseNumberValue {
  1: number;
  2: number;
  3: number;
  4: number;
  5: number;
  6: number;
  7: number;
  8: number;
  9: number;
  0: number;
}

export interface ElementsInActive {
  c1: number;
  c2: number;
  c3: number;
  r1: number;
  r2: number;
  r3: number;
  d1: number;
  d2: number;
}

export default function BasicTextFields() {
  const elements = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [usedNumbers, setUsedNumbers] = useState<UseNumberValue>({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    0: 0,
  });
  const [indexActive, setIndexActive] = useState<number[]>([]);
  const [duped, setDuped] = useState<Boolean>(false);
  const [validChar, setValidChar] = useState<Boolean>(true);
  const [currentNumber, setCurrentNumber] = useState<number | null>(null);
  const [elementsPerActiveSection, setElementsPerActiveSection] = useState<ElementsInActive>({
    c1: 0,
    c2: 0,
    c3: 0,
    r1: 0,
    r2: 0,
    r3: 0,
    d1: 0,
    d2: 0,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, idx: number) => {
    setCurrentNumber(parseInt(event.target.value));
    const numberInput = parseInt(event.target.value);
    const validNum = event.target.value;

    if (numberInput) {
      setIndexActive([...indexActive, idx]);
      setUsedNumbers({ ...usedNumbers, [idx]: numberInput });
      if (idx === 0 || idx === 3 || idx === 6) {
        setElementsPerActiveSection({
          ...elementsPerActiveSection,
          c1: (elementsPerActiveSection.c1 += 1),
        });
      }
      if (idx === 1 || idx === 4 || idx === 7) {
        setElementsPerActiveSection({
          ...elementsPerActiveSection,
          c2: (elementsPerActiveSection.c2 += 1),
        });
      }
      if (idx === 2 || idx === 5 || idx === 8) {
        setElementsPerActiveSection({
          ...elementsPerActiveSection,
          c3: (elementsPerActiveSection.c3 += 1),
        });
      }
      if (idx === 0 || idx === 1 || idx === 2) {
        setElementsPerActiveSection({
          ...elementsPerActiveSection,
          r1: (elementsPerActiveSection.r1 += 1),
        });
      }
      if (idx === 3 || idx === 4 || idx === 5) {
        setElementsPerActiveSection({
          ...elementsPerActiveSection,
          r2: (elementsPerActiveSection.r2 += 1),
        });
      }
      if (idx === 6 || idx === 7 || idx === 8) {
        setElementsPerActiveSection({
          ...elementsPerActiveSection,
          r3: (elementsPerActiveSection.r3 += 1),
        });
      }
      if (idx === 0 || idx === 4 || idx === 8) {
        setElementsPerActiveSection({
          ...elementsPerActiveSection,
          d1: (elementsPerActiveSection.d1 += 1),
        });
      }
      if (idx === 2 || idx === 4 || idx === 6) {
        setElementsPerActiveSection({
          ...elementsPerActiveSection,
          d2: (elementsPerActiveSection.d2 += 1),
        });
      }
    }
    if (!validNum) {
      if (idx === 0 || idx === 3 || idx === 6) {
        setElementsPerActiveSection({
          ...elementsPerActiveSection,
          c1: (elementsPerActiveSection.c1 -= 1),
        });
      }
      if (idx === 1 || idx === 4 || idx === 7) {
        setElementsPerActiveSection({
          ...elementsPerActiveSection,
          c2: (elementsPerActiveSection.c2 -= 1),
        });
      }
      if (idx === 2 || idx === 5 || idx === 8) {
        setElementsPerActiveSection({
          ...elementsPerActiveSection,
          c3: (elementsPerActiveSection.c3 -= 1),
        });
      }
      if (idx === 0 || idx === 1 || idx === 2) {
        setElementsPerActiveSection({
          ...elementsPerActiveSection,
          r1: (elementsPerActiveSection.r1 -= 1),
        });
      }
      if (idx === 3 || idx === 4 || idx === 5) {
        setElementsPerActiveSection({
          ...elementsPerActiveSection,
          r2: (elementsPerActiveSection.r2 -= 1),
        });
      }
      if (idx === 6 || idx === 7 || idx === 8) {
        setElementsPerActiveSection({
          ...elementsPerActiveSection,
          r3: (elementsPerActiveSection.r3 -= 1),
        });
      }
      if (idx === 0 || idx === 4 || idx === 8) {
        setElementsPerActiveSection({
          ...elementsPerActiveSection,
          d1: (elementsPerActiveSection.d1 -= 1),
        });
      }
      if (idx === 2 || idx === 4 || idx === 6) {
        setElementsPerActiveSection({
          ...elementsPerActiveSection,
          d2: (elementsPerActiveSection.d2 -= 1),
        });
      }
      setIndexActive(indexActive.filter((el) => el !== idx));
      setUsedNumbers({ ...usedNumbers, [idx]: validNum });
    }
  };

  return (
    <div className="board__Container">
      <CollumnsInfo
        usedNumbers={usedNumbers}
        indexActive={indexActive}
        currentNumber={currentNumber}
        elementsPerActiveSection={elementsPerActiveSection}
      />

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
