const { createContext, useReducer } = require("react");

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  if (action.type === "LOGIN") {
    return { user: action.payload };
  }

  if (action.type === "LOGOUT") {
    return { user: null };
  }
  return state;
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });

  console.log("AuthContext state: ", state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
