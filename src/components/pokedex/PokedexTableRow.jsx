import React from 'react';

export default class PokedexTableRow extends React.Component {
    getPokemonIdByURL(url) {
        let tokens = url.split('/');
        return tokens[tokens.length - 2];
    }

    capture(id, name) {
        let pokeball = JSON.parse(sessionStorage.getItem('pokeball'));

        if (!pokeball) {
            pokeball = [];
        }

        if (pokeball.length === 4) {
            alert('Pokeball cheia!');
            return;
        }

        for (let index = 0; index < pokeball.length; index++) {
            const element = pokeball[index];

            if (id === element.id) {
                alert('Pokemon já capturado!');
                return;
            }
        }

        pokeball.push({id, name, life: 100});
        sessionStorage.setItem('pokeball', JSON.stringify(pokeball));
        alert('Pokemon capturado com sucesso!');
    }

    render() {
        const id = this.getPokemonIdByURL(this.props.pokemon.url);
        const imgPokemon = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
        return (
            <tr>
                <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                    {id}
                </td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                    <strong>
                        <span style={{ textTransform: "capitalize" }}>{this.props.pokemon.name}</span>
                    </strong>
                </td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                    <img src={imgPokemon} alt="Imagem do pokemon." />
                </td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                    <button className='btn btn-primary'>Informações</button>
                    <button
                        className='btn btn-danger'
                        style={{ marginLeft: 20 }}
                        onClick={() => this.capture(id, this.props.pokemon.name)}
                    >
                        Capturar
                    </button>
                </td>
            </tr>
        );
    }
}