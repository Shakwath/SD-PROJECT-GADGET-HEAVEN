import { useEffect, useState } from "react";
import Gadget from "../Gadget/Gadget";
import './Gadgets.css'

const Gadgets = () => {

    const [gadgets, setGadgets] = useState([]);
    useEffect(() => {
        fetch('./gadgets.json')
        .then(res => res.json())
        .then(data => setGadgets(data))
    },[])
    
    return (
        <div className="py-20 space-y-14">
            <h1 className="text-3xl font-bold">Explore Cutting-Edge Gadgets</h1>
            <div className="flex gap-6">
                {/* menu  */}
                <div className="border-2 p-5 flex flex-col gap-4 rounded-2xl h-fit">
                    <button className="btnClass">All Product</button>
                    <button>Laptops</button>
                    <button>Phones</button>
                    <button>Accessories</button>
                    <button>Smart Watches</button>
                </div>

                {/* Cards  */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                    {
                        gadgets.map(gadget => <Gadget key={gadget.product_id} gadget={gadget}></Gadget>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Gadgets;