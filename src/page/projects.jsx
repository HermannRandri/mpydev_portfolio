import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

gsap.registerPlugin(ScrollTrigger);
function Project(){
    const [isHover1, setIsHover1] = useState(false)
    const [isHover2, setIsHover2] = useState(false)
    const [isHover3, setIsHover3] = useState(false)
    const [isHover4, setIsHover4] = useState(false)
    const projectScrollRef = useRef(null)
    const projectsData = [
        {id:1, title:"Dynamic Personalized Website", description:"Built with react+vite, Node js+Express Api, tailwind and framer motion for the animation", image:project1,  hovered:isHover1, hoverSetter:setIsHover1, link:"https://www.madagascar-voyage-peche.com/"},
        {id:2, title:"Admin Panel", description:"Built with react+vite, tailwind, Nodejs/Flask/Django Api ", image:project2 , hovered:isHover2, hoverSetter:setIsHover2, link:""},
        {id:3, title:"Modern Web with 3D/2D animation", description:"Built with react+vite, tailwind and Spline/GSAP for animation", image:project3 , hovered:isHover3, hoverSetter:setIsHover3, link:""},
        {id:4, title:"Web app with AI solution (ML,DL,NLP/LLM)", description:"Built with react+vite, tailwind, Flask/Django Api and AI model", image:project4 , hovered:isHover4, hoverSetter:setIsHover4, link:""},
    ]

    useEffect(() => {
        const projectScroll = projectScrollRef.current;
        const scrollWidth =  projectScroll.scrollWidth;
        const parentWidth = projectScroll.parentElement.offsetWidth;
        const scrollDistance =  scrollWidth - parentWidth;
        
        gsap.to(projectScroll,{
           x:-scrollDistance,
           ease:"power2.inOut",
           scrollTrigger: {
             trigger:"#projectScrollParent",
             start:"top 40%",
             end:`+=${scrollDistance}`,
             scrub:1,
             pin:true, 
             pinSpacing:true,
             invalidateOnRefresh: true,
   
           }
        })

        return () => {
            ScrollTrigger.getAll().forEach(element => element.kill());
        }
    }, [])
    
    return(<>
        <div className="relative w-full h-screen" id="projectScrollParent">
            <div className="absolute   top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-[0_0_100px_80px_#28acaca4] md:shadow-[0_0_500px_100px_#28acaca4]"></div>
            <div ref={projectScrollRef} className="relative flex h-full mx-6 space-x-4 whitespace-nowrap" >
                {
                    projectsData.map((data, index) =>{ return(
                        <div key={index} className="min-w-full md:min-w-[35%] h-1/2 brightness-75 bg-cover bg-center bg-no-repeat" onMouseEnter={() => data.hoverSetter(true)} onMouseLeave={() =>data.hoverSetter(false)} style={{ backgroundImage: `url(${data.image})` }}>
                            <div className={`${data.hovered ? "h-0": "h-3/4"}  transition-all duration-200`} >
                                
                            </div>
                            <div className={`w-full  flex flex-col ${data.hovered ? "h-full justify-center": "h-1/4"}  bg-black/80 transition-all duration-200 whitespace-normal px-2`}>
                                <div className={`${data.hovered ? "h-auto  mb-4":"h-full"} flex items-center justify-center`}>
                                    <h1 className="text-white font-display text-xl font-semibold tracking-widest">{data.title}</h1>
                                </div>
                                <div className={`w-full ${data.hovered ? "inline-block":"hidden"}`}>
                                   <p className="text-md text-gray-300 tracking-wide font-thin">{data.description}</p> 
                                </div>
                                <div className={`w-full ${data.hovered ? "inline-block":"hidden"}`}>
                                   <a href={data.link} className="text-sm text-green-500 tracking-wide font-thin">{data.link}</a> 
                                </div>
                            </div>

                        </div>
                )}


                )}
                
             
            </div>
        </div>
    
    </>)

}

export default Project;