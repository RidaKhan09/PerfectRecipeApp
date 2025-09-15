import React from 'react'
import WhoWeAre from "./WhoWeAre";
import WhatWeDo from "./WhatWeDo";
import OurCoreValues from "./OurCoreValues";
import ContactCTA from "./ContactCTA";

const AboutusPageComponent = () => {
  return (
   <>
   <section className="max-w-6xl mx-auto px-4 py-16 text-gray-800">
  <div className="max-w-5xl mx-auto ">
    <h1 className=" text-3xl font-bold text-gray-900 mb-2">About Us</h1>
  </div>

  <WhoWeAre />
  <WhatWeDo />
  <OurCoreValues />
  <ContactCTA />
</section>

   </>
  )
}

export default AboutusPageComponent




















// import React from "react";
// import team from "../../../assets/team.jpg"; 
// // Add your team image in assets
// import { brandColor } from "../../../data";

// const AboutUs = () => {
//   return (
    
//     <section className="max-w-6xl mx-auto px-4 py-16 text-gray-800">
//        <div className="max-w-5xl mx-auto pt-24">
//                 {/* Breadcrumb */}
//                 <nav className="text-sm text-gray-500 mb-1">
//                 Home &gt; <span style={{ color: brandColor }}>About Us</span> 
//               </nav>
      
//               {/* Title */}
//               <h1 className="pt-12 text-3xl font-bold text-gray-900 mb-2">About Us</h1> </div>

//       {/* Who We Are */}
//       <div className="pt-12 grid md:grid-cols-2 gap-10 items-center mb-16">
//         <img src={team} alt="Our Team" className="w-full rounded-lg shadow-lg" />
//         <div>
//           <h2 className="text-2xl font-semibold mb-4 text-[#C46C5F]">Who We Are</h2>
//           <p className="text-gray-700 mb-4">
//             We're a team of foodies, designers, and developers who believe that food should not only taste good — it should be easy to make and fun to explore.
//           </p>
//           <p className="text-gray-700">
//             Our mission is to build a platform where every recipe is a journey, not just a list of steps.
//           </p>
//         </div>
//       </div>

//       {/* What We Do */}
//       <div className="bg-[#FFF0EE] p-10 rounded-xl shadow-inner text-center mb-16">
//         <h2 className="text-2xl font-semibold mb-3 text-[#C46C5F]">What We Do</h2>
//         <p className="text-gray-700 max-w-3xl mx-auto">
//           From curated trending recipes to personalized suggestions and ingredient tracking — our platform helps you plan better, cook smarter, and eat happier.
//         </p>
//       </div>

//       {/* Our Values */}
//       <div className="mb-16">
//         <h2 className="text-2xl font-semibold mb-6 text-[#C46C5F] text-center">Our Core Values</h2>
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {[
//             { title: "Passion for Food", desc: "We love food and everything around it — cooking, sharing, celebrating." },
//             { title: "Simplicity First", desc: "From UI to ingredients — we believe in keeping things clean and effortless." },
//             { title: "Community Driven", desc: "Our users shape the platform with reviews, ratings, and love." },
//           ].map((val, i) => (
//             <div key={i} className="bg-white shadow p-6 rounded-lg">
//               <h3 className="text-lg font-semibold mb-2 text-[#C46C5F]">{val.title}</h3>
//               <p className="text-gray-600 text-sm">{val.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Contact CTA */}
//       <div className="text-center mt-20">
//         <h2 className="text-2xl font-semibold mb-4 text-[#C46C5F]">Have a question or suggestion?</h2>
//         <p className="text-gray-600 mb-6">We’d love to hear from you!</p>
//         <a
//           href="/contact"
//           className="inline-block bg-[#C46C5F] text-white px-6 py-2 rounded-full hover:bg-[#a94a45] transition"
//         >
//           Contact Us
//         </a>
//       </div>
//     </section>
//   );
// };

// export default AboutUs;
