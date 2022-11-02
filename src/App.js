import './App.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import data from './data';
import Detail from './pages/Detail';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import axios from 'axios'
import Cart from './pages/Cart';


function App() {

  // let [shoeInfo, shoeState] = useState(2);
  let [shoes] = useState(data)
  console.log(shoes[0].title)

  return (
    <div className="App">

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=> { navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={()=> { navigate('/detail') }}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    

      <div className='main-bg'></div>
      <Container>
        <Row>
          <Products shoes={shoes} />
          <Products shoes={shoes} />
          <Products shoes={shoes} />
        </Row>
    </Container>



    </div>
  );
}

function Products(props){
  return (
    <Col sm>
        <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%" />
        <h4>{props.shoes[0].title}</h4>
        <p>상품 설명: {props.shoes[0].content}</p>
        <p>가격: {props.shoes[0].price}</p>
    </Col>
  )
}

export default App;
