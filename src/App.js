import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';
import Episodes from './components/episode/ListEpisode'
import EpisodeHome from './components/episode/EpisodeHome'
import CharacterHome from './components/character/CharacterHome'

import LocationHome from './components/location/LocationHome'

import SearchBar from './components/searchBar/SearchBar'

function App() {
  return (
    <Router>
      <SearchBar />
      <div className="App"> 

      <Route path={`/episode/:id`} component={EpisodeHome}/>
      <Route path={`/character/:id`} component={CharacterHome}/>
      <Route path={`/location/:id`} component={LocationHome}/>

       <Switch>
          
          <Route path="/episode">
            <Episodes />
          </Route>
          <Route exact path="/">
            <Episodes />
          </Route>
        </Switch>

      </div>
    </Router>

  );
}

export default App;
