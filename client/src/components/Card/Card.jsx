import styles from "./Card.module.css";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container } from "@material-ui/core";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
      background: '#535353',
      maxWidth: 345,
      marginTop: 20,
    },
    media: {
      height: 140,
    },
    button: {
      background: '#404040',
    },
  });

  const eventsData = [
    {
      image:
        "https://2e4efd3ddd5ec0b50028-7d521b783d142fa14612a0034dea730a.ssl.cf2.rackcdn.com/gallery/2008/08/3190854_1316217600_gallery_image_3072799.jpg",
      title: "Title1",
      description:
        "Designers react to JavaScript. Join us in this meetup where designers gather to share newbie React knowledge."
    },
    {
      image: "https://farm8.staticflickr.com/7007/6392178127_177ea51b56_b.jpg",
      title: "Title2",
      description: "The meetup goes to Estonia."
    },
    {
      image:
        "https://ak.picdn.net/shutterstock/videos/9465185/thumb/1.jpg",
      title: "Title3",
      description: "Join us to learn and share newbie React knowledge."
    },
];


  export default function MediaCard({ image, title, description }) {
    const classes = useStyles();
  
    const eventList = eventsData.map(({ image, title, description }, index) => (
        <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={image}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.button}>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    ));

    return (
      <div>
        <Container>
          {eventList}
        </Container>
      </div>
    );
  }