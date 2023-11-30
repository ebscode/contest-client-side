import Aos from 'aos';
import React, { useEffect } from 'react';

const PopularCard = ({item}) => {
    const{ContestName,Image,Description,ContestPrice,PrizeMoney,TaskSubmissionTextInstruction,Category,Deadline}=item

    useEffect(()=>{

        Aos.init({duration: 1200});
    
    
    },[])
    return (
        <div >
          <div data-aos="zoom-in-up" className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
    <img className="object-cover w-full h-64" src={Image} alt="Article"/>

    <div className="p-6">
        <div>
            <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">{Category}</span>
            <a href="#" className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabIndex="0" role="link">{ContestName}</a>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{Description.slice(0,100)}</p>
        </div>

        <div className="mt-4">
            <div className="flex items-center">
                <div className="flex items-center">
                    <button className='btn bg-blue-500 text-white'>details</button>
                </div>
              
            </div>
        </div>
    </div>
</div>  
        </div>
    );
};

export default PopularCard;