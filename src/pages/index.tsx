import Image from "next/image";
import { useState } from "react";
import Navbar from "@/components/navbar";
import FirstForm from "@/components/firstForm";
import SecondForm from "@/components/secondForm";



export default function Home() {
  const [toggle, setToggle] = useState(false);
  const [firstFormData, setFirstFormData] = useState()
  const [seconddFormData, setSecondFormData] = useState()


  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <main className="">
      <Navbar />

      <div className="flex justify-center mt-10">
        <Image
          src={require("../../public/box.png")}
          width={108}
          height={108}
          alt=""
        />
      </div>

      {/* First Page */}
      {!toggle && (
        <FirstForm setToggle={setToggle} setFirstFormData={setFirstFormData} firstFormData={firstFormData} />
      )}

      {/* Second Page */}
      {toggle && (
        <SecondForm setToggle={setToggle} setSecondFormData={setSecondFormData} seconddFormData={seconddFormData} />
      )}

    
    </main>
  );
}
