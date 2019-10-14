import React, { Component } from 'react'
import axios from 'axios'
import Player from './Player'


export default class Players extends Component {

    constructor() {
        super();
        this.state = {
          players: []  
        };
      }

      componentDidMount() {
       this.getPlayers()  
      }

      getPlayers = () => {
        axios.get('http://localhost:5000/api/players')
          .then(res => {
              this.setState({players: res.data})
          })
          .catch(err => console.log('noooo'));
    };

    render() {
        return (
            <div>
                <h1>Players</h1>
                {this.state.players.map((player)=>{
                   return <Player player={player}/>
                })
                } 
            </div>
        )
    }
}
