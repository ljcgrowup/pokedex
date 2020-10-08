import React from 'react';
import {Link} from 'react-router-dom';

import PokeballTableRow from './PokeballTableRow';

export default class Pokeball extends React.Component {
    constructor(props) {
        super(props);
        this.state = {pokeball: []}
    }

    componentDidMount() {
        const pokeball = JSON.parse(sessionStorage.getItem('pokeball'));
        this.setState({pokeball: pokeball});
    }
    
    mountTable() {
        if (!this.state.pokeball) {
            return(
                <tr>
                    <td colSpan='3' style={{textAlign: 'center'}}>Pokeball Está vazia!</td>
                </tr>
            );
        }

        return this.state.pokeball.map((element, index) => {
            return <PokeballTableRow 
                name={element.name}
                id={element.id}
                key={index}
            />
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
                <h3>Pokeball</h3>

                <table
                    className='table table-striped table-sm table-bordered'
                    style={{ marginTop: 20, width: '50%' }}
                >
                    <thead
                        className='thead-dark'
                        style={{ textAlign: 'center', width: '20%' }}
                    >
                        <tr>
                            <th>ID</th>
                            <th>NOME</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.mountTable()}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan='3' style={{textAlign: 'center'}}>
                                <Link to={'/pokedex'}
                                    className='btn btn-secondary'
                                >
                                    Pokédex
                                </Link>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        );
    }
}