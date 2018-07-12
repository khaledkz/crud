import React from "react";
import { Table ,Button} from "reactstrap";

const StvTable = props => (
  <Table bordered hover responsive className="program-table">
    <thead>
      <tr>
        <th>#</th>
        <th>
          ID{" "}
          <img
          alt="sortICon"
            src={props.sortIcon}
            className="sortICon"
            title="sort table by Id"
            onClick={() => props.sortById()}
          />
        </th>
        <th>
          Name{" "}
          <img
          alt="sortICon"
            src={props.sortIcon}
            className="sortICon"
            title="sort table by name"
            onClick={() => props.sortByName()}
          />
        </th>
        <th>Description </th>
        <th>Active Status</th>
        <th>
          {props.searchForProgram && props.searchForProgram.length > 0 ? "Close" : "Remove"}
        </th>
      </tr>
    </thead>
    {/* table body */}
    <tbody>
      {props.searchForProgram && props.searchForProgram.length > 0 ? (
        <tr className={props.searchForProgram[0].active ? "active" : "in-active"}>
          <th scope="row">1</th>
          <th scope="row">{props.searchForProgram[0].id}</th>
          <td className="row-name">{props.searchForProgram[0].name}</td>
          <td className="row-descriptiopn">
            {props.searchForProgram[0].shortDescription.length > 150
              ? props.searchForProgram[0].shortDescription.substr(0, 150) + "..."
              : props.searchForProgram[0].shortDescription}
          </td>
          <td>
            {" "}
            {props.searchForProgram[0].active ? (
              <span>&#10004;</span>
            ) : (
              <span>&#10006;</span>
            )}
          </td>
          <td>
            <Button onClick={() => props.resetSearch()} color="success">
              &#10006;
            </Button>
          </td>
        </tr>
      ) : (
        props.programmesList.map((programme, i) => (
          <tr key={i} className={programme.active ? "active" : "in-active"}>
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
              {programme.active ? <span>&#10004;</span> : <span>&#10006;</span>}
            </td>
            <td>
              <Button
                onClick={() => props.removeProgramme(programme.id)}
                color="danger"
              >
                &#10006;
              </Button>
            </td>
          </tr>
        ))
      )}
    </tbody>
  </Table>
);
export default StvTable;