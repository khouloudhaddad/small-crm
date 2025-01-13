import React, { createContext, useReducer } from 'react';

const CRMContext = createContext();

const initialState = {
   contacts: [],
   leads: [],
};

const reducer = (state, action) => {
   switch (action.type) {
       case 'SET_CONTACTS':
           return { ...state, contacts: action.payload };
       case 'SET_LEADS':
           return { ...state, leads: action.payload };
       default:
           return state;
   }
};

export const CRMProvider = ({ children }) => {
   const [state, dispatch] = useReducer(reducer, initialState);

   return (
       <CRMContext.Provider value={{ state, dispatch }}>
           {children}
       </CRMContext.Provider>
   );
};

export default CRMContext;
