import React from "react";
 import { Button, Form, FormGroup, Label, Input, Alert } from "reactstrap";

const AddProgramme=(props)=> (
      <div className="container programeContainer">
        <div className="cancelBtn">
          <legend>New Programme:</legend>
          <Button color="danger" onClick={props.closeAddProgrameScreen}>
            <span>&#10006;</span>
          </Button>
        </div>
        <Form className="">
          <FormGroup>
            <Label>Programe ID:</Label>
            {props.idNotSubmited ? (
              <Alert color="danger" className="table-alert">
                You must add the programme ID
              </Alert>
            ) : null}

            {props.idExsist ? (
              <Alert color="success" className="table-alert">
                This ID is already exist ! try another ID.
              </Alert>
            ) : null}
            <Input
              type="number"
              name="programID"
              placeholder="ID"
              autoFocus="true"
              onChange={props.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label>Programe Name:</Label>
            {props.nameNotSubmited ? (
              <Alert color="danger" className="table-alert">
                You must add the programme Name
              </Alert>
            ) : null}
            <Input
              onChange={props.handleChange}
              type="text"
              name="programName"
              placeholder="name"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleText">Programe Description</Label>
            {props.desciprionNotSubmited ? (
              <Alert color="danger" className="table-alert">
                You must add the programme Description
              </Alert>
            ) : null}
            <Input
              onChange={props.handleChange}
              type="textarea"
              name="programDescription"
            />
          </FormGroup>
          <FormGroup tag="fieldset">
            <legend>Display</legend>
            {props.displayNotSubmited ? (
              <Alert color="danger" className="table-alert">
                You must choose the display option
              </Alert>
            ) : null}
            <FormGroup check>
              <Label check>
                <Input
                  onChange={props.handleChange}
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
                  onChange={props.handleChange}
                  type="radio"
                  name="active"
                  value="false"
                />{" "}
                Inactive
              </Label>
            </FormGroup>
          </FormGroup>
          <Button
            onClick={props.handleSubmit}
            type="button"
            className="mt-3"
            color="danger"
          >
            Submit
          </Button>
        </Form>
      </div>
    );
 

export default AddProgramme;
