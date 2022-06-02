import { UseNumberValue } from "../components/Board";
interface PassedProps {
  usedNumbers: UseNumberValue;
  indexActive: number[];
}

const DiagonalInfo = ({ usedNumbers, indexActive }: PassedProps) => {
  return <div>DiagonalInfo</div>;
};

export default DiagonalInfo;
