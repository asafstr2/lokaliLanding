import React from "react";
import { makeStyles } from "@material-ui/styles";
import Mobilebg from "./assetes/pics/mobilebg.png";
import Desktopbg from "./assetes/pics/desktopbg.png";
import doodlesm from "./assetes/pics/doodlesm.png";
import doodlesd from "./assetes/pics/doodlesd.png";
import FormElemant from "./component/FormElemant";
import TextElament from "./component/TextElament";
import sizes from "./styles/sizes";
import { ReactComponent as Fb } from "./assetes/fb.svg";
import { ReactComponent as Ing } from "./assetes/ing.svg";
import { ReactComponent as LIcon } from "./assetes/L icon.svg";
import { ReactComponent as Line1 } from "./assetes/line 1.svg";
import { ReactComponent as Twit } from "./assetes/twit.svg";
import { ReactComponent as LogoBeta } from "./assetes/logo beta.svg";
import { ReactComponent as Doodle } from "./assetes/doodle.svg";
import { ReactComponent as Arrow } from "./assetes/arrow.svg";
import { ReactComponent as Baloon } from "./assetes/baloon.svg";
import PopUp from "./component/PopUp";

import axios from "./axios";
const useStyles = makeStyles({
  bgimg: {
    position: "relative",
    zIndex: "-2",
    float: "right",
    backgroundImage: `url(${Desktopbg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100vw",
    height: "97vh",
    overflow: "hidden",
    [sizes.down("xs")]: {
      height: "100vh",
      backgroundPosition: "right top",
      backgroundImage: `url(${Mobilebg})`,
    },
  },
  doodle: {
    backgroundImage: `url(${doodlesd})`,
    backgroundPosition: "center",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    height: "60%",
    [sizes.down("xs")]: {
      backgroundImage: `url(${doodlesm})`,
    },
  },
  socials: {
    position: "fixed",
    top: "85%",
    left: "1%",
    width: "100%",
    [sizes.down("xs")]: {
      top: "94%",
      left: "1%",
    },
    "& div": {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      width: "100%",
      [sizes.down("xs")]: {
        justifyContent: "center",
      },
    },
    "& a:first-child": {
      marginRight: "1%",
      "& svg": {
        width: "3rem",
        height: "3rem",
        [sizes.down("xs")]: {
          width: "2rem",
          height: "2rem",
        },
      },
    },
    "& a": {
      marginRight: "1%",
      "& svg": {
        zIndex: "1",
        width: "2rem",
        height: "2rem",
        [sizes.down("xs")]: {
          width: "1.5rem",
          height: "1.5rem",
        },
      },
    },

    "& span": {
      marginRight: "2%",
      [sizes.down("xs")]: {},
    },
  },

  lineContainer: {
    position: "fixed",
    top: "82%",
    left: "0%",
    display: "flex",
    [sizes.down("xs")]: {
      top: "92%",
    },
  },
  [sizes.down("xs")]: {
    top: "6%",
    left: "65%",
    width: "6rem",
    height: "6rem",
  },
  line: {
    width: "40rem",
    [sizes.down("xs")]: {
      position: "fixed",
      left: "0%",
      width: "100%",
    },
  },
  textForm: {
    position: "relative",
    zIndex: "3",
    width: "70%",
  },
  logoBeta: {
    position: "fixed",
    left: "3%",
    width: "6rem",
    height: "6rem",
    [sizes.down("xs")]: {
      left: "35%",
    },
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: " flex-start",
    position: "fixed",
    marginLeft: "2%",
    marginTop: "5%",
    width: "60%",
    height: "70%",
    // overflow: "hidden",
    [sizes.down("xs")]: {
      width: "80%",
      height: "90%",
    },
  },
  form: {
    position: "relative",
    zIndex: "20",
  },
  header: {
    alignSelf: "center",
    lineHeight: " 0.9",
    color: "#FFD207",
    fontSize: "4rem",
    marginRight: 0,
    marginLeft: 0,
    marginBottom: 30,
    marginTop: 50,

    [sizes.down("sm")]: {
      fontSize: "2rem",
      padding: 0,
      margin: "0",
    },
  },
  headerContainer: {
    display: "flex",
    width: "60%",
    [sizes.down("xs")]: {
      flexDirection: "column",
    },
  },
  arrow: {
    alignSelf: "flex-end",
    [sizes.down("xs")]: {
      width: "2rem",
      height: "2rem",
    },
  },
  doodleSingle: {
    alignSelf: "flex-start",
    [sizes.down("xs")]: {
      width: "2rem",
      height: "2rem",
    },
  },
  baloon: {
    position: "fixed",
    top: "8%",
    left: "34%",
    width: "8rem",
    height: "8rem",
    [sizes.down("xs")]: {
      top: "5%",
      left: "60%",
      width: "5rem",
      height: "5rem",
    },
  },
  text: {
    [sizes.down("xs")]: {
      "& text.p": {
        width: "90%",
      },
    },
  },
});

export default function Rev2() {
  const [open, setOpen] = React.useState(false);
  const [error, setError] = React.useState("");

  const handleSubmit = async (email) => {
    try {

      let res = await axios.get("/users/-MCrGoAti2ElTRJJ8vnW/user.json", {
        email,
      });
      console.log(res.data)

      let testIfexists =  res.data.every(user=>user.email!==email);
     
      if (testIfexists)
         { await axios.patch("/users/-MCrGoAti2ElTRJJ8vnW.json", {
          user: [...res.data, { email }],
        });
        setError("")
        setOpen(true)
      }
        else{
        console.log("user exists");
        setError("We have you on file and we will contact you once we launch")
        setOpen(true)}
    } catch (error) {
      console.log(error);
      setError(error)
      setOpen(true)
    }
  };

  const classes = useStyles();

  return (
    <div className={classes.bgimg}>
          <PopUp open={open} setOpen={setOpen} error={error} setError={setError}/>

      <LogoBeta className={classes.logoBeta} />
      <div className={classes.container}>
        <div className={classes.headerContainer}>
          <Doodle className={classes.doodleSingle} />
          <h1 className={classes.header}>We can't wait to met you</h1>
          <Arrow className={classes.arrow} />
        </div>

        <div className={classes.textForm}>
          <TextElament freeSpots={500} className={classes.text} />
          <FormElemant
            className={classes.form}
            handleSubmitfromoutside={handleSubmit}
          />
        </div>
      </div>

      <div className={classes.socials}>
        <div>
          <a href="https://www.facebook.com/">
            <LIcon className={classes.l_icon} />
          </a>
          <span>
            <b>find us here:</b>
          </span>
          <a href="https://www.facebook.com/lokalicommunity/">
            <Fb className={classes.fb} />
          </a>
          <a href="https://www.facebook.com/">
            <Ing className={classes.ing} />
          </a>
          <a href="https://www.facebook.com/">
            <Twit className={classes.twit} />
          </a>
        </div>
      </div>
      <div className={classes.lineContainer}>
        <Line1 className={classes.line} />
        <Line1 className={classes.line} />
      </div>
      <Baloon className={classes.baloon} />
    </div>
  );
}
