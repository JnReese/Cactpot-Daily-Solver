import { HiOutlineArrowSmRight } from "react-icons/hi";
import { HiOutlineArrowSmDown } from "react-icons/hi";
import { CgArrowsExpandUpRight } from "react-icons/cg";
import { CgArrowsExpandDownRight } from "react-icons/cg";

const Arrows = () => {
  const tripleArrows = ["1", "2", "3"];
  return (
    <div className="allArrows">
      {tripleArrows.map((el, idx) => (
        <HiOutlineArrowSmRight key={idx} />
      ))}
      {tripleArrows.map((el, idx) => (
        <HiOutlineArrowSmDown key={idx} />
      ))}
      <CgArrowsExpandDownRight />
      <CgArrowsExpandUpRight />
    </div>
  );
};

export default Arrows;
