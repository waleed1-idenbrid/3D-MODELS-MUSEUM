import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nopage from "./Pages/Nopage";
import Contact from "./Pages/Contact";
import Contribute from "./Pages/Contribute";
import Allmodels from "./Pages/Allmodels";
import {
  renderLatestRoutes,
  renderAllModels,
} from "./Allmodels/Allmodelsroutes";
import Dashboard from "./Components/Dashboard";
import Register from "./Components/Register";
import app from "./fire";

export default function App() {
  // routing ariable for latesRoutes

  // routing ariable for latesRoutes
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Models routes and addresses starts here  */}
        {renderLatestRoutes}
        {renderAllModels}

        {/* Model routs and addresses ends here  */}

        {/* Dashboard Routes start here  */}

        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />

        {/* Dashboard Routes end here  */}

        {/* Routes Start here  */}

        <Route
          exact
          path="/Contact"
          element={
            <>
              <Header
                title="Contact Us"
                description="Any Queries? You can ask freely"
                pageTitle="contact"
              />
              <Contact />
            </>
          }
        />
        <Route
          exact
          path="/Contribute"
          element={
            <>
              <Header
                title="Contribute"
                description="Become a Contributer"
                pageTitle="Contributer"
              />
              <Contribute />
            </>
          }
        />
        <Route
          exact
          path="/models"
          element={
            <>
              <Header
                title="Models"
                description="All Models here"
                pageTitle="All Models"
              />
              <Allmodels />
            </>
          }
        />
        <Route
          exact
          path="/featured"
          element={
            <>
              <Header
                title="Featured"
                description="Our Featured Models"
                pageTitle="Featured Models"
              />
            </>
          }
        />

        <Route
          exact
          path="/"
          element={
            <>
              <Header
                title="Welcome to antika"
                description="The best 3D virtual Museum"
                pageTitle="HomePage"
              />
              <Home />{" "}
            </>
          }
        />
        <Route exact path="*" element={<Nopage />} />

        {/* routes end here  */}
      </Routes>
      <Footer />
    </Router>
  );
}
