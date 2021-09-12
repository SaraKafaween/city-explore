import React, { Component } from 'react'

export class Location extends Component {
    render() {
        return (
            <div>
                 <h1>{this.props.city_name}</h1>
                <h3>latitude :{this.props.lat}</h3>
                <h3>longitude :{this.props.lon}</h3>

            </div>
        )
    }
}

export default Location
