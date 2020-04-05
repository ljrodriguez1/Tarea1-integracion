import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid"

import Character from './Character'


const styles = theme => ({
    root: {
      flexGrow: 1
    },
});


class ListEpisode extends Component {
    constructor() {
        super();
        this.state = {
            episodes:[],
        }
    }
    

    createEpisodes(characters) {
        let base = 'https://rickandmortyapi.com/api/character/'
        characters = characters.join(',')
        let url = base.concat(characters)
        fetch(url)
        .then(results => {
            return results.json();
        })
        .then(data => {
            if (!Array.isArray(data)) {
                data = [ data ]
            }
            let episodes = data.map((episode) => {
                return(
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Character
                    id = {episode.id}
                    name = {episode.name}
                    status = {episode.status}
                    species = {episode.species}
                    type = {episode.type}
                    gender = {episode.gender}
                    origin = {episode.origin}
                    location = {episode.location}
                    image = {episode.image}

                    />
                </Grid>
                )
            })
            this.setState({episodes: episodes});
        })
    }

    componentWillMount() {
        this.createEpisodes.bind(this)(this.props.characters);
    }

    render() {
        return(
            <div>

                <Grid container key={this.state.page}>
                    {this.state.episodes}
                </Grid>            
            </div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(ListEpisode);