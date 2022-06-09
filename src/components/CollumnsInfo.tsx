import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { GiReceiveMoney } from "react-icons/gi";
import { UseNumberValue } from "../components/Board";
import { useState, useEffect } from "react";
import { ElementsInActive } from "../components/Board";
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
  currentNumber: number | null;
  elementsPerActiveSection: ElementsInActive;
}

interface ActivateCollumns {
  1?: number[];
  2?: number[];
  3?: number[];
}

const CollumnsInfo = ({ usedNumbers, indexActive, currentNumber, elementsPerActiveSection }: PassedProps) => {
  const [activeCollumns, setActiveCollumns] = useState<ActivateCollumns>({});
  const [allCalculationsActive, setAllCalculationsActive] = useState<string[]>([]);

  const allNames = [
    "Collumn One",
    "Collumn Two",
    "Collumn Three",
    "Row One",
    "Row Two",
    "Row Three",
    "Diagonal One",
    "Diagonal Two",
  ];

  const indexCollections = {
    collumnOne: [0, 3, 6],
    collumnTwo: [1, 4, 7],
    collumnThree: [2, 5, 8],
    diagonalOne: [0, 4, 8],
    diagonalTwo: [2, 4, 6],
    rowOne: [0, 1, 2],
    rowTwo: [3, 4, 5],
    rowThree: [6, 7, 8],
  };

  const calcuateMGPOutput = () => {
    if (activeCollumns) {
      if (Object.values(usedNumbers)) {
        return bestOutcomeForSingleNumber(usedNumbers[0]);
      }
    }
  };

  useEffect(() => {
    const filteredKeys = Object.keys(indexCollections).filter((key) => {
      return indexActive.some((i) => indexCollections[key as keyof typeof indexCollections].includes(i));
    });
    setAllCalculationsActive(filteredKeys);
  }, [indexActive]);

  return (
    <div className="output__container">
      <div className="diagonal__container">
        {allNames.map((names, idx: number) => (
          <List key={idx} sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <GiReceiveMoney />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={names} secondary={activeCollumns ? calcuateMGPOutput() : null} />
            </ListItem>
          </List>
        ))}
      </div>
    </div>
  );
};

export default CollumnsInfo;
