import React, { Component } from "react";
import {
  Table,
  Alert,
  Button,
  Col,
  Row,
  Form,
  FormGroup,
  ListGroup,
  Label,
  Input
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./ProgrameTable.css";
import MockData from "../../data/data";
import { connect } from "react-redux";
import Action from "../../redux/actions/Action";
import TableAlert from "../../components/TableAlert/TableAlert";

class ProgrameTable extends Component {
  state = {
    showAddSection: false,
    showTable:true
  };

  removeRow = id => Action.removePrograms(id);
  addPrograme = () => {
    {window.scrollTo(0,window.innerHeight)} 
    this.setState({ showAddSection: true,
      showTable:false });
  };

  closeAddProgrameScreen = () => {
    {window.scrollTo(0,0)} 
    this.setState({ showAddSection: false,showTable:true });
  };

  render(props) {
    if (this.props.success) {
      return (
        <div>
          <TableAlert />
          {this.props.total > 0 && this.state.showTable ? (
            <Table bordered hover responsive className="program-table">
              {/* table header */}
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Description </th>
                  <th>Active Status</th>
                  <th>Remove</th>
                </tr>
              </thead>
              {/* table body */}
              <tbody>
                {/* table rows */}
                {this.props.ProgrammesList.map((programme, i) => (
                  <tr
                    key={i}
                    className={programme.active ? "active" : "in-active"}
                  >
                    <th scope="row">{i + 1}</th>
                    <td className="row-name">{programme.name}</td>
                    <td className="row-descriptiopn">
                      {programme.shortDescription}
                    </td>
                    <td>
                      {" "}
                      {programme.active ? (
                        <span>&#10004;</span>
                      ) : (
                        <span>&#10006;</span>
                      )}
                    </td>
                    <td>
                      <Button
                        onClick={() => this.removeRow(programme.id)}
                        color="danger"
                      >
                        &#10006;
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : null}


           <Button
            color="primary"
            className="add-programe"
            onClick={() => this.addPrograme()}
          >
            Add New Programme
          </Button>
          {this.state.showAddSection ? (
            <div className="container programeContainer">
              <div className="cancelBtn">
              <legend>New Programme:</legend>
              <Button color="danger" onClick={this.closeAddProgrameScreen}>
                <span>&#10006;</span>
              </Button>
              </div>
              <Form className="">
                <FormGroup>
                  <Label>Programe ID:</Label>
                  <Input type="number" name="programID" placeholder="ID" autoFocus="true"/>
                </FormGroup>

                <FormGroup>
                  <Label>Programe Name:</Label>
                  <Input type="text" name="programID" placeholder="name" />
                </FormGroup>

                <FormGroup>
                  <Label for="exampleText">Programe Description</Label>
                  <Input type="textarea" name="programDescription" />
                </FormGroup>

                <legend>Display</legend>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio1" /> Active
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio1" /> Inactive
                  </Label>
                </FormGroup>
                <Button type="button" className="mt-3" color="danger">Submit</Button>
              </Form>
            </div>
          ) : null}


        </div>
      );
    } else {
      return (
        <Alert color="danger" className="table-alert">
          please check your internet connection
        </Alert>
      );
    }
  }
}

const stateToProps = state => {
  return {
    ProgrammesList: state.centralStore.programmesList,
    success: state.centralStore.success,
    total: state.centralStore.total
  };
};
export default connect(stateToProps)(ProgrameTable);
