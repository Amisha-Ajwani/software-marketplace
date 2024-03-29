import React from "react";
import { Link } from "react-router-dom";

const ProductThumb = (props) => {
    return (
        <>
        <div className=" relative ">
                        <div className=" absolute top-0 left-0 py-2 px-4 bg-white bg-opacity-50 ">
                            <p className="text-xs leading-3 text-gray-800">New</p>
                        </div>
                        <div className=" relative group">
                            <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                            <img className=" w-full" src={props.image} />
                            <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                                {/* <button className=" font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">Contact Developer</button> */}
                                <Link className=" bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white" to={"product/"+props.productId}>Quick View</Link>
                            </div>
                        </div>
                        <p className=" font-normal text-xl leading-5 text-gray-800 md:mt-6 mt-4">{props.name}</p>
                        {/* <p className=" font-semibold text-xl leading-5 text-gray-800 mt-4">${props.price}</p> */}
                        <p className=" font-normal text-base leading-4 text-gray-600 mt-4">{props.builtBy}</p>
        </div>
        <div className=" relative ">
                        <div className=" absolute top-0 left-0 py-2 px-4 bg-white bg-opacity-50 ">
                            <p className="text-xs leading-3 text-gray-800">New</p>
                        </div>
                        <div className=" relative group">
                            <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                            <img className=" w-full" src={props.image} />
                            <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                                {/* <button className=" font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">Contact Developer</button> */}
                                <Link className=" bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white" to={"product/"+props.productId}>Quick View</Link>
                            </div>
                        </div>
                        <p className=" font-normal text-xl leading-5 text-gray-800 md:mt-6 mt-4">{props.name}</p>
                        {/* <p className=" font-semibold text-xl leading-5 text-gray-800 mt-4">${props.price}</p> */}
                        <p className=" font-normal text-base leading-4 text-gray-600 mt-4">{props.builtBy}</p>
        </div>
        <div className=" relative ">
                        <div className=" absolute top-0 left-0 py-2 px-4 bg-white bg-opacity-50 ">
                            <p className="text-xs leading-3 text-gray-800">New</p>
                        </div>
                        <div className=" relative group">
                            <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                            <img className=" w-full" src={props.image} />
                            <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                                {/* <button className=" font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">Contact Developer</button> */}
                                <Link className=" bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white" to={"product/"+props.productId}>Quick View</Link>
                            </div>
                        </div>
                        <p className=" font-normal text-xl leading-5 text-gray-800 md:mt-6 mt-4">{props.name}</p>
                        {/* <p className=" font-semibold text-xl leading-5 text-gray-800 mt-4">${props.price}</p> */}
                        <p className=" font-normal text-base leading-4 text-gray-600 mt-4">{props.builtBy}</p>
        </div>
        </>
    );
}

export default ProductThumb;