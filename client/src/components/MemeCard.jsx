import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 250,
  },
  pt3: {
    paddingTop: theme.spacing(3),
  },
}));
function MemeCard({ post }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {post.user.name[0].toUpperCase()}
          </Avatar>
        }
        title={post.user.name}
        subheader={post.createAt}
      />
      <CardMedia
        className={classes.media}
        image="https://cdn.pixabay.com/photo/2020/12/25/09/46/dog-5858985_960_720.jpg"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="h6" color="textSecondary">
          {post.name}
        </Typography>
        <Typography variant="body1">{post.description}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Link to={`/meme/${post._id}`}>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default MemeCard;
