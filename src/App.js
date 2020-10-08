import React, { Component } from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Pokedex from './components/pokedex/Pokedex';
import Pokeball from './components/pokeball/Pokeball';
import pokearena from './components/pokearena/Pokearena';

import 'bootstrap/dist/css/bootstrap.min.css';
import Pokearena from './components/pokearena/Pokearena';

export default class App extends Component {
  constructor(props) {
    super(props);
    sessionStorage.setItem('url', "https://pokeapi.co/api/v2/pokemon/");
  }

  render() {
    return (
      <BrowserRouter>
        <div className='container'>
          <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <Link to={'/'} className='navbar-brand'>Pokemon</Link>

            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
              <ul className='navbar-nav mr-auto'>
                <li><Link to={'/'} className='nav-link'>Home</Link></li>
                <li><Link to={'/pokedex'} className='nav-link'>Pokédex</Link></li>
                <li><Link to={'/pokeball'} className='nav-link'>Pokeball</Link></li>
                <li><Link to={'/pokearena'} className='nav-link'>Pokéarea</Link></li>
              </ul>
            </div>
          </nav>

          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/pokedex' component={Pokedex} />
            <Route path='/pokeball' component={Pokeball} />
            <Route path='/pokearena' component={Pokearena} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}