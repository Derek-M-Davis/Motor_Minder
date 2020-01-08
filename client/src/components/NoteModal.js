import React, { Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, Input, Label, Form, FormGroup} from 'reactstrap';
import { connect} from 'react-redux';
import { addNote} from '../actions/noteActions';
import PropTypes from 'prop-types';

class NoteModal extends Component {
    state = {
        modal: false,
        vehiclename: '',
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
        const newNote = {
            vehiclename: this.state.vehiclename,
            name: this.state.name,
            details: this.state.details,
            date: this.state.date
        }
        // Add Event
        this.props.addNote(newNote);
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
                Add Note
                </Button> : <h4 className="mb-3 ml-4">PLease Login to manage Vehicle's notes</h4>}
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>
                        Note
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="note">
                                   Note Description
                                </Label>
                                <Input
                                type="text"
                                name="vehiclename"
                                id="vehiclename"
                                placeholder="Vehicle Name"
                                onChange={this.onChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="note">
                                   Note Description
                                </Label>
                                <Input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Note Name"
                                onChange={this.onChange}
                                />
                            </FormGroup>

                             <FormGroup>
                                <Input
                                type="textarea"
                                name="details"
                                id="details"
                                placeholder="What did you do?"
                                onChange={this.onChange}
                                />
                            </FormGroup>

                            <FormGroup>
                                 <Input
                                type="date"
                                name="date"
                                id="date"
                                placeholder="When did you do it?"
                                onChange={this.onChange}
                                />
                            </FormGroup>

                            <FormGroup>
                                <Button
                                    color="dark"
                                    style={{marginTop: '2rem'}}
                                    block
                                >Add Note</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    note: state.note,    
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {addNote})(NoteModal);