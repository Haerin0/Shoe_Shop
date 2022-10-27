import React, { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components';

// let Box = styled.div`
//   padding : 20px;
//   color : grey
// `;

function Detail(props){ // mount, update시 이 코드 실행됨

  useEffect(()=>{
    let timer = setTimeout(()=> { setAlert(false)}, 2000)
    return ()=> {
      clearTimeout(timer)
    }
  },[])


  let [count, setCount] = useState(0)
  let [alert, setAlert] = useState(true)

  let {id} = useParams();
  let found = props.shoes.find(function(x){
    return x.id == id
  });
  
    return (
      <div className="container">
        {
          alert == true ? 
          <div className="alert alert-warning">2초이내 구매시 할인</div> : null
        }
          {count}
        <button onClick={()=> { setCount(count+1) }}>button</button>
            <div className="row">
              <div className="col-md-6">
                <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
              </div>
              <div className="col-md-6">
                <h4 className="pt-5">{found.title}</h4>
                <p>{found.content}</p>
                <p>{found.price}원</p>
                <button className="btn btn-danger">주문하기</button> 
              </div>
            </div>

            </div>
    )
  }



  export default Detail;