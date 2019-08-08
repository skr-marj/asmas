import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col, Row,} from 'reactstrap';


const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultFooter extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        {/*<span><a href="#">AS+</a> &copy; 2019 creative.</span>
        <span className="ml-auto">Powered by <a href="#">SEKURA</a></span>*/}
        <div className="container">
          <Row>
            <Col xs="12"  md="4">
                AVISO DE PRIVACIDAD
            </Col>
            <Col xs="12"  md="4">
                TERMINOS Y CONDICIONES
            </Col>
            <Col xs="12"  md="4">
                PREGUNTAS FRECUENTES
            </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}

DefaultFooter.propTypes = propTypes;
DefaultFooter.defaultProps = defaultProps;

export default DefaultFooter;
