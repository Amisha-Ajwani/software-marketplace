import React from "react";
import ProductThumb from "./ProductThumb";
import displayData from "../data.json";
import Navbar from "./nanvbar";
const Product = () => {
    // let productList = displayData;
    console.log(displayData);
    const productList = displayData.map((product)=> {
        return <ProductThumb name={product.product_name} productId={product.id} image={product.display_image} builtBy={product.built_by} rating={product.rating}></ProductThumb>
});
console.log(productList);

    // console.log(productList);
    return (
        <>
            {/* nav starts */}
            <Navbar />
            {/* nav ends */}
        <div className=" 2xl:container 2xl:mx-auto">
            <div className=" py-6 lg:px-20 md:px-6 px-4">
                <p className=" font-normal text-sm leading-3 text-gray-600 ">Home / Shop by Category / Desktop</p>
                <hr className=" w-full bg-gray-200 my-6" />

                <div className=" flex justify-between items-center">
                    <div className=" flex space-x-3 justify-center items-center">
                        <svg className=" cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.75 7.5H20.25" stroke="#1F2937" strokeMiterlimit="10" strokeLinecap="round" />
                            <path d="M3.75 12H20.25" stroke="#1F2937" strokeMiterlimit="10" strokeLinecap="round" />
                            <path d="M3.75 16.5H20.25" stroke="#1F2937" strokeMiterlimit="10" strokeLinecap="round" />
                        </svg>
                        <p className=" font-normal text-base leading-4 text-gray-800">Filter</p>
                    </div>
                    {/* <p className=" cursor-pointer hover:underline duration-100 font-normal text-base leading-4 text-gray-600">Showing 18 products</p> */}
                </div>

                <div className=" grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-12 mt-10">
                  
                            {productList}
                        {/* <ProductThumb name="ABC" price="1500" image="" builtBy="" rating=""></ProductThumb> */}
                        
                    {/* <div>
                        <div className="relative group">
                            <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                            <img className=" w-full" src="https://i.ibb.co/6g1KhhF/pexels-django-li-2956641-1.png" alt="A girl wearing dark blue suit and posing" />
                            <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                                <button className=" font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">Add to bag</button>
                                <button className=" bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">Quick View</button>
                            </div>
                        </div>
                        <p className=" font-normal text-xl leading-5 text-gray-800 md:mt-6 mt-4">Wilfred Alana Dress</p>
                        <p className=" font-semibold text-xl leading-5 text-gray-800 mt-4">$1550</p>
                        <p className=" font-normal text-base leading-4 text-gray-600 mt-4">2 colours</p>
                    </div>
                    <div>
                        <div className="relative group">
                            <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                            <img className=" w-full" src="https://i.ibb.co/KLDN7Vt/gbarkz-vq-Knu-G8-Ga-Qc-unsplash.png" alt="A girl posing and wearing white suit" />
                            <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                                <button className=" font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">Add to bag</button>
                                <button className=" bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">Quick View</button>
                            </div>
                        </div>

                        <p className=" font-normal text-xl leading-5 text-gray-800 md:mt-6 mt-4">Flared Cotton Tank Top</p>
                        <p className=" font-semibold text-xl leading-5 text-gray-800 mt-4">$1800</p>
                    </div>
                    <div>
                        <div className="relative group">
                            <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                            <img className=" w-full" src="https://i.ibb.co/5vxgf7V/pexels-quang-anh-ha-nguyen-884979-1.png" alt="Girl posing for an Img" />
                            <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                                <button className=" font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">Add to bag</button>
                                <button className=" bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">Quick View</button>
                            </div>
                        </div>

                        <p className=" font-normal text-xl leading-5 text-gray-800 md:mt-6 mt-4">Flared Cotton Tank Top</p>
                        <p className=" font-semibold text-xl leading-5 text-gray-800 mt-4">$1800</p>
                    </div>
                    <div>
                        <div className="relative group">
                            <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                            <img className=" w-full" src="https://i.ibb.co/HKFXSrQ/pietra-schwarzler-l-SLq-x-Qd-FNI-unsplash.png" alt="A blonde girl posing" />
                            <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                                <button className=" font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">Add to bag</button>
                                <button className=" bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">Quick View</button>
                            </div>
                        </div>

                        <p className=" font-normal text-xl leading-5 text-gray-800 md:mt-6 mt-4">Wilfred Alana Dress</p>
                        <p className=" font-semibold text-xl leading-5 text-gray-800 mt-4">$1550</p>
                        <p className=" font-normal text-base leading-4 text-gray-600 mt-4">2 colours</p>
                    </div>
                    <div>
                        <div className="relative group">
                            <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                            <img className=" w-full" src="https://i.ibb.co/BKsqym2/tracey-hocking-ve-Zp-XKU71c-unsplash.png" alt="A girl wearing white suit posing in desert" />
                            <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                                <button className=" font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">Add to bag</button>
                                <button className=" bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">Quick View</button>
                            </div>
                        </div>

                        <p className=" font-normal text-xl leading-5 text-gray-800 md:mt-6 mt-4">Flared Cotton Tank Top</p>
                        <p className=" font-semibold text-xl leading-5 text-gray-800 mt-4">$1800</p>
                    </div>
                    <div>
                        <div className="relative group">
                            <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                            <img className=" w-full" src="https://i.ibb.co/mbrk1DK/pexels-h-i-nguy-n-4034532.png" alt="Girl wearing pink suit posing" />
                            <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                                <button className=" font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">Add to bag</button>
                                <button className=" bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">Quick View</button>
                            </div>
                        </div>

                        <p className=" font-normal text-xl leading-5 text-gray-800 md:mt-6 mt-4">Flared Cotton Tank Top</p>
                        <p className=" font-semibold text-xl leading-5 text-gray-800 mt-4">$1800</p>
                    </div> */}
                </div>

                <div className=" flex justify-center items-center">
                    <button className=" hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 bg-gray-800 py-5 md:px-16 md:w-auto w-full lg:mt-28 md:mt-12 mt-10 text-white font-medium text-base leading-4">Load More</button>
                </div>
            </div>
        </div>
        </>
    );
};

export default Product;
