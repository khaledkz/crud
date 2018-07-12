import React, { Component } from "react";
import { Alert, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./ProgrameTable.css";
import { connect } from "react-redux";
import TableAlert from "../../components/TableAlert/TableAlert";
import AddProgramme from "../../components/AddProgramme/AddProgramme";
import sortIcon from "./sortIcon.png";
import Search from "../../components/SearchProgramme/Search";
import StvTable from "../../components/Table/Table";
import dispatchToProps from "./dispatchToProps";

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
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSearchSubmitByImg = this.handleSearchSubmitByImg.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  handleSearchSubmit = e => {
    if (e.keyCode === 13) {
      this.props.searchProgram(this.state.value);
    }
  };

  handleSearchSubmitByImg = e => {
    this.props.searchProgram(this.state.value);
  };

  handleSearchChange = e => this.setState({ value: e.target.value });

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
  resetSearchByImg = () => {
    this.setState({ value: "" });
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
    const props = this.props;
    if (props.success) {
      return (
        <div>
          <TableAlert total={props.total} success={props.sucess} />

          {props.total > 0 && this.state.showTable ? (
            <div>
              <Search
                searchValue={this.state.value}
                handleSubmit={this.handleSearchSubmit}
                handleChange={this.handleSearchChange}
                resetSearch={this.resetSearch}
                resetSearchImg={this.resetSearchByImg}
                handleSubmitByImg={this.handleSearchSubmitByImg}
              />
              <StvTable
                resetSearch={this.resetSearch}
                sortIcon={sortIcon}
                sortById={props.sortById}
                sortByName={props.sortByName}
                searchForProgram={props.searchForProgram}
                programmesList={props.programmesList}
                removeProgramme={props.removeProgramme}
              />
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

export default connect(
  mapStateToProps,
  dispatchToProps
)(ProgrameTable);
