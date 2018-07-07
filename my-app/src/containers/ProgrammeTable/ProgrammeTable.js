import React, { Component } from 'react';
import { Table, Alert } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './ProgrammeTable.css';
import MockData from '../../data/data'

export default class ProgrammeTable extends Component {
    state = {
        programmeList: []
    };
    componentDidMount() {
        console.log(MockData.results)
        this.setState({
            programmeList: MockData.results
        })
    }
    render() {
        if (this.state.programmeList.length > 0) {
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
                            </tr>
                        </thead>grayed out reactstrip
                        {/* table body */}
                        <tbody>
                            {/* table rows */}
                            {this.state.programmeList.map((programme, i) => (
                                <tr key={i} className={programme.active?'active':'in-active'}>
                                    <th scope="row">{i+1}</th>
                                    <td className="row-name">{programme.name}</td>
                                    <td className="row-descriptiopn">{programme.shortDescription}</td>
                                    <td> {programme.active? <span>&#10004;</span> : <span>&#10006;</span> }</td>
                                 </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            );
        } else {
            return null
        }
    }
}