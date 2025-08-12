import { useLoaderData, useParams } from "react-router-dom";
import love from '../../assets/love.png';
import toast, { Toaster } from "react-hot-toast";
import shoppingcart from '../../assets/shopping-cart.png';
import { useState, useContext } from "react";
import { CartContext, WishlistContext } from "../Root/Root";

const Details = () => {
  const { product_id } = useParams();
  const data = useLoaderData();
  const id = parseInt(product_id);
  const gadget = data.find(gadget => gadget.product_id === id);

  const { addToCart } = useContext(CartContext);
  const { addToWhishList, wCart } = useContext(WishlistContext);
  const [wishlistAdded, setWishlistAdded] = useState(false);

  const handleAddToWishlist = (gadget) => {
    if (!wCart.some((item) => item.product_id === gadget.product_id)) {
      addToWhishList(gadget);
      toast.success("Added to wishlist");
      setWishlistAdded(true);
    } else {
      toast("Item already in wishlist");
    }
  };

  const {
    product_image,
    product_title,
    availability,
    Specification,
    description,
    price,
    rating,
  } = gadget;

  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />

      {/* Banner */}
      <div className="bg-[#9538E2] pt-10 pb-56 px-48 text-center text-white flex flex-col justify-center gap-4 rounded-xl">
        <h3 className="text-2xl font-bold">Product Details</h3>
        <p>
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>

      {/* Details Card */}
      <div className="flex justify-center items-center gap-5 shadow-xl p-7 rounded-xl w-3/4 mx-auto mt-[-180px] bg-white">
        <img className="w-72" src={product_image} alt={product_title} />
        <div className="text-left space-y-4">
          <h3 className="text-2xl font-bold">{product_title}</h3>
          <h4 className="text-lg">Price: $ {price}</h4>
          <button className="bg-[#309C081A] border-2 border-[#309C08] text-[#309C08] rounded-full">
            In Stock
          </button>
          <p className="text-[#09080F99]">{description}</p>

          <div>
            <h4 className="text-xl font-bold">Specifications</h4>
            <ol className="list-decimal pl-6 text-gray-400">
              {Specification.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ol>
          </div>

          <div>
            <h4 className="text-xl font-bold">Rating</h4>
            <div className="flex gap-4 items-center">
              <div className="rating">
                {[...Array(5)].map((_, i) => (
                  <input
                    key={i}
                    type="radio"
                    name="rating"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked={i + 1 === Math.round(rating)}
                  />
                ))}
              </div>
              <p className="bg-gray-200 p-2 rounded-full w-10 text-center">{rating}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              className={`${
                gadget.availability ? "" : "btn-disabled"
              } btn bg-[#9538E2] w-[193px] text-white rounded-xl`}
              onClick={() => {
                addToCart(gadget);
                toast.success("Added to cart");
              }}
            >
              Add to cart <img src={shoppingcart} className="w-[24px]" alt="" />
            </button>
            <button
              className={`btn btn-outline h-[48px] rounded-full ${
                wishlistAdded ? "btn-disabled" : ""
              }`}
              onClick={() => handleAddToWishlist(gadget)}
              disabled={wishlistAdded}
            >
              <img src={love} className="w-[24px]" alt="wishlist" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
