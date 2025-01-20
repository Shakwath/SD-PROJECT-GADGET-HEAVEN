import { useEffect, useState } from "react";
import Gadget from "../Gadget/Gadget";
import './Gadgets.css'

const Gadgets = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [gadgets, setGadgets] = useState([]);
    useEffect(() => {
        fetch('./gadgets.json')
        .then(res => res.json())
        .then(data => setGadgets(data))
    },[])
    const handleCategoryClick = (event, category) => {
        event.preventDefault();
        setSelectedCategory(category);
        if (category === "All") {
          setGadgets(gadgetsData);
        } else {
          const filteredGadgets = gadgetsData.filter(
            (gadget) => gadget.category === category
          );
          setGadgets(
            filteredGadgets.length > 0
              ? filteredGadgets
              : [{ product_id: 0, product_title: "No data found" }]
          );
        }
      };
    
      const handleDetailsClick = (event, productId) => {
        event.preventDefault();
        navigate(`/details/${productId}`); // Changed to use navigate
      };
    
    return (
        // <div className="py-20 space-y-14">
        //     <h1 className="text-3xl font-bold">Explore Cutting-Edge Gadgets</h1>
        //     <div className="flex gap-6">
        //         {/* menu  */}
        //         <div className="border-2 p-5 flex flex-col gap-4 rounded-2xl h-fit">
        //             <button className="btnClass">All Product</button>
        //             <button>Laptops</button>
        //             <button>Phones</button>
        //             <button>Accessories</button>
        //             <button>Smart Watches</button>
        //         </div>

        //         {/* Cards  */}
        //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        //             {
        //                 gadgets.map(gadget => <Gadget key={gadget.product_id} gadget={gadget}></Gadget>)
        //             }
        //         </div>
        //     </div>
        // </div>
        <div className="flex">
        <div className="w-1/4 p-5">
          <h2 className="text-center text-[24px] font-bold text-[#0B0B0B] mb-4">
            Categories
          </h2>
          <ul className="flex flex-col gap-2">
            {[
              "All",
              "Computers",
              "Phones",
              "Smart Watches",
              "Chargers",
              "Power Banks",
            ].map((category) => (
              <li key={category} className="text-[18px]">
                <button
                  className={`btn w-[192px] ${
                    selectedCategory === category ? "btn-active" : ""
                  }`}
                  style={{ color: "rgba(9, 8, 15, 0.6)" }}
                  onClick={(event) => handleCategoryClick(event, category)}>
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-3/4 p-5">
          <h2 className="text-center text-[40px] font-bold text-[#0B0B0B] mb-4">
            Explore Cutting-Edge Gadgets
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {gadgets.map((gadget) => (
              <div key={gadget.product_id} className="card card-bordered p-4">
                {gadget.product_id !== 0 ? (
                  <>
                    <img
                      src={gadget.product_image}
                      alt={gadget.product_title}
                      className="w-full h-48 object-cover mb-4 rounded-md"
                    />
                    <h3 className="text-[20px] font-bold mb-2">
                      {gadget.product_title}
                    </h3>
                    <p className="text-[16px] mb-2">${gadget.price}</p>
                    <button
                      className="btn"
                      onClick={(event) =>
                        handleDetailsClick(event, gadget.product_id)
                      }>
                      Details
                    </button>
                  </>
                ) : (
                  <h3 className="text-[20px] font-bold mb-2">
                    {gadget.product_title}
                  </h3>
                )}
              </div>
            ))}
          </div>
        </div>
        </div>
    );
};

export default Gadgets;