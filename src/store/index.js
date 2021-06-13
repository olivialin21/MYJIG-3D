import { createContext } from "react";
import useReducerWithThunk from "use-reducer-thunk";
import {
  
} from "../utils";

export const StoreContext = createContext();

const initialState = {

}

  function reducer(state, action) {
  switch (action.type) {
    // case GET_ORDER_LIST:
    //   return {
    //     ...state,
    //     orderList: action.payload,
    //   };
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducerWithThunk(
    reducer,
    initialState,
    "example"
  );
  // const [state, dispatch] = useReducer(reducer, initialState)
  const value = { state, dispatch };

  return (
    <StoreContext.Provider value={value}>
      {props.children}
    </StoreContext.Provider>
  );
}
