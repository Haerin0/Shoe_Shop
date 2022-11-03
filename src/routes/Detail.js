import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function Detail(props){

    useEffect(()=> {
        let a = setTimeout(()=>{ 
            setAlert(false)
        }, 2000)
        return ()=> {
            clearTimeout(a)
        }
    },[]) //mount 시 1회만 동작하게

    let { id } = useParams();
    let found = props.shoes.find(function(x){
      return x.id == id
    });

    let [count, setCount] = useState(0)
    let [alert, setAlert] = useState(true)
  
    return (
      <div className="container">
        {
            alert == true
            ? <div className="alert alert-warning">
            2초 이내 구매시 할인
        </div> : null
        }
        { count }
        <button onClick={()=>{ setCount(count + 1) }}>Button</button>
        <div className="row">
          <div className="col-md-6">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
          </div>
          <div className="col-md-6 mt-4">
            <h4 className="pt-5">{found.title}</h4>
            <p>{found.content}</p>
            <p>{found.price}원</p>
            <button className="btn btn-danger">주문하기</button> 
          </div>
        </div>
    </div>  
    )
  };
  
  export default Detail 