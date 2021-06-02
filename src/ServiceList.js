import React from 'react';
import axios from 'axios';
import './ServiceList.css';

export default class ServiceList extends React.Component {
    state = {
        services: []
    }

    //Methode appelé par react quand le composant est prêt
    componentDidMount() {
        axios.get('http://localhost:4000/api/services')
        .then(res => {
            const services = res.data;
            this.setState({ services });
            console.log(services);
        })
    }
    
    render() {
        return (
            <table id="services">
                <tr>
                    <th>Name</th>
                    <th>Location</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
                    { this.state.services.map(service => 
                        <tr>
                            <td>{service.name}</td>
                            <td>{service.location}</td>
                            <td>{service.description}</td>
                            <td>{service.status.toString()}</td>
                            <td>
                                <button>
                                    Supprimer
                                </button>
                                
                                <button>
                                    Modifier
                                </button>
                            </td>
                        </tr>
                    )}
            </table>
        )
    }
}