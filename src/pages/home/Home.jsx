import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Navbar from "../../components/Navbar/Navbar";
import PopularContest from "./popular contest/PopularContest";
import { useState } from "react";
import PopularCard from "./popular contest/PopularCard";
import Advertise from "../advertise/Advertise";
import Thriling from "../advertise/Thriling";
import Feature from "./feature/Feature";
import Bestcontestcreator from "./contestcreator/Bestcontestcreator";



const Home = () => {

    return (
        <div>
            
            <Banner></Banner>
           <PopularContest></PopularContest>
           <Feature></Feature>
           <Thriling></Thriling>
           <Advertise></Advertise>
           <Bestcontestcreator></Bestcontestcreator>
           
        </div>
    );
};

export default Home;