import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";
import { useParallax } from "react-scroll-parallax";

const Footer = ({}) => {
  const parallax = useParallax({
    rotateY: [0,360],
  })
  const Component = () => {
    const parallax = useParallax<HTMLDivElement>({
      rotateY: [360, 0],
    });
    return (
      <div ref={parallax.ref} className="spinner w-50 bg-sky-100">
        <div className="thumbsup">👍🏻</div>
        {/* <div className="clap">👏🏻</div>
        <div className="handsup">🙌🏻</div> 
        <div className="thumbsdown">👎🏻</div> */}
      </div>
    );
  };

  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
        <div>
          <h1 className="text-2xl text-bold">Contact.</h1>
          <div ref={parallax.ref} className="spinner">
            <div className="thumbsup">👍🏻</div>
            <div className="clap">👏🏻</div>
            <div className="handsup">🙌🏻</div>
            <div className="thumbsdown">👎🏻</div>
          </div>
          <div className="mt-10">
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              LET&apos;S WORK
            </h1>
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold mb-10">
              TOGETHER →
            </h1>
            {/* <Button type="calendar" drawAttention >Meet with me 🤝 ☕️</Button> */}
            <div className="mt-10">
              <Socials />
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0">
        Made With 🍵 by{" "} 
        <span className="italic underline underline-offset-1">
          James Chen
        </span>
      </h1>
    </>
  );
};

export default Footer;
