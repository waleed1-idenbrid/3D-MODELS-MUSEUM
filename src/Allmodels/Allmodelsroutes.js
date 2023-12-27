import { latestmodels, allmodels } from "./modelsapis";
import { Route } from "react-router";
import Modelview from "../Components/Modelview";
import Heading from "../Components/Heading";

// all models routing feature
export let renderAllModels;
renderAllModels = allmodels.map((props) => {
  return (
    <>
      <Route
        key={props.id}
        path={props.links}
        element={
          <>
            <Modelview path={props.add} />
            <Heading text={props.name} description={props.description} />
          </>
        }
      />
    </>
  );
});

// latest models routing feature
export let renderLatestRoutes;
renderLatestRoutes = latestmodels.map((props) => {
  return (
    <>
      <Route
        key={props.id}
        path={props.links}
        element={
          <>
            <Modelview path={props.add} />
            <Heading text={props.name} description={props.description} />
          </>
        }
      />
    </>
  );
});
