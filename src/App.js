import React from "react";

import { Chef, Header, Intro, Laurels, SpecialMenu } from "./container";
import { Navbar } from "./components";
import "./App.css";

const App = () => (
  <div className="wrapper">
    <Navbar />
    <Header />
    {/* <AboutUs /> */}
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: `var(--color-black)`,
        padding: "30px 10px",
      }}
    >
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSd_tZb0l7xXM_xhyQ-BU9sB7T1ZkeRB2Q-A47MGCTYXpA170Q/viewform?embedded=true"
        width="640"
        height="991"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
				title="iframe"
      >
        Загрузка…
      </iframe>
    </div>
    {/* <Gallery />
    <FindUs />
    <Footer /> */}
  </div>
);

export default App;
