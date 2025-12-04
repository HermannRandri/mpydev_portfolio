import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TeamLine from "../assets/team-line.webp"
import { useEffect, useRef } from "react";
import pdp from "../assets/profile_image_inverted2.webp"
import nopdp from "../assets/no-profile.webp"

gsap.registerPlugin(ScrollTrigger);
function Team(){
    const lineRef = useRef(null)
    const ProfilRef = useRef(null)
    useEffect(() => {
        const Line = lineRef.current;
        const Profile = ProfilRef.current;
        let mm = gsap.matchMedia();
        ScrollTrigger.refresh();
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger:".title-container",
                start:"top 50%",
                end:"bottom 20%",
                scrub:1,
                ease:"power3.inOut",
                stagger:0.5,
            }
        })
        .from(Line,
            {
                opacity:0,
                x:-100,
                width:"0%",
                y:0,
                duration:1.2,
                ease:"power2.inOut",
            })
        .to(Line,
            {
                opacity:0.5,
                x:-50,
                width:"25%",
                y:0,
                duration:1.2,
                ease:"power2.inOut",
            })
        .to(Line,
            {
                opacity:0.8,
                x:0,
                width:"55%",
                y:0,
                duration:1.2,
                ease:"power2.inOut",
            })
        .to(Profile,
            {
                opacity:0.8,
                x:0,
                width:"+=80px",
                y:0,
                duration:1.2,
                ease:"power2.inOut",
            })
        gsap.fromTo(".team-member",
            {
                opacity:0,
                y:-100,
                ease:"power2.inOut",
            },
            {
                opacity:1, 
                y:0, 
                ease:"power2.inOut",
                stagger:0.2,
                scrollTrigger:{
                    trigger: ".team-container",
                    start:"top 50%",
                    end:"bottom 50%",
                    toggleActions:"play none none reverse",
                
                }
               
            }
            )
        
          
        
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    },[])
    return (<>
        <div className="relative w-full  h-auto">
             <div className="absolute   top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-[0_0_100px_80px_#28acaca4] md:shadow-[0_0_500px_150px_#173917] "></div>
             <div className="relative flex flex-col title-container">
                 <h1 className="text-center text-[1.5rem] md:text-[2rem] 2xl:text-[4rem] bg-gradient-to-r from-[#ffffff] to-[#696969a4] text-transparent bg-clip-text  font-display font-extralight tracking-widest">Get to know the minds behind the <strong className="text-[#28acaca4]"> MPY'DEV </strong> universe</h1>
                 <img ref={lineRef}  src={TeamLine} className="w-0 mt-4"/>
             </div>
             <div className="relative w-full flex flex-col items-center">
                <img ref={ProfilRef}  src={pdp} className="w-[35%] md:w-[10%] opacity-70" />
                <h1 className="text-gray-300 font-thin"><em>Randrianirina Hermann</em></h1>
                <h2 className="text-sm text-[#28acaca4] font-thin">Full-stack Developer / Data scientist</h2>
                <h3 className="text-xs text-gray-300 font-thin">Co-Founder of <strong className="text-green-800">mpy'dev</strong></h3>
             </div>
             <div className="relative flex flex-wrap justify-center scpace-y-4 mt-4 mx-2 team-container">
                <div className="w-1/3  flex flex-col items-center team-member">
                    <img  src={nopdp} className="w-full md:w-[30%] opacity-50" />
                    <h1 className="text-gray-300 font-thin"><em>...</em></h1>
                    <h2 className="text-sm text-[#28acaca4] font-thin">Dev AI / Data engineer</h2>
                    <h3 className="text-xs text-gray-300 font-thin">Co-Founder of <strong className="text-green-800">mpy'dev</strong></h3>
                </div>
                <div className="w-1/3  flex flex-col items-center team-member">
                    <img  src={nopdp} className="w-full md:w-[30%] opacity-50" />
                    <h1 className="text-gray-300 font-thin"><em>...</em></h1>
                    <h2 className="text-sm text-[#28acaca4] font-thin">UI/UX Designer</h2>
                    <h3 className="text-xs text-gray-300 font-thin">Co-Founder of <strong className="text-green-800">mpy'dev</strong></h3>
                </div>
                <div className="w-1/3  flex flex-col items-center team-member">
                    <img  src={nopdp} className="w-full md:w-[30%] opacity-50" />
                    <h1 className="text-gray-300 font-thin"><em>....</em></h1>
                    <h2 className="text-sm text-[#28acaca4] font-thin">DevOps</h2>
                    <h3 className="text-xs text-gray-300 font-thin">Co-Founder of <strong className="text-green-800"> mpy'dev</strong></h3>
                </div>
                
                
             </div>
        </div>
   
    </>)
}

export default Team;