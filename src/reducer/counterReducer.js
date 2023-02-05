const initialState ={
      login:true,
      cart:false,
      quantity:0,
      basket:[],
}

const counterReducer =(state=initialState,action)=>{
      switch(action.type){
            case 'login':
                    return{
                        ...state ,login:!state.login,
                    } 
            case 'logout':
                        return{
                            ...state ,login:!state.login,
                        }
            case 'moveCart':
                  return{
                        ...state, cart:!state.cart,
                  }  
            case 'addtoCart':
                  return{
                      ...state,basket:[...state.basket,action.payload],quantity:state.quantity+1,
                      
                  }                    
            default: return state;      
      }
}

export default counterReducer;