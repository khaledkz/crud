import React, { Component } from "react";
import { Table, Alert, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./ProgrameTable.css";
import { connect } from "react-redux";
import Action from "../../redux/actions/Action";
import TableAlert from "../../components/TableAlert/TableAlert";
import AddProgramme from "../../components/AddProgramme/AddProgramme";
class ProgrameTable extends Component {
  state = {
    showAddSection: false,
    showTable: true
  };

  removeRow = id => Action.removeProgramme(id);
  addNewProgramme = programme => Action.addNewProgramme(programme);
  addPrograme = () => {
    window.scrollTo(0, window.innerHeight);
    this.setState({
      showAddSection: true,
      showTable: false
    });
  };

  closeAddProgrameScreen = () => {
    window.scrollTo(0, 0);
    this.setState({ showAddSection: false, showTable: true });
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
                  <th>#</th>
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
                    <th scope="row">{programme.id}</th>
                    <td className="row-name">{programme.name}</td>
                    <td className="row-descriptiopn">
                      {programme.shortDescription.length > 150
                        ? programme.shortDescription.substr(0, 150) + "..."
                        : programme.shortDescription}
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
          {this.state.showAddSection ? null : (
            <Button
              color="primary"
              className="add-programe"
              onClick={() => this.addPrograme()}
            >
              Add New Programme
            </Button>
          )}

          {this.state.showAddSection ? (
            <AddProgramme
              closeAddProgrameScreen={this.closeAddProgrameScreen}
              addNewProgramme={this.addNewProgramme}
            />
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
