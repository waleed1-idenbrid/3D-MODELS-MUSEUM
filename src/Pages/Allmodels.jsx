import React from "react";
import { allmodels } from "../Allmodels/modelsapis";
import Models from "../Components/Models";

export default function Allmodels() {
  let renderModels;
  renderModels = allmodels.map((props) => {
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
      <div className=" space-y-5 m-2">
        <h2 className="text-4xl font-semibold text-center">
          Antika is worlds best 3D museum
        </h2>
        <p className="text-lg text-center text-slate-400">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure nulla
          illo nostrum dolore amet aperiam repudiandae in saepe! Ea, ab.
        </p>
        <div className="grid grid-cols-4 md:px-20">{renderModels}</div>
      </div>
    </>
  );
}
