import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authcontext } from "../authprovider/Authprovider";
import axios from "axios";

export const axiosSecure = axios.create({
  baseURL: "https://contest-server-side.vercel.app",
});
const useAxiossecure = () => {
  const navigate = useNavigate();
  const { logout } = useContext(authcontext);
  useEffect(() => {
    axiosSecure.interceptors.request.use(
      function (config) {
        const token = localStorage.getItem("access-token");
        // console.log('request stopped by interceptor',token)
        config.headers.Authorization = `barer ${token}`;
        return config;
      },
      function (error) {
        return Promise.reject(error);
      }
    );
    axiosSecure.interceptors.response.use(
      function (response) {
        return response;
      },
      async function (error) {
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          await logout();
          navigate("/");
        }
        // console.log('status error the interceptors',error)

        return Promise.reject(error);
      }
    );
  }, [navigate, logout]);

  return axiosSecure;
};

export default useAxiossecure;
