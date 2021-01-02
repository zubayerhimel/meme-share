import { Button, Container, Grid, TextareaAutosize, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  pt3: {
    paddingTop: theme.spacing(3),
  },
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    textTransform: "none",
    fontFamily: "Nunito",
  },
  image: {
    height: 200,
    maxWidth: 380,
  },
}));

const Dashboard = () => {
  const classes = useStyles();

  // useStates
  const [image, setImage] = useState(
    "https://img.pngio.com/index-of-htdocs-content-plugins-slider-images-image-icon-png-800_600.png"
  );
  const [imageAsset, setImageAsset] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [memeName, setMemeName] = useState("");
  const [memeDescription, setMemeDescription] = useState("");

  // methods
  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
    // console.log(reader.readAsDataURL(e.target.files[0]));
    console.log(e.target.files[0]);
  };

  const imageUpload = () => {
    const { files } = document.querySelector('input[type="file"]');
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "ml_default");
    const options = {
      method: "POST",
      body: formData,
    };

    return fetch("https://api.Cloudinary.com/v1_1/dck5ccwjv/image/upload", options)
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Container maxWidth="lg" className={classes.pt3}>
        <h1 className={classes.center}>Share a new Meme</h1>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField label="Meme Name" variant="outlined" fullWidth></TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField multiline label="Description" variant="outlined" fullWidth></TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <img src={image} alt="image" className={classes.image} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <input type="file" accept=".png, .jpg, .jpeg, .gif" onChange={imageHandler} />
            </Grid>
          </Grid>
          <div className={classes.center}>
            <Button variant="contained" color="primary" className={classes.btn} onClick={imageUpload}>
              Publish Meme
            </Button>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default Dashboard;
