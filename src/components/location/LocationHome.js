import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import ListCharacter from "../character/ListCharacter"
import Location from "./Location"

const styles = theme => ({
    root: {
      flexGrow: 1
    },
});


class LocationHome extends Component {
    constructor() {
        super();
        this.state = {
            page: 1,
            total_pages: 1,
            characters: []
        }
    }
    

    createEpisode(id) {
        let base = 'https://rickandmortyapi.com/api/location/'
        let url = base.concat(id)
        fetch(url)
        .then(results => {
            return results.json();
        })
        .then(location => {
                    let episodes = [
                        <Location
                            name={location.name}
                            type={location.type}
                            dimension={location.dimension}
                            id={location.id}
                            /> 
                    ]
                    console.log(location)
                    let characters = location.residents.map(character => {
                        character = character.split("/");
                        return(
                            character[5]
                        );
                    })
                    console.log(characters)
                    this.setState({characters: characters, episode: episodes });
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

export default withStyles(styles, { withTheme: true })(LocationHome);