import { useRef, useEffect, useState } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";
import Cursor from "../components/Cursor";
import { useScrollDirection } from 'react-use-scroll-direction'
import { useParallax } from "react-scroll-parallax";
import { motion, useAnimate } from 'framer-motion'

// Local Data
import data from "../data/portfolio.json";

export default function Home() {
  const [scope, animate] = useAnimate()

  // Scroll Parallax
  // const parallax = useParallax({
  //   rotate: [0,360]
  // })

  // Scroll Percentage
  // const [ref, percentage] = useScrollPercentage()

  // Scroll Direction
  const { isScrollingUp, isScrollingDown, scrollDirection, isScrolling } = useScrollDirection()
  const [toggleButton, setToggle] = useState()
  const [isVisible, setIsVisible] = useState(true)
  const [opacity, setOpacity] = useState(100)

  const delay = async (s) => {
    await new Promise(resolve => setTimeout(resolve, s*1000))
  }

  const windowRef = useRef();

  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

  const handleButtonClick = () => {
    setIsVisible(false);
  };

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop-50,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  useEffect(()=>{
    const shouldShow = !((window.scrollY !== 0) && window.scrollY < (document.documentElement.offsetHeight-window.innerHeight))
    // const value = window.scrollY <= window.screen.availHeight
    //   ? 100-(100*window.scrollY/window.screen.availHeight).toFixed(0)
    //   : 0
    //   const roundToTen = Math.ceil(value/10)*10
    //   console.log('value:', roundToTen)
    // setOpacity(roundToTen)

    // if on > off: Fade out => set to false
    // if off > on: Fade in => set to true
    console.log(shouldShow!==isVisible)

    // If a change has occurred
    if(shouldShow!==isVisible) {
      if(isVisible) 
        animate(scope.current, {opacity: 0}, {duration: .3}) // Hide button
      else 
        animate(scope.current, {opacity: 1}, {duration: .3}) // Show button
      

    }
    setIsVisible(shouldShow)
  },[isScrolling])

  useEffect(()=>{
    window.addEventListener("scroll", (e)=>handlePageScroll(e))
    return () => window.removeEventListener("scroll",handlePageScroll)
  })

  const handlePageScroll = (e) => {
    // console.log(e.target)
    // console.log(document.documentElement.offsetHeight-window.innerHeight)
    // console.log(window.outerHeight, window.innerHeight)
    // console.log(window.scrollY)
  }

  return (
    <div className={`relative ${data.showCursor && "cursor-none"}`} onScroll={(e)=>handlePageScroll(e)}>
      {data.showCursor && <Cursor />}
      <Head>
        <title>{data.name}</title>
      </Head>

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div ref={windowRef} className="container mx-auto mb-10" onScroll={(e)=>handlePageScroll(e)}>
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
        />
        {/* Make this div fill full screen */}
        <div className="flex flex-col laptop:mt-20 mt-10 h-screen justify-around">
          <div className="mt-5 text-left">
            <h1
              ref={textOne}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-full"
            >
              <span className="" style={{color: '#8ecae6'}}>
                {data.headerTaglineOne.split(',')[0]}, 
              </span>
              <span className="">
                {data.headerTaglineOne.split(',')[1]}
              </span>
            </h1>
            <h1
              ref={textTwo}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-full"
            >
              {data.headerTaglineTwo}
            </h1>
            <h1
              ref={textThree}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-full"
            >
              {data.headerTaglineThree}
            </h1>
            <h1
              ref={textFour}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-full"
            >
              {data.headerTaglineFour}
            </h1>          
          </div>

          <Socials className="mt-2 laptop:mt-5" />
        </div>
        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={workRef}>
          <h1 className="text-2xl text-bold">Work.</h1>

          <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
            {data.projects.map((project) => (
              <WorkCard
                key={project.id}
                img={project.imageSrc}
                name={project.title}
                description={project.description}
                splineScene={project.splineScene}
                // onClick={() => project.url? window.open(project.url) : null}
              />
            ))}
          </div>
        </div>

        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
          <h1 className="tablet:m-10 text-2xl text-bold">Services.</h1>
          <div className="mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-2 gap-6">
            {data.services.map((service, index) => (
              <ServiceCard
                key={index}
                name={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
        {/* This button should not go into production */}
        {/* {process.env.NODE_ENV === "development" && (
          <div className="fixed bottom-5 right-5">
            <Link href="/edit">
              <Button type="primary">Edit Data</Button>
            </Link>
          </div>
        )} */}
        {/* This button should go into production */}
        {(process.env.NODE_ENV === "development" || process.env.NODE_ENV === "production") && (
          <div 
            className="fixed bottom-5 right-5">
            
            <div
              ref={scope}>
              <Button 
                ref={scope}
                classes={`
                  ${
                    true
                      ? "visible"
                      : "invisible"
                  }
                `}
                opacity={opacity}
                type="calendar" 
                drawAttention 
              >
                Meet with me 🤝 ☕️
              </Button>
            </div>
          </div>
        )}
        <div className="mt-10 laptop:mt-40 p-2 laptop:p-0" ref={aboutRef}>
          <h1 className="tablet:m-10 text-2xl text-bold">About.</h1>
          <p className="tablet:m-10 mt-2 text-xl laptop:text-3xl w-full laptop:w-3/5">
            {data.aboutpara}
          </p>
        </div>
        <Footer />
      </div>
    </div>
  );
}
