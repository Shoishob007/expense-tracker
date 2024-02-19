# useContext Hook

Created a context using useContext hook from react to track the state of the transactions.

# Global Provider

Propagate the context to the components using a Global Provider

` export const GlobalContext = createContext(initialState);`

` <GlobalContext.Provider value={{ transactions: state transactions }} > {children} </GlobalContext.Provider>`

# useReducer Hook

Used useReducer hook from React to take actions according to dispatch
