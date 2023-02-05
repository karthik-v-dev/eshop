import React from 'react'
import { connect } from 'react-redux'

 function Cartpage(props) {
      console.log(props)
    const addProd = props.count.basket?.map((Aitem)=>{
      return(Aitem.map((item,index)=>{

      return (<div key={index} className="cart-flex">
               <img src={item.imgurl} alt={item.title} width="150px" height="100px"/>
               <h2 className='w-20'>{item.title}</h2>
               <strong className='w-20'>₹{item.price}</strong>
               <p className='w-20'>x1</p>
               <div className='w-20'>
               <button className='w-20 btn-1'>-</button>
               <span>1</span>
               <button className=' w-20 btn-1'>+</button>
               </div>
      </div>)
 } ) 
      )
})
  return (
    <>{addProd}</>
  )
}
export default connect(state=>state)(Cartpage);
