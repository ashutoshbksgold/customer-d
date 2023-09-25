import { ReactNode, createContext, useEffect, useReducer } from "react";
import {
  ActionMap,
  AuthState,
  AuthUser,
  ContextType,
} from "../common/types/auth";

type AuthProp = {
  children: ReactNode;
};

const initialState: AuthState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
};
enum Types {
  Initial = "INITIALIZE",
  Login = "LOGIN",
  Logout = "LOGOUT",
  Register = "REGISTER",
}

type AuthPayload = {
  [Types.Initial]: {
    isAuthenticated: boolean;
    user: AuthUser;
  };
  [Types.Login]: {
    user: AuthUser;
  };
  [Types.Logout]: undefined;
  [Types.Register]: {
    user: AuthUser;
  };
};

export type AuthActions = ActionMap<AuthPayload>[keyof ActionMap<AuthPayload>];

const AuthReducer = (state: AuthState, action: AuthActions) => {
  switch (action.type) {
    case "INITIALIZE":
      return {
        isAuthenticated: action.payload.isAuthenticated,
        isInitialized: true,
        user: action.payload.user,
      };

    default:
      return state;
  }
};

const AuthContext = createContext<ContextType | null>(null);

const AuthProvider = ({ children }: AuthProp) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  useEffect(() => {}, []);

  const login = () => {};

  const register = () => {};

  const logout = () => {};

  return (
    <AuthContext.Provider value={{ ...state, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
