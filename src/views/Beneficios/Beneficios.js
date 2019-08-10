import React, { Component, } from 'react';
import axios from 'axios';
import { Row, Col, } from 'reactstrap';
import Cardthree from '../card-home/Cardthree';

class Beneficios extends Component {
  constructor(props) {
    super(props);

    this.state = {
      initialdatas: [
        { id: 1, title: 'Lo que viene 1', description: '1.-Culpa quis exercitation ea fugiat magna proident ipsum commodo tempor laboris elit.', imgurl:'https://cdn-ami-drupal.heartyhosting.com/sites/muscleandfitness.com/files/flex/6_12.jpg'},
        { id: 2, title: 'Lo que viene 2', description: '2.-Culpa quis exercitation ea fugiat magna proident ipsum commodo tempor laboris elit.', imgurl:'https://www.izotope.com/en/blog/music-production/7-home-recording-studio-myths/_jcr_content/image.img.jpg/1547649975903.jpg'},
        { id: 3, title: 'Lo que viene 3', description: '3.-Culpa quis exercitation ea fugiat magna proident ipsum commodo tempor laboris elit.', imgurl:'https://www.muscleathleticsports.com/wp-content/uploads/2017/12/51875019_121070799001096_15001034878618338_n-1024x683.jpg'},
        { id: 3, title: 'Lo que viene 3', description: '3.-Culpa quis exercitation ea fugiat magna proident ipsum commodo tempor laboris elit.', imgurl:'https://www.muscleathleticsports.com/wp-content/uploads/2017/12/51875019_121070799001096_15001034878618338_n-1024x683.jpg'},
        { id: 3, title: 'Lo que viene 3', description: '3.-Culpa quis exercitation ea fugiat magna proident ipsum commodo tempor laboris elit.', imgurl:'https://www.muscleathleticsports.com/wp-content/uploads/2017/12/51875019_121070799001096_15001034878618338_n-1024x683.jpg'},
        { id: 3, title: 'Lo que viene 3', description: '3.-Culpa quis exercitation ea fugiat magna proident ipsum commodo tempor laboris elit.', imgurl:'https://www.muscleathleticsports.com/wp-content/uploads/2017/12/51875019_121070799001096_15001034878618338_n-1024x683.jpg'},
        { id: 3, title: 'Lo que viene 3', description: '3.-Culpa quis exercitation ea fugiat magna proident ipsum commodo tempor laboris elit.', imgurl:'https://www.muscleathleticsports.com/wp-content/uploads/2017/12/51875019_121070799001096_15001034878618338_n-1024x683.jpg'},
        { id: 3, title: 'Lo que viene 3', description: '3.-Culpa quis exercitation ea fugiat magna proident ipsum commodo tempor laboris elit.', imgurl:'https://www.muscleathleticsports.com/wp-content/uploads/2017/12/51875019_121070799001096_15001034878618338_n-1024x683.jpg'},
        { id: 3, title: 'Lo que viene 3', description: '3.-Culpa quis exercitation ea fugiat magna proident ipsum commodo tempor laboris elit.', imgurl:'https://www.muscleathleticsports.com/wp-content/uploads/2017/12/51875019_121070799001096_15001034878618338_n-1024x683.jpg'},
        { id: 3, title: 'Lo que viene 3', description: '3.-Culpa quis exercitation ea fugiat magna proident ipsum commodo tempor laboris elit.', imgurl:'https://www.muscleathleticsports.com/wp-content/uploads/2017/12/51875019_121070799001096_15001034878618338_n-1024x683.jpg'},
        { id: 3, title: 'Lo que viene 3', description: '3.-Culpa quis exercitation ea fugiat magna proident ipsum commodo tempor laboris elit.', imgurl:'https://www.muscleathleticsports.com/wp-content/uploads/2017/12/51875019_121070799001096_15001034878618338_n-1024x683.jpg'},
        { id: 3, title: 'Lo que viene 3', description: '3.-Culpa quis exercitation ea fugiat magna proident ipsum commodo tempor laboris elit.', imgurl:'https://www.muscleathleticsports.com/wp-content/uploads/2017/12/51875019_121070799001096_15001034878618338_n-1024x683.jpg'},
      ]
    };
  }

  componentWillMount(){
    axios.get('http://54.187.97.19:8082/asmas/all')
    .then(response => {
      //console.log(response.data)
      //this.setState({ initialdatas:response.data })
    })
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
            <Col xs="12" md="12">
                <h2><b>BENEFICIOS</b></h2>
            </Col>
        </Row>            
        <Row>
                {
                this.state.initialdatas.map((item,i) => { 
                    return (<Cardthree key ={i} thumbnail={item}/>);
                })
                }          
        </Row>
      </div>
    );
  }
}

export default Beneficios;