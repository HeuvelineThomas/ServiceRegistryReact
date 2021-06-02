import React from 'react';
import axios from 'axios';

export default class ServiceList extends React.Component {
    state = {
        services: []
    }

    componentDidMount() {
        axios.get('http://localhost:4000/api/services')
        .then(res => {
            const services = res.data;
            this.setState({ services });
        })
    }
    
    render() {
        return (
            <ul>
                { this.state.services.map(service => <li>{service.name}</li>)}
            </ul>
        )
    }
}