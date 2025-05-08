import { useContext } from "react";
import contextA from "../contexts/type/context";

const useAppContext = () => {
    const context = useContext(contextA);
    if (!context) {
      throw new Error("useAppContext must be used within an AppProvider");
    }
    return context;
  };
  
  export default useAppContext;