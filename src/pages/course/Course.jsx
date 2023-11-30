import React, { useEffect, useState } from 'react';

const Course = () => {
    const [value,setvalue]=useState([])
    useEffect(()=>{

        fetch('api.Json')
        .then(res=>res.json())
        .then(data=>setvalue(data))
    },[])
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mx-10 mt-4'>

                {
                    value.map(item=><div key={item.id} className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                   
                
                    <img className="object-cover w-full h-48 mt-2" src={item.cover} alt="NIKE AIR"/>
                    <div className="px-4 py-2">
                        <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">{item.title}</h1>
                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{item.about}</p>
                    </div>
                
                    <div className="flex items-center justify-between px-4 py-2 bg-white dark:bg-gray-900">
                        <h1 className="text-lg font-bold text-gray-900 dark:text-white">${item.price}</h1>
                        <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">Enrol</button>
                    </div>
                </div>)
                }
            </div>
            
        </div>
    );
};

export default Course;