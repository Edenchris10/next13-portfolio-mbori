"use client";

import { BsArrowDownRight } from "react-icons/bs"
import Link from "next/link";

const service = [
  {
    num: '01',
    title: 'Web Development',
    description:'As a software developer, I offer a full suite of web development services, including custom web application development, responsive website design, and secure e-commerce solutions. I specialize in front-end development with React.js, back-end development using Node.js, and seamless API integration. Additionally, I provide ongoing maintenance and support to ensure your web applications remain functional and up-to-date.',
    href:'',
  },
  {
    num: '02',
    title: 'UI/UX Design',
    description:'As a UI/UX designer, I offer services that focus on creating user-friendly and visually appealing digital experiences. This includes user research, wireframing, and prototyping, as well as crafting visually consistent interfaces and seamless user journeys. I also provide usability testing, interaction design, and the development of design systems and style guides to ensure a cohesive and intuitive experience across all platforms.',
    href:'',
  },
  {
    num: '03',
    title: 'SEO',
    description:"As an SEO specialist, I provide comprehensive services to improve your website's search engine visibility and ranking. This includes keyword research, on-page and technical SEO, and content strategy development. I also focus on link building, conducting detailed SEO audits, and delivering analytics and reporting to track progress and refine strategies for optimal performance.",
    href:'',
  },
  {
    num: '04',
    title: 'Digital Marketing',
    description:"As a digital marketer, I offer a comprehensive suite of services designed to boost your online presence and drive growth. This includes managing digital advertising campaigns, creating and promoting engaging content, handling social media strategies, and executing effective email marketing. I also focus on SEO to improve search engine rankings, provide detailed analytics and reporting for performance insights, and develop brand strategies to enhance messaging and positioning.",
    href:'',
  },
  
];

import { easeIn, motion } from "framer-motion";

const Services = () =>{
  return( <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 ">

        <div className="container mx-auto">
          <motion.div 
            initial={{opacity: 0}} 
            animate={{
              opacity: 1, 
              transition:{delay:2.4, duration:0.4, ease: "easeIn" },
          }} 
            className="grid grid-cols-1 md:grid-cols-2 gap-[60px] "
          >

            {service.map((service, index)=> {
              return <div key={index} className="flex-1 flex flex-col justify-center gap-6 group" >
                {/* top */}
                <div className="w-full flex justify-between items-center" >
                  <div className="text-5xl font-extrabold text-outline 
                  text-transparent group-hover:text-outline-hover transition all 
                  duration-500 ">{service.num}</div>
                  <Link href={service.href} className="w-[70px] h-[70px] rounded-full
                  bg-white group-hover:bg-accent transition-all duration-500 flex
                  justify-center items-center hover:-rotate-45"
                   >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white 
                group-hover:text-accent transition-all duration-500" >{service.title}</h2>
                {/* description */}
                 <p className="text-white/60" >{service.description}</p>
                 {/* border */} 
                  <div className="border-b border-white/20 w-full "></div>

              </div>
            })}

          </motion.div>
        </div>
     </section>
     );
  };

export default Services; 