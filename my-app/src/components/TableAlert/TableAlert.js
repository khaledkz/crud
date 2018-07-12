import React from "react";
import { Alert } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

const TableAlert = (props) => (
  <div>
    {props.total > 0 ? (
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
 
export default TableAlert;
