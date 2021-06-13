import React from 'react';
import {Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './navBar.css';



const navBar = () => {
    return ( 
      <div className="Header__Section" >  
      <section className=" py-4">      
            <div  className="box">
                  <div>
                    <img   src="/images/itilogo.png" alt="logo1" /> 
                  </div>
                  <div  class="selected">
                    <h4> Government Of Andhra Pradesh</h4>
                    <h4> Department of Employment and Training</h4>
                    <h4> Industrial Training Institutes</h4>
                  </div>
                  <div>
                    <img  src="/images/itilogo1.png" alt="logo2" /> 
                  </div>
            </div> 
            </section> 

              <Navbar className="navbar"  expand="md" >
               <div className="container">
                    <Navbar.Toggle aria-controls="basic-navbar-nav"  />
                    <Navbar.Collapse id="basic-navbar-nav " >
                      <Nav className="nav-item mr-auto   ">
                        <Nav.Link href="/home">Home</Nav.Link>     
                        <Nav.Link href="/aboutUs">About Us</Nav.Link>                   
                        <Nav.Link href="/profile">ITI Profile</Nav.Link>                
                        <Nav.Link href="/schemes">Schemes of IT</Nav.Link>
                          <NavDropdown title="Trades" >
                              <NavDropdown.Item href="/pvtIti">Pvt ITIs</NavDropdown.Item>
                              <NavDropdown.Item href="/Trades">NCVT Trades</NavDropdown.Item>
                          </NavDropdown>
                          <NavDropdown title="Placements">
                              <NavDropdown.Item href="/placementdashBoard">Placement DashBoard</NavDropdown.Item>
                              <NavDropdown.Item href="/placementabstractreport">Placement Abstract Report</NavDropdown.Item>
                              <NavDropdown.Item href="/jobseekersreport">Job Seekers Report</NavDropdown.Item>
                              <NavDropdown.Item href="/placementopen">Placement Candidate Profile Update</NavDropdown.Item>
                         </NavDropdown>                            
                        <Nav.Link href="/contactUs">Contact Us</Nav.Link> 
                      </Nav>
                    </Navbar.Collapse>
                </div>
          </Navbar>          
     </div>
    );
}
 
export default navBar;
