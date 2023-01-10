
import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    cart :[],

}

const cart =createSlice({
    name:'cart',
    initialState,
    reducers:{
        addCart :(state,action)=>{

            if(state.cart.length === 0){

                 let cartItem ={
                    id: action.payload.id,
                    img: action.payload.thumbnail,
                    price: action.payload.price,
                    title: action.payload.title,
                    count: 0,
                    totalPrice:action.payload.price
                 }
              state.cart.push(cartItem)

            }if(state.cart.length !== 0){
             let finded =  state.cart.find(element => element.id === action.payload.id) 
                   if(finded){
               
                    finded.count = finded.count+1
                    finded.totalPrice = finded.price*finded.count 
                
                   }
                   if(!finded){
                    let cartItem ={
                        id: action.payload.id,
                        img: action.payload.thumbnail,
                        price: action.payload.price,
                        title: action.payload.title,
                        count: 1,
                        totalPrice:action.payload.price
                     }
                     state.cart.push(cartItem)

                   } 
                  
                
            }
        },

        incrementCount:(state,action)=>{
            let finded =  state.cart.find(element => element.id === action.payload) 
            if(finded){
                finded.count = finded.count+1
                finded.totalPrice = finded.price*finded.count 

            }
        },
        decrementCount:(state,action)=>{
            let finded =  state.cart.find(element => element.id === action.payload) 
            if(finded){
                if(finded.count -1 === 0){
                    state.cart = state.cart.filter(item => item.id !== finded.id)
                    return
                }
                finded.count = finded.count-1
                finded.totalPrice =finded.totalPrice- finded.price

            }

        },

    clearCart:(state,action)=>{
     state.cart = action.payload
       
    }

       
    }
})

export const {addCart,clearCart,incrementCount,decrementCount} = cart.actions
export default cart.reducer


// const initialState = {  
    

//     cart: [],
// }

// function rootReducer(state = initialState, action) {



//     switch (action.type) {
//         case 'ADD_CART':
//             if (state.cart.length === 0) {
//                 let cartItem = {
//                     id: action.payload.id,
//                     img: action.payload.thumbnail,
//                     price: action.payload.price,
//                     title: action.payload.title,
//                     count: 1
//                 }

//                 state.cart.push(cartItem)
//                 console.log('state', state)
//             }
//             if (state.cart.length !== 0) {

//                 const find = state.cart.find(element => element.id === action.payload.id)
//                 console.log(find)

//             }
//             return { ...state }

//         case 'INCREMENT':

//             return { cart: action.payload }
//         case 'DECREMENT':

//             return { cart: action.payload }
//         default:
//             return state;
//     }
// }
// export default rootReducer





