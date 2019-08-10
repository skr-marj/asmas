import React, { Component} from 'react';
import { Card, CardBody, CardFooter, Col, } from 'reactstrap';


class Cardthree extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <Col xs="12" md="4">   
        <Card className="border-primary background-card" style={{"backgroundImage":"url('" + this.props.thumbnail.imgurl + "')" }}>
          <CardBody>
            <p></p>
          </CardBody>
          <CardFooter className="footer-card">
            <h3>{this.props.thumbnail.title}</h3>
              {this.props.thumbnail.description}            
          </CardFooter>
          {/*<div className="footer-card"> 
            <div className="txt-footer">
              <p className="h3">{this.props.thumbnail.title}</p>
              {this.props.thumbnail.description}
            </div>
          </div>*/}
        </Card>          
      </Col>
    )
  }
}

/*const Cardthree = ({ title, description }) => (
  <Col xs="12" md="4">
    <Card className="border-primary background-card">
      <CardBody>
        <p></p>
      </CardBody>
      <div className="footer-card"> 
        <div className="txt-footer">
          <p className="h3">{title}</p>
          {description}
        </div>
      </div>              
    </Card>          
  </Col>
);*/

export default Cardthree;
