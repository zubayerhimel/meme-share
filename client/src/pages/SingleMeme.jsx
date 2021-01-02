import { CardMedia, Container, Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  image: {
    height: "auto",
    width: 600,
  },
}));

function SingleMeme() {
  const classes = useStyles();
  const [info, setInfo] = useState([]);

  useEffect(() => {
    let url = window.location.pathname;
    url = url.replace("/meme/", "");
    axios
      .get(`/api/posts/${url}`)
      .then((res) => {
        let data = res.data.data;
        setInfo(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container className={classes.pt3}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <CardMedia
            className={classes.image}
            component="img"
            alt="Contemplative Reptile"
            image={info.pictureURL}
            title={info.name}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h3" color="textSecondary">
            {info.name}
          </Typography>
          <Typography variant="body1">{info.description}</Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default SingleMeme;
