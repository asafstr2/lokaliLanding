import React from "react";
import { makeStyles } from "@material-ui/styles";
import sizes from "../styles/sizes";

const useStyles = makeStyles({
  root:{
    [sizes.down("xs")]: {
      width: "90%",
    }
  },
  mainYello: {
    backgroundColor: "#FFD207",
    height: "2.5rem",
    marginTop: "1rem",
    fontSize: "1.5rem",
    display: "flex",
    width: "auto",
    borderRadius: "20px",
    [sizes.down("xs")]: {
      fontSize: "0.5rem",
      width: "50%",
    },
  },
  yellow: { margin: "auto" },
  bold: {
    fontSize: "2rem",
    [sizes.down("xs")]: {
      fontSize: "1rem",
    },
  },
});

export default function TextElament({ freeSpots }) {
  const classes = useStyles();

  return (
    <p className={classes.root}>
      <b>Be a pioneer,be a leader,join us building our lokali community</b>
      <br />
      We're excited to welcome you to join us in the exclusive beta launch of
      the lokali project, Connecting neighbors, sharing skills, helping each
      other and creating pure magic powered by human kindness. sign up now and
      be the first to join our project <br />
      <div className={classes.mainYello}>
        <span className={classes.yellow}>
          only <span className={classes.bold}>{freeSpots}</span> free spots left{" "}
        </span>
      </div>
    </p>
  );
}
