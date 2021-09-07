import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import { red } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin : '10px 0px',
  },
  media: {
    height: 0,
    paddingTop: '100%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function OneMovie({onemovie}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {onemovie.name[0]}
          </Avatar>
        }
        title={onemovie.name}
        subheader={onemovie.date}
      />
      <CardMedia
        className={classes.media}
        image={onemovie.image}
        title={onemovie.name}
      />
      <CardContent>

        
        <p> Type : {onemovie.type}</p>
        <Typography variant="body2" color="textSecondary" component="p">
          {onemovie.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Box component="fieldset" mb={3} borderColor="transparent">
          <Rating name="read-only" value={onemovie.rating} readOnly />
        </Box>
        <Button variant="contained" color="secondary">
          <Link to={{
            pathname:`/description/${onemovie.id}`, 
            state:{onemovie},
        }}>
          WATCH TRAILER
          </Link>
      </Button>
      </CardActions>
      
    </Card>
  );
}
