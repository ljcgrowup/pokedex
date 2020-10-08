import React from 'react';

export default class PokeballTableRow extends React.Component {
    render() {
        const imgPokemon = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.id}.png`;
        return (
            <tr>
                <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                    {this.props.id}
                </td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                    <strong>
                        <span style={{ textTransform: "capitalize" }}>{this.props.name}</span>
                    </strong>
                </td>
                <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                    <img src={imgPokemon} alt="{this.props.id}" />
                </td>
            </tr>
        );
    }
}