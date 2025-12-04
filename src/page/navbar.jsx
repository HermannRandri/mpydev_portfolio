import { useState } from "react";
function Nav(){
    const [show, setShow] = useState(false)
    return (<>
             <nav className="hidden md:flex fixed w-full  justify-center py-4 px-2 backdrop-blur-lg bg-black/50 shadow-[0_1px_200px_20px] z-40 font-mono">
                    <img  src="dark_green_logo.png" className="w-40"/>
                    <ul className="w-full flex flex-row text-sm text-gray-300 font-display font-thin justify-between px-10 py-2 cursor-default">
                        <li className="tracking-tighter transform transition-all  hover:text-orange-300 hover:tracking-widest text-"><a href="#home">HOME</a></li>
                        <li className="tracking-tighter transform transition-all  hover:text-orange-300 hover:tracking-widest"><a href="#skill-section">SKILL</a></li>
                        <li className="tracking-tighter transform transition-all  hover:text-orange-300 hover:tracking-widest"><a href="#projects-section">PROJECTS</a></li>
                        <li className="tracking-tighter transform transition-all  hover:text-orange-300 hover:tracking-widest"><a href="#team-section">OUR TEAM</a></li>
                        <li className="tracking-tighter transform transition-all  hover:text-orange-300 hover:tracking-widest"><a href="#contact-section">CONTACT US</a></li>
                    </ul>
             </nav>
             <nav className={`fixed w-full flex flex-col z-40 md:hidden justify-center py-4 px-2 backdrop-blur-lg bg-black/50 shadow-[0_1px_200px_20px]  ${show ? "h-[50%]":"h-20"} transform  transition-all duration-300 font-mono`}>
                    <img  src="dark_green_logo.png" className=" mx-auto w-40"/>
                    <ul className={`w-full  flex-col gap-2 text-sm text-gray-300 font-thin font-display justify-between px-2 py-2 cursor-pointer ${show ? "flex":"hidden"}`}>
                        <hr className="opacity-30 my-2" />
                        <li className="tracking-tighter transform transition-all  hover:text-orange-300 hover:tracking-widest text-"><a href="#home">HOME</a></li>
                        <li className="tracking-tighter transform transition-all  hover:text-orange-300 hover:tracking-widest"><a href="#skill-section">SKILL</a></li>
                        <li className="tracking-tighter transform transition-all  hover:text-orange-300 hover:tracking-widest"><a href="#projects-section">PROJECTS</a></li>
                        <li className="tracking-tighter transform transition-all  hover:text-orange-300 hover:tracking-widest"><a href="#team-section">OUR TEAM</a></li>
                        <li className="tracking-tighter transform transition-all  hover:text-orange-300 hover:tracking-widest"><a href="#contact-section">CONTACT US</a></li>
                    </ul>
                    <button onClick={() => setShow(!show)} className="absolute top-6 right-6">
                        {show ? (<>
                            <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24"><g fill="none" stroke="#989898" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}><path d="M5 12H19"><animate fill="freeze" attributeName="d" dur="0.4s" values="M5 12H19;M12 12H12"></animate><set fill="freeze" attributeName="opacity" begin="0.4s" to={0}></set></path><path d="M5 5L19 5M5 19L19 19" opacity={0}><animate fill="freeze" attributeName="d" begin="0.2s" dur="0.4s" values="M5 5L19 5M5 19L19 19;M5 5L19 19M5 19L19 5"></animate><set fill="freeze" attributeName="opacity" begin="0.2s" to={1}></set></path></g></svg>
                           </>):
                        (<><svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24"><rect width={18} height={1.5} x={3} y={7.001} fill="#989898" rx={0.75}></rect><rect width={15} height={1.5} x={3} y={11.251} fill="#989898" rx={0.75}></rect><rect width={18} height={1.5} x={3} y={15.499} fill="#989898" rx={0.75}></rect></svg></>)}
                        
                    </button>
             </nav>
             
       
    </>)
}

export default Nav;