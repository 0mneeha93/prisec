import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";
import Image from "next/image";
export default function TeamPage() {
  const teamMembers = [
    {
      name: "Shafqat Pervaiz",
      img: "/sp.png",
      title: "Research & Management Specialist",
      about: ` He is an Ex- Banker and Leasing Executive reaching EVP position at the top of his career. He worked in leasing and investment banking sectors in Pakistan and Oman. An MBA from Quid-e-Azam University Islamabad he has a vast experience of Financial Product Development, Credit Manuals, Bank Restructuring Plans, Corporate Banking, Human Resource Management, Financial Consultancy, Market Research and feasibility studies. He is engaged in Financial Consultancy for the last 14 years. 

       Research work includes preparing country reports for Citric Acid, Auto Parts, Industrial Coatings, Super Absorbent Polymer and replacement of imported organic chemicals. He has prepared feasibility studies for several industrial units and service-related companies in Pakistan, Germany, Uganda and Saudi Arabia. Presently working on assessment of green energy potential in various parts of Pakistan.`,
    },
    {
      name: "Jawwad Ahmed Gill",
      img: "/JA.png",
      title: "Consultant, Biogas & Industrial Projects",
      about: `With an MSc in Industrial Chemistry and an MBA in Marketing, Jawwad Gill has over two decades of experience in R&D, herbal pharmaceuticals, and quality management. He has spearheaded over 25 major biogas projects across Pakistan, many funded by Nestlé, USAID, and the Government of Punjab. His expertise spans design, implementation, and optimization of biogas systems ranging from 50 to 1,500 cubic meters, supporting sustainable energy solutions for dairy and agricultural sectors. A trained quality systems professional, he has also delivered workshops on GMP, HACCP, and 5S. Jawwad’s blend of field engineering, chemistry, and development experience makes him invaluable in renewable energy and aggrotech initiatives. `,
    },
    {
      name: "Tahir Mushtaq Mir",
      img: "/TM.png",
      title: "Operations and Compliance Expert",
      about: `Skilled banker with 34 years of experience in general banking, foreign trade, lending, compliance, and administration. Last served as Group Head at Allied Bank Limited, overseeing AML/CFT compliance and branch operations. Managed 330 branches as Group Head Operations. Previously held leadership roles at MCB Bank and The Bank of Punjab, managing large portfolios and regional operations. Holds an MBA in Finance from IBA, University of the Punjab, and a DAIBP from the Institute of Bankers in Pakistan. Recognized for problem-solving, strategic planning, and team leadership. Attended international conferences in Malaysia, Thailand, and Dubai`,
    },
    {
      name: "Dr. Ahmad Qammar",
      img: "/AQ.png",
      title: "Human Resources Management",
      about: `Dr. Ahmad Qammar is a PhD from the University of Sheffield, UK, with 22+ years of academic, consultancy, and industry experience. His expertise includes HR analytics, organizational behaviour, and socio-economic policy design. He has trained professionals from the Ministry of Finance and international firms, and led academic programs and research initiatives. He is IBM-certified data analytics professional with 30+ publications, he has co-led major HEC-funded projects, including research on the socio-economic impact of CPEC. Dr. Qammar blends data-driven strategy with human capital insights for institutional and policy transformation.`,
    },
  ];

  return (
    <>
      <Navbar />
      

    <section className="relative min-h-screen px-4 py-16">
  {/* Background Image */}
  <Image
    src="/bg.png"
    alt="Background"
    fill
    className="object-cover"
    priority
  />

  
  {/* Content */}
  <div className="relative w-full max-w-7xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-5xl font-bold text-black">Our Team</h2>
      <div className="w-auto h-[1px] bg-black mx-auto mt-2"></div>
      <p className="mt-2 text-sm max-w-2xl mx-auto text-gray-600">
        At Prisec, our strength lies in a diverse team of experts committed to excellence in research, development, and innovation.
      </p>
    </div>
      

          {/* Team Members */}
          <div className="space-y-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-sky-100/50 backdrop-blur-sm rounded-xl shadow-[0_10px_25px_rgba(0,0,0,0.4)] flex flex-col sm:flex-row items-center p-4"
              >
                {/* Profile Image */}
                <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4 bg-white p-2 rounded-xl shadow">
                  <Image
                    src={member.img}
                    alt={member.name}
                    width={128} // 32 * 4 for sm:w-32
                    height={128} // 32 * 4 for sm:h-32
                    className="w-24 h-24 sm:w-32 sm:h-32 object-contain rounded-lg border-2 border-white shadow-sm"
                  />
                </div>

                {/* Text Content */}
                <div className="text-center sm:text-left">
                  <h3 className="text-base font-semibold text-black">{member.name}</h3>
                  <p className="text-sm text-blue-950 mt-1">{member.title}</p>
                  <p className="text-sm text-gray-800 mt-2 whitespace-pre-line">{member.about}</p>
                </div>
              </div>
            ))}
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
