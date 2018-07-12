import React, { Component } from "react";
import "./Search.css";
import { FormGroup, Input } from "reactstrap";
import searchICon from "./search.png";
import exitIcon from "./x.png";
import { connect } from "react-redux";
import Action from "../../redux/actions/Action";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = e => {
    if (e.keyCode === 13) {
      Action.searchForProgram(this.state.value);
    }
  };

  handleChange = e => this.setState({ value: e.target.value });
  resetSearch = () => this.setState({ value: "" });

  render() {
    return (
      <FormGroup className="searchInput">
        <img
          src={searchICon}
          onClick={() => Action.searchForProgram(this.state.value)}
        />
        <Input
          type="search"
          name="search"
          placeholder="search placeholder"
          value={this.state.value}
          onKeyDown={this.handleSubmit}
          onChange={this.handleChange}
        />
        <img src={exitIcon} onClick={this.resetSearch} />
      </FormGroup>
    );
  }
}

const stateToProps = state => {
   return {
    ProgrammesList: state.programme.programmesList,
    success: state.programme.success,
    total: state.programme.total,
    searchForProgram: state.programme.searchForProgram
  };
};

export default connect(stateToProps)(Search);
