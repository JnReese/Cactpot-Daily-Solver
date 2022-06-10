import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { GiReceiveMoney } from "react-icons/gi";
import styled from "styled-components";

export default function IconChips() {
  return (
    <Container>
      <Stack direction="row" spacing={1}>
        <p> Potentially your highest payout : </p>
        <Chip icon={<GiReceiveMoney />} color="success" size="medium" label="Highest Payout" />
      </Stack>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 25px;
`;
