import React, { Component } from 'react';
import Episode from './EpisodeFull'
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid"
import ListCharacter from "../character/ListCharacter"
import './style/episode.css';

const styles = theme => ({
    root: {
      flexGrow: 1
    },
});


class EpisodeHome extends Component {
    constructor() {
        super();
        this.state = {
            page: 1,
            total_pages: 1,
            characters: []
        }
    }
    

    createEpisode(id) {
        let base = 'https://rickandmortyapi.com/api/episode/'
        let url = base.concat(id)
        fetch(url)
        .then(results => {
            return results.json();
        })
        .then(episode => {
                    let episodes = [
                        <Episode
                        name = {episode.name}
                        air_date = {episode.air_date}
                        episode = {episode.episode}
                        id = {episode.id}
                        />
                    ]
                    let characters = episode.characters.map(character => {
                        character = character.split("/");
                        return(
                            character[5]
                        );
                    })
                    console.log(characters)
                    this.setState({characters: characters, name: episode.name, air_date: episode.air_date, episode: episodes, id: episode.id });
            })
    }

    componentDidMount() {
        const id = this.props.match.params.id
        this.createEpisode(id)
    }

    render() {
        return(
            <div>
               {this.state.episode}
               <div className="content"> 
                {this.state.characters.length !== 0 ? <ListCharacter 
                    characters={this.state.characters}
                /> : "Loading"
                }
                </div>
                
            </div>

        )
    }
}

export default withStyles(styles, { withTheme: true })(EpisodeHome);