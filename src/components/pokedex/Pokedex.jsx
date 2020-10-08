import React, { Component } from 'react';
import axios from 'axios';

import PokedexTableRow from './PokedexTableRow';

export default class Pokedex extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            next: '',
            previous: '',
            pokemons: [],
        };
    }

    componentDidMount() {
        const url = sessionStorage.getItem('url');
        this.getPokemonData(url);
    }

    getPokemonData(url) {
        sessionStorage.setItem('url', url);
        axios.get(url)
            .then(res => {
                this.setState({
                    count: res.data.count,
                    next: res.data.next,
                    previous: res.data.previous,
                    pokemons: res.data.results,
                });
            })
            .catch(err => console.log(err));
    }

    beforePage() {
        this.getPokemonData(this.state.previous);
    }

    afterPage() {
        this.getPokemonData(this.state.next);
    }

    mountTable() {
        return this.state.pokemons.map((element, index) => {
            return <PokedexTableRow pokemon={element} key={index} />;
        });
    }

    render() {
        return (
            <div style={{
                marginTop: 10,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column'
            }}>
                <h3>Pokédex</h3> {this.state.count}

                <table
                    className='table table-striped table-sm table-bordered'
                    style={{ marginTop: 20, width: '80%' }}
                >
                    <thead
                        className='thead-dark'
                        style={{ textAlign: 'center', width: '20%' }}
                    >
                        <tr>
                            <th>ID</th>
                            <th>NOME</th>
                            <th colSpan='2'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.mountTable()}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan='4'>
                                <button
                                    className='btn btn-secondary'
                                    onClick={() => this.beforePage()}
                                >
                                    Anterior
                                </button>
                                <button
                                    style={{ marginLeft: 20 }}
                                    className='btn btn-secondary'
                                    onClick={() => this.afterPage()}
                                >
                                    Próximo
                                </button>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        );
    }
}