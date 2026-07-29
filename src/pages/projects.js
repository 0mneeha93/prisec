// pages/projects.js
import Navbar from "../component/Navbar";
import Footer from "@/component/Footer";
import Image from "next/image";
export default function ProjectsPage() {
  return (
    <>
      <Navbar />
     
       <section className="relative min-h-screen px-4 py-16">
        {/* Background Image */}
        <Image
          src="/home2.jpg"
          alt="Background"
          fill
          priority
          className="object-cover object-center"
        />
      
   
  
  {/* Heading */}
   

        {/* Heading */}
        <div className="relative text-center mb-10 z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Projects Completed
          </h2>
          <div className="w-auto h-[1px] bg-black mx-auto mt-2"></div>
          <p className="mt-2 text-sm max-w-xl mx-auto text-white/80">
            {" A glimpse into our successfully executed initiatives, each designed to convert potential into progress through research-driven solutions."}
          </p>
        </div>

  {/* Cards Grid */}
  {/*card1*/}
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto px-2 sm:px-0">

    {/* CARD TEMPLATE — DUPLICATE THIS FOR MORE CARDS */}
     <div className="rounded-xl overflow-hidden bg-white/40 backdrop-blur-md shadow-[0_10px_25px_rgba(0,0,0,0.4)] flex flex-col justify-start w-full">
         <div className="h-48 w-full relative">
        <Image
          src="/P1.png"
          alt="Example"
          fill
          sizes="(max-width: 768px) 100vw, 50vw" 
          className="object-cover"
        />
      </div>
      <div className="p-4 text-black flex-1 flex flex-col justify-center">
        <h3 className="text-lg font-bold mb-2">National Property Dealer Directory</h3>
        <div className="w-70 h-[1px] bg-gray-300 mb-4"></div>
        <p className="text-md leading-snug">
          {"Preparation of Directory of property dealers in Pakistan."}  
        </p>
      </div>
    </div>
    
    {/*card2*/}
<div className="rounded-xl overflow-hidden bg-white/40 backdrop-blur-md shadow-[0_10px_25px_rgba(0,0,0,0.4)] flex flex-col justify-start w-full">
         <div className="h-48 w-full relative">
  <Image
    src="/p2d.png"
    alt="Example"
    fill
    sizes="(max-width: 768px) 100vw, 50vw" 
    className="object-cover"
  />
</div>
      <div className="p-4 text-black flex-1 flex flex-col justify-center">
        <h3 className="text-lg font-bold mb-2">Comprehensive Societies Database</h3>
        <div className="w-70 h-[1px] bg-gray-300 mb-4"></div>
        <p className="text-md leading-snug">
           {"Preparation of country database of housing, Industrial and commercial societies in Pakistan "}
        </p>
      </div>
    </div>
    
    {/*card3*/}
<div className="rounded-xl overflow-hidden bg-white/40 backdrop-blur-md shadow-[0_10px_25px_rgba(0,0,0,0.4)] flex flex-col justify-start w-full">
            <div className="h-48 w-full relative">
            <Image
              src="/p3.png"
              alt="Example"
              fill
              sizes="(max-width: 768px) 100vw, 50vw" 
              className="object-cover"
            />
          </div>
      <div className="p-4 text-black flex-1 flex flex-col justify-center">
        <h3 className="text-lg font-bold mb-2">Sanitary Product Price Survey</h3>
        <div className="w-70 h-[1px] bg-gray-300 mb-4"></div>
        <p className="text-md leading-snug">
          {"Survey of LPG users and their potential shift to Compressed Biogas (CBG) in and around Lahore."}
        </p>
      </div>
    </div>
    
    {/*card4*/}
<div className="rounded-xl overflow-hidden bg-white/40 backdrop-blur-md shadow-[0_10px_25px_rgba(0,0,0,0.4)] flex flex-col justify-start w-full">
             <div className="h-48 w-full relative">
            <Image
              src="/p4d.png"
              alt="Example"
              fill
              sizes="(max-width: 768px) 100vw, 50vw" 
              className="object-cover"
            />
          </div>
      <div className="p-4 text-black flex-1 flex flex-col justify-center">
        <h3 className="text-lg font-bold mb-1">Modern Dairy and Biogas Feasibility Survey</h3>
        <div className="w-70 h-[1px] bg-gray-300 mb-2"></div>
        <p className="text-md leading-snug">
           {" Survey of modern dairy farms in and around Lahore, survey of large herds and concentrations of buffaloes and cows in and around Lahore for assessing availability of dung for a large biogas plant.  "}</p>
      </div>
    </div>

    {/*card5*/}
<div className="rounded-xl overflow-hidden bg-white/40 backdrop-blur-md shadow-[0_10px_25px_rgba(0,0,0,0.4)] flex flex-col justify-start w-full">
           <div className="h-48 w-full relative">
            <Image
              src="/p5.png"
              alt="Example"
              fill
              sizes="(max-width: 768px) 100vw, 50vw" 
              className="object-cover"
            />
          </div>
      <div className="p-4 text-black flex-1 flex flex-col justify-center">
        <h3 className="text-lg font-bold mb-5">LPG to CBG Conversion Potential                              
        </h3>
        <div className="w-70 h-[1.4px] bg-gray-300 mb-2"></div>
        <p className="text-md leading-snug">
         {" Survey of potential users of cylindered LPG in and around Lahore and possibility of their shifting to CBG (Compressed Bio Gas)."}
        </p>
      </div>
    </div>

    {/*card6*/}
<div className="rounded-xl overflow-hidden bg-white/40 backdrop-blur-md shadow-[0_10px_25px_rgba(0,0,0,0.4)] flex flex-col justify-start w-full">
       <div className="h-48 w-full relative">
            <Image
              src="/p6d.png"
              alt="Example"
              fill
              sizes="(max-width: 768px) 100vw, 50vw" 
              className="object-cover"
            />
          </div>
      <div className="p-4 text-black flex-1 flex flex-col justify-center">
        <h3 className="text-lg font-bold mb-2"> Village-Level Biogas Feasibility Survey</h3>
        <div className="w-70 h-[1.4px] bg-gray-300 mb-4"></div>
        <p className="text-md leading-snug">
         {" Survey of 30 villages and towns around Sundar Industrial Estate for biogas plant at a chemicals plant."}
        </p>
      </div>
    </div>

    {/*card7*/}
<div className="rounded-xl overflow-hidden bg-white/40 backdrop-blur-md shadow-[0_10px_25px_rgba(0,0,0,0.4)] flex flex-col justify-start w-full">
       <div className="h-48 w-full relative">
            <Image
              src="/p7.png"
              alt="Example"
              fill
              sizes="(max-width: 768px) 100vw, 50vw" 
              className="object-cover"
            />
          </div>
      <div className="p-4 text-black flex-1 flex flex-col justify-center">
        <h3 className="text-lg font-bold mb-2"> Urban Waste Biogas Concept Paper (Lahore)</h3>
        <div className="w-70 h-[1px] bg-gray-300 mb-4"></div>
        <p className="text-md leading-snug">
        {"  Concept Paper for large biogas/compost fertilizer plant based on Lahore Urban Waste"}
        </p>
      </div>
    </div>

    {/*card8*/}
<div className="rounded-xl overflow-hidden bg-white/40 backdrop-blur-md shadow-[0_10px_25px_rgba(0,0,0,0.4)] flex flex-col justify-start w-full">
       <div className="h-48 w-full relative">
            <Image
              src="/p8.png"
              alt="Example"
              fill
              sizes="(max-width: 768px) 100vw, 50vw" 
              className="object-cover"
            />
          </div>
     <div className="p-4 text-black flex-1 flex flex-col justify-center">
        <h3 className="text-lg font-bold mb-2">Duplicate Entry: Urban Waste Biogas Concept</h3>
         <div className="w-70 h-[1px] bg-gray-300 mb-4"></div>
        <p className="text-md leading-snug ">
         {" Concept Paper for large biogas/compost fertilizer plant based on Lahore Urban Waste"}
        </p>
      </div>
    </div>

  </div>
  
</section>
 <Footer />

   </>
  );
}
export async function getStaticProps() {
  return {
    props: {}, 
    revalidate: 60, // Rebuild the page every 60 seconds
  };
}
