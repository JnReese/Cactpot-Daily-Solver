import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import styled from "styled-components";
import { useState } from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

interface CellInputs {
  none: "";
  1: number | "";
  2: number | "";
  3: number | "";
  4: number | "";
  5: number | "";
  6: number | "";
  7: number | "";
  8: number | "";
  9: number | "";
}

export default function BasicSelect() {
  const [numberInput, setNumberInput] = useState<CellInputs>({
    none: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: "",
  });
  const [dupe, setDupe] = useState<boolean>(false);

  const numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const countInArray = (array: number[], item: number) => {
    return array.filter((el) => el == item).length;
  };

  const handleChange = (event: SelectChangeEvent, idx: number) => {
    const inputValue = event.target.value;
    setNumberInput({ ...numberInput, [idx]: Number(inputValue) });
    if (countInArray(Object.values(numberInput), parseInt(inputValue))) {
      setDupe(true);
    } else {
      setDupe(false);
    }
  };

  return (
    <Container>
      <Layout>
        {numberOptions.map((number, idx) => (
          <Box key={idx} sx={{ maxWidth: 120, minWidth: 120 }}>
            <FormControl fullWidth error={dupe}>
              <InputLabel id="demo-simple-select-label">Number</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={(numberInput[idx as keyof CellInputs] as any) ?? ""}
                label="Number"
                onChange={(event) => handleChange(event, idx)}
              >
                {numberOptions.map((number, idx) => (
                  <MenuItem value={number} key={idx}>
                    {number}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        ))}
      </Layout>
      {dupe ? (
        <ErrorChip>
          <Stack direction="row" spacing={1}>
            <Chip label="Duplicate Number" color="error" />
          </Stack>
        </ErrorChip>
      ) : null}
    </Container>
  );
}
const Layout = styled.div`
  width: 30%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 100px;
  grid-row-gap: 20px;
  margin: 0 auto;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 25px;
`;
const ErrorChip = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;
