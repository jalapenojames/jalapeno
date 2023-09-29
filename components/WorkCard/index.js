import React, { Suspense } from "react";
const Spline = React.lazy(() => import('@splinetool/react-spline'));

const WorkCard = ({ img, name, description, splineScene, onClick }) => {
  if(splineScene)
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
                scene={splineScene? splineScene : "https://prod.spline.design/C4f3A0Susxo2v0u7/scene.splinecode"} 
            />
          </Suspense> 
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
  );
};

export default WorkCard;
