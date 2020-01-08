import React, {Component} from 'react';
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {connect} from 'react-redux';
import {getEvents, deleteEvent} from '../actions/eventActions';
import PropTypes from 'prop-types';

class EventList extends Component {
    static propTypes = {
        getEvents: PropTypes.func.isRequired,
        event: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool
    };
    componentDidMount() {
        this.props.getEvents();
    };

    onDeleteClick = (id) => {
        this.props.deleteEvent(id);
    };
    
    // onUpdateClick = (id) => {
    //     this.props.editEvent(id);
    // };

    render(){
        const { events } = this.props.event;
        return(
            <Container>
                <ListGroup>
                    <TransitionGroup className="event-list">
                        {events.map(({_id, name, details, date})=>(
                          <CSSTransition key={_id} timeout={500} classNames="fade">
                              <ListGroupItem>
                                  {name}   
                                  {' '}  
                                  {details}
                                  {' '} 
                                  {date}
                                  {/* {this.props.isAuthenticated ? <Button
                                  className="update-btn"
                                  color="warning"
                                  size="sm"
                                  onClick={this.onUpdateClick.bind(this, _id)}
                                  >&times;
                                  </Button> : null}  */}
                                  {this.props.isAuthenticated ? <Button
                                  className="remove-btn"
                                  color="danger"
                                  size="sm"
                                  onClick={this.onDeleteClick.bind(this, _id)}
                                  >&times;
                                  </Button> : null}
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
    event: state.event,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {getEvents, deleteEvent})(EventList);