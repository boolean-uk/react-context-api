import React from "react";
import Header from "./components/Header";
import Tweets from "./components/Tweets";
import RightSide from "./components/RightSide";

function App() {
  return (
    <div className="container">
      <Header />
      <Tweets />
      <RightSide />
    </div>
  );
}

export { App };
