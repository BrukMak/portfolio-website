import React from 'react'
import { styles } from '../styles';
import Tilt from "react-parallax-tilt";
import { ComputersCanvas } from './canvas';
import text from './text.json';
import './style.css';
import { main_pic, down_arrow } from '../assets';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Loader from './Loader';



// import ChangingTextSpan from './changing-skill.component';

const Hero = () => {

    const [text] = useTypewriter({
      words: ["Software Engineer", "Fullstack Developer", "AI Enthusiast", "Competitive Programmer", "Young Leader", "Enjoy your stay!"],
      loop: true, // Loops infinitely
      typeSpeed: 200,
      deleteSpeed: 100,
      delaySpeed: 2000, // Delay between words
    });



  return (

    <section className='relative w-full h-screen mx-auto'>
  <div className={`${styles.paddingX} absolute inset-0 top-[120px] w-full h-full flex flex-row items-start gap-2`}>
    <div className='flex flex-col justify-center items-center mt-5'>
      <div className='w-5 h-5 rounded-full bg-[#3b82f6]' />
      <div className='w-1 sm:h-80 h-40 violet-gradient' />
    </div>
    <div>
      {/* <Loader /> */}
      <h1 className={`${styles.heroHeadText} text-[18px] sm:text-[32px] lg:text-[48px]`}>Hi there  <span className="animate-wave">👋</span></h1>
      <h1 className={`${styles.heroHeadText} text-[18px] sm:text-[32px] lg:text-[48px]`}>I'm <span className='text-[#3b82f6]'>Bruk Mekonnen</span></h1>
      <span className={`${styles.paddingX} flex flex-wrap s:w-[400px] md:flex-row items-center md:items-start gap-4`}>
        <span className='flex flex-col'> 
            <Tilt
            options={{
              max: 45,
              scale: 2,
              speed: 450,
            }}

              className='p-5 rounded-2xl w-full sm:w-[650px] h-auto mt-4 sm:mt-[80px] mx-auto ring-1'
              >
              <div className="detail-span-text "> {text} </div>
            
            </Tilt>
            <h1 className={`  detail-span w-[650px] mt-[40px] text-aligh-left `}>
            I'm a software engineer passionate about building scalable systems, solving challenging problems, 
            and creating impactful tech solutions. Beyond engineering, I've led A2SV tech academy, mentoring and teaching hundreds of 
            aspiring developers to shape the next wave of tech talent. From AI projects to competitive programming, I'm all about innovation, 
            collaboration, and turning ideas into reality. Ready to connect, collaborate, or create something extraordinary?       
       
            
            </h1>
          
          </span>
          <Tilt
            options={{
              max:45,
              scale: 2,
              speed: 450,
            }}
            className='p-5 rounded-2xl w-full sm:w-[650px] h-auto mt-4 sm:mt-[80px] mx-auto ring-11'
          >
            <img className=" rounded-2xl w-full h-auto " src={main_pic} alt="Main Pic" />
          </Tilt>
            
          
        </span>

      
      <div className="flex justify-center mt-8">
        
        <a href="#about">
          <img src={down_arrow} alt="Arrow Icon" className="w-[40px] h-auto absolute bottom-[170px] animate-updown "/>
        </a>
        
      </div>


    </div>
  </div>
</section>

  )
}

export default Hero;