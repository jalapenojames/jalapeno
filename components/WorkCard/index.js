import React, { Suspense } from "react";
const Spline = React.lazy(() => import('@splinetool/react-spline'));

const WorkCard = ({ img, name, description, onClick }) => {
  
  const Player = props => {
    let videourl = props.videourl.replace('.gifv', '.mp4');
    return <video src={ videourl } className={props.className} />;
  };

  const SplineScene = React.memo(function SplineScene() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Spline 
          style={{ height: "600px" }}
          scene="https://prod.spline.design/DQCXjsdx1QqDfvPL/scene.splinecode" 
        />     
      </Suspense>
    );
  });


  if(name === "Well Ping @SSNL")
    return (
      <div
        className="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link"
        onClick={onClick}
      >
        <div
          className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-48 mob:h-auto bg-indigo-500"
          style={{ height: "600px" }}
        >
          <SplineScene />
          {/* <Suspense fallback={<div>Loading...</div>}>
             <Spline 
                style={{ height: "600px" }}
                scene="https://prod.spline.design/DQCXjsdx1QqDfvPL/scene.splinecode" 
             />
          </Suspense>  */}
          {/* <img
            alt={name}
            className="h-full w-full object-cover hover:scale-110 transition-all ease-out duration-300"
            src={"https://i.imgur.com/aaMtORa.gifv"}
          /> */}
        </div>
        <h1 className="mt-5 text-3xl font-medium">
          {name ? name : "Project Name"}
        </h1>
        <h2 className="text-xl opacity-50">
          {description ? description : "Description"}
        </h2>
      </div>
  )
  
  // if(name === "MakolaHub")
  //   return (
  //     <div
  //       className="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link"
  //       onClick={onClick}
  //     >
  //       <div
  //         className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-48 mob:h-auto bg-indigo-500"
  //         style={{ height: "600px" }}
  //       >
  //         <Suspense fallback={<div>Loading...</div>}>
  //           <Spline 
  //               style={{ height: "600px" }}
  //               scene="https://prod.spline.design/C4f3A0Susxo2v0u7/scene.splinecode" 
  //           />
  //         </Suspense> 
  //         {/* <img
  //           alt={name}
  //           className="h-full w-full object-cover hover:scale-110 transition-all ease-out duration-300"
  //           src={"https://i.imgur.com/aaMtORa.gifv"}
  //         /> */}
  //       </div>
  //       <h1 className="mt-5 text-3xl font-medium">
  //         {name ? name : "Project Name"}
  //       </h1>
  //       <h2 className="text-xl opacity-50">
  //         {description ? description : "Description"}
  //       </h2>
  //     </div>
  //   )
  
  if(name === "MyFavor App")
    return (
      <div
        className="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link"
        onClick={onClick}
      >
        <div
          className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-48 mob:h-auto bg-indigo-500"
          style={{ height: "600px" }}
        >
          <Suspense fallback={<div>Loading...</div>}>
            <Spline 
                style={{ height: "600px" }}
                scene="https://prod.spline.design/9ih9OrAmPejBLOUu/scene.splinecode" 
            />
          </Suspense> 
          {/* <img
            alt={name}
            className="h-full w-full object-cover hover:scale-110 transition-all ease-out duration-300"
            src={"https://i.imgur.com/aaMtORa.gifv"}
          /> */}
        </div>
        <h1 className="mt-5 text-3xl font-medium">
          {name ? name : "Project Name"}
        </h1>
        <h2 className="text-xl opacity-50">
          {description ? description : "Description"}
        </h2>
      </div>
    )
  return (
    <>
    
    <div
      className="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link"
      onClick={onClick}
    >
      <div
        className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-48 mob:h-auto"
        style={{ height: "600px" }}
      >
        <img
          alt={name}
          className="h-full w-full object-cover hover:scale-110 transition-all ease-out duration-300"
          src={img}
        ></img>
      </div>
      <h1 className="mt-5 text-3xl font-medium">
        {name ? name : "Project Name"}
      </h1>
      <h2 className="text-xl opacity-50">
        {description ? description : "Description"}
      </h2>
    </div>
    </>
  );
};

export default WorkCard;
