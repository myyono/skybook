import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import dia from '../gambar/Ellipse_bar.png';
import ShareIcon from '@material-ui/icons/Share';
import IconButton from '@material-ui/core/IconButton';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import CardActions from '@material-ui/core/CardActions';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

const  MediaControlCard = () => {
  const classes = useStyles();
  // const theme = useTheme();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
					<img src={dia} alt="iya" />
          <Typography component="h5" variant="h5">
            Supri Yono
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            26 Tahun
          </Typography>
        </CardContent>
				<IconButton aria-label="share">
          <ShareIcon />
					<CardActions disableSpacing>
					<ThumbUpAltIcon />
					</CardActions>
        </IconButton>
      </div>
    </Card>
  );
}

export default MediaControlCard;
