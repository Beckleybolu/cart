import React,{useReducer,useContext,useEffect} from "react";
import data from "./data";
import { reducer } from "./reducer";

const AppContext = React.createContext();

const initialState = {
    cart:data,
    amount:0,
    total:0
}

const AppProvider = ({children})=>{


    const [state,dispatch] = useReducer(reducer,initialState);
    
    useEffect(()=>{
        dispatch({type:'GET_TOTALS'})
    },[state.cart])

    return(
        <AppContext.Provider value={{...state,dispatch}}>
            {children}
        </AppContext.Provider>
    )
}

// create global context

export const useGlobalContext = ()=>{
    return  useContext(AppContext);
}


export {AppProvider};
