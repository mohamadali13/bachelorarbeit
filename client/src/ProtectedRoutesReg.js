import { Navigate, Outlet } from "react-router-dom";
const role = localStorage.getItem("role");
const useAuth = () => {
  const token = localStorage.getItem("token");
  
  if (!token) return true;
  else {
    return false;
  }
};

const ProtectedRoutesReg = () => {
  const isAuth = useAuth();
  if(isAuth){
    return <Outlet />;
  } else if (!isAuth){
    if(role == 'admin'){
      return <Navigate to='homePageAdmin' />
    }else if (role == 'student'){
      return <Navigate to='homePageStudent' />
    }else if (role == 'company'){
      return <Navigate to='homePageFirma' />
    }
  }
  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutesReg;
