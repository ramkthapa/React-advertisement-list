import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial State
const initialState = {
    users: [
        {
            id: '19cde9b2-dc32-4ae7-b318-f7776d0def73',
            company_name: 'Tesla',
            budget: 125000.00,
            budget_spent: 62000.00,
            date_of_contract_sign: '2021-01-04'
        },
        {
            id: '19cde9b2-dc32-4ae7-b328-f7776d0def73',
            company_name: 'Apple',
            budget: 110000.00,
            budget_spent: 32000.00,
            date_of_contract_sign: '2021-04-30'
        },
        {
            id: '19cde9b2-dc32-4ae7-b338-f7776d0def73',
            company_name: 'Google',
            budget: 110000.00,
            budget_spent: 32000.00,
            date_of_contract_sign: '2018-02-25'
        },
        {
            id: '19cde9b2-dc32-4ae7-b348-f7776d0def73',
            company_name: 'Youtube',
            budget: 330000.00,
            budget_spent: 32000.00,
            date_of_contract_sign: '2020-03-15'
        },
        {
            id: '19cde9b2-dc32-4ae7-b358-f7776d0def73',
            company_name: 'Amazon',
            budget: 180000.00,
            budget_spent: 12000.00,
            date_of_contract_sign: '2021-06-05'
        }
    ]
}

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    const editUser = (user) => {
        dispatch({
            type: 'EDIT_USER',
            payload: user
        })
    }

    return (
        <GlobalContext.Provider value={{
            users: state.users,
            editUser
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
