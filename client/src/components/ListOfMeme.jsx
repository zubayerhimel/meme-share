import { Container, Grid } from "@material-ui/core";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState, useEffect } from "react";
import MemeCard from "./MemeCard";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 250,
  },
  pt3: {
    paddingTop: theme.spacing(3),
  },
}));

export default function ListOfMeme() {
  const classes = useStyles();

  // states
  const [posts, setPosts] = useState([]);

  useEffect(async () => {
    axios.get("/api/posts").then((res) => {
      console.log(res.data);
      setPosts(res.data.data);
    });
  }, []);

  return (
    <div>
      <Container maxWidth="lg" className={classes.pt3}>
        <Grid container spacing={2}>
          {posts.map((post) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={post._id}>
              <MemeCard post={post} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
