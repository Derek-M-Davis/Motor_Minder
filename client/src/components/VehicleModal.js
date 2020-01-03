import React, { Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup} from 'reactstrap';
import { connect} from 'react-redux';
import { addVehicle} from '../actions/vehicleActions';

class VehicleModal extends Component {
    state = {
        modal: false,
        name: ''
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
        const newVehicle = {
            name: this.state.name
        }
        // Add Vehicle
        this.props.addVehicle(newVehicle);
        // Close Modal
        this.toggle();
    }

    render(){
        return (
            <div>
                <Button
                    color="dark"
                    style={{marginBottom: '2rem'}}
                    onClick={this.toggle}
                >
                Add Vehicle
                </Button>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>
                        Add to Vehicles
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="vehicle">
                                    Vehicle
                                </Label>
                                <Input
                                type="text"
                                name="name"
                                id="vehicle"
                                placeholder="Add Vehicle"
                                onChange={this.onChange}
                                />
                                <Button
                                    color="dark"
                                    style={{marginTop: '2rem'}}
                                    block
                                >Add Vehicle</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    vehicle: state.vehicle    
});

export default connect(mapStateToProps, {addVehicle})(VehicleModal);