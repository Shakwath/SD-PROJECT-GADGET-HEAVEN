import { GoogleAuthProvider, signOut, signInWithPopup } from "firebase/auth";
import auth from "../Firebase/Firebase.init";
import { useState } from "react";
import { GithubAuthProvider } from "firebase/auth";
import login from '../../assets/login.jpg';
import google from '../../assets/google-icon.png';
import github from '../../assets/icons8-github-50.png';
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';

const Login = () => {
    const [user, setUser] = useState(null);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                console.log(result);
                setUser(result.user);
            })
            .catch((error) => {
                console.error("ERROR", error);
                setUser(null);
            });
    };

    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
            .then((result) => {
                console.log(result.user);
                setUser(result.user);
            })
            .catch((error) => console.error("ERROR", error));
    };

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                console.log("Sign-out successful.");
                setUser(null);
            })
            .catch((error) => console.error(error));
    };

    return (
        
        <div className="flex flex-col md:flex-row items-center md:items-start p-6 gap-6 mt-14">
        
            {/* Left Side (Image) */}
            <div className="w-full md:w-1/2 flex justify-center items-center">
                <img
                    src={login}
                    alt="Login Illustration"
                    className="w-full h-auto object-cover rounded-lg shadow-lg"
                />
            </div>

            {/* Right Side (Login Form and User Info) */}
            <div className="w-full md:w-1/2 flex flex-col items-center">
            <h2 className="text-4xl mb-4">Login</h2>
                {/* Login Form */}
                <div className="w-full max-w-md">
                    <h2 className="mb-2 text-lg font-semibold text-left">Email</h2>
                    <label className="input input-bordered flex items-center gap-2 w-full mb-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            className="h-5 w-5 opacity-70">
                            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                        </svg>
                        <input
                            type="text"
                            className="grow w-full p-2 border rounded-md focus:outline-none"
                            placeholder="Enter Email"
                        />
                    </label>
                    <h2 className="mb-2 text-lg font-semibold text-left">Password</h2>
                    <label className="input input-bordered flex items-center gap-2 w-full mb-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-5 w-5 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <input
                            type="password"
                            className="grow w-full p-2 border rounded-md focus:outline-none"
                            placeholder="Enter Password"
                        />
                    </label>
                </div>
                <div className="w-9/12 flex flex-row justify-between mb-8">
                   <div>
                    <p>Don't Have Account? <Link className="text-cyan-700 font-bold" to="/signUp">Sign up</Link></p>
                    </div>
                    <div>
                      <NavLink to="/contact"> <h2 className="font-semibold text-cyan-700">Forget Password?</h2></NavLink>
                    </div>
                </div>

                 {/* Submit Button */}
                 <button
                        type="submit"
                        className="w-9/12 px-4 py-2 mb-4 bg-slate-800 text-white font-semibold rounded-md hover:bg-green-600 transition"
                    >
                        Submit
                    </button>
               
            {/* Buttons */}
            <div>
                <h2 className="font-semibold">Login with</h2>
                <div className="w-full max-w-md flex gap-4 mt-4 justify-center">
                    <button
                        onClick={handleGoogleSignIn}
                        className="flex items-center justify-center w-16 h-16 text-white font-semibold rounded-full">
                        <img
                            src={google}
                            alt="Google"
                            className="h-8 w-8"
                        />
                    </button>
                    <button
                        onClick={handleGithubSignIn}
                        className="flex items-center justify-center w-16 h-16 text-white font-semibold rounded-full">
                        <img
                            src={github}
                            alt="GitHub"
                            className="h-8 w-8"
                        />
                    </button>
                    
                </div>
            </div>
                 
                
                {/* Display User Info */}
                {user && (
                    <div className="mt-6 text-center">
                        <p className="text-lg font-semibold">Welcome, {user.displayName}!</p>
                        <p className="text-sm text-gray-700">{user.email}</p>
                        <img
                            src={user.photoURL}
                            alt="User Profile"
                            className="mt-4 w-24 h-24 rounded-full mx-auto"
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Login;
