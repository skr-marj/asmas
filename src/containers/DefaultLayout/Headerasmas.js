import React, { Component } from 'react';
import { Card, CardBody, CardFooter, Col, Row,} from 'reactstrap';

class Headerasmas extends Component{
    constructor(props){
        super(props);

        this.state = {

        };
    }

    render(){
        return (       
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">AS+</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">¿QUÉ ES AS+? <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">EVENTOS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">BENEFICIOS</a>
                        </li>  
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Headerasmas;