import { useParams } from "react-router-dom";
import styled from 'styled-components';

let YellowBtn  = styled.button`
  background : yellow;
  color : black;
  padding : 10px;
`

let Box  = styled.div`
  background : grey;
  color : black;
  padding :20px;
`

function Detail(props){

  let {id} = useParams();
  let found = props.shoes.find(function(x){
    return x.id == id
  });
  

    return (
      <div className="container">
          <YellowBtn>button</YellowBtn>
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