
import useaxiouspublic from './useaxiouspublic';
import { useQuery } from '@tanstack/react-query';

const useContest = () => {
const axiouspublic=useaxiouspublic()
    const {data:contest=[],refetch}=useQuery({
        queryKey:['con'],
        queryFn: async ()=>{
            const res=await axiouspublic.get('/contest')
            return res.data;
        }
    })


    return [contest,refetch]
};

export default useContest;