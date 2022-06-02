import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { GiReceiveMoney } from "react-icons/gi";
import { UseNumberValue } from "../components/Board";
import { useState, useEffect } from "react";
import "../components/CollumnsInfoCss.css";
import {
  outcomes,
  bestOutcomeForSingleNumber,
  lowestNotDupeNumber,
  highestNotDupeNumber,
  range,
  bestOutcomeForDoubleNumbers,
  bestOutcomeForTripleNumber,
} from "../bestPossibleRowOutcome";

interface PassedProps {
  usedNumbers: UseNumberValue;
  indexActive: number[];
}

interface ActivateCollumns {
  1?: Boolean;
  2?: Boolean;
  3?: Boolean;
}

interface ElementsInCollumn {
  1?: number;
  2?: number;
  3?: number;
}

const CollumnsInfo = ({ usedNumbers, indexActive }: PassedProps) => {
  const [activeCollumns, setActiveCollumns] = useState<ActivateCollumns>({});
  const [activeElementsInCollumn, setActiveElementsInCollumn] =
    useState<ElementsInCollumn>({});
  const collumnNames = ["Collumn One", "Collumn Two", "Collumn Three"];
  const collumnIndexValues = [0, 2, 3, 4, 5, 6, 7, 8];
  const collumnObj = {
    collumnOne: [0, 3, 6],
    collumnTwo: [1, 4, 7],
    collumnThree: [2, 5, 8],
  };

  useEffect(() => {}, [indexActive]);

  console.log(collumnIndexValues);

  return (
    <div className="collumns__container">
      {collumnNames.map((names, idx: number) => (
        <List
          key={idx}
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <GiReceiveMoney />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={names}
              secondary={
                activeCollumns
                  ? bestOutcomeForSingleNumber(usedNumbers[0])?.toString()
                  : null
              }
            />
          </ListItem>
        </List>
      ))}
    </div>
  );
};

export default CollumnsInfo;

/* if (
  indexActive.some((r) => Object.values(collumnObj.collumnOne).includes(r))
) {
  setActiveCollumns({ ...activeCollumns, 1: true });
}
if (
  indexActive.some((r) => Object.values(collumnObj.collumnTwo).includes(r))
) {
  setActiveCollumns({ ...activeCollumns, 2: true });
}
if (
  indexActive.some((r) =>
    Object.values(collumnObj.collumnThree).includes(r)
  )
) {
  setActiveCollumns({ ...activeCollumns, 3: true });
} */
