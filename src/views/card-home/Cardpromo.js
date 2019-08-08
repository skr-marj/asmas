import React, { Component} from 'react';
import { Card, CardBody, } from 'reactstrap';

class Cardpromo extends Component {
  render() {
    return (
      <div>
        <Card className="border-primary background-cardpromo" style={{"background-image":"url('" + this.props.thumbnail.imgurl + "')" }}>
            <CardBody>
            <p></p>
            </CardBody>
            <div className="footer-card"> 
            <div className="txt-footer">
                <p className="h3">{this.props.thumbnail.title}</p>
                {this.props.thumbnail.description}
            </div>
            </div>              
        </Card>              
      </div>
    );
  }
}

/*const Cardpromo = ({ title, description }) => (
  <div>
    <Card className="border-primary background-card" style={{"height": "90vh"}}>
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
  </div>
);*/

export default Cardpromo;