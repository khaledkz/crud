import React, { Component } from "react";
import { Table, Alert, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./ProgrameTable.css";
import MockData from "../../data/data";
import { connect } from "react-redux";
import Action from '../../redux/actions/Action'
class ProgrameTable extends Component {
  state = {};
  removeRow = id => Action.removePrograms(id);
  render(props) {
    if (this.props.ProgrammesList.length > 0) {
      return (
        <div>
          <Alert color="primary" className="table-alert">
            STV — Program Table check it out!
          </Alert>
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
        </div>
      );
    } else {
      return null;
    }
  }
}

const stateToProps = state => {
  console.log(state)
  return {
    ProgrammesList: state.centralStore.programmesList
  };
};
export default connect(stateToProps)(ProgrameTable);