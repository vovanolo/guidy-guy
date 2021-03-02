import styles from "./Card.module.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  root: {
    background: "#E5F0FF",
    minWidth: 300,
    maxWidth: 345,
    marginLeft: 20,
    marginTop: 20,
  },
  media: {
    height: 140,
    borderBottom: "2px solid #01142F",
  },
  title: {
    fontFamily: "'Times New Roman', Times, serif",
    fontWeight: 800,
  },
  desc: {
    fontFamily: "'Times New Roman', Times, serif",
    fontSize: 17,
    fontWeight: 800,
  },
  CardActions: {
    background: "#01142F",
  },
});

export default function MediaCard({ name, desc, imgUrl }) {
  const classes = useStyles();
  const prefix = "https://alin-ua-api.herokuapp.com";

  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia className={classes.media} image={prefix + imgUrl} />
          <CardContent>
            <Typography
              className={classes.title}
              gutterBottom
              variant="h5"
              component="h2"
            >
              {name}
            </Typography>
            <Typography
              className={classes.desc}
              variant="body2"
              color="textSecondary"
              component="p"
            >
              {desc}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.CardActions}>
          <Button size="small" variant="outlined" color="secondary">
            Share
          </Button>
          <Button size="small" variant="outlined" color="secondary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

MediaCard.propTypes = {
  name: PropTypes.string.isRequired,
};
