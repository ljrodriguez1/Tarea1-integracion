import React from 'react';
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

  return (
    <div>
         <div className="episodeContainer">
                <div className="episodeData"> 
                  <h2>{name}</h2>
                  {air_date} {episode}
                </div>
        </div>
    </div>
  );
}




