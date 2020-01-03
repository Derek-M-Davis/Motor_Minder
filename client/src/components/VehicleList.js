import React, {Component} from 'react';
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import uuid from '';

class VehicleList extends Component {
    state = {
        vehicles: [
            {id: uuid(), name: 'Mazda'},
            {id: uuid(), name: 'Honda'},
            {id: uuid(), name: 'Subaru'}, 
            {id: uuid(), name: 'Lexus'},
            {id: uuid(), name: 'GMC'},
        ]
    }

    render(){
        const { vehicles } = this.state;
        return(
            <Container>
                <Button 
                    color="dark" 
                    style={{marginBottom: '2rem'}} 
                    onClick={() => { const name = prompt('Enter Vehicle');
                        if(name) {
                            this.setState(state => ({
                                vehicles: [...state.vehicles, {id: uuid(), name}]
                            }));
                        }
                    }}>Add Vehicle
                </Button>
            </Container>
        )
    }
}

export default VehicleList;