import { useEffect, useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Nav from "./navbar";
import Skill from "./skills"
import Projects from "./projects"
import Contact from './contact';
import Team from './team';
import pdp from "../assets/profile_image_inverted2.webp"


gsap.registerPlugin(ScrollTrigger)
function Home(){
 const [drop, setDrop ] = useState(false)
 const [Pageloading, setPageLoading] = useState(true)

 const displayDrop = ()  =>{
    setDrop(!drop)
 }
 
 useEffect(() => {
    const id = setTimeout(() => setPageLoading(false), 8000);
    
    return () => clearTimeout(id);
        
 }, [])

    
    return (<>
       {Pageloading &&
        <div className='fixed z-50 w-full h-screen bg-black '>       
            <div className='relative w-full h-full flex flex-col items-center justify-center gap-4 '>
               <div className=' w-80 shadow-[0_0_200px_30px_#44910B]'></div> 
               <div className=""> <img src="dark_green_logo.png" className='w-80 pointer-events-none' /></div>
               <div className="font-mono font-semibold text-xl md:text-4xl tracking-widest text-gray-500 mx-4">Welcome visitor</div>
               <div className='text-gray-400 text-xs'>Data is Loading ...</div>
               <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24 24"><path fill="none" stroke="#37d612" strokeLinecap="round" strokeWidth={2} d="M12 6.99998C9.1747 6.99987 6.99997 9.24998 7 12C7.00003 14.55 9.02119 17 12 17C14.7712 17 17 14.75 17 12"><animateTransform attributeName="transform" attributeType="XML" dur="560ms" from="0,12,12" repeatCount="indefinite" to="360,12,12" type="rotate"></animateTransform></path></svg>
            </div>
        </div>
       }
    
        <main className={`w-full  ${Pageloading ? 'h-screen overflow-y-hidden':'min-h-screen overflow-x-hidden overflow-y-auto'}`}>
                <div className=" w-full min-h-screen" >  
                        <div className='w-full shadow-[0_120px_100px_30px_#28acaca4] md:shadow-[0_120px_400px_30px_#28acaca4]'></div>  
                        <div className="relative h-auto" id='home'>
                            <a href='#home' className='fixed z-40 right-6 md:right-10 top-[50%] text-white  rounded-full px-2 py-4 bg-black/80 shadow-md shadow-green-900 flex flex-col items-center justify-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 15 15"><path fill="#989898" d="m3.5.5l.354-.354a.5.5 0 0 0-.708 0zM3.146.146l-3 3l.708.708l3-3zm0 .708l3 3l.708-.708l-3-3zM3 .5V15h1V.5zM9 4h6V3H9zm0 4h4V7H9zm0 4h2v-1H9z"></path></svg>
                            </a>
                            <Nav />
                            <div className="absolute -z-10 top-14 w-[80%] h-0 transform rotate-45 shadow-[0_0_5rem_20px_#70E747] md:shadow-[0_0_900px_40px_#70E747]"></div>
                            <div  className="relative w-full h-auto  md:h-full grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-[50%_50%] pt-20 ">
                                <div className="relative w-full flex justify-center items-center">
                                    <div className="relative  w-full h-full flex flex-col items-center top-14  font-mono ">
                                        <div className='relative flex flex-col items-center  gap-4 font-thin tracking-widest'>                                       
                                            <h1 className='text-2xl md:text-3xl 2xl:text-4xl  text-gray-400 animated-text'>Code without Limits </h1>
                                            <h1 className='text-2xl md:text-3xl 2xl:text-4xl  text-gray-400 animated-text'>Progress without End </h1>
                                            <h1 className='text-center text-md md:text-lg mx-4 2xl:text-xl text-[#28acaca4] tracking-widest'>Into the Endless Universe of Coding</h1>
                                        </div>
                                    </div>
                                    <div className='absolute w-full h-[70%] md:h-[80%]'>
                                        <Spline
                                            className=''
                                            scene="https://prod.spline.design/h55qrWGPz1wD47Nj/scene.splinecode"       
                                        />
                                    </div>
                                </div>
                                <div  className="relative w-full h-auto p-4 md:p-6">
                                    <div className='relative w-full flex flex-col h-auto   rounded-md p-2 md:p-4'>
                                        <div className='relative flex justify-center'>
                                            <img className="w-32 md:w-48 brightness-60  contrast-125 opacity-70 pointer-events-none " src={pdp}/>
                                            <button className={`absolute bottom-4 py-2 px-4 text-sm font-light  bg-black text-white shadow-[0_0_10px_0_#373B43] ${drop ? "rounded-lg":"rounded-full"}`} onClick={displayDrop}>
                                                <div className='flex gap-2 items-center'>
                                                    Download my resume / CV
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 32 32"><path fill="none" stroke="#24c52e" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 22c-9 1-8-10 0-9C6 2 23 2 22 10c10-3 10 13 1 12m-12 4l5 4l5-4m-5-10v14"></path></svg>
                                                </div>
                                                        
                                                {
                                                drop && 
                                                    <div className='flex gap-6 text-[#28acaca4] py-2 transform transition-all duration-200'>
                                                        <a download  className=" hover:underline" href="/Hermann-Randrianirina-Resume.pdf">
                                                            En
                                                        </a>
                                                        <a download  className=" hover:underline" href="/CV-Hermann-Randrianirina.pdf">
                                                            Fr
                                                        </a>
                                                    </div>
                                                }
                                                
                                            </button>
                                        </div>
                                        <div className='relative flex'>
                                            <div className='w-1 h-auto bg-gray-400 transform -rotate-180 mr-4'></div>
                                            <div className='flex flex-col '>
                                                <h1 className='flex text-lg md:text-xl font-semibold text-[#28acaca4] font-mono'>FULL-STACK DEVELOPER / APPRENTICE DATA SCIENTIST</h1>
                                                <h1 className='text-gray-400 text-sm font-extralight font-display'>Dear Visitor ,</h1>
                                                <p className=' mt-2 text-gray-400 text-sm font-extralight font-display'>
                                                    I architect the bridge between technology and human experience. As a passionate full-stack developer, I engineer the invisible foundations (Backend with Python, Django, Flask, Node.js) and craft the intuitive interactions (Frontend with React, Tailwind CSS). My goal is to transform code into robust and elegant applications.
                                                    This pursuit of technical excellence is powered by my dual expertise in cognitive science and data science. By delving into AI and cognitive models, I gain a unique understanding of the user. The result? Digital solutions that are not just functional, but intelligent and deeply human-centered.
                                                </p>
                                                <div className='my-4 flex gap-2 md:gap-4'>
                                                    <a href='https://www.linkedin.com/in/hermann-randrianirina-4a42b2232' className='flex items-center gap-2 text-gray-400 font-extralight tracking-widest text-xs hover:underline'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 128 128"><path fill="#0076b2" d="M116 3H12a8.91 8.91 0 0 0-9 8.8v104.42a8.91 8.91 0 0 0 9 8.78h104a8.93 8.93 0 0 0 9-8.81V11.77A8.93 8.93 0 0 0 116 3"></path><path fill="#fff" d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 1 1-10.5 10.49a10.5 10.5 0 0 1 10.5-10.49m20.41 29h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"></path></svg>
                                                        Hermann Randrianirina
                                                    </a>
                                                    <span className='flex items-center gap-2 text-gray-400 font-extralight tracking-widest text-xs'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24 24"><path fill="#37d612" fillRule="evenodd" d="M12 1.25c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75c-1.86 0-3.61-.473-5.137-1.305l-4.74.795a.75.75 0 0 1-.865-.852l.8-5.29A10.7 10.7 0 0 1 1.25 12C1.25 6.063 6.063 1.25 12 1.25M7.943 6.7c-.735 0-1.344.62-1.23 1.386c.216 1.436.854 4.082 2.752 5.994c1.984 1.999 4.823 2.854 6.36 3.191c.796.175 1.475-.455 1.475-1.232v-1.824a.3.3 0 0 0-.192-.28l-1.96-.753a.3.3 0 0 0-.166-.014l-1.977.386c-1.275-.66-2.047-1.4-2.51-2.515l.372-2.015a.3.3 0 0 0-.014-.16l-.735-1.969a.3.3 0 0 0-.28-.195z" clipRule="evenodd"></path></svg>
                                                        +261 38 41 651 12
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>          
                                </div>
                            </div>
                            
                        </div>
                    
                </div>
                <section id="skill-section" className='relative  w-full min-h-screen mb-10' >
                    <Skill></Skill>
                </section>
                <section id="projects-section" className='relative  w-full min-h-screen overflow-hidden'>
                    <Projects></Projects>
                </section>
                <section id="team-section" className='relative  w-full min-h-screen'>
                    <Team></Team>
                </section>
                <section id="contact-section" className='relative  w-full min-h-screen'>
                     <Contact></Contact>
                </section>
        </main>
        

    
    </>)



}
export default Home;