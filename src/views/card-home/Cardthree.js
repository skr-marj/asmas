import React, { Component} from 'react';
import { Card, CardBody, } from 'reactstrap';


class Cardthree extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
    };
  }

  render() {
    return (
      <div>
        <Card className="border-primary background-card">
          <CardBody>
            <p></p>
          </CardBody>
          <div className="footer-card"> 
            <div className="txt-footer">
              <p className="h3">TITULO</p>
              Prueba Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
              aoreet dolore magna aliquam erat volutpat.
            </div>
          </div>              
        </Card>          
      </div>
    )
  }
}

export default Cardthree;
