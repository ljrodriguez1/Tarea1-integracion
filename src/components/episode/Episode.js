import React from 'react';
import Grid from "@material-ui/core/Grid";
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Paper from '@material-ui/core/Paper';
import { withStyles,  } from '@material-ui/core/styles';
import './style/episode.css';



const StyledPaper = withStyles({
  root: {
    margin: '1rem',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    color: 'white',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    textAlign: 'center',
  },
})(Paper);


export default function Episode(props) {
  const {
    name, air_date, episode, id,
  } = props;

  let url = '/episode/'.concat(id)

  return (
    <div>
        <StyledPaper> 
          <Grid container spacing={2}>
                <Grid item xs={6}>
                {episode}
                </Grid>
                <Grid item xs={6}>
                <IconButton size="medium" color="primary" href={url}>
                  <ArrowForwardIcon size="medium"/>
                </IconButton>
                </Grid>
                <Grid item xs={12}>
                {name}
                </Grid>
                <Grid item xs={12}>
                {air_date}
                </Grid>
          </Grid>
        </StyledPaper>
    </div>
  );
}
