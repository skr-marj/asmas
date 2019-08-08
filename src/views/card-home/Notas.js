import React, { Component} from 'react';
import { Col, Row,} from 'reactstrap';


class Notas extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
    
        };
    }    
  render() {
    return (
        <Row>
            <Col xs="12" md="12">
                <Row>
                    <Col xs="12" md="12" className="notas-stl">
                        <h4>{this.props.thumbnail.title}</h4>
                        <p>{this.props.thumbnail.description}</p>
                    </Col> 
                </Row>                                
            </Col>
        </Row>
    );
  }
}

export default Notas;