import Image from "next/image";
import { useDispatch } from "react-redux";
import { addItem } from "@/redux/slice/cartSlice";

interface CardProps {
    img: string;
    text?: string;
}

const Card : React.FC<CardProps> = ({img , text}) => {

    const dispatch = useDispatch()
   
    return (<div className="">
    <div className="flex gap-2 " >
      
   


        <div className="h-[301px] w-[208px] rounded-md border border-gray-200" >
            <div className="border border-b border-gray-200 relative">

                <Image src={img} width={208} height={121} alt="" />
                <div onClick={()=>dispatch(addItem([{ price : 23 , name : "earphone"  , img : "hbfdhrefhb"}]))} className="absolute top-1 right-2">
                    <Image src={require("../../public/plus.svg")} width={26} height={26} alt="" className="cursor-pointer" />
                </div>

                {text && text == "Top pick" && <div className="absolute top-1 left-2 bg-[#56C984] text-white px-1.5 py-1.5 text-sm font-medium rounded-md">
                   {text}
                </div>}
                {text && text == "Lower price" && <div className="absolute top-1 left-2 bg-[#1E90D6] text-white px-1.5 py-1.5 text-sm font-medium rounded-md">
                   {text}
                </div>}
                {text && text == "Sale" && <div className="absolute top-1 left-2 bg-[#FF574D] text-white px-1.5 py-1.5 text-sm font-medium rounded-md">
                   {text}
                </div>}
                {/* FF574D   1E90D6*/}
            </div>
            <div className="pl-2 py-2">
                <div className="text-[11px] text-[#50BCD9]"> 1000 and 1 flowers</div>
                <div className="font-[600] text-[15px]">Beautiful bouquet</div>
                <div className="flex items-center h-[22px] gap-1 mt-5">
                    <div className="text-[#FFA31A] text-sm ">4.6</div>
                    <Image src={require("../../public/star1.svg")} width={18} height={18} alt="" />
                    <Image src={require("../../public/star1.svg")} width={18} height={18} alt="" />
                    <Image src={require("../../public/star1.svg")} width={18} height={18} alt="" />
                    <Image src={require("../../public/star1.svg")} width={18} height={18} alt="" />
                    <div className="text-sm text-gray-400">(1,000)</div>
                </div>
                <div className="mt-4">
                    <Image src={require("../../public/price.png")} width={53} height={22} alt="" />
                    {/* <Image src={img} width={53} height={22} alt="" /> */}
                </div>
                <div className="text-[11px] mt-4">
                    Typical range: $100-$600
                </div>
            </div>
        </div>



       


    </div>
    </div>
    );
}

export default Card;