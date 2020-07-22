import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Slide from "@material-ui/core/Slide";
import popd from "../assetes/pics/popd.jpg";
import popm from "../assetes/pics/popm.jpg";
import { makeStyles } from "@material-ui/styles";
import sizes from "../styles/sizes";

const useStyles = makeStyles({
  popup:{
    backgroundImage: `url(${popd})`,
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    width: "90vw",
    height: "90vh",
    overflow: "hidden",
    [sizes.down("xs")]: {
      height: "100vh",
      backgroundSize: "contain",
      backgroundImage: `url(${popm})`,
    },

  }
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({ open, setOpen, error, setError }) {
  const handleClose = () => {
    setOpen(false);
    setError("");
  };

  const fullScreen = !error.length > 0;
  const classes = useStyles();

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-labelledby="dialog-slide"
      aria-describedby="dialog-slide"
      onClick={handleClose}
    >
      <DialogContent>
        {error.length > 0 ? error : <div  className={classes.popup}></div>}
      </DialogContent>
      <DialogActions>
        
      </DialogActions>
    </Dialog>
  );
}
