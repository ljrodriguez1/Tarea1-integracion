import React from 'react';
import Grid from "@material-ui/core/Grid";
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Paper from '@material-ui/core/Paper';
import { withStyles,  } from '@material-ui/core/styles';



const StyledPaper = withStyles({
  root: {
    margin: '1rem',
    background: 'linear-gradient(45deg, #222cba 30%, #6f8bfc 90%)',
    color: 'white',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    textAlign: 'center',
  },
})(Paper);


export default function Location(props) {
  const {
    name, type, dimension, id,
  } = props;

  let url = '/location/'.concat(id)

  return (
    <div>
        <StyledPaper> 
          <Grid container spacing={2}>
                <Grid item xs={6}>
                {type}
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
                {dimension}
                </Grid>
          </Grid>
        </StyledPaper>
    </div>
  );
}
