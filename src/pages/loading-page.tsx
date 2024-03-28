import Navbar from "@/components/navbar";
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from 'next/router';


const Loading = () => {

    const router = useRouter()

    useEffect(() => {

        setTimeout(() => {
            router.push('/product')
        }, 2000);

    })
    return (<div>
        <div>
            <Navbar />
        </div>

        <div className="mt-32 flex w-full justify-center">
            <Image src={require("../../public/loading.svg")} height={100} width={100} alt="" />
        </div>
        <div className="text-center font-bold mt-4 text-lg">Generating Gift Ideas...</div>
        <div className="text-center mt-4 px-4">Hang tight. Our AI-Powered Genie is generating gift ideas. This can take about 5-10 seconds.</div>
    </div>);
}

export default Loading;