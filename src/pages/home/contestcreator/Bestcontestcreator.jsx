import useContest from "../../../hooks/useContest";


const Bestcontestcreator = () => {
    // const{ContestName,Image,Description,ContestPrice,PrizeMoney,TaskSubmissionTextInstruction,Category,Deadline}=item
    const[contest]=useContest()
    return (
        <div className="flex items-center gap-2">
<div>
    <h1 className="text-3xl text-center  font-semibold">Best <span className="text-blue-500">contest</span> creator </h1>
    <p className="ml-6 mt-2"> Award-winning campaign creator driving customer engagement.

</p>
</div>

<div className="flex-1 pl-52 ">
<div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
   










  <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 dark:bg-gray-100 dark:text-gray-800">
				<img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
				<div className="flex-1 my-4">
					<p className="text-xl font-semibold leadi">Leroy Jenkins</p>
					<p>Passionate about the infinite possibilities of artificial intelligence and its impact on the world.</p>
				</div>
				</div>






                <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 dark:bg-gray-100 dark:text-gray-800">
				<img alt="" className="self-center flex-shrink-0 w-24 h-24 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
				<div className="flex-1 my-4">
					<p className="text-xl font-semibold leadi">Leroy Jenkins</p>
					<p>Award-winning expert at creating buzz-worthy sweepstakes and contests to attract customers. Years of experience launching viral campaigns that drive participation for all types of brands.</p>
				</div>
				</div>















    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 

  </div> 
 
  
</div>
        </div>
       
    );
};

export default Bestcontestcreator;