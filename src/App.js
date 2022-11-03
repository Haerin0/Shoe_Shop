import './App.css';
import { Nav, Navbar, Row, Col, Container } from 'react-bootstrap';
import { useState } from 'react';
import  data  from './data';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import  Detail  from './routes/Detail';
import axios from 'axios';
import Cart from './routes/Cart'


function App() {

  let [shoes, setShoes] = useState(data)
  let navigate = useNavigate(); //페이지 이동을 도와주는 함수

  return (
    <div className="App">
      
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Shoe Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{ navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('detail/0') }}>Detail</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/cart') }}>Cart</Nav.Link>
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
          <button onClick={()=>{ 
            axios.get('https://codingapple1.github.io/shop/data2.json') 
            .then((result)=>{
              console.log(result.data[0])
              let copy = [...shoes, ...result.data];
            })
            .catch(()=>{
              console.log('failed')
            })
           }}>Button</button>
        </div>} />
        <Route  path='/detail/:id' element={<Detail shoes={shoes} />} />
        <Route path="/cart" element={ <Cart /> } /> 
        <Route  path='*' element={<div>없는 페이지 입니다.</div>} />
        <Route path="/about" element={ <About/> } >   
        <Route path="member" element={ <div>멤버들</div> } />
        <Route path="location" element={ <div>회사위치</div> } />
      </Route>
      </Routes>

    </div>
  );
}

function About() {
  return (
    <div>
      <h4>회사 정보</h4>
      <Outlet></Outlet>
    </div>
  )
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
