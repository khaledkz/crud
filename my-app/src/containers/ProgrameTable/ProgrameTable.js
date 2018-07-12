  import React, { Component } from "react";
  import { Table, Alert, Button } from "reactstrap";
  import "bootstrap/dist/css/bootstrap.css";
  import "./ProgrameTable.css";
  import { connect } from "react-redux";
  import Action from "../../redux/actions/Action";
  import TableAlert from "../../components/TableAlert/TableAlert";
  import AddProgramme from "../../components/AddProgramme/AddProgramme";
  import sortIcon from "./sortIcon.png";
  import Search from "../../components/SearchProgramme/Search";

  import { addNewProgramme } from '../../redux/Actions/programme'

  class ProgrameTable extends Component {
    state = {
      showAddSection: false,
      showTable: true
    };

    removeRow = id => Action.removeProgramme(id);
    addNewProgramme = programme => this.props.submitNewProgramme(programme);
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

    resetSearchForProgramme = () => Action.resetSearchForProgramme();
    render(props) {
      const { searchForProgram } = this.props;
      if (this.props.success) {
        return (
          <div>
            <TableAlert />

            {this.props.total > 0 && this.state.showTable ? (
              <div>
                <Search />
                <Table bordered hover responsive className="program-table">
                  {/* table header */}

                  <thead>
                    <tr>
                      <th>#</th>
                      <th>
                        ID{" "}
                        <img
                          src={sortIcon}
                          className="sortICon"
                          title="sort table by Id"
                          onClick={() => Action.sortById()}
                        />
                      </th>
                      <th>
                        Name{" "}
                        <img
                          src={sortIcon}
                          className="sortICon"
                          title="sort table by name"
                          onClick={() => Action.sortByName()}
                        />
                      </th>
                      <th>Description </th>
                      <th>Active Status</th>
                      <th>
                        {searchForProgram && searchForProgram.length > 0
                          ? "Close"
                          : "Remove"}
                      </th>
                    </tr>
                  </thead>
                  {/* table body */}
                  <tbody>
                    {searchForProgram && searchForProgram.length > 0 ? (
                      <tr
                        className={
                          searchForProgram[0].active ? "active" : "in-active"
                        }
                      >
                        <th scope="row">1</th>
                        <th scope="row">{searchForProgram[0].id}</th>
                        <td className="row-name">{searchForProgram[0].name}</td>
                        <td className="row-descriptiopn">
                          {searchForProgram[0].shortDescription.length > 150
                            ? searchForProgram[0].shortDescription.substr(
                                0,
                                150
                              ) + "..."
                            : searchForProgram[0].shortDescription}
                        </td>
                        <td>
                          {" "}
                          {searchForProgram[0].active ? (
                            <span>&#10004;</span>
                          ) : (
                            <span>&#10006;</span>
                          )}
                        </td>
                        <td>
                          <Button
                            onClick={() =>
                              this.resetSearchForProgramme(searchForProgram[0].id)
                            }
                            color="success"
                          >
                            &#10006;
                          </Button>
                        </td>
                      </tr>
                    ) : (
                      this.props.ProgrammesList.map((programme, i) => (
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
                      ))
                    )}
                    {/* table rows */}
                  </tbody>
                </Table>
              </div>
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


  const mapStateToProps = state => {
    return {
      ProgrammesList: state.programme.programmesList,
    success: state.programme.success,
    total: state.programme.total,
    searchForProgram: state.programme.searchForProgram    
  };
};
 
const dispatchToProps = dispatch => {
  return {
    submitNewProgramme: programme => {
      dispatch(addNewProgramme(programme))
    }
  }
}

export default connect(mapStateToProps,dispatchToProps)(ProgrameTable);
