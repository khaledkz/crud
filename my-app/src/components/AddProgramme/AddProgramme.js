import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Form, FormGroup, Label, Input, Alert } from "reactstrap";

class AddProgramme extends Component {
  state = {
    nameNotSubmited: null,
    idSNotubmited: null,
    desciprionNotSubmited: null,
    displayNotSubmited: null,
    idExsist: null
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = () => {
    let errors = null;
    if (!this.state.programName) {
      this.setState({ nameNotSubmited: true });
      errors = true;
    }
    if (!this.state.programID) {
      this.setState({ idSNotubmited: true });
      errors = true;
    }
    if (!this.state.programDescription) {
      this.setState({ desciprionNotSubmited: true });
      errors = true;
    }
    if (!this.state.active) {
      this.setState({ displayNotSubmited: true });
      errors = true;
    }

    if (errors) {
      //clear the error message
      setTimeout(() => {
        this.setState({
          nameNotSubmited: null,
          idSNotubmited: null,
          desciprionNotSubmited: null,
          displayNotSubmited: null
        });
      }, 3000);
    } else {
      let existId = this.checkID();
      if (existId) {
        this.setState({ idExsist: true });
        //clear the error message
        setTimeout(() => {
          this.setState({
            idExsist: null
          });
        }, 3000);
      } else {
        this.props.closeAddProgrameScreen();
      }
    }
  };

  checkID() {
    let idExsist = null;
    let { programmesList } = this.props;
    programmesList.map(program => {
      if (program.id.toString() === this.state.programID) {
        idExsist = true;
        return program;
      }
      return program;
    });
    return idExsist;
  }

  render() {
    return (
      <div className="container programeContainer">
        <div className="cancelBtn">
          <legend>New Programme:</legend>
          <Button color="danger" onClick={this.props.closeAddProgrameScreen}>
            <span>&#10006;</span>
          </Button>
        </div>
        <Form className="">
          <FormGroup>
            <Label>Programe ID:</Label>
            {this.state.idSNotubmited ? (
              <Alert color="danger" className="table-alert">
                You must add the programme ID
              </Alert>
            ) : null}

            {this.state.idExsist ? (
              <Alert color="success" className="table-alert">
                This ID is already exist ! try another ID.
              </Alert>
            ) : null}

            <Input
              type="number"
              name="programID"
              placeholder="ID"
              autoFocus="true"
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup>
            <Label>Programe Name:</Label>
            {this.state.nameNotSubmited ? (
              <Alert color="danger" className="table-alert">
                You must add the programme Name
              </Alert>
            ) : null}

            <Input
              onChange={this.handleChange}
              type="text"
              name="programName"
              placeholder="name"
            />
          </FormGroup>

          <FormGroup>
            <Label for="exampleText">Programe Description</Label>
            {this.state.desciprionNotSubmited ? (
              <Alert color="danger" className="table-alert">
                You must add the programme Description
              </Alert>
            ) : null}

            <Input
              onChange={this.handleChange}
              type="textarea"
              name="programDescription"
            />
          </FormGroup>
          <FormGroup tag="fieldset">
            <legend>Display</legend>
            {this.state.displayNotSubmited ? (
              <Alert color="danger" className="table-alert">
                You must choose the display option
              </Alert>
            ) : null}

            <FormGroup check>
              <Label check>
                <Input
                  onChange={this.handleChange}
                  type="radio"
                  name="active"
                  value="true"
                />{" "}
                Active
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input
                  onChange={this.handleChange}
                  type="radio"
                  name="active"
                  value="false"
                />{" "}
                Inactive
              </Label>
            </FormGroup>
          </FormGroup>

          <Button
            onClick={this.handleSubmit}
            type="button"
            className="mt-3"
            color="danger"
          >
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

const stateToProps = state => {
  console.log(state);
  return {
    total: state.centralStore.total,
    success: state.centralStore.successTableAlert,
    programmesList: state.centralStore.programmesList
  };
};
export default connect(stateToProps)(AddProgramme);
