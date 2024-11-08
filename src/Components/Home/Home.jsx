import Banner from "../Banner/Banner";
import Gadgets from "../Gadgets/Gadgets";
import React, { useEffect, useState } from "react";

const Home = () => {

    useEffect(() => {
        document.title = "Home | Gadget-Haven";
      }, []);
    
    return (
        <div>
            <Banner></Banner>
            <Gadgets></Gadgets>

    </div>
  );
};

export default Home;