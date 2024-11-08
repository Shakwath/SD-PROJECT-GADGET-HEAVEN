import { useLoaderData, useParams } from "react-router-dom";
import love from '../../assets/love.png';
import toast, { Toaster } from "react-hot-toast";
import shoppingcart from '../../assets/shopping-cart.png'
import { useState } from "react";
import { CartContext, WishlistContext } from "../Root/Root";
import React, { useContext } from 'react';



const notify = (message) => {
  toast(message);
  return <Toaster position="top-right" reverseOrder={false} />;
};

const Details = () => {

    const {product_id} = useParams();
    console.log(product_id);

    const data = useLoaderData();
    console.log(data);
    
    const id = parseInt(product_id);
    console.log(id);

    const gadget = data.find(gadget => gadget.product_id === id);
    console.log(gadget);
    const { addToCart } = useContext(CartContext); 
    const { addToWhishList, wCart } = useContext(WishlistContext); 
  
    const [wishlistAdded, setWishlistAdded] = useState(false);
  
    const handleAddToWishlist = (gadget) => {
      if (!wCart.some((item) => item.product_id === gadget.product_id)) {
        addToWhishList(gadget);
        notify("Added to wishlist");
        setWishlistAdded(true);
      } else {
        notify("Item already in wishlist");
      }
    };

    const {product_image, product_title, availability, Specification, description, price, rating} = gadget;
    return (
        <div>
            {/* banner div  */}
            <div className="bg-[#9538E2] pt-10 pb-56 px-48 text-center text-white flex flex-col justify-center gap-4 rounded-xl">
                <h3 className="text-2xl font-bold">Product Details</h3>
                <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>

            {/* detals div  */}
            <div>
                <div className="flex justify-center items-center gap-5 shadow-xl p-7 rounded-xl w-3/4 mx-auto mt-[-180px] bg-white">
                <img className="w-72" src={product_image} />
                <div className="text-left space-y-4">

                    {/* Title  */}
                    <h3 className="text-2xl font-bold">{product_title}</h3>

                    {/* Price  */}
                    <h4 className="text-lg">Price: $ {price}</h4>

                    <button className="bg-[#309C081A] border-2 border-[#309C08] text-[#309C08] rounded-full">In Stock</button>

                    {/* Description  */}
                    <p className="text-[#09080F99]">{description}</p>

                    {/* Specifications div*/}
                    <div>
                        <h4 className="text-xl font-bold">Specifications</h4>
                        <ol type="number">
                        {
                        Specification.map(spec => 
                            (
                                <li className="text-base text-gray-400 pl-4">{spec}</li>
                            ))
                        }
                        </ol>
                    </div>

                    {/* Rating div  */}
                    <div>
                        <h4 className="text-xl font-bold">Rating</h4>
                        <div className="flex gap-4 items-center">

                            {/* Rating star  */}
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input
                                    type="radio"
                                    name="rating-2"
                                    className="mask mask-star-2 bg-orange-400"
                                    defaultChecked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>

                            {/* rating text  */}
                            <p className="bg-gray-200 p-2 rounded-full w-10">{rating}</p>
                        </div> 
                    </div>


                     <div className="flex flex-row items-center justify-start">
              <button
                className={`${
                  gadget.availability ? "" : "btn-disabled"
                } btn mr-2 my-2 bg-[#9538E2] w-[193px] text-white rounded-xl`}
                onClick={() => {
                  addToCart(gadget);
                  notify("Added to cart");
                }} // Add to cart on click
                >
                Add to cart <img src={shoppingcart} className="w-[24px]" />
              </button>
              <button
                className={`btn btn-outline h-[48px] rounded-full ${
                  wishlistAdded ? "btn-disabled" : ""
                }`}
                onClick={() => handleAddToWishlist(gadget)}
                disabled={wishlistAdded}>
                <img src={love} className="w-[24px]"></img>
              </button>
            </div>
                      
                </div>
                </div>
            </div>
        </div>
    );
};

export default Details;