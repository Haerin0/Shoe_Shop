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

  let [shoes, setShoes] = useState(data)
  let navigate = useNavigate(); //Hook (유용한 것들이 많이 있는 함수)
  
  //console.log(shoes[0].title)

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
    

    <Routes>
        <Route path="/" element={
        <div>
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
          <button onClick={()=>{
            axios.get('https://codingapple1.github.io/shop/data2.json')
            .then((result)=>{ 
              let copy = [...shoes, ...result.data]; //concat()대신 사용
              setShoes(copy)
            })
            .catch(()=>{
              console.log('failed')
            })

            

          }}>button</button>

        </div>}/>
        <Route path="/detail/:id" element={<Detail shoes={shoes} />}>
        </Route>

        <Route path='/cart' element={<Cart/>} />

        {/* Nested Routes */}
        <Route path="/about" element={<About />} >
          <Route path="member" element={<div>member</div>} />
          <Route path="location" element={<div>Location is...</div>} />
        </Route>

        <Route path="/event" element={<Event />}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path="two" element={<div>생일기념 쿠폰 받기</div>} />
        </Route>
        <Route path="*" element={<div>없는 페이지 입니다.</div>} /> {/* 404페이지 */}
      </Routes>

    </div>
  );
}

function About(){
  return (
    <div>
      <h4>회사 정보 페이지</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Event(){
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
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