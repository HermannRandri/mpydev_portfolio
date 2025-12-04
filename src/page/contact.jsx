import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import VoltButton from "../assets/volt-button.webp"
import EndBg from "../assets/bg-end.webp"

gsap.registerPlugin(ScrollTrigger);
function Contact(){
    const [showForm, setShowForm] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error_message, setError_message] = useState("");
    const [validate, setValidate ] = useState(false);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const EndRef = useRef(null);
    const form = useRef(null);
    
    const VoltAction = () => {
        setShowForm(!showForm)
    }
    const NameHandler = (e) => {
       if(e.target.value.length <= 50){
          setValidate(true)
          setError_message("")
       }
       else{
          setValidate(false)
          setError_message("Maxlength is 50 for the name")
       }
    }
    const EmailHandler = (e) => {
        if (!emailRegex.test(e.target.value)) {
            setValidate(false)
            setError_message("Invalid email format");
           
        }
        else{ 
            setValidate(true)
            setError_message("")
        }
    }
    const MessageHandler = (e) => {
        if(e.target.value.length <= 1000){
            setValidate(true)
            setError_message("")
         }
         else{
            setValidate(false)
            setError_message("Maxlength is 1000 for the message")
         }
    }
    const Submit = async (e) => {
            e.preventDefault();
            let formData  = new FormData(form.current)
            const values = Object.fromEntries(formData.entries());
           

            if(validate && values.name != "" && values.email != "" && values.message != "" ){
                setLoading(true);
                await
                emailjs
                .sendForm(
                    "service_k1ogxwu",
                    "template_xmg8wed",
                    form.current,
                    "fBQgbGrI0xq9ThHEG"
                )
                .then(
                    () => {
                    setLoading(false);
                    setError_message("Done, your message is sent !")
                    form.current.reset();
                    },
                    (error) => {
                    setLoading(false);
                    setError_message("Error in sending")
               

                    }
                );

        }
        else {
            setLoading(false)
            setError_message("Please, fill all input and respect all condition")
        }
    }

    useEffect(() =>{
        const EndTitle = EndRef.current;
        ScrollTrigger.refresh();
        gsap.fromTo(EndTitle,
            {
                opacity:0,
                x:-100,
                ease:"power2.inOut",
            },
            {
                opacity:1, 
                x:0, 
                duration:2,
                ease:"power2.inOut",
                scrollTrigger:{
                    trigger: EndTitle,
                    start:"top 80%",
                    end:"bottom 20%",
                    toggleActions:"play none none reverse"
                }
               
            }
            )
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    },[])
    return (<>
      <div className="relative min-h-screen mt-20 overflow-hidden bg-no-repeat bg-cover bg-center bg-fixed  " style={{backgroundImage: `url(${EndBg})`}}>
        <div className={` w-full h-full `} >
            <div className="h-1/3 mx-4 pt-10 ">
               <h1 ref={EndRef}  className="text-center text-[1.5rem] md:text-[2rem] 2xl:text-[4rem] bg-gradient-to-r from-[#ffffff] to-[#696969a4] text-transparent bg-clip-text font-display font-extralight tracking-widest">You’ve explored every corner of this universe. Dispatch your message by clicking the button below</h1>
            </div>
            <button className="absolute w-[20%] h-[30%] left-1/2 right-1/2  transform -translate-x-1/2 translate-y-1/2 bottom-1/2 " onClick={VoltAction}></button>
            <img src={VoltButton} className="h-2/3 absolute bottom-0 left-1/2 right-1/2 transform -translate-x-1/2 pointer-events-none hover:cursor-pointer opacity-80 animate-pulse" />
        </div>
        
        <div className={`absolute  bottom-0 w-full ${showForm ? "h-screen":"h-0" } transition-all duration-300 bg-black`}>
            <div className="relative flex justify-center w-full">
                <button className={`${showForm ? "flex":"hidden"} items-center justify-centers`} onClick={VoltAction}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24"><path fill="none" stroke="#37d612" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m19 5.36l-5.763 5.763a1.74 1.74 0 0 1-2.474 0L5 5.36m14 7l-5.763 5.763a1.74 1.74 0 0 1-2.474 0L5 12.36"></path></svg>
                </button>
            </div>
            <div className="relative w-full flex flex-col items-center py-4 bg-no-repeat bg-cover bg-center bg-fixed " style={{backgroundImage: `url(${EndBg})`}}>
                <h1 className="text-center text-gray-200 text-[2rem] my-2">Contact</h1>
                <div className="text-sm text-orange-300 my-4">{error_message}</div>
                <form ref={form} className="w-full md:w-1/2 h-auto space-y-6 px-4" onSubmit={Submit}>
                    <div className="relative">
                        <input name="name" type="text" className="w-full bg-gray-700/10 p-4 rounded-lg text-gray-400 border-[1px] border-gray-600 shadow-[0_0_10px_2px_#173917]" onChange={NameHandler} placeholder="Name (MaxLength: 50)" maxLength={50} />
                    </div>
                    <div className="relative">
                        <input name="email" type="email" className="w-full bg-gray-700/10 p-4 rounded-lg text-gray-400 border-[1px] border-gray-600 shadow-[0_0_10px_2px_#173917]" onChange={EmailHandler}  placeholder="E-mail" />
                    </div>
                    <div className="relative">
                        <textarea name="message" className="w-full h-40 bg-gray-700/10 p-4 rounded-lg text-gray-400 border-[1px] border-gray-600 shadow-[0_0_10px_2px_#173917] resize-none"  onChange={MessageHandler} placeholder="Message (MaxLength: 1000)" maxLength={1000}>

                        </textarea>
                    </div>
                    <div className="flex w-full justify-center">
                        <button type="submit" className="flex justify-center items-center text-gray-400 mx-auto py-2 px-6 border-[1px] border-gray-400 shadow-[0_0_5px_1px_#2D642F] rounded-lg">
                             {loading ? (<><svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 24 24"><path fill="none" stroke="#37d612" strokeLinecap="round" strokeWidth={2} d="M12 6.99998C9.1747 6.99987 6.99997 9.24998 7 12C7.00003 14.55 9.02119 17 12 17C14.7712 17 17 14.75 17 12"><animateTransform attributeName="transform" attributeType="XML" dur="560ms" from="0,12,12" repeatCount="indefinite" to="360,12,12" type="rotate"></animateTransform></path></svg></>):
                             (<><svg className="transform rotate-90" xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" viewBox="0 0 32 32"><path fill="#37d612" d="m17.831 3.306l-9.726 13.9c-.26.37-.045.794.395.794h4c.35 0 .5.14.5.5v10.763c0 .71.86 1.02 1.27.45l9.618-12.828c.27-.37.052-.885-.388-.885H20c-.5 0-1-.5-1-1V3.5c0-.5-.76-.774-1.169-.194"></path></svg></>)}                        
                        </button>
                    </div>
                </form>
            </div>
        </div>
      </div>
      
    </>)
}

export default Contact;