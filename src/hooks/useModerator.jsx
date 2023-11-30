import React, { useContext } from 'react';
import useAxiossecure from './useAxiossecure ';
import { authcontext } from '../authprovider/Authprovider';
import { useQuery } from '@tanstack/react-query';

const useModerator = () => {
    const axiosSecure=useAxiossecure()
  const { user ,loading} = useContext(authcontext);
  const { data: ismoderator ,isLoading} = useQuery({
    queryKey: [user?.email, "ismoderator"],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      if(user?.email){
        const res = await axiosSecure.get(`/user/moderator/${user.email}`);
      console.log(res.data.moderator)
      return res.data.moderator;
      }
      
    },
   
  });
 
  console.log(ismoderator)
return [ismoderator,isLoading]
};

export default useModerator;