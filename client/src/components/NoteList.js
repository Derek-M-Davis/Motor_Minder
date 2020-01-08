import React, {Component} from 'react';
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {connect} from 'react-redux';
import {getNotes, deleteNote} from '../actions/noteActions';
import PropTypes from 'prop-types';

class NoteList extends Component {
    static propTypes = {
        getNotes: PropTypes.func.isRequired,
        note: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool
    };
    componentDidMount() {
        this.props.getNotes();
    };

    onDeleteClick = (id) => {
        this.props.deleteNote(id);
    };
    
    render(){
        const { notes } = this.props.note;
        return(
            <Container>
                <ListGroup>
                    <TransitionGroup className="note-list">
                        {notes.map(({_id, name, details, date})=>(
                          <CSSTransition key={_id} timeout={500} classNames="fade">
                              <ListGroupItem className="mb-1">
                                  {name}
                                  {' '} 
                                  {details}
                                  {' '}
                                  {date}
                                  {this.props.isAuthenticated ? <Button
                                  className="remove-btn"
                                  color="danger"
                                  size="sm"
                                  onClick={this.onDeleteClick.bind(this, _id)}
                                  >&times;
                                  </Button> : null}
                                  {' '}
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
    note: state.note,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {getNotes, deleteNote})(NoteList);