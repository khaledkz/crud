import React, { Component } from "react";
import { Table, Alert, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./ProgrameTable.css";
import MockData from "../../data/data";
import { connect } from "react-redux";
import Action from "../../redux/actions/Action";
import TableAlert from "../../components/TableAlert/TableAlert";

class ProgrameTable extends Component {
  state = {};
  removeRow = id => Action.removePrograms(id);
  render(props) {
    if (this.props.success) {
      return (
        <div>
          <TableAlert />

          {this.props.total > 0 ? (
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
        </div>
      );
    } else {
      return <Alert color="danger"  className="table-alert">please check your internet connection</Alert>
    }
  }
}

const stateToProps = state => {
  console.log(state);
  return {
    ProgrammesList: state.centralStore.programmesList,
    success: state.centralStore.success,
    total:state.centralStore.total
  };
};
export default connect(stateToProps)(ProgrameTable);
