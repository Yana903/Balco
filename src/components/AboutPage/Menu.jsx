import React from "react";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

export default function TypographyMenu() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <MenuList>
        <MenuItem>
          <p>
            С крышкой захлопкой <span>(24)</span>
          </p>
        </MenuItem>
        <MenuItem>
          <p>
            С винтовой крышкой <span>(35)</span>
          </p>
        </MenuItem>
        <MenuItem>
          <p>
            Баночки под присыпку <span>(4)</span>
          </p>
        </MenuItem>
        <MenuItem>
          <p>
            Бутылки под ПЭТ крышку <span>(7)</span>
          </p>
        </MenuItem>
        <MenuItem>
          <p>
            Контейнеры для анализов <span>(2)</span>
          </p>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}
