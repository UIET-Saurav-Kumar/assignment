import Card from "@/components/card";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";


const Product = () => {
    return (
        <div className="">
            <div>
                <Navbar authorize={false} />
            </div>
            <div className="p-10 md:p-18 text-[24px] font-semibold">
                <div>
                    <div>
                        <span className="bg-gradient-to-r from-sky-400 to-fuchsia-500 h-10 text-transparent bg-clip-text">
                            Genie
                        </span>
                        : AI Gift Ideas
                    </div>

                    <div className="relative mt-4">
                        <input
                            type="text"
                            className="w-full h-[92px] border border-[#CAD3DD] focus:border-white focus:outline outline-[1.5px] outline-[#50BCD9] rounded-md pl-8 pr-20 font-normal"
                            placeholder="Recommend birthday gift ideas for my 55 year old mother. She likes picklenall, g..."
                        />
                        <div className="bg-gradient-to-r from-sky-400 to-fuchsia-500 justify-center items-center gap-1 flex rounded-full w-[44px] h-[44px] absolute top-6 right-4">
                            <Image
                                src={require("../../public/star.svg")}
                                height={17}
                                width={17}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="text-xs text-gray-700 font-normal mt-4">
                        Not liking these suggestion? try again with more details or{" "}
                        <span className="text-[#50BCD9] font-medium">
                            get help from Genie
                        </span>
                    </div>
                    <div className=" ">
                        <div className="mt-28 flex justify-between items-center  md:mx-8 mx-0">
                            <div className="">1. Beauty gift basket</div>
                            <div className="text-sm text-[#50BCD9] flex items-centers">
                                see more{" "}
                                <Image
                                    src={require("../../public/thinRightArrow.svg")}
                                    height={18}
                                    width={18}
                                    alt=""
                                    className="mt-1"
                                />
                            </div>
                        </div>
                        <div className="mt-4 flex  justify-center relative">
                            <div className=" flex gap-2 justify-start overflow-x-auto ">
                                <Card img={require("../../public/product/earphone.png")} />

                                <Card
                                    img={require("../../public/product/flower.png")}
                                    text="Top pick"
                                />
                                <Card
                                    img={require("../../public/product/ticket.png")}
                                    text="Lower price"
                                />
                                <Card img={require("../../public/product/guitar.png")} />
                                <Card
                                    img={require("../../public/product/shoe.png")}
                                    text="Sale"
                                />
                            </div>
                            <div className="absolute z-30 top-[50%] -right-4 h-10 w-10 rounded-full border border-gray-200 flex items-center justify-center cursor-pointer">
                                <Image
                                    src={require("../../public/right-arrow.png")}
                                    width={8}
                                    height={8}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <div className=" ">
                        <div className="mt-10 flex justify-between items-center  md:mx-8 mx-0">
                            <div className="">2. Title here</div>
                            <div className="text-sm text-[#50BCD9] flex items-centers">
                                see more{" "}
                                <Image
                                    src={require("../../public/thinRightArrow.svg")}
                                    height={18}
                                    width={18}
                                    alt=""
                                    className="mt-1"
                                />
                            </div>
                        </div>
                        <div className="mt-4 flex  justify-center relative">
                            <div className=" flex gap-2 justify-start overflow-x-auto ">
                                <Card img={require("../../public/product/earphone.png")} />

                                <Card
                                    img={require("../../public/product/flower.png")}
                                    text="Top pick"
                                />
                                <Card
                                    img={require("../../public/product/ticket.png")}
                                    text="Lower price"
                                />
                                <Card img={require("../../public/product/guitar.png")} />
                                <Card
                                    img={require("../../public/product/shoe.png")}
                                    text="Sale"
                                />
                            </div>
                            <div className="absolute z-30 top-[50%] -right-4 h-10 w-10 rounded-full border border-gray-200 flex items-center justify-center cursor-pointer">
                                <Image
                                    src={require("../../public/right-arrow.png")}
                                    width={8}
                                    height={8}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <div className=" ">
                        <div className="mt-10 flex justify-between items-center  md:mx-8 mx-0">
                            <div className="">3. Title here</div>
                            <div className="text-sm text-[#50BCD9] flex items-centers">
                                see more{" "}
                                <Image
                                    src={require("../../public/thinRightArrow.svg")}
                                    height={18}
                                    width={18}
                                    alt=""
                                    className="mt-1"
                                />
                            </div>
                        </div>
                        <div className="mt-4 flex  justify-center relative">
                            <div className=" flex gap-2 justify-start overflow-x-auto ">
                                <Card img={require("../../public/product/earphone.png")} />

                                <Card
                                    img={require("../../public/product/flower.png")}
                                    text="Top pick"
                                />
                                <Card
                                    img={require("../../public/product/ticket.png")}
                                    text="Lower price"
                                />
                                <Card img={require("../../public/product/guitar.png")} />
                                <Card
                                    img={require("../../public/product/shoe.png")}
                                    text="Sale"
                                />
                            </div>
                            <div className="absolute z-30 top-[50%] -right-4 h-10 w-10 rounded-full border border-gray-200 flex items-center justify-center cursor-pointer">
                                <Image
                                    src={require("../../public/right-arrow.png")}
                                    width={8}
                                    height={8}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Product;
