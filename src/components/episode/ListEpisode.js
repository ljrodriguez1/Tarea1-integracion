import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid"
import Pagination from '@material-ui/lab/Pagination';

import Episode from './Episode'
import EpisodeHome from './EpisodeHome'


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
            page: 1,
            total_pages: 1,
            data: []
        }
    }
    

    createEpisodes(page) {
        let base = 'https://rickandmortyapi.com/api/episode/?page='
        let url = base.concat(page)
        fetch(url)
        .then(results => {
            return results.json();
        })
        .then(data => {
            this.setState({total_pages: data.info.pages});
            let episodes = data.results.map((episode) => {
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

    componentDidMount() {
        this.createEpisodes.bind(this)(this.state.page);
    }

    handleChange(event, value) {
        this.setState({page: value});
        this.createEpisodes(value);
    };

    render() {
        return(
            <div>

                <Grid container key={this.state.page}>
                    {this.state.episodes}
                </Grid>
                <Pagination count={this.state.total_pages} page={this.state.page} onChange={this.handleChange.bind(this)} />
            
            </div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(ListEpisode);