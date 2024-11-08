import Banner from "../Banner/Banner";
import Gadgets from "../Gadgets/Gadgets";
import { useEffect } from "react";

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