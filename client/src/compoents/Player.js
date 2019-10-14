import React, { Component } from 'react'

export default class Player extends Component {
    render(props) {
        return (
            <div>
                Name: {this.props.player.name}
            </div>
        )
    }
}
