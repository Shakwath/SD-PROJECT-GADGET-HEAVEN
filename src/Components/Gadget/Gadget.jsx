const Gadget = ({gadget}) => {

    const {product_image, product_title, price} = gadget;

    return (
        <div className="card bg-base-100 shadow-xl">
            {/* image  */}
            <figure>
                <img src={product_image} className="rounded-xl max-w-64 max-h-44" />
            </figure>

            {/* content  */}
            <div className="card-body text-left">
                <h2 className="card-title">{product_title}</h2>
                <p>Price : ${price} </p>
                <div className="card-actions">
                <button className="btn text-[#9538E2] bg-white rounded-full border-2 border-[#9538E2]">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Gadget;