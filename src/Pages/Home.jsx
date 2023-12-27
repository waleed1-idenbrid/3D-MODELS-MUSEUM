import React from "react";
import Models from "../Components/Models";
import { latestmodels } from "../Allmodels/modelsapis";

export default function Home() {
  let renderModels;
  renderModels = latestmodels.map((props) => {
    return (
      <Models
        key={props.id}
        img={props.img}
        title={props.name}
        description={props.description}
        href={props.links}
      />
    );
  });
  return (
    <>
      <div className="px-20">
        <h1 className="text-3xl text-center">What we do?</h1>
        <p className="text-lg text-black text-center py-10">
          Antika is a virtual 3D museum offers the high quality Information
          about the old models and new technologies. Our vision is to create a
          free and open-source encyclopedia for artifacts lovers and a wikipedia
          for web 3.0
        </p>
      </div>
      <h1 className="text-3xl text-center">Our Latest Models</h1>
      <div className="grid grid-cols-4 md:px-20">{renderModels}</div>
    </>
  );
}
