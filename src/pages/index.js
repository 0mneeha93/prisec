import Navbar from "../component/Navbar";
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
     <section className="relative min-h-screen overflow-hidden w-full">
  {/* Background Image */}
  <div className="absolute inset-0 z-0">
    <Image 
      src="/bg_img1.png" 
      alt="Hero" 
      fill 
      priority 
      className="object-cover object-center" 
      sizes="100vw" 
    />
  </div>

  {/* Gradient Fade */}
  <div 
    className="absolute inset-0 z-10 pointer-events-none" 
    style={{ backgroundImage: "linear-gradient(to bottom, transparent 85%, #04101E 100%)" }} 
  />

  {/* Hero Content - Changed h-screen to min-h-screen and added pb-16 for safety spacing */}
  <div className="relative z-20 flex flex-col items-start justify-start text-left w-full min-h-screen px-5 sm:px-6 pt-24 sm:pt-32 md:pt-40 pb-16">
  <div className="max-w-3xl w-full pl-8 sm:pl-10 md:pl-12">
    <h1
      className="font-montserrat text-4xl sm:text-5xl md:text-6xl font-bold drop-shadow-[0_5px_15px_rgba(138,34,34,0.3)] animate-hero-in"
      style={{ color: "#041527" }}
    >
      PRISEC Research
    </h1>
    <div
      className="h-[3px] mt-3 sm:mt-4 w-24 sm:w-32 animate-hero-in-delay"
      style={{ backgroundColor: "#1B3A5C" }}
    />

    <h2
  className="font-montserrat text-xl sm:text-2xl md:text-3xl font-semibold mt-8 sm:mt-10 leading-snug animate-hero-in-delay"
  style={{ color: "#1B3A5C" }}
>
  Data that understands
  <br />
  people and businesses
</h2>

<div
  className="h-[2px] mt-2 mb-4 sm:mb-5 w-16 sm:w-20"
  style={{ backgroundColor: "#3B6FA0" }}
/>

<p
  className="text-sm sm:text-base max-w-md leading-relaxed"
  style={{ color: "#1B3A5C" }}
>
  Collecting and analyzing primary and secondary socio-economic data for
  informed decisions
</p>
    
  </div>
</div>

  <style jsx>{`
    @keyframes heroIn {
      from { opacity: 0; transform: translateY(-16px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-hero-in { animation: heroIn 0.8s ease-out both; }
    .animate-hero-in-delay { animation: heroIn 0.8s ease-out 0.3s both; }
  `}</style>
</section>

      {/* ✅ Gradient Shadow Below Hero Section */}
      <div className="w-full h-5 bg-gradient-to-b from-[#1B3A5C] to-white -mt-1 z-10 relative"></div>

      {/* VISION + VALUES SECTION */}
<section className="py-20 px-4 sm:px-6 bg-white">
  {/* Vision Statement */}
  <div className="text-center mb-16 max-w-3xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-black">Our Core Value</h2>
    <div className="w-auto h-[1px] bg-#02060A mx-auto mt-2"></div>
    <p className="mt-1 text-sm max-w-2xl mx-auto text-gray-600">
      {`To create economic value from neglected resources`}
    </p>
    <div className="border-t border-gray-300 mt-6 mx-auto w-20"></div>
  </div>

  <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-4 sm:gap-6">
  {[
    { src: "/p.png", title: "Positivity" },
    { src: "/e.png", title: "Efficiency" },
    { src: "/eq.png", title: "Equal Opportunities" },
    { src: "/clean.png", title: "Cleaner Habits" },
    { src: "/people.png", title: "Community Development" },
  ].map((item, index) => (
    <div
      key={index}
      className="rounded-xl shadow-lg p-3 sm:p-6 text-center flex flex-col items-center w-[45%] sm:w-[30%] md:w-[18%]"
      style={{ backgroundColor: "#DAECF9E4" }}    >
       <div className="w-12 h-12 sm:w-16 sm:h-16 mb-3 sm:mb-4 relative">
          <Image
            src={item.src}
            alt={item.title}
            fill
            className="object-contain"
            sizes="(max-width: 640px) 48px, (max-width: 768px) 64px, 64px"
          />
        </div>
      <h4 className="text-sm sm:text-lg font-semibold text-black font-montserrat">
        {item.title}
      </h4>
    </div>
  ))}
</div>

</section>



{/* FEATURED PROJECT SECTION */}
<div className="w-full h-3 bg-gradient-to-b from-white to-[#57564F] -mt-1 z-10 relative"></div>

<section
  className="relative min-h-screen flex flex-col justify-center bg-cover bg-center"
>
  <Image
    src="/home2.jpg"
    alt="Background"
    fill
    priority
    className="object-cover object-center"
    sizes="100vw"
  />
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/40 z-0" />

  <div className="relative z-10 max-w-5xl mx-auto w-full px-4 sm:px-6 py-10">
    {/* Section Heading */}
    <div className="text-center mb-6">
      <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
        Projects Completed
      </h2>
      <div className="w-auto h-[1px] bg-black mx-auto mt-2"></div>
      <p className="mt-1 text-xs max-w-2xl mx-auto text-white/80">
        {`A glimpse into our successfully executed initiatives, each designed to convert potential into progress through research-driven solutions.
      `}</p>
    </div>

    {/* Project Card */}
     <div className="relative z-10 max-w-5xl mx-auto px-7">
<div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.4)] flex flex-col md:flex-row overflow-hidden w-full max-w-3xl mx-auto">
      {/* Left Image */}
     <div className="w-full max-w-sm h-[22rem] md:h-[24rem] relative">
  <Image
    src="/home3.jpg"
    alt="Concept"
    fill
    className="object-cover "
    sizes="(max-width: 768px) 100vw, 50vw"
    priority
  />
</div>

      {/* Right Content */}
      <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center text-center md:text-left">
          <h3 className="text-lg font-semibold text-white mb-4">
            Urban Biogas Project Concept
          </h3>
        <p className="text-white text-sm leading-relaxed">
          {`Transforming Lahore’s organic waste into clean energy through a scalable biogas and compost initiative.
          Empowering communities while reducing pollution and improving sustainability.
        `}</p>

        <div className="mt-4 text-center md:text-left">
          <Link
            href="/projects"
            className="inline-block bg-[#0d243d] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#061424] transition mt-4"
          >
            Explore All Projects
          </Link>
        </div>
        </div>
      </div>
    </div>
  </div>

</section>

        <div className="w-full h-4 bg-gradient-to-b from-[#2B1B9] to-white -mt-1 z-10 relative"></div>


{/* concept under devlopment */}
<section className="min-h-screen bg-gray-50 py-8 flex items-center">
  <div className="w-full max-w-6xl mx-auto px-6">

    {/* Section Heading */}
    <div className="text-center mb-8">
      <h2 className="text-3xl md:text-4xl font-bold text-black">
        Concepts Under Development
      </h2>
       <div className="w-auto h-[1px] bg-green-950 mx-auto mt-2"></div>
      <p className="mt-1 text-sm max-w-2xl mx-auto text-gray-600">
        {`At the heart of our work lies a commitment to transforming underutilized resources into engines of growth, sustainability, and community empowerment...
      `}</p>
    </div>

    {/* Card Layout */}
    <div className="relative z-10 max-w-4xl mx-auto px-7">
    <div className="bg-blue-100/30 backdrop-blur-sm rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.4)] flex flex-col md:flex-row-reverse overflow-hidden">

      {/* Right Image */}
      <div className="md:w-1/2 relative h-40 md:h-auto">
          <Image
            src="/cq.png"
            alt="Concept"
            fill
            className="object-cover "
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
                  />
        </div>

      {/* Left Content */}
      <div className="md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-black mb-3">
          Community Biogas Systems
        </h3>
        <p className="text-gray-800 text-sm mb-2">
         {" We are designing scalable biogas solutions for rural and peri-urban communities..."}</p>
        <ul className="list-disc pl-6 text-gray-700 space-y-1 text-sm">
          <li>Bagasse and press mud from sugar mills</li>
          <li>Crop residues (rice husk, wheat straw, etc.)</li>
          <li>Dairy and poultry waste</li>
          <li>Urban organic waste streams</li>
        </ul>
        <p className="text-gray-700 text-sm mt-3 mb-2">
         {` These systems aim to provide clean fuel and support local energy resilience.
        `}</p>
        <div className="mt-4">
                  <Link
          href="/concepts"
          className="inline-block bg-[#0d243d] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#061424] transition mt-4 text-center md:text-left"
        >
          Explore All Projects
        </Link>

        </div>
      </div>
    </div>
    </div>
  </div>
</section>

{/* About us  SECTION */}
<div className="w-full h-3 bg-gradient-to-b from-white to-[#57564F] -mt-1 z-10 relative"></div>

<section id="About" className="relative min-h-screen flex flex-col justify-center">
  <Image
    src="/home2.jpg"
    alt="About section background"
    fill
    priority
    className="object-cover object-center"
  />
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/40 z-0" />

  <div className="relative z-10 max-w-5xl mx-auto w-full px-7 py-10">
    {/* Section Heading */}
    <div className="text-center mb-6">
      <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
        About US
      </h2>
      <div className="w-auto h-[1px] bg-black mx-auto mt-2"></div>
    </div>

   {/* Project Card */}
   <div className="relative z-10 max-w-4xl mx-auto px-7">
<div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.4)] flex items-center justify-center w-full min-h-[300px] p-6">
  <div className="text-center max-w-xl ">
    <p className="text-white text-md leading-relaxed">
      {`We specialize in gathering primary and secondary socio-economic data, analysis of data, development of concepts and 
      making project reports. Team has diverse experience in designing and executing research projects, development of social and commercial concepts, designing products and services and management of large-scale commercial ventures. Team has experience of working in Middle East, USA and Europe. 
      We are ready to serve you in your social and economic research projects.
    `}</p>
    <div className="mt-6">
      <Link
        href="/team"
        className="inline-block bg-[#0d243d] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#061424] transition mt-4 text-center md:text-left"
      >
        Our Team
      </Link>

    </div>
  </div>
</div>

</div>
  </div>
</section>


{/* CONTACT US SECTION */}
<section  id="contact"  className="bg-[#0d243d] w-full py-10 px-6">
  <div className="max-w-7xl mx-auto">
    <div className="text-white text-right">
      <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
       <div className="flex justify-end">
        <div className="w-auto h-[1px] bg-black mt-2"></div>
      </div>
      <p className="text-base">118-B, Street 2, NFC Society, LAHORE</p>
      <p className="text-base">+92-312-4038728</p>
      <p className="text-base">info@prislec.pk</p>
    </div>
  </div>
</section>

    </>
  );
}
export async function getStaticProps() {
  return {
    props: {}, 
    revalidate: 60, // Rebuild the page every 60 seconds
  };
}
