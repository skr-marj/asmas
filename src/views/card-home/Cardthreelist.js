import React, { Component} from 'react';
import { Card, CardBody,  Row, Col,} from 'reactstrap';
//import Cardthree from '../card-home/Cardthree';

/*class Cardthreelist extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        dropdownOpen: false,
        radioSelected: 2,
      };
    }
    render() {
        return (
            <Row>
              <Col xs="12" md="4">
                <Cardthree/>
              </Col>
              <Col xs="12" md="4">
                <Cardthree/>
              </Col>
              <Col xs="12" md="4">
                <Cardthree/>
              </Col>
            </Row>
        );
    }
}*/

const Cardthreelist = ({ cardtxt }) => (
  <div>
    <Row>
        {cardtxt.map(ctxt => 
          <Cardthree
            key = {ctxt.id}
            title = {ctxt.title}
            description = {ctxt.descript}
          />  
        )}
    </Row>
  </div>
);

export default Cardthreelist;
