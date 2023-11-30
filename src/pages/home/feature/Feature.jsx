import React from 'react';
import { Link } from 'react-router-dom';

const Feature = () => {
    return (
        <div>
            <section className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-10 mx-auto">
        



        <section className="mt-8 space-y-8 lg:mt-12">
            <section className="lg:flex lg:items-center">
                <div className="lg:w-1/2 ">
                    <h1 className='text-2xl'>Learning courses
</h1>
<h2 className="mt-2 mb-2 text-2xl font-semibold text-gray-800 capitalize dark:text-white">Enroll in our Skill Development Courses Today!</h2>
                    <p className=" tracking-wider text-gray-900 uppercase dark:text-blue-400 ">From Python to web development, you'll master concepts that employers demand, ensuring your smooth transition from beginner to professional</p>
                  <Link to={'/course'}>  <button className="px-6 mt-5 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
    browse course
</button></Link>
                </div>

                <div className="mt-4 lg:w-1/2 lg:mt-0">
                    <img className="object-cover w-full h-64 rounded-lg md:h-96"
                        src="https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                        alt=""/>
                </div>
            </section>

        </section>
    </div>
</section>
<div><h1 className='text-3xl dark:text-white font-semibold my-12'>Thrilling Showdown</h1></div>
        </div>
    );
};

export default Feature;