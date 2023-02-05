import React from 'react'
import { connect, useDispatch } from 'react-redux';

 function LoginP(props) {
      const dispatch = useDispatch();
      const logfn=(e)=>{
            e.preventDefault();
            dispatch({type:'login'})
      }
  return (
    <div className='set-center-form'>
     
        <form onSubmit={logfn}>
        <h1 className='headOne'>USER LOGIN</h1>
          <input type="text" placeholder='User Name' autoComplete='none'/>
          <input type="password" placeholder='Password'autoComplete='none'/>
          <button className="btn-3"type='submit'>Login</button>
        </form>

    </div>
  )
}
export default connect(state=>state)(LoginP);
