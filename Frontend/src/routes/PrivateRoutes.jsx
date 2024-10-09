import { useContext } from "react";
import { AUTH_CONTEXT } from "../context/AuthContext";
import { Navigate } from "react-router-dom";


const PrivateRoutes = ({children}) => {
    const {userInfo, loading} = useContext(AUTH_CONTEXT)

    if (loading) {
        return <div className="text-center mt-28"><span className="loading loading-dots loading-md"></span></div>;
    }
    if (userInfo) {
        return children
    }

    return <Navigate to="/login"/>
};

export default PrivateRoutes;