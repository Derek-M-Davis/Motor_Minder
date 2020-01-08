import React, {Component} from 'react';
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {connect} from 'react-redux';
import {getVehicles, deleteVehicle} from '../actions/vehicleActions';
import PropTypes from 'prop-types';

class VehicleList extends Component {
    static propTypes = {
        getVehicles: PropTypes.func.isRequired,
        vehicle: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool
    };
    componentDidMount() {
        this.props.getVehicles();
    };

    onDeleteClick = (id) => {
        this.props.deleteVehicle(id);
    };
    
    render(){
        const { vehicles } = this.props.vehicle;
        return(
            <Container className="mb-3">
                <ListGroup>
                    <TransitionGroup className="vehicle-list">
                        {vehicles.map(({_id, year, name})=>(
                          <CSSTransition key={_id} timeout={500} classNames="fade">
                              <ListGroupItem className="mb-1">
                                  {year}
                                  {' '} 
                                  {name}
                                  {' '}
                                  {this.props.isAuthenticated ? <Button
                                  className="remove-btn"
                                  color="danger"
                                  size="sm"
                                  onClick={this.onDeleteClick.bind(this, _id)}
                                  >&times;
                                  </Button> : null}
                                  {' '}
                                  {/* {this.props.isAuthenticated ? <Button
                                  className="edit-btn"
                                  color="warning"
                                  size="sm"
                                  onClick={this.onUpdateClick.bind(this, _id)}
                                  >&times;
                                  </Button> : null}   */}
                              </ListGroupItem>
                          </CSSTransition>  
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}

const mapStateToProps = (state) => ({
    vehicle: state.vehicle,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {getVehicles, deleteVehicle})(VehicleList);