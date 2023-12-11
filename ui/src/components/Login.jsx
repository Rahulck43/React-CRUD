import React, { useEffect, useState } from "react"
import loginValidation from "../utils/loginValidationSchema"
import { useFormik } from 'formik'
import axios from "axios"
// import { Link } from "react-router-dom"

const Login = () => {
    const [countryList, setCountryList] = useState([])

    const fetchCountry = async () => {
        // fetch("https://api.first.org/data/v1/countries")
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log("Response data:", data.data);

        const response = await axios.get("https://api.first.org/data/v1/countries")
        const countryNamesArray = Object.values(response?.data?.data).map(country => country.country);
        setCountryList(countryNamesArray)
    }
    useEffect(() => {
        fetchCountry()

    }, [])

    const onSubmit = async (values) => {
        try {
            console.log('form submitted successfully', values)
        } catch (error) {
            console.log('error occured while submitting the form')
        }
    }

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            mobile: '',
            address1: '',
            address2: '',
            country: '',
            state: '',
            zipCode: ''
        },
        validationSchema: loginValidation,
        onSubmit

    })

    return (

        <div className="flex  justify-center antialiased px-6 py-10  bg-gradient-to-br from-green-100 to-white">
            <div className="bg-white p-10 shadow-xl rounded-xl w-2/3  justify-center">
                <form onSubmit={handleSubmit} className="w-full">
                    <div id="input" className="flex flex-col w-full my-2">
                        <label htmlFor="firstName" className="text-gray-500 mb-2">First name </label>
                        <input
                            value={values.firstName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            id='firstName'
                            name="firstName"
                            type="text"
                            placeholder="Please insert your first name"
                            className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-2 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
                        />
                        {errors.firstName && touched.firstName && <p className="text-red-500">{errors.firstName}</p>}
                    </div>
                    <div id="input" className="flex flex-col w-full my-2">
                        <label htmlFor="lastName" className="text-gray-500 mb-2">Last name</label>
                        <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            value={values.lastName}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            placeholder="Enter your last name here"
                            className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-2 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
                        />
                        {errors.lastName && touched.lastName && <p className="text-red-500">{errors.lastName}</p>}
                    </div>
                    <div id="input" className="flex flex-col w-full my-2">
                        <label htmlFor="email" className="text-gray-500 mb-2">Email </label>
                        <input
                            id="email"
                            name="email"
                            type="text"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Enter your email here"
                            className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-2 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
                        />
                        {errors.email && touched.email && <p  >{errors.email}</p>}

                    </div>
                    <div id="input" className="flex flex-col w-full my-2">
                        <label htmlFor="mobile" className="text-gray-500 mb-2">Moblile number </label>
                        <input
                            id="mobile"
                            name="mobile"
                            type="text"
                            placeholder="Enter your mobile number here"
                            value={values.mobile}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-2 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
                        />
                        {errors.mobile && touched.mobile && <p className="text-red-500">{errors.mobile}</p>}
                    </div>
                    <div id="input" className="flex flex-col w-full my-2">
                        <label htmlFor="address1" className="text-gray-500 mb-2">Address 1 </label>
                        <input
                            id="address1"
                            name="address1"
                            type="text"
                            placeholder="Enter your address line 1 here"
                            value={values.address1}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-2 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
                        />
                        {errors.address1 && touched.address1 && <p className="text-red-500">{errors.address1}</p>}


                    </div>
                    <div id="input" className="flex flex-col w-full my-2">
                        <label htmlFor="address2" className="text-gray-500 mb-2">Address 2 </label>
                        <input
                            id="address2"
                            name="address2"
                            type="text"
                            placeholder="Enter your address line 2 here"
                            value={values.address2}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-2 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
                        />
                        {errors.address2 && touched.address2 && <p className="text-red-500">{errors.address2}</p>}


                    </div>
                    <div id="input" className="flex flex-col w-full my-2">
                        <label htmlFor="country" className="text-gray-500 mb-2">Country </label>
                        <select
                            id="country"
                            name="country"
                            type="text"
                            placeholder="select your country"
                            value={values.country}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-2 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
                        >
                            <option value="" disabled>Select your country</option>
                            {countryList.map((country, index) => (
                                <option key={index} value={country}>{country}</option>
                            ))}
                        </select>

                        {errors.country && touched.country && <p className="text-red-500">{errors.country}</p>}


                    </div>
                    <div id="input" className="flex flex-col w-full my-2">
                        <label htmlFor="state" className="text-gray-500 mb-2">State</label>
                        <input
                            id="state"
                            name="state"
                            type="text"
                            placeholder="Select your state here"
                            value={values.state}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-2 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
                        />
                        {errors.state && touched.state && <p className="text-red-500">{errors.state}</p>}


                    </div>
                    <div id="input" className="flex flex-col w-full my-2">
                        <label htmlFor="zipCode" className="text-gray-500 mb-2">Zip code</label>
                        <input
                            id="zipCode"
                            name="zipCode"
                            type="txt"
                            placeholder="Enter your zip code here"
                            value={values.zipCode}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-2 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
                        />
                        {errors.zipCode && touched.zipCode && <p className="text-red-500">{errors.zipCode}</p>}


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
                                <div className="font-bold">Sigin</div>
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
                </form>
            </div>
        </div>
    )
}


export default Login