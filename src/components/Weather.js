import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';


class Weather extends React.Component {



    render() {
        return (
            <>
               
                <ListGroup style={{display:'inline-block'}}>
                    <h1>Weather Information</h1>
                <ListGroup.Item action variant="success">
                {this.props.weatherInfo[0].valid_date} <br></br>
                {this.props.weatherInfo[0].description}
                </ListGroup.Item>
                <ListGroup.Item action variant="danger">
                {this.props.weatherInfo[1].valid_date} <br></br>
                {this.props.weatherInfo[1].description}
                </ListGroup.Item>
                <ListGroup.Item action variant="warning">
                {this.props.weatherInfo[2].valid_date} <br></br>
                {this.props.weatherInfo[2].description}
                </ListGroup.Item>

                </ListGroup>
                

            </>
)
}
}


export default Weather;

