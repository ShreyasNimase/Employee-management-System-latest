import React, { Component } from "react";
import { Table } from "react-bootstrap";

import { Button, ButtonToolbar } from 'react-bootstrap';
import { AddEmpModal } from './AddEmpModal';
import { EditEmpModal } from './EditEmpModal';
import Moment from 'moment';


export class Employee extends Component {

    constructor(props) {
        super(props);
        this.state = { emps: [], addModalShow: false, editModalShow: false }
    }

    refreshList() {
        fetch(process.env.REACT_APP_API + 'employee')
            .then(response => response.json())
            .then(data => {
                this.setState({ emps: data });
            });
    }

    componentDidMount() {
        this.refreshList();

    }

    componentDidUpdate() {
        this.refreshList();
    }

    deleteEmp(empid) {
        if (window.confirm('Are you sure?')) {
            fetch(process.env.REACT_APP_API + 'employee/' + empid, {
                method: 'DELETE',
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
        }
    }

    getFormatedDate(doj) {
        let formatedDate = Moment(doj).format('DD-MM-YYYY');
        return formatedDate;
    }

    render() {
        const { emps, empid, empname, depmt, photofilename, doj } = this.state;
        let addModalClose = () => this.setState({ addModalShow: false });
        let editModalClose = () => this.setState({ editModalShow: false });
        return (
            <div className="px-4">
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <th>EmployeeId</th>
                        <th>EmployeeName</th>
                        <th>Department</th>
                        <th>DOJ</th>
                        <th>Options</th>
                    </thead>
                    <tbody>
                        {emps.map(emp =>
                            <tr key={emp.EmployeeId}>
                                <td>{emp.EmployeeId}</td>
                                <td>{emp.EmployeeName}</td>
                                <td>{emp.Department}</td>
                                <td>{this.getFormatedDate(emp.DateOfJoining)}</td>
                                <td>
                                    <ButtonToolbar>
                                        <Button className="mr-2" variant="info"
                                            onClick={() => this.setState({
                                                editModalShow: true,
                                                empid: emp.EmployeeId, empname: emp.EmployeeName, depmt: emp.Department,
                                                photofilename: emp.PhotoFileName, doj: emp.DateOfJoining
                                            })}>
                                            Edit
        </Button>

                                        <Button className="mr-2" variant="danger"
                                            onClick={() => this.deleteEmp(emp.EmployeeId)}>
                                            Delete
        </Button>

                                        <EditEmpModal show={this.state.editModalShow}
                                            onHide={editModalClose}
                                            empid={empid}
                                            empname={empname} />
                                    </ButtonToolbar>
                                </td>
                            </tr>)}

                    </tbody>

                </Table>

                <ButtonToolbar>
                    <Button variant='primary'
                        onClick={() => this.setState({ addModalShow: true })}>
                        Add Employee  </Button>

                    <AddEmpModal show={this.state.addModalShow} title={'Add Department'}
                        onHide={addModalClose}></AddEmpModal>
                </ButtonToolbar>
            </div>
        )
    }

}