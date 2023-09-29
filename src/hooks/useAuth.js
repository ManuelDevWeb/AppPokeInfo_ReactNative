import { useContext } from "react";

// Contexto (Permite a los componentes acceder al contexto)
import { AuthContext } from "../context/AuthContext";

const useAuth = () => {
  // Obteniendo los values (states) del contexto
  const context = useContext(AuthContext);
  return context;
};

export { useAuth };
