
const initialState={
    cart:{},
    count:0
}


export default function RootReducer(state=initialState , action) {
    
    switch (action.type) {
        case 'Add_Cart' :
        state.cart[action.payload[0]] = action.payload[1]
        state.count=state.count + 1
        console.log("CART Is Hear:- ",state.cart)
        return {cart:state.cart, count: state.count }
      
        case 'Remove_item':
            delete state.cart[action.payload[0]]
            state.count=state.count - 1
            return {cart :state.cart, count: state.count }         ////   No need to use breake; after return ///
       default:
           return state
    } 
}
