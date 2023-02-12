
export const reducer = (state,action)=>{

    if(action.type === 'CLEAR_CART'){
        return {...state,cart:[]};
    }
    if(action.type === 'REMOVE_ITEM'){
        const filterItem = state.cart.filter((item)=> item.id !== action.payLoad);
        return{...state,cart:filterItem}
    }
    if(action.type === 'INCREASE_BTN'){
       let IncreaseBtn = state.cart.map((cartItem)=>{
        if(cartItem.id === action.payLoad){
            return{...cartItem, amount: cartItem.amount + 1};
        }
        return cartItem
       })
       return{...state,cart:IncreaseBtn};
    }
    if(action.type === 'DECREASE_BTN'){
       let DecreaseBtn = state.cart.map((cartItem)=>{
        if(cartItem.id === action.payLoad){
            return{...cartItem, amount: cartItem.amount - 1};
        }
        return cartItem
       }).filter((cartItem)=>cartItem.amount !==0);
       return{...state,cart:DecreaseBtn};
    }

    if(action.type === 'GET_TOTALS'){
        let {total,amount} = state.cart.reduce((carttotal,cartItem)=>{
            const{amount,price} = cartItem;
            carttotal.amount += amount;
            carttotal.total += amount * price;
          return carttotal;
        },{
            total:0,
            amount:0
        })
        total =parseFloat(total.toFixed(2));
        return {...state,total,amount}
        
    }
    return state;
}