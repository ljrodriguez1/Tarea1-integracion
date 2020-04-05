import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid"

import Episode from './Episode'


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
        let base = 'https://rickandmortyapi.com/api/episode/'
        console.log(characters)
        characters = characters.join(',')
        let url = base.concat(characters)
        console.log(url)
        fetch(url)
        .then(results => {
            return results.json();
        })
        .then(data => {
            if (!Array.isArray(data)) {
                data = [ data ]
            }
            console.log(data)
            let episodes = data.map((episode) => {
                return(
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Episode
                        name = {episode.name}
                        air_date = {episode.air_date}
                        episode = {episode.episode}
                        id = {episode.id}
                        />
                </Grid>
                )
            })
            this.setState({episodes: episodes});
        })
    }

    componentWillMount() {
        this.createEpisodes.bind(this)(this.props.episodes);
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