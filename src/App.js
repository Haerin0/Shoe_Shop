import './App.css';
import { Nav, Navbar, Row, Col, Container } from 'react-bootstrap';
import { useState } from 'react';
import  data  from './data';
import { Routes, Route, Link } from 'react-router-dom'


function App() {

  let [shoes] = useState(data)

  return (
    <div className="App">
      
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Shoe Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/" id="nav_link">Home</Link>
            <Link to="/detail" id="nav_link">Cart</Link>
          </Nav>
        </Container>
      </Navbar>

      {/* 페이지 나누는 코드 html여러개 만들지 않고 라우트 만들기 */}
      <Routes>
        <Route  path='/' element={
        <div>
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
        </div>} />
        <Route  path='/detail' element={<div>detail page</div>} />
      </Routes>

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
