import React, { Component } from "react";
import { Table, Alert, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./ProgrameTable.css";
import { connect } from "react-redux";
import TableAlert from "../../components/TableAlert/TableAlert";
import AddProgramme from "../../components/AddProgramme/AddProgramme";
import sortIcon from "./sortIcon.png";
import Search from "../../components/SearchProgramme/Search";
import * as Action from "../../redux/Actions/programme";

import { addNewProgramme } from "../../redux/Actions/programme";

class ProgrameTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      showAddSection: false,
      showTable: true,
      nameNotSubmited: null,
      idNotSubmited: null,
      desciprionNotSubmited: null,
      displayNotSubmited: null,
      idExsist: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = e => {
    if (e.keyCode === 13) {
      this.props.searchProgram(this.state.value);
    }
  };

  handleSubmitByImg = e => {
    this.props.searchProgram(this.state.value);
  };

  handleChange = e => this.setState({ value: e.target.value });

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
  resetSearch = () => {
    this.setState({ value: "" });
    this.props.resetSearchForProgramme();
  };

  handleAddProgramChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleAddProgramSubmit = () => {
    let errors = null;
    if (!this.state.programName) {
      this.setState({ nameNotSubmited: true });
      errors = true;
    }
    if (!this.state.programID) {
      this.setState({ idNotSubmited: true });
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
          idNotSubmited: null,
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
        const newProgramme = {
          name: this.state.programName,
          id: this.state.programID,
          active: this.state.active === "true" ? true : false,
          shortDescription: this.state.programDescription
        };
        this.addNewProgramme(newProgramme);
        this.closeAddProgrameScreen();
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
    const { searchForProgram } = this.props;
    if (this.props.success) {
      return (
        <div>
          <TableAlert total={this.props.total} success={this.props.sucess} />

          {this.props.total > 0 && this.state.showTable ? (
            <div>
              <Search
                searchValue={this.state.value}
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
                resetSearch={this.resetSearch}
                handleSubmitByImg={this.handleSubmitByImg}
              />
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
                        onClick={() => this.props.sortById()}
                      />
                    </th>
                    <th>
                      Name{" "}
                      <img
                        src={sortIcon}
                        className="sortICon"
                        title="sort table by name"
                        onClick={() => this.props.sortByName()}
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
                          onClick={() => this.resetSearch()}
                          color="success"
                        >
                          &#10006;
                        </Button>
                      </td>
                    </tr>
                  ) : (
                    this.props.programmesList.map((programme, i) => (
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
                            onClick={() =>
                              this.props.removeProgramme(programme.id)
                            }
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
              handleChange={this.handleAddProgramChange}
              handleSubmit={this.handleAddProgramSubmit}
              checkID={this.checkID}
              idNotSubmited={this.state.idNotSubmited}
              nameNotSubmited={this.state.nameNotSubmited}
              idNotSubmited={this.state.idNotSubmited}
              desciprionNotSubmited={this.state.desciprionNotSubmited}
              displayNotSubmited={this.state.displayNotSubmited}
              idExsist={this.state.idExsist}
            />
          ) : null}
        </div>
      );
    } else {
      //we do not need it because we use mock data but it's good to add it for best practice
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
    programmesList: state.programme.programmesList,
    success: state.programme.success,
    total: state.programme.total,
    searchForProgram: state.programme.searchForProgram
  };
};

const dispatchToProps = dispatch => {
  return {
    submitNewProgramme: programme => {
      dispatch(addNewProgramme(programme));
    },
    removeProgramme: ID => {
      dispatch(Action.removeProgramme(ID));
    },
    resetSearchForProgramme: () => dispatch(Action.resetSearchForProgramme()),
    sortByName: () => dispatch(Action.sortByName()),
    sortById: () => dispatch(Action.sortById()),
    searchProgram: programme => dispatch(Action.searchForProgram(programme))
  };
};

export default connect(
  mapStateToProps,
  dispatchToProps
)(ProgrameTable);
