
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AllContext } from "../Context/AllContext";

function PrivateRoute({ children }) {
  const { isAuth } = useContext(AllContext);
    
  if (!isAuth) {
    return (
      <>

        <Navigate to="/signin" />
      </>
    );
  }
  return children;
}

export default PrivateRoute;
