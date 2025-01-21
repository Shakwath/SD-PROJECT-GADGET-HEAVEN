import React, { useState } from 'react';
import login from '../../assets/login.jpg';
import { Link } from 'react-router-dom';
import signup from '../../assets/signup.png';

const SignUp = () => {
    const [showModal, setShowModal] = useState(false); // State for modal visibility
    const [modalMessage, setModalMessage] = useState(''); // State for dynamic modal message

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        setModalMessage('Thanks for Submitting!'); // Set dynamic message
        setShowModal(true); // Show the modal
    };

    const closeModal = () => {
        setShowModal(false); 
    };

    return (
        <div className="flex flex-col md:flex-row items-center md:items-start p-6 gap-6 mt-14">
            {/* Left Side (Image) */}
            <div className="w-full md:w-1/2 flex justify-center items-center">
                <img
                    src={signup}
                    alt=""
                    className="w-full h-auto object-cover rounded-lg shadow-lg"
                />
            </div>

            {/* Right Side (Sign Up Form) */}
            <div className="w-full md:w-1/2 flex flex-col items-center">
                <h2 className="text-4xl mb-4">Sign Up</h2>
                <form className="w-full max-w-md" onSubmit={handleSubmit}>
                    {/* Username */}
                    <h2 className="mb-2 text-lg font-semibold text-left">Username</h2>
                    <label className="input input-bordered flex items-center gap-2 w-full mb-4">
                        <input
                            type="text"
                            className="grow w-full p-2 border rounded-md"
                            placeholder="Enter username"
                            required
                        />
                    </label>

                    {/* Email */}
                    <h2 className="mb-2 text-lg font-semibold text-left">Email</h2>
                    <label className="input input-bordered flex items-center gap-2 w-full mb-4">
                        <input
                            type="email"
                            className="grow w-full p-2 border rounded-md"
                            placeholder="Enter Email"
                            required
                        />
                    </label>

                    {/* Password */}
                    <h2 className="mb-2 text-lg font-semibold text-left">
                        Password (Minimum 6 characters)
                    </h2>
                    <label className="input input-bordered flex items-center gap-2 w-full mb-4">
                        <input
                            type="password"
                            className="grow w-full p-2 border rounded-md"
                            placeholder="Enter Password"
                            required
                            minLength={6}
                        />
                    </label>

                    {/* Confirm Password */}
                    <h2 className="mb-2 text-lg font-semibold text-left">Confirm Password</h2>
                    <label className="input input-bordered flex items-center gap-2 w-full mb-4">
                        <input
                            type="password"
                            className="grow w-full p-2 border rounded-md"
                            placeholder="Enter Password"
                            required
                        />
                    </label>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full px-4 py-2 bg-slate-800 text-white font-semibold rounded-md hover:bg-green-600 transition"
                    >
                        Submit
                    </button>
                </form>

                {/* Already Have Account */}
                <div className="w-9/12 flex flex-row justify-between mt-4">
                    <p>
                        Already Have Account?{" "}
                        <Link className="text-cyan-700 font-bold" to="/login">
                            Login
                        </Link>
                    </p>
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
                        <h2 className="text-2xl font-bold mb-4 text-center">{modalMessage}</h2>
                        <button
                            onClick={closeModal}
                            className="block mx-auto px-4 py-2 bg-cyan-700 text-white rounded-md hover:bg-cyan-800 transition"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SignUp;
