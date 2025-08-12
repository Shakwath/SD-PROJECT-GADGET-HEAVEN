import { useEffect, useState } from "react";
import Gadget from "../Gadget/Gadget";
import './Gadgets.css'

const Gadgets = () => {
    const [gadgets, setGadgets] = useState([]);
    const [filteredGadgets, setFilteredGadgets] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All Product");

    useEffect(() => {
        fetch('./gadgets.json')
            .then(res => res.json())
            .then(data => {
                setGadgets(data);
                setFilteredGadgets(data); //  show all gadgets
            });
    }, []);

    // Filter gadgets by category
    const filterByCategory = (category) => {
        setSelectedCategory(category);

        if (category === "All Product") {
            setFilteredGadgets(gadgets);
        } else {
            const filtered = gadgets.filter(gadget => gadget.category === category);
            setFilteredGadgets(filtered);
        }
    };

    return (
        <div className="py-20 space-y-14">
            <h1 className="text-3xl font-bold">Explore Cutting-Edge Gadgets</h1>
            <div className="flex gap-6">
                {/* Menu */}
                <div className="border-2 p-5 flex flex-col gap-4 rounded-2xl h-fit">
                    <button
                        className={`btnClass ${selectedCategory === "All Product" ? "active" : ""}`}
                        onClick={() => filterByCategory("All Product")}
                    >
                        All Product
                    </button>
                    <button
                        className={selectedCategory === "Laptops" ? "active" : ""}
                        onClick={() => filterByCategory("Laptops")}
                    >
                        Laptops
                    </button>
                    <button
                        className={selectedCategory === "Phones" ? "active" : ""}
                        onClick={() => filterByCategory("Phones")}
                    >
                        Phones
                    </button>
                    
                    <button
                        className={selectedCategory === "Smart Watches" ? "active" : ""}
                        onClick={() => filterByCategory("Smart Watches")}
                    >
                        Smart Watches
                    </button>

                    <button
                        className={selectedCategory === "Accessories" ? "active" : ""}
                        onClick={() => filterByCategory("Accessories")}
                    >
                        Accessories
                    </button>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                    {filteredGadgets.map(gadget => (
                        <Gadget key={gadget.product_id} gadget={gadget}></Gadget>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gadgets;
