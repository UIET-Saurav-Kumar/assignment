import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { CartData } from "@/redux/slice/cartSlice";

const Navbar = ({authorize = true}) => {

    const data = useSelector((state : CartData) => state)

    console.log(data)


    return (<div className="flex items-center h-[76px] bg-[#F9F9F9] justify-around border-b border-gray-300 w-full" >

       <Link href={'/'}> <div className="flex text-[25px]">
            <div className="text-[#101A34] flex font-semibold">
                <div>G</div>
                <div >I</div> 
                <div>F</div>
                <div>T</div>
            </div>
            <div className="text-[#101A34] flex font-light">
                <div>L</div>
                <div>I</div>
                <div>S</div>
                <div>T</div>
            </div>
        </div></Link>

        <div className="md:block hidden">

            <div className="flex gap-5 justify-between items-center  h-full font-semibold text-base ">

                <div className="justify-center items-center gap-10 flex">
                    <div className="px-2 bg-gradient-to-r from-sky-400 to-fuchsia-500 rounded-[7px] justify-center items-center gap-1 flex">
                        <Image src={require('../../public/star.svg')} height={17} width={17} alt="" />
                        <div className="text-center text-white text-[15px] font-semibold font-['Poppins'] leading-[33px]">
                            AI Gift Ideas
                        </div>
                    </div>
                </div>

                <div className="">Lists</div>
                <div className="">Gift Exchange</div>
                <div className="">Shop</div>
                <div className="">Occasions</div>
                <div className="">Ecards</div>
                <div className="">Blog</div>
                <div className="">FAQ</div>
            </div>
        </div>

       {authorize && <div className="flex items-center gap-1.5 font-semibold">
            <div className="">Jane Smith</div>
            <Image src={require('../../public/avtar/image.png')} height={30} width={30} alt="" />

        </div>}
       {!authorize && <div className="flex items-center gap-1.5 font-semibold h-[40px]">
           
            <button className="h-full w-[100px]">Log in</button>
            <button className="bg-black text-white  h-full w-[100px]  px-4 rounded-lg">Sing Up</button>

        </div>}


    </div>);
}

export default Navbar;