import React, { Component } from 'react'
import ReactSearchBox from 'react-search-box'

class SearchBar extends Component {

    constructor() {
        super();
        this.state = {
            data: [],
        }
    }
    
    async getData(base,url, prev, counter) {
        let link = ['/episode/','/character/','/location/' ]
        let help = [' (episode)',' (character)',' (location)']
        fetch(url)
        .then(results => {
            return results.json();
        })
        .then(data => {
            let episodes = data.results.map((episode) => {
                return(
                    {
                    value: episode.name.concat(help[counter]),
                    key: link[counter].concat(episode.id),
                    }
                )
            })
            episodes = [...prev, ...episodes]
            let next = data.info.next
            if (next !== "") {
                this.getData(base, next, episodes, counter)
            }
            else if (counter < base.length - 1) {
                counter += 1
                this.getData(base, base[counter], episodes, counter)
            }
            else {
                this.setState({data: episodes})
            }
        })
    }

    async createSearch() {
        let base = ['https://integracion-rick-morty-api.herokuapp.com/api/episode/', 'https://integracion-rick-morty-api.herokuapp.com/api/character/', 'https://integracion-rick-morty-api.herokuapp.com/api/location/']
        await this.getData.bind(this)(base, base[0], [], 0);
    }

    componentDidMount() {
        this.createSearch.bind(this)();
    }

    render() {
        return (
        <ReactSearchBox
            placeholder="Busca un episodio, personaje o lugar"
            data={this.state.data}
            onSelect={record => window.location.href = record.key}
            onFocus={() => {
            console.log('This function is called when is focussed')
            }}
            fuseConfigs={{
            threshold: 0.05,
            }}
        />
        )
    }
}

export default SearchBar;
                