import { useContext } from "react";
import { AuthContext } from "../Context/auth.context";

export const useAuth = () => useContext(AuthContext);
