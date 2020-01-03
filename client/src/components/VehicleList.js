import React, {Component} from 'react';
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import uuid from 'uuid';

class VehicleList extends Component {
    state = {
        vehicles: [
            {id: uuid(), name: 'Mazda'},
            {id: uuid(), name: 'Honda'},
            {id: uuid(), name: 'Subaru'}, 
            {id: uuid(), name: 'Lexus'},
            {id: uuid(), name: 'GMC'}
        ]
    }

    render(){
        const { vehicles } = this.state;
        return(
            <Container>
                <Button 
                    color="dark" 
                    style={{marginBottom: '2rem'}} 
                    onClick={() => { 
                        const name = prompt('Enter Vehicle');
                        if(name) {
                            this.setState(state => ({
                                vehicles: [...state.vehicles, {id: uuid(), name}]
                            }));
                        }
                    }}>
                    Add Vehicle
                </Button>
                <ListGroup>
                    <TransitionGroup className="vehicle-list">
                        {vehicles.map(({id, name})=>(
                          <CSSTransition key={id} timeout={500} classNames="fade">
                              <ListGroupItem>
                                  <Button
                                  className="remove-btn"
                                  color="danger"
                                  size="sm"
                                  onClick={()=>{
                                      this.setState(state => ({
                                          vehicles: state.vehicles.filter(vehicle =>vehicle.id !== id)
                                      }))
                                  }}
                                  >&times;</Button>
                                  {name}
                              </ListGroupItem>
                          </CSSTransition>  
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}

export default VehicleList;