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
    delete(event, id){
        fetch('http://localhost:4000/api/services/' + id, {
             method: 'DELETE',
         })
         .then(res => res.text(),
         window.location.reload(false)   
         ) // or res.json()
         .then(res => console.log(res))
    }

 
    
    render() {
        return (
            <form>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { this.state.services.map(service => 
                        <tr key="service._id">
                            <td>{service.name}</td>
                            <td>{service.location}</td>
                            <td>{service.description}</td>
                            <td>{service.status.toString()}</td>
                            <td>
                                <button onClick={(e) => {this.delete(e, service._id);}}>
                                    Supprimer
                                </button>
                                
                                <button>
                                    Modifier
                                </button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </form>
         
        )
    }
}