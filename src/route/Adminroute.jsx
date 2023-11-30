import { useContext } from "react";
import useAdmin from "../hooks/useAdmin";
import { authcontext } from "../authprovider/Authprovider";
import { Navigate } from "react-router-dom";
import useModerator from "../hooks/useModerator";


const Adminroute = ({children}) => {
    const {user,loading}=useContext(authcontext)
    const [isAdminloadin]=useAdmin()
  
if(loading || isAdminloadin){
    return (
        <div className='h-screen flex justify-center items-center'>
          <span className="loading loading-infinity loading-lg"></span>
        </div>
      );
}
if(user ){
return children
}
return <Navigate state={location.pathname} to="/"></Navigate>
};

export default Adminroute;