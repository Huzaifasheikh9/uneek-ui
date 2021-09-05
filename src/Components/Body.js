import React from "react";
import {
  Grid,
  Box,
  Typography,
  InputBase,
  Button,
  SimpleModal
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

import "./Body.css";
import { useState } from "react";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Body = () => {
  const [data, setData] = useState({ Email: "" });

  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    // console.log(event.target.value)
    const emailValue = event.target.value;
    setData({ Email: emailValue });
    console.log(data);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Email Entered</h2>
      <p id="simple-modal-description">
        {data.Email}
      </p>
      <Modal />
    </div>
  );
  return (
    <Grid container spacing={6}>
      <Grid item xs={6} className="Body-section">
        <Typography className="CCC" variant="h1" paragraph={true}>
          Connect.<br></br> Collect.<br></br> Coordinate.{" "}
        </Typography>
        <Typography variant="p" paragraph={true} className="highlights">
          Uneek - lightweight, simple and effective client management and
          connection tools for your portfolio.
        </Typography>
      </Grid>
      <Grid item xs={6} className="Body-section">
        <Box className="tab-mob-image"></Box>
      </Grid>
      <Grid container direction="row" item xs={12} justifyContent="center">
        <Grid item xs={4} style={{ paddingBottom: "20px" }}>
          <InputBase
            variant="outlined"
            fullWidth={true}
            placeholder="enter email here"
            classes={{ root: "inputOverRider" }}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
      <Grid container xs={12} justifyContent="center">
        <Grid item xs={4} style={{ paddingBottom: "50px" }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth={true}
            classes={{ root: "btnRoot" }}
            onClick={handleOpen}
          >
            Register For Early Access
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            {body}
          </Modal>
        </Grid>
      </Grid>
      <Grid container xs={12} justifyContent="center" alignItems="center">
        <Grid item xs={1} style={{ textAlign: "center" }}>
          <img
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMiIgaGVpZ2h0PSI2MiIgdmlld0JveD0iMCAwIDIgNjIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHR
            wOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxsaW5lIHgxPSIxIiB5MT0iMSIgeDI9IjEiIHkyPSI2MSIgc3Ryb2tlPS
              J1cmwoI3BhaW50MF9saW5lYXIpIiBzdHJva2Utd2lkdGg9IjIiIHN
              0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8ZGVmcz4KPGxp
              bmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyIiB4MT0iLTcu
              NDE2N2UtMDkiIHkxPSIyLjU0MDk4IiB4Mj0iLTIuNzI2MTFlLTA3IiB5Mj0iNjIiIGdyYWRpZW50VW5pdHM9In
              VzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzMxODhGRiIgc3RvcC1vcGFjaXR5PSIwIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC
              1jb2xvcj0iIzMxODhGRiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo="
            alt="design"
          />
        </Grid>
        <Grid container xs={12} justifyContent="center" alignItems="center">
          <Grid item xs={6}>
            <Typography variant="h3" style={{ textAlign: "center" }}>
              Adapt your agency to the 'new normal'
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Body;
