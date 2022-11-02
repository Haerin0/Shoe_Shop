import './App.css';
import { Nav, Navbar, Row, Col, Container } from 'react-bootstrap';
import { useState } from 'react';
import  data  from './data';


function App() {

  let [shoes] = useState(data)

  return (
    <div className="App">
      
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Shoe Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#cart">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='main-bg'></div>

      <Container>
        <Row>
          {
            shoes.map((a,i)=>{
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
      <Col sm>
            <img src={'https://codingapple1.github.io/shop/shoes' + props.i + '.jpg'} width="80%" />
            <h4>{props.shoes.title}</h4>
            <p>{props.shoes.price}</p>
      </Col>
  )
}


export default App;
