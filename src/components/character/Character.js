import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';


import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
      margin: "0.5rem",
  },
  media: {
    height: 0,
    paddingTop: '100%', // 16:9
  },
  
  content: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0.75rem 0px 0.375rem",
    borderBottom: "1px solid rgb(68, 68, 68)",
    '& p': {
        width: "100%",
        fontSize: "0.9rem",
        fontWeight: "200",
        textAlign: "right",
        padding: "0px",
        margin: "0px",
        color: "rgb(255, 152, 0)",
        float: "right",
        },
    '& span': {
        fontSize: "0.7rem",
        fontWeight: "400",
        color: "rgb(158, 158, 158)"
    }
  },
}));

export default function Character(props) {
  const classes = useStyles();

  const {
    id, name, status, species, type, gender, origin, location, image 
  } = props;

  let url = '/character/'.concat(id)

  return (
    <Container>
    <Card className={classes.root}>
      <CardHeader
        action={
          <IconButton aria-label="character" color="primary" href={url}>
            <ArrowForwardIcon size="medium"/>
          </IconButton>
        }
        title={name}
        subheader={status}
      />
      <CardMedia
        className={classes.media}
        image={image}
        title={name}
      />
      <CardContent>
        <div className={classes.content}>
            <span>Species:</span>
            <p>{species}</p>
        </div>
        <div className={classes.content}>
            <span>Type:</span>
            <p>{type}</p>
        </div>
        <div className={classes.content}>
            <span>Gender:</span>
            <p>{gender}</p>
        </div>
        <div className={classes.content}>
            <span>Origin:</span>
            <p>{origin.name}</p>
        </div>
        <div className={classes.content}>
            <span> Location:</span>
            <p>{location.name}</p>
        </div>
      </CardContent>
    </Card>
    </Container>
  );
}