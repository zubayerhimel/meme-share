import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  media: {
    height: 250,
  },
  pt3: {
    paddingTop: 30,
  },
}));

export default function ListOfMeme() {
  const classes = useStyles();
  return (
    <div>
      <Container maxWidth="lg" className={classes.pt3}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card className={classes.root}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    R
                  </Avatar>
                }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
              />
              <CardMedia
                className={classes.media}
                image="https://cdn.pixabay.com/photo/2020/12/25/09/46/dog-5858985_960_720.jpg"
                title="Paella dish"
              />
              <CardContent>
                <Typography variant="h6" color="textSecondary">
                  Funny meme
                </Typography>
                <Typography variant="body1">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, eligendi.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card className={classes.root}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    R
                  </Avatar>
                }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
              />
              <CardMedia
                className={classes.media}
                image="https://cdn.pixabay.com/photo/2020/12/25/09/46/dog-5858985_960_720.jpg"
                title="Paella dish"
              />
              <CardContent>
                <Typography variant="h6" color="textSecondary">
                  Funny meme
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
