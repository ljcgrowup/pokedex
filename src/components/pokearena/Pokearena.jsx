import React from 'react';
import background from '../../img/battlegrass.png';

export default class Pokearena extends React.Component {
    constructor(props){
        super(props);
        let equipeRocket = [
            {id:24, name: 'arbok', life: 100},
            {id: 52, name: 'meowth', life: 100},
            {id: 110, name: 'weezing', life: 100},
            {id: 112, name: 'rhydon', life: 100},
        ];

        this.state = {
            pokeball: [],
            desafiantes: equipeRocket,
            selected: 0,
            chellenger: 0,
            message: '',
        };
    }

    componentDidMount(){
        const pokeball = JSON.parse(sessionStorage.getItem('pokeball'));
        this.setState({
            pokeball,
            message: 'A batalha vei começar!',
        });
    }
    
    render(){
        return(
            <div style={{
                marginTop: 10,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column'
            }}
            >
                <h3>Batalha Pokémon</h3>

                <div className="container" style={{
                    width: '70%',
                    marginTop: '1em',
                    border: '1px solid #cecece',
                }}
                >
                    <div className="row">
                         <div className="col-2" style={{padding: '0.5em'}}>
                            pokebola
                         </div>
                            
                         <div className="col-8" style={{
                             borderLeft: '1px solid #cecece',
                             borderRight: '1px solid #cecece',
                             paddingTop: '2em',
                        }}
                        >
                            Arena
                         </div>

                         <div className="col-2">
                            Desafiantes
                         </div>
                    </div>                   
                </div>
            </div>
        );
    }

}