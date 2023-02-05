import React,{useEffect,useState} from 'react';
import {connect,useDispatch} from 'react-redux';
import {Button,Card,Row,Col } from 'react-bootstrap';
import axios from 'axios';

 function Layout(props) {
  const[data, setData]=useState({});
      console.log(props.count.value);
      const dispatch = useDispatch();
      const addProd =(id,imgurl,title,price)=>{
        console.log(id);
        
       dispatch({type:"addtoCart",payload:[{id,imgurl,title,price}]})
      }
    useEffect(()=>{
      try{
         (async()=>{
          const res = await axios.get("https://dummyjson.com/products");
          const Data = res.data;
          setData(Data);
         })();
      }catch(error)
      {
        console.error(error.message)
      }
    },[])
    const prod = data?.products?.map((item,index)=>{
     
      return(<Card key={index}className="justify-content-md-center"style={{ width: '23%',padding:"20px",margin:"10px",boxSizing:'border-box',  boxShadow:"2px 2px 15px #ccc",textAlign:'center',alignContent:"baseline",flexBasis: "auto"}}>
      <Card.Img variant="top" src={item.images[0]} style={{maxWidth:"100%",height:'200px'}} />
      <Card.Body>
        <Card.Title><h2>{item.title}</h2></Card.Title>
        <Card.Text style={{height:'80px'}}>
        <div className='f-lex'><del><strong>₹{parseFloat(item.price/(100-item.discountPercentage)*100).toFixed(2)}</strong></del><span>{item.discountPercentage}%</span> <strong><span>₹{item.price}</span></strong></div>
        <h5>{item.description}</h5>
        </Card.Text>
        <Card.Footer>
        <Button variant="primary"onClick={()=>addProd(item.id,item.images[0],item.title,item.price)}className='btn-1'>ADD TO CART</Button>
        {/* onClick={()=>addProd(item.id,item.images[0],item.title,item.price)} */}
        </Card.Footer>
      </Card.Body>
    </Card> )
      })
   
  return (
    <div style={{display:'flex',flexFlow:'row wrap',justifyContent:"start",margin:"1% 4% 1% 6%"} }>
       
     {prod}
    
   </div> 
  )
}
export default connect(state=>state)(Layout);

