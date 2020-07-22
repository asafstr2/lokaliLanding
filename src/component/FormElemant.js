import React from "react";
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Button from "@material-ui/core/Button";
import sizes from "../styles/sizes";

const useStyles = makeStyles((theme) => ({
  text: {
    marginTop: theme.spacing(1),
    "& input:valid + fieldset": {
      borderColor: "green",
      borderWidth: 2,
    },
    "& input:invalid + fieldset": {
      borderColor: "red",
      borderWidth: 2,
    },
    width: "50%",
    [sizes.down("xs")]: {
      width: "100%",
    },
  },
  button2: {
    marginTop: theme.spacing(1),
    height: theme.spacing(7),
    textAlign: "center",
    width: "50%",
    [sizes.down("xs")]: {
      width: "100%",
    },
  },
}));
const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#484848",
      main: "#000000",
      dark: "#484848",
      contrastText: "#fff",
    },
  },
});

export default function FormElement({ handleSubmitfromoutside }) {
  const classes = useStyles();

  const [state, setState] = React.useState("");

  const handleChange = (event) => {
    const email = event.target.value;
    setState(email);
  };

  const handleSubmit = () => {
    handleSubmitfromoutside(state);
  };
  return (
    <ThemeProvider theme={theme}>
    <ValidatorForm
      onSubmit={handleSubmit}
      onError={(errors) => console.log(errors)}
    >
      <TextValidator
        className={classes.text}
        onChange={handleChange}
        label="Email"
        required
        variant="outlined"
        defaultValue=""
        id="FormElement"
        name="email"
        value={state}
        validators={["required", "isEmail"]}
        errorMessages={["this field is required", "email is not valid"]}
      />
        <Button
          variant="contained"
          color="primary"
          className={classes.button2}
          type="submit"
        >
          Sign me up!
        </Button>
    </ValidatorForm>
    </ThemeProvider>
  );
}
