import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import styled from "styled-components";
import IconChips from "../components/BestPossibleOutcome";

export default function ColorChips() {
  const titles = [
    "Column One",
    "Column Two",
    "Column Three",
    "Row One",
    "Row Two",
    "Row Three",
    "Diagonal One",
    "Diagonal Two",
  ];

  const bestSelection = () => {
    // outcome value with a array of 3 highest values (randomly pick if more than one)
  };

  return (
    <Container>
      <Layout className="titles__container">
        {titles.map((title, idx) => (
          <Stack key={idx} spacing={1} alignItems="center">
            <Stack direction="row" spacing={1}>
              <Chip label={title} color={"primary"} variant="outlined" />
            </Stack>
          </Stack>
        ))}
      </Layout>
      <IconChips />
    </Container>
  );
}

const Layout = styled.div`
  width: 45%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 25px;
  margin: 0 auto;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 1rem;
`;
