import './App.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import data from './data';


function App() {

  let [shoes] = useState(data)
  //console.log(shoes[0].title)

  return (
    <div className="App">

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='main-bg'></div>
      <Container>
        <Row>
          {
            shoes.map(function(a,i){
              return (
                <Card shoes={shoes[i]} i={i+1} key={i} />
              )
            })
          }
        </Row>
    </Container>

    </div>
  );
}

function Card(props){
  return (
    <Col sm >
        <img src={'https://codingapple1.github.io/shop/shoes'+ props.i + '.jpg'}
        width="80%" />
        <h4>{props.shoes.title}</h4>
        <p>상품 설명: {props.shoes.content}</p>
        <p>가격: {props.shoes.price}</p>
    </Col>
  )
}



export default App;