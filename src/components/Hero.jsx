import React from 'react'
import { styles } from '../styles';
import Tilt from "react-parallax-tilt";
import { ComputersCanvas } from './canvas';
import text from './text.json';
import './style.css';
import { main_pic, down_arrow } from '../assets';
import { useTypewriter, Cursor } from 'react-simple-typewriter';



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
      <h1 className={`${styles.heroHeadText}`}>Hi there  <span className="animate-wave">👋</span></h1>
      <h1 className={`${styles.heroHeadText}`}>I'm <span className='text-[#3b82f6]'>Bruk Mekonnen</span></h1>
      <span className='flex flex-row md:flex-row items-center md:items-start gap-4'>
        <span className='flex flex-col'> 
            <Tilt
            options={{
              max: 45,
              scale: 2,
              speed: 450,
            }}

              className='p-5 rounded-2xl sm:w-[650px] w-full h-[100px] mt-[80px]  ring-1'
              >
              <div className="detail-span-text "> {text} </div>
            
            </Tilt>
            <h1 className='detail-span w-[650px] mt-[40px] text-aligh-left '>
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
            className='p-5 rounded-2xl sm:w-[650px] w-full h-auto mt-[80px] ml-[50px]  ring-1'
          >
            <img className=" rounded-2xl w-[1000px] h-auto shadow-md" src={main_pic} alt="Main Pic" />
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