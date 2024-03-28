import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
    buying: yup.string().required('Field is required'),
    age: yup.number().required('Field is required'),
    gender: yup.string().required('Field is required'),
    message: yup.string().required('Field is required'),
});

interface formData {
    buying:string,
    age:number,
    gender:string,
    message:string,

}

interface SecondFormProps {
  setToggle: (value: boolean) => void;
  setFirstFormData: (data: any) => void;
  firstFormData?: formData;
}

const FirstForm = ({setToggle , setFirstFormData , firstFormData} : SecondFormProps) => {


    const { handleSubmit, register , formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        defaultValues: firstFormData
    });

    console.log('saurav' , errors)

    const onSubmit = (data: formData) => {
        console.log(data);
        setFirstFormData(data)
        setToggle(true)
      };


    return ( 
    
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col items-center mb-10">
          <div className="mt-9 font-semibold text-center text-[#101A34] md:text-[40px] text-[25px] ">
            Tell us about your gift recipent
          </div>

          <div className="mt-11 text-[#101A34] font-semibold w-[90%] md:w-[517px] space-y-7">
            <div className="w-full space-y-2">
              <label className="text-[18px] ">What are you buying for?</label>
              <div className="font-normal">
                <input
                  {...register("buying")}
                  type="text"
                  className="w-full h-[44px] border border-[#CAD3DD] focus:border-white focus:outline outline-[1.5px] outline-[#50BCD9] rounded-md px-2"
                />
                {errors.buying && <p className='text-red-500'>{errors.buying.message}</p>}
              </div>
            </div>

            <div className="w-full space-y-2">
              <label className="text-[18px] ">How old are they?</label>
              <div className="font-normal flex gap-3">
                <input
                 {...register("age")}
                  type="number"
                  className="w-[96px] h-[44px] border border-[#CAD3DD] focus:border-white focus:outline outline-[1.5px] outline-[#50BCD9] rounded-md px-8"
                />
                <div className=" h-[44px]   flex justify-center items-center">
                  years old
                </div>
              </div>
              {errors.age && <p className='text-red-500'>{errors.age.message}</p>}
            </div>

            <div className="w-full space-y-2">
              <label className="text-[18px] ">They identify as:</label>
              <>
                <div className="flex gap-2">
                  <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700 pr-2">
                    <input
                      id="bordered-radio-1"
                      type="radio"
                      value={"female"}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                      {...register('gender')}
                    />
                    <label
                      htmlFor="bordered-radio-1"
                      className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Female
                    </label>
                  </div>
                  <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700 pr-2">
                    <input
                      id="bordered-radio-2"
                      type="radio"
                      value={"male"}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                      {...register('gender')}
                    />
                    <label
                      htmlFor="bordered-radio-2"
                      className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Male
                    </label>
                  </div>

                  <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700 pr-2">
                    <input
                      id="bordered-radio-3"
                      type="radio"
                      value={"other"}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                      {...register('gender')}
                    />
                    <label
                      htmlFor="bordered-radio-3"
                      className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Other
                    </label>
                  </div>
                </div>
              </>
              {errors.gender && <p className='text-red-500 font-normal text-base'>{errors.gender.message}</p>}
            </div>
            
            <div className="w-full space-y-2">
              <label className="text-[18px] ">
                What do they like to do? Be specific!
              </label>
              <div className="font-normal w-full">
                <textarea
                 {...register("message")}
                  placeholder="Enter interests and hobbies"
                  className="w-full h-[99px] border border-[#CAD3DD] focus:border-white focus:outline outline-[1.5px] outline-[#50BCD9] rounded-md p-2"
                />
                 {errors.message && <p className='text-red-500'>{errors.message.message}</p>}
              </div>
             
            </div>

            <div className="w-full flex justify-between h-[44px]">
              <button className="h-full  w-[49%] border border-gray-500 rounded-md text-[#50BCD9]">
                {" "}
                Back
              </button>
              <button
                // onClick={() => setToggle(true)}
                className="h-full  w-[49%]  rounded-md text-white bg-[#50BCD9]"
              >
                {" "}
                Continue
              </button>
            </div>

            <div className="mt-8 font-normal text-base leading-6 text-center text-gray-500 max-md:max-w-full">
              Step 1 / 2
            </div>
          </div>
        </div>
    </form>  );
}
 
export default FirstForm;