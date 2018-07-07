import React, { Component } from "react";
import { Alert } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
 import { connect } from "react-redux";

class TableAlert extends Component {
  render() {
    return (
      <div>
        {this.props.total > 0 ? (
          <Alert color="primary" className="table-alert">
            STV — Program Table check it out!
          </Alert>
        ) : (
          <Alert color="danger" className="table-alert">
            STV — Program Table it Empty!
          </Alert>
        )}
      </div>
    );
  }
}

const stateToProps = state => {
   return {
     total: state.centralStore.total,
     success: state.centralStore.success
  };
};
export default connect(stateToProps)(TableAlert);
