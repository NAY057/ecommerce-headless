import { useContext } from "react";
import { CartContext } from "@/contexts";
// la funcion de este hook es acceder a los datos del contexto
export const useCart = () => useContext(CartContext);
