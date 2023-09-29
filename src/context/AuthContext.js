import { createContext, useState } from "react";

// Creando el contexto (Permite a los componentes acceder al contexto)
const AuthContext = createContext({
  auth: undefined,
  login: () => {},
  logout: () => {},
});

// Provider (Permite a los componentes hijos tener acceso al state)
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(undefined);

  const login = (userData) => {
    setAuth(userData);
  };

  const logout = () => {
    setAuth(undefined);
  };

  return (
    <AuthContext.Provider
      value={{
        auth,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
