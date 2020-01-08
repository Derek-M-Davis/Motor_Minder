import React, { Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, Input, Label, Form, FormGroup} from 'reactstrap';
import { connect} from 'react-redux';
import { addEvent} from '../actions/eventActions';
import PropTypes from 'prop-types';

class EventModal extends Component {
    state = {
        modal: false,
        name: '',
        details: '',
        date: ''
    };

    static propTypes = {
        isAuthenticated: PropTypes.bool
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    };

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = (e) => {
        e.preventDefault();
        const newEvent = {
            name: this.state.name,
            details: this.state.details,
            date: this.state.date
        }
        // Add Event
        this.props.addEvent(newEvent);
        // Close Modal
        this.toggle();
    }

    render(){
        return (
            <div>
                {this.props.isAuthenticated ? <Button
                    color="dark"
                    style={{marginBottom: '2rem'}}
                    onClick={this.toggle}
                >
                Add Event
                </Button> : <h4 className="mb-3 ml-4">PLease Login to manage Vehicle's events</h4>}
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>
                        Event
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="event">
                                    Event
                                </Label>
                                <Input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Event Name"
                                onChange={this.onChange}
                                />
                                <Input
                                type="text"
                                name="details"
                                id="details"
                                placeholder="What did you do?"
                                onChange={this.onChange}
                                />
                                 <Input
                                type="date"
                                name="date"
                                id="date"
                                placeholder="When did you do it?"
                                onChange={this.onChange}
                                />
                                <Button
                                    color="dark"
                                    style={{marginTop: '2rem'}}
                                    block
                                >Add Event</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    event: state.event,    
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {addEvent})(EventModal);