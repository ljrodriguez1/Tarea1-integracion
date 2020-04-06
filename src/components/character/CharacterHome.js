import React, { Component } from 'react';
import Character from './Character'
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid"
import ListEpisodes from "../episode/SelectEpisodes"
import Location from "../location/Location"

const styles = theme => ({
    root: {
      flexGrow: 1
    },
});


class EpisodeHome extends Component {
    constructor() {
        super();
        this.state = {
            episode: [],
            page: 1,
            total_pages: 1,
            episodes: [],
            origin: [],
            location: [],

        }
    }
    
    createLocation(location, title) {
        let data =  [
            <Grid item>
                {title}
                <Location
                name={location.name}
                type={location.type}
                dimension={location.dimension}
                id={location.id}
                /> 
            </Grid> 
        ]
        return data
    }

    createEpisode(id) {
        let base = 'https://integracion-rick-morty-api.herokuapp.com/api/character/'
        let url = base.concat(id)
        fetch(url)
        .then(results => {
            return results.json();
        })
        .then(episode => {
                    let episodes = [
                    <Grid item xs={12} sm={6} md={4} lg={4}>
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
                    ]
                    let characters = episode.episode.map(character => {
                        character = character.split("/");
                        return(
                            character[5]
                        );
                    })
                    this.setState({episodes: characters, episode: episodes});
                    fetch(episode.origin.url)
                    .then(results => {
                        return results.json();
                    })
                    .then(location =>{
                        let origin = this.createLocation(location, "Origin:")
                        this.setState({origin});
                    })
                    fetch(episode.location.url)
                    .then(results => {
                        return results.json();
                    })
                    .then(locationData =>{
                        let location = this.createLocation(locationData, "Location:")
                        this.setState({location});
                    })
                    

            })
    }

    componentDidMount() {
        const id = this.props.match.params.id
        this.createEpisode(id)
    }

    render() {
        return(
            <div>
                <Grid container spacing={2}>
                {this.state.episode}
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    {this.state.origin}
                    {this.state.location}
                </Grid>
                </Grid> 

                {this.state.episodes.length !== 0 ? <ListEpisodes
                    episodes={this.state.episodes}
                /> : "Loading"
                }
                
            </div>

        )
    }
}

export default withStyles(styles, { withTheme: true })(EpisodeHome);