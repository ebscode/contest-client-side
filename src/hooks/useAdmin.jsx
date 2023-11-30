/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";


import useaxiouspublic from "./useaxiouspublic";
import { authcontext } from "../authprovider/Authprovider";
import useAxiossecure from "./useAxiossecure ";

const useAdmin = () => {
  const axiosSecure=useAxiossecure()
  const { user ,loading} = useContext(authcontext);
  const { data: isAdmin ,isLoading:isAdminloadin} = useQuery({
    queryKey: [user?.email, "isAdmin"],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      if(user?.email){
        const res = await axiosSecure.get(`/user/admin/${user.email}`);
      return res.data.admin;
      }
    },
  });
  return [isAdmin,isAdminloadin];
};

export default useAdmin;