import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { GiReceiveMoney } from "react-icons/gi";
import { UseNumberValue } from "../components/Board";

interface PassedProps {
  usedNumbers: UseNumberValue;
  indexActive: number[];
}

const CollumnsInfo = ({ usedNumbers, indexActive }: PassedProps) => {
  const collumnOne = [0, 3, 6];
  const collumnTwo = [1, 4, 7];
  const collumnThree = [2, 5, 8];

  let sumOfInputs = usedNumbers[1]!;

  return (
    <div className="collumns__container">
      {indexActive.some((r) => collumnOne.indexOf(r) >= 0) ? (
        <div className="collumnOne__container">
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <GiReceiveMoney />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="honk" secondary="Top 3 MGP from Collumn" />
            </ListItem>
          </List>
        </div>
      ) : null}
    </div>
  );
};

export default CollumnsInfo;
