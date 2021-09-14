import React, { Component } from 'react'

export class Location extends Component {
    render() {
        return (
            <div>
                 <h1>{this.props.city_name}</h1>
                <h3>latitude :{this.props.lat}</h3>
                <h3>longitude :{this.props.lon}</h3>
                <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.b0acd25fa217904d671efabb56c53d66&q&center=${this.props.lat},${this.props.lon}&zoom=15`}/>


            </div>
        )
    }
}

export default Location
