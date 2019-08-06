import React, { Component, lazy, Suspense } from 'react';

import { Badge, Button, ButtonDropdown, ButtonGroup, ButtonToolbar, Card, CardBody, CardFooter, CardHeader, CardTitle, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Progress, Row, Table, } from 'reactstrap';

import Cardthreelist from '../card-home/Cardthreelist';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
    };
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12"  md="9">
          <Cardthreelist/>
          <Cardthreelist/>
          </Col>
          <Col xs="12" md="3"> 
            <Card className="border-primary background-card" style={{"height": "90vh"}}>
              <CardBody>
                <p></p>
              </CardBody>
              <div className="footer-card"> 
                <div className="txt-footer">
                  <p className="h3">TITULO0</p>
                  Prueba Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                  aoreet dolore magna aliquam erat volutpat.
                </div>
              </div>              
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;