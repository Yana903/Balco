import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "../../App.css";
import classesAbout from "./About.module.css";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Menu from "./Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    boxShadow: "none",
    "& ul": {
      paddingTop: "0px",
      paddingBottom: "0px",
    },
    "& li": {
      fontSize: "16px",
      fontWeight: "300",
      whiteSpace: "normal"
    },
    "& div": {
      boxShadow: "none",
      paddingTop: "0",
      paddingBottom: "0",
    },
  },
  heading: {
    // fontSize: theme.typography.pxToRem(15),
    // fontWeight: theme.typography.fontWeightRegular,
    fontSize: "18px",
    lineHeight: "22px",
    fontWeight: "600"
  },
}));

export default function SimpleExpansionPanel() {
  const classes = useStyles();

  return (
    <Fragment>
    <div className="headingSidebar">
      <Typography variant="h4">
        Каталог продукции
      </Typography>
    </div>
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            Тара для медицины (72)
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <Menu />
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Тара для косметики (118)</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
    </Fragment>
  );
}
