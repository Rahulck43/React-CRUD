import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
        <div className='flex flex-col justify-around items-center '>
             <div id="button" className="flex flex-col w-full mt-4">
                        <button
                            type="submit"
                            className="w-full py-4 bg-green-600 rounded-lg text-green-100"
                        >
                            <div className="flex flex-row items-center justify-center">
                                <div className="mr-2">
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                                        ></path>
                                    </svg>
                                </div>
                                <Link to="/signup"  className="font-bold">Sign up </Link>
                            </div>
                        </button>
                        
                    </div>

                    <div id="button" className="flex flex-col w-full mt-4">
                        <button
                            type="submit"
                            className="w-full py-4 bg-green-600 rounded-lg text-green-100"
                        >
                            <div className="flex flex-row items-center justify-center">
                                <div className="mr-2">
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                                        ></path>
                                    </svg>
                                </div>
                                <div className="font-bold">View users</div>
                            </div>
                        </button>
                        <div className="flex justify-evenly mt-5">
                            {/* <Link
                                            to="/signup"
                                            className="text-black-500 font-bold hover:text-red-700"
                                        >
                                            Signup
                                        </Link> */}
                        </div>
                    </div>
                    </div>
        </>
    )
}

export default Home