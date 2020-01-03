import React, {Component} from 'react';
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {connect} from 'react-redux';
import {getVehicles, deleteVehicle} from '../actions/vehicleActions';
import PropTypes from 'prop-types';

class VehicleList extends Component {
    
    componentDidMount() {
        this.props.getVehicles();
    }

    onDeleteClick = (id) => {
        this.props.deleteVehicle(id);
    }

    render(){
        const { vehicles } = this.props.vehicle;
        return(
            <Container>
                <ListGroup>
                    <TransitionGroup className="vehicle-list">
                        {vehicles.map(({id, name})=>(
                          <CSSTransition key={id} timeout={500} classNames="fade">
                              <ListGroupItem>
                                  <Button
                                  className="remove-btn"
                                  color="danger"
                                  size="sm"
                                  onClick={this.onDeleteClick.bind(this, id)}
                                  >&times;
                                  </Button>
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

VehicleList.propTypes = {
    getVehicles: PropTypes.func.isRequired,
    vehicle: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    vehicle: state.vehicle
});

export default connect(mapStateToProps, {getVehicles, deleteVehicle})(VehicleList);