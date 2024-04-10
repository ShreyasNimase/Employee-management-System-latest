import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import Logo1 from './Logo1.png' ;
import './MyStyles.css';

export class Navigation extends Component {

    render() {
        return (
            <Navbar className="bg-success " expand="lg">

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <img className="logo1" src={Logo1} alt="logo" /> 
                        <NavLink className="d-inline p-2  text-white bg-success" to="/home">
                            Home
                     </NavLink>
                        <NavLink className="d-inline p-2  text-white bg-success" to="/department">
                            Department
                     </NavLink>
                        <NavLink className="d-inline p-2  text-white bg-success" to="/employee">
                            Employee
                     </NavLink>
                    </Nav>
                        
                   <NavLink to="/"> <button class="btn  my-2 my-sm-0 bg-danger text-white" type="submit">Logout</button></NavLink>
   
                 
                 </Navbar.Collapse>
             </Navbar>
        )
    }

}