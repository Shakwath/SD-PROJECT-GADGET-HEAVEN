import { NavLink } from "react-router-dom";

const Gadget = ({gadget}) => {

    const {product_image, product_title, price, product_id} = gadget;


    return (
        <div className=" bg-base-100 shadow-xl p-6 space-y-3 rounded-xl">
            {/* image  */}
            <figure>
                <img src={product_image} className="rounded-xl max-w-64 max-h-44 mx-auto" />
            </figure>

            {/* content  */}
            <div className="text-left  space-y-2">
                <h2 className="card-title">{product_title}</h2>
                <p>Price : ${price} </p>
                <div className="card-actions">
                <NavLink to={`/gadgets/${product_id}`}>
                    <button className="btn px-11 text-[#9538E2] text-lg bg-white rounded-full border-2 border-[#9538E2]">View Details</button>
                </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Gadget;