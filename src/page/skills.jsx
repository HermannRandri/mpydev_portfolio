import { useState, useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';
import Circuit from '../assets/circuit.webp';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
function skill(){
    const title = useRef();
    
    const Skilldata =[
        {id: 1, name:"React js", content:"''We use React to build fast, interactive, and scalable front-end interfaces, ensuring smooth performance and an exceptional user experience.''", image: ""},
        {id: 2,name:"Python", content: "''We use Python for robust and efficient application logic, enabling scalable back-end services and seamless system integration.''", image: ""},
        {id: 3,name:"Django", content: "''We rely on Django to develop secure, maintainable, and high-performance web back-ends with a clean and modular architecture.''", image: ""},
        {id: 4,name:"Flask", content: "''We use Flask to create lightweight and flexible APIs, ideal for custom back-end solutions and microservices.''", image: ""},  
        {id: 5,name:"Vite", content: "''We use Vite as a lightning-fast build tool and development environment, providing instant feedback and optimized production builds.''", image: ""},
        {id: 6,name:"TailwindCSS", content: "''We use Tailwind CSS to design modern, responsive, and highly customizable user interfaces with clean and consistent styling.''", image: ""},
        {id: 7,name:"MySQL", content: "''We use MySQL to manage structured data with reliability, strong consistency, and efficient performance for large-scale applications.''", image: ""},
        {id: 8,name:"PostgreSQL", content: "''We rely on PostgreSQL for advanced data management, strong reliability, and powerful SQL capabilities.''", image: ""},     
        {id: 9,name:"ML", content: "''We use Machine Learning techniques to build intelligent systems that learn from data and enhance automation and decision-making.''", image: ""},
        {id: 10,name:"DL", content: "''We apply Deep Learning models to solve complex tasks such as image recognition, natural language processing, and predictive analytics.''", image: ""},
        {id: 11, name:"LLM", content: "''We integrate Large Language Models to create smart, conversational, and context-aware applications powered by cutting-edge AI.''", image: ""},
    ];

  
    useEffect(() => {
        const titleRef = title.current;
        const titleWidth = titleRef.scrollWidth;
        const containerWidth = titleRef.parentElement.offsetWidth;
        const scrollDistance = titleWidth - containerWidth;
        ScrollTrigger.refresh();
        gsap.utils.toArray(".skills-item").forEach((skill) => {
            gsap.fromTo(skill, 
                {
                    y:50,
                    opacity:0
                },
                {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "none",
                scrollTrigger: {
                    trigger: skill,
                    start:"top 50%", 
                    end: "bottom 20%",
                    toggleActions: "play none none reverse",
            
                }
            });
        });  
        
        gsap.to(titleRef, {
            x: -scrollDistance,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: ".title-section",
                start: "top bottom", 
                end:"+=100%", 
                scrub: 1,
                id: "title-scroll",
                invalidateOnRefresh: true,
             
            }
        });
        gsap.to(".spin-object", {
            rotate: 360,
            ease: "none",
            scrollTrigger: {
                trigger: ".title-section",
                start: "top bottom",
                end: "+=100%",
                scrub: 1,
             
                
            }
        });
        gsap.to("#moving-planet", {
            x: -scrollDistance,
            ease: "power3.inOut",
            scrollTrigger: {
                trigger: ".title-section",
                start: "top bottom",
                end:"+=100%",
                scrub: 1,
             
                
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);
  
    return(<>
        <div className="relative w-full h-auto overflow-hidden bg-black/50 ">
                <div  className='relative w-auto h-auto my-[10%] title-section'>
                    <svg  className='absolute top-0 left-[20%] spin-object'xmlns="http://www.w3.org/2000/svg" width="4rem" height="4rem" viewBox="0 0 14 14"><g fill="none"><path fill="#797b81" d="M5 7a2 2 0 1 0 4 0a2 2 0 1 0-4 0"></path><path stroke="#1b1d52" strokeLinecap="round" strokeLinejoin="round" d="M5 7a2 2 0 1 0 4 0a2 2 0 1 0-4 0" strokeWidth={1}></path><path stroke="#1b1d52" strokeLinecap="round" strokeLinejoin="round" d="M7.013 9c3 0 5.713-2 5.713-5.083M7.013 5c-3 0-5.739 2-5.739 5.083" strokeWidth={1}></path><path stroke="#1b1d52" strokeLinecap="round" strokeLinejoin="round" d="M8.739 7.989C10.239 5.39 9.863 2.042 7.193.5M5.274 5.989c-1.5 2.598-1.137 5.97 1.533 7.511" strokeWidth={1}></path><path stroke="#1b1d52" strokeLinecap="round" strokeLinejoin="round" d="M8.725 5.989C7.225 3.39 4.137 2.04 1.467 3.583m3.794 4.406c1.5 2.598 4.602 3.97 7.272 2.428" strokeWidth={1}></path></g></svg>
                    <svg  className='absolute top-0 left-[80%] spin-object'xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" viewBox="0 0 32 32"><path fill="#00bfa5" d="m27.777 22.617l-.459-.946L18.43 3.26a2.25 2.25 0 0 0-1.914-1.256A2 2 0 0 0 16.379 2a2.23 2.23 0 0 0-1.891 1.042L4.348 19.056a2.2 2.2 0 0 0 .025 2.417l4.957 7.488A2.34 2.34 0 0 0 11.29 30a2.4 2.4 0 0 0 .655-.092l14.387-4.149a2.32 2.32 0 0 0 1.458-1.234a2.21 2.21 0 0 0-.013-1.908m-3.538.604l-11.268 3.25l4.075-19.033l7.568 15.671l-.376.098Z"></path></svg>
                    <svg id="moving-planet" className='absolute -bottom-20 left-[50%] -z-10 opacity-60' xmlns="http://www.w3.org/2000/svg" width="8rem" height="8rem" viewBox="0 0 128 128"><radialGradient id="SVGYic1me7Z" cx={63.539} cy={64.93} r={33.826} gradientTransform="matrix(.3979 .9174 -3.1047 1.3466 239.844 -80.797)" gradientUnits="userSpaceOnUse"><stop offset={0.119} stopColor="#75ee9f"></stop><stop offset={0.297} stopColor="#75ee9f"></stop><stop offset={0.446} stopColor="#94ea8c"></stop><stop offset={0.584} stopColor="#94ed7b"></stop><stop offset={0.621} stopColor="#75ee9f"></stop><stop offset={0.903} stopColor="#95f57f"></stop></radialGradient><path fill="url(#SVGYic1me7Z)" d="M48.54 35.12C34.2 42.47 28.22 57.94 31.19 72.31c.69 3.32 1.85 6.57 3.49 9.66c8.17 15.32 29.33 20.43 45.83 11.38c14.31-7.85 22.62-26.71 14.45-43.34c-1.47-2.99-3.39-5.8-5.7-8.3c-9.18-9.95-24.37-14.96-40.72-6.59"></path><radialGradient id="SVGgLFoMbni" cx={49.892} cy={39.012} r={62.228} gradientTransform="matrix(.4505 .8928 -2.512 1.2675 125.416 -54.978)" gradientUnits="userSpaceOnUse"><stop offset={0.219} stopColor="#75ee9f"></stop><stop offset={0.278} stopColor="#75ee9f"></stop><stop offset={0.354} stopColor="#a3e890"></stop><stop offset={0.384} stopColor="#88eab3"></stop></radialGradient><path fill="url(#SVGgLFoMbni)" d="M89.25 41.71c-9.17-9.95-24.37-14.96-40.71-6.59c-14.34 7.35-20.32 22.82-17.35 37.19c0 0 8.89.32 32.53-13.4s25.53-17.2 25.53-17.2"></path><path fill="#c6ddcb" d="M38.59 42.88s10.88-.66 13.45-1.86c1.81-.85 9.04-9.87 9.04-9.87s-6.16.44-12.65 3.88c-6.39 3.38-9.84 7.85-9.84 7.85"></path><path fill="#f8dbaf" d="M31.19 72.31s9.09-.8 30.29-12.35s26.89-19.17 26.89-19.17s3.37 3.29 5.52 7.19c2.21 4.03 3.27 7.58 3.27 7.58L77.42 69.1s-1.12-3.96 1.47-7.33c2.59-3.36 6.98-5.86 6.38-7.58s-5.43 0-9.48 3.36s-8.01 7.15-9.48 6.12s2.84-4.14 1.03-4.57s-5.17 1.64-9.91 5.69s-7.58 7.58-14.74 9.22c-6.24 1.43-11.15-.15-11.15-.15z"></path><radialGradient id="SVGMkw1kdtO" cx={60.661} cy={68.525} r={26.604} gradientUnits="userSpaceOnUse"><stop offset={0.422} stopColor="#75ee9f"></stop><stop offset={0.984} stopColor="#75ee9f"></stop></radialGradient><path fill="url(#SVGMkw1kdtO)" d="M34.16 80.99s5.03.89 10.92-1.29c9.05-3.35 11.53-7.56 15.49-9.67c2.01-1.07 4.59-1.24 4.21 2.48c-.4 4.03-8.43 9.17-8.43 9.17l-17.38 6.38s-1.47-1.64-2.67-3.27c-.94-1.3-2.14-3.8-2.14-3.8"></path><radialGradient id="SVGo2Aw9d9J" cx={81.286} cy={66.74} r={37.819} gradientUnits="userSpaceOnUse"><stop offset={0} stopColor="#75ee9f"></stop><stop offset={0.869} stopColor="#75ee9f"></stop></radialGradient><path fill="url(#SVGo2Aw9d9J)" d="M45.49 93.16s12.37-2.13 29.44-12.25s23.23-16.98 23.23-16.98s-.01 1.71-.09 2.61s-.28 2.1-.28 2.1s-8.17 9.01-21.19 16.5c-15.11 8.7-25.85 10.5-25.85 10.5s-1.53-.57-2.67-1.1c-.98-.44-2.59-1.38-2.59-1.38"></path><path fill="#f6cb89" d="M32.36 53.63s-.48 1.4-.78 2.59s-.61 2.81-.61 2.81s7.6-.89 25.18-10.04s21.49-15.55 21.49-15.55s-1.37-.58-2.77-1.05c-1.11-.37-2.6-.71-2.6-.71s-7.8 7.35-18.42 12.71c-13.31 6.7-21.49 9.24-21.49 9.24"></path><path fill="#f6cb89" d="M30.68 60.82s-.07.75-.12 1.26c-.07.73-.09 1.52-.09 1.52s9.59-.78 27.25-10.57s24.22-17.36 24.22-17.36s-.77-.49-1.48-.86c-.84-.45-1.4-.71-1.4-.71s-6.41 8.21-22.76 16.55C37.95 60 30.68 60.82 30.68 60.82"></path><path fill="#a7ea94" d="M87.19 39.63S120.44 25.27 126 32.7c5.56 7.44-25.64 28.82-57.51 45.96S5.92 106.82 2.2 98.99s28.62-28.66 28.62-28.66s.09.52.21 1.15c.11.59.31 1.58.31 1.58L16.98 85.15l-1.81 8.2l17.77-3.32s20.18-7.14 33.29-13.96s40.63-26.51 40.63-26.51l7.89-13.18l-25.85 4.94s-.36-.37-.81-.82c-.48-.48-.9-.87-.9-.87"></path><path fill="#75ee9f" d="M31.09 71.79S4.87 87.3 8.22 95.57c3.04 7.5 36.22-4.7 63.81-20.44c25.35-14.47 52.64-32.03 47.95-39.85c-4.13-6.89-31.89 5.23-31.89 5.23s.3.28.63.63c.24.26.51.53.51.53s20.68-5.19 22.21-2.13S92.23 62.1 70.39 73.43S19.02 97.06 17.31 92.1c-2.46-7.13 14.12-18.7 14.12-18.7s-.16-.69-.2-.91c-.07-.3-.14-.7-.14-.7"></path><path fill="#a7ced6" d="M89.09 41.54s24.24-9.34 27.58-4.46s-15.83 20.98-46.5 37.28s-56.14 25.3-58.97 19.41s20.03-21.28 20.03-21.28s.1.45.21.92c.11.48.41 1.57.41 1.57S17.77 85.64 19.99 88.15s18.46.19 48.01-14.86c29.85-15.21 41.3-28.44 38.2-31.43c-2.02-1.94-15.52 1.5-15.52 1.5s-.47-.56-.79-.93c-.31-.38-.8-.89-.8-.89"></path><path fill="#ddecf6" d="M90.32 42.93s16.37-6.61 18.98-1.45c3.03 6-22.32 22.61-41.52 33.07C49.08 84.73 21 94.65 18.1 89.53c-2.39-4.23 13.5-15.41 13.5-15.41s.13.51.3 1.1c.09.31.28.91.28.91s-10.65 7.59-8.67 10.55s22.24-2.38 43.27-13.36C92.1 60.11 106.97 46.9 104.83 43.4c-2.14-3.49-13.39.91-13.39.91s-.31-.4-.5-.64c-.25-.31-.62-.74-.62-.74"></path></svg>
                    <h1 ref={title} className='whitespace-nowrap text-[4rem] md:text-[6rem] inline-block text-gray-600 font-display font-extralight tracking-widest mx-4'>Welcome to the hidden planet of coding</h1>                  
                </div>
                <div className='relative w-full'>
                    <div className='absolute w-full h-[60%] opacity-60 md:h-full  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-0'>
                        <Spline
                            className=''
                            scene="https://prod.spline.design/9RG8HKRNF950pSLV/scene.splinecode" 
                        
                        />
                    </div>
                    
                    <div className='relative z-30 px-4  h-auto'>
                        {
                            Skilldata.map((data) => { return(
                                
                                    <div key={data.id}  className={`relative skills-item flex flex-row `} style={{transform:`translateY(${50 * data.id}px)`}}>
                                        <img className='w-20 pointer-events-none' src={Circuit}/>
                                        <div className={`w-full md:w-1/2 flex flex-col p-4 rounded-lg transform translate-y-[50px]`}>
                                            <h1 className='text-[#28acaca4] text-xl font-semibold'>{data.name}</h1>
                                            <p className='text-md font-light text-white'>{data.content}</p>  
                                        </div>
                                    </div>
                            
                                )
                            })
                        }
                    </div>
                </div>
        </div>
    
    </>)

}

export default skill;