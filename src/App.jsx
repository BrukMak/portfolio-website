import { BrowserRouter } from "react-router-dom"
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, LoadingScreen } from './components';
import { useState, useEffect } from 'react';
import { technologies } from "./constants";



const App = () => {
  const [isLoading, setIsLoading] = useState(true); // State to manage loading visibility

  useEffect(() => {
    // Simulate a delay (e.g., fetching data) before hiding the loading screen
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the duration as needed

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        {isLoading && <LoadingScreen />} {/* Show the loading screen */}
          <Navbar />
          <Hero />
        </div>
        <About />
        {/* <Experience /> */}
        <div className="relative z-0">
          <Experience />
          
          
        </div>
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
