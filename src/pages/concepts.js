// pages/projects.js
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";
export default function ProjectsPage() {
  return (
     <>
          <Navbar />
          
           {/* Background Image 
        <Image
          src="/plant.jpg"
          alt="Background"
          fill
          priority
          className="object-cover"
        /> */}
           <section className="relative min-h-screen px-4 py-16 bg-white">
        {/* Overlay content */}
        <div className="relative text-center mb-10 z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            CONCEPTS UNDER DEVELOPMENT
          </h2>
          <div className="w-auto h-[1px] bg-black mx-auto mt-2"></div>
          <p className="mt-2 text-sm max-w-xl mx-auto text-black/80">
            Empowering change by transforming overlooked resources into
            sustainable opportunities. Our projects embody innovation,
            inclusivity, and impact addressing gaps where conventional solutions
            have fallen short.
          </p>
        </div>

  {/* Cards List */}
  <div className="relative z-10 flex flex-col gap-6">
    {/* Card 1 */}
    <div className="flex flex-col w-full border-l-4 pl-2" style={{ borderColor: "#3B6FA0" }}>
      <div className="p-4 text-black flex-1 flex flex-col justify-center">
        <h3 className="text-xl sm:text-2xl font-bold mb-5 ">
          Community Biogas Systems
        </h3>
        <div className="w-70 h-[1px] bg-black mb-5"></div>
        <p className="text-sm sm:text-md leading-snug overflow-auto">
         
 We are designing scalable biogas solutions for rural and peri-urban communities by tapping into agricultural and organic waste sources:
            <br /><br />
            1. Bagasse and press mud from sugar mills  
            <br />
            2. Crop residues (rice husk, wheat straw, maize cobs, sorghum Napier, etc.)  
            <br />
            3. Dairy and poultry waste  
            <br />
            4. Urban organic waste streams  
            <br /><br />
            These systems aim to provide clean fuel, reduce environmental hazards, and support local energy resilience.
        </p>



      </div>
    </div>

    {/* Card 2 */}
    <div className="flex flex-col w-full border-l-4 pl-2" style={{ borderColor: "#3B6FA0" }}>
      <div className="p-4 text-black flex-1 flex flex-col justify-center">
        <h3 className="text-xl sm:text-2xl font-bold mb-2">
          Atmospheric Water Harvesting
        </h3>
        <div className="w-70 h-[1px] bg-black mb-5"></div>
        <p className="text-sm sm:text-md leading-snug overflow-auto">
          
 We are exploring breakthrough technologies to generate clean water where it&apos;s needed most: 
      <br /><br />
      1. Hydrophilic-coated surfaces optimized for high dew point conditions  
      <br />
      2. Ammonia-based, solar-powered compressors using locally sourced materials  
      <br />
      3. Floating greenhouses that condense water while growing crops on brackish or idle water bodies  
      <br />
      4. Urban organic waste streams  
      <br /><br />
      This project targets both water scarcity and food insecurity in coastal and arid zones.
    </p>
      </div>
    </div>

    {/* Card 3 */}
    <div className="flex flex-col w-full border-l-4 pl-2" style={{ borderColor: "#3B6FA0" }}>
      <div className="p-4 text-black flex-1 flex flex-col justify-center">
        <h3 className="text-xl sm:text-2xl font-bold mb-2">
          Cooperative Supply Networks
        </h3>
        <div className="w-70 h-[1px] bg-black mb-5"></div>
        <p className="text-sm sm:text-md leading-snug overflow-auto">
          We are building models for small community-based supply chains that enhance local food security and economic self-sufficiency:
      <br /><br />
      1. Milk pooling and micro-pasteurization centres  
      <br />
      2. Fresh vegetable cultivation and aggregation   
      <br />
      3. Small plants for potato powder, potato flakes and potato starch 
      <br />
      4. Production of Khoya (condensed milk) by using RO  
      <br />
      5. Small plants for cheese manufacturing for far flung areas
      <br />
      6. Free-range poultry farming with decentralized hatchery support  
      <br />
      7. Multigrain atta production and distribution   
      <br />
      8. Cold-pressed oil from olive, mustard, and sunflower   
      <br /><br />
      These cooperative models are built on trust, transparency, and shared value.
    </p>
      </div>
    </div>

    {/* Card 4 */}
    <div className="flex flex-col w-full border-l-4 pl-2" style={{ borderColor: "#3B6FA0" }}>
      <div className="p-4 text-black flex-1 flex flex-col justify-center">
        <h3 className="text-xl sm:text-2xl font-bold mb-2">
          Circular Economy Initiatives
        </h3>
        <div className="w-70 h-[1px] bg-black mb-5"></div>
        <p className="text-sm sm:text-md leading-snug overflow-auto">
         {" To reduce waste and regenerate ecosystems, we are developing localized circular economy projects, including:"}
            <br /><br />
            {"1. Composting hubs for turning food and agricultural waste into bio-fertilizer "}
            <br />
            {"2. Greywater recycling systems for small-scale irrigation "}
            <br />
            {"3. Low-cost pyrolysis units for converting plastic waste into usable fuel  "}
            <br />
            {"4. Urban organic waste streams  "}
            <br /><br />
          {" These interventions focus on resource efficiency and pollution reduction."}
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