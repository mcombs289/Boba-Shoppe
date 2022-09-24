import React from "react";

import Navbar from "./components/Navbar";
import Routes from "./Routes";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes class="everythingButNav" />
    </div>
  );
};

export default App;
