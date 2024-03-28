import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Image from 'next/image';
import { useRouter } from 'next/router';

const schema = yup.object().shape({
    occassion: yup.string().required('Field is required'),
    spend: yup.number().required('Field is required'),
    country: yup.string().required('Field is required'),
    option: yup.string().required('Field is required'),
});

interface formData {
    occassion:string,
    spend:number,
    country:string,
    option : string,
   

}

const options = [
    { value: "option1", label: "Thoughtful" },
    { value: "option2", label: "Practical" },
    { value: "option3", label: "Funny" },
    { value: "option4", label: "Romantic" },
    { value: "option5", label: "Sentimental" },
    { value: "option6", label: "Entertaining" },
  ];

  interface SecondFormProps {
    setToggle: (value: boolean) => void;
    setSecondFormData: (data: any) => void;
    seconddFormData? : formData;
  }

const SecondForm = ({setToggle , setSecondFormData , seconddFormData} : SecondFormProps) => {

    const router = useRouter()


    const { handleSubmit, register , formState: { errors } , getValues } = useForm({
        resolver: yupResolver(schema),
        defaultValues: seconddFormData
    });

    const handleBack = ()=>{
       const data = getValues()
       setSecondFormData(data)
       setToggle(false)
    }

    const onSubmit = (data: formData) => {
        console.log(data);
        setSecondFormData(data)
        router.push('/loading-page')
        
      };


    return ( 
    
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col items-center mb-10">
          <div className="mt-9 font-semibold text-center text-[#101A34] md:text-[40px] text-[25px] ">
            Help us find the right gift!
          </div>

          <div className="mt-11 text-[#101A34] font-semibold w-[90%] md:w-[517px] space-y-7">
            <div className="w-full space-y-2">
              <label className="text-[18px] ">What&apos;s the occasion?</label>
              <div className="font-normal">
                <input
                  type="text"
                  className="w-full h-[44px] border border-[#CAD3DD] focus:border-white focus:outline outline-[1.5px] outline-[#50BCD9] rounded-md px-2"
                  {...register("occassion")}
                />
                {errors.occassion && <p className='text-red-500 font-normal text-base'>{errors.occassion.message}</p>}
              </div>
            </div>

            <div className="w-full space-y-2">
              <label className="text-[18px] ">Choose an option:</label>
              <select
                id="options"
                {...register('option')}
                className="w-full h-[44px] border border-[#CAD3DD] focus:border-white focus:outline outline-[1.5px] outline-[#50BCD9] rounded-md px-2 font-normal"
              >
                {options.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                    className="w-100 border-b border-gray-300"
                  >
                    {option.label}
                  </option>
                ))}
              </select>
              {errors?.option && <p className='text-red-500 font-normal text-base'>{errors.option.message}</p>}
            </div>

            <div className="w-full space-y-2">
              <label className="text-[18px] ">
                What&apos;s the maximum you&apos;re willing to spend?
              </label>
              <div className="font-normal flex gap-4">
                <div className="w-[96px] h-[44px] border border-[#CAD3DD] rounded-md px-2 flex justify-center items-center">
                  USD
                </div>
                <input
                   {...register("spend")}
                  type="number"
                  className="w-[96px] h-[44px] border border-[#CAD3DD] focus:border-white focus:outline outline-[1.5px] outline-[#50BCD9] rounded-md px-8"
                />
                 {errors.spend && <p className='text-red-500 font-normal text-base'>{errors.spend.message}</p>}
              </div>
            </div>
            <div className="w-full space-y-2">
              <label className="text-[18px] ">
                What country should we return the results for?
              </label>
              <div className="font-normal">
                <input
                 {...register("country")}
                  type="text"
                  className="w-[96px] h-[44px] border border-[#CAD3DD] focus:border-white focus:outline outline-[1.5px] outline-[#50BCD9] rounded-md px-8"
                />
                 {errors.country && <p className='text-red-500 font-normal text-base'>{errors.country.message}</p>}
              </div>
            </div>

            <div className="w-full flex justify-between h-[44px]">
              <button
               onClick={handleBack}
                className="h-full  w-[49%] border border-gray-500 rounded-md text-[#50BCD9]"
              >
                {" "}
                Back
              </button>
              <div className="justify-center items-center gap-10 flex w-[49%] ">
                <button className="px-2 bg-gradient-to-r from-sky-400 to-fuchsia-500 rounded-[7px] justify-center items-center gap-1 flex w-full h-full">
                  <Image
                    src={require("../../public/star.svg")}
                    height={17}
                    width={17}
                    alt=""
                  />
                  <div className="text-center text-white text-[15px] font-semibold font-['Poppins'] leading-[33px]">
                    AI Gift Ideas
                  </div>
                </button>
              </div>
            </div>

            <div className="mt-8 font-normal text-base leading-6 text-center text-gray-500 max-md:max-w-full">
              Step 2 / 2
            </div>
          </div>
        </div>
    </form>  );
}
 
export default SecondForm;