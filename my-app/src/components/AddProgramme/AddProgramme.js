import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class AddProgramme extends Component {
  state = {};

  handleChange = e => {
    if (e.target.value && e.target.value.length > 0) {
      this.setState({ [e.target.name]: e.target.value });
    }
  };
  handlRadioeChange=(e)=>{
      this.setState({active:e.target.name==="active"?true:false})
  }

  render() {
    console.log(this.state);

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
            <Input
              onChange={this.handleChange}
              type="text"
              name="programID"
              placeholder="name"
            />
          </FormGroup>

          <FormGroup>
            <Label for="exampleText">Programe Description</Label>
            <Input
              onChange={this.handleChange}
              type="textarea"
              name="programDescription"
            />
          </FormGroup>

          <legend>Display</legend>
          <FormGroup check>
            
          </FormGroup>
          <FormGroup check>
          <Label check>
              <Input
                onChange={this.handlRadioeChange}
                type="radio"
                name="active"
              />{" "}
              Active
            </Label>
            <Label check>
              <Input
                onChange={this.handlRadioeChange}
                type="radio"
                name="inActive"
              />{" "}
              Inactive
            </Label>
          </FormGroup>
          <Button type="button" className="mt-3" color="danger">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

const stateToProps = state => {
  return {
    total: state.centralStore.total,
    success: state.centralStore.successTableAlert
  };
};
export default connect(stateToProps)(AddProgramme);
