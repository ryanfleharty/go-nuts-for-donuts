import React, {Component} from 'react'

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class EditDonut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      name: props.donut.name,
      tasty: props.donut.tasty
    };

    this.toggle = this.toggle.bind(this);
  }

    toggle() {
        this.setState(prevState => ({
        modal: !prevState.modal
        }));
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    toggleTasty = () => {
        this.setState({
            tasty: !this.state.tasty
        })
    }
    handleSubmit = () => {
        this.toggle();
        this.props.updateDonut(this.props.donut._id, this.state)
    }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>Edit Donut</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Change this donut</ModalHeader>
          <ModalBody>
           <form>
               Name: <input onChange = {this.handleChange} type="text" name="name" />
               Tasty: <input onChange = {this.toggleTasty} type="checkbox" name="tasty" checked={ this.state.tasty ? true : false }/>
           </form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.handleSubmit}>Edit This Donut!</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default EditDonut;
