import React from 'react'
import { Button } from 'react-bootstrap';
import { connect, useDispatch } from 'react-redux';
import logo from '../images/logo.png';
import cart from '../images/cart.png';

 function Header(props) {
  const dispatch = useDispatch();
  const check =(e)=>{
    e.preventDefault();
    dispatch({type:'moveCart'})
  }
  return (
    <div className='f-lex-own'>
      
            <img src={logo}alt="logo" width="100px" height="30px"/>
         
            <button className="btn-4"onClick={check}><img src={cart} alt="cart"width="40px" height="40px"/>  <span className='cart-count'>{props.count.quantity}</span> </button>   
            <Button className ="btn-2"variant='waraning' onClick={()=>dispatch({type:'logout'})}>Logout</Button>
         

      
    </div>
  )
}
export default connect(state=>state)(Header);