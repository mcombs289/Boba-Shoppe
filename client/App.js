import React from "react";

import Navbar from "./components/Navbar";
import Routes from "./Routes";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51Ll6xFBPVoNI1kWdYTQYZLfLWHG1A4lwzzWNU6u4CgN0SGXUnzHub3WTeTP9AeUki95aUwS5TuMLxR41aRbty1Xl00SBWkusoc"
);

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes />
    </div>
  );
};

export default App;
