const OnboardingForm = () => {
  return (
    <>
      <div className="flex flex-col gap-9">
        <div className="relative rounded-sm border border-stroke ">
          <div className="border-b border-stroke py-4 px-6.5">
            <h3 className="font-medium text-black">
              Recruiter OnBoarding Summary
            </h3>
          </div>

          <form action="#">
            <div className="p-6.5">
              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black">First name</label>
                  <input
                    type="text"
                    placeholder="Enter your first name"
                    className="w-full rounded border-[1.5px] border-stroke py-3 px-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-white"
                  />
                </div>

                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black">Last name</label>
                  <input
                    type="text"
                    placeholder="Enter your last name"
                    className="w-full rounded border-[1.5px] border-stroke py-3 px-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-white"
                  />
                </div>
              </div>

              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black">
                    Date Of Birth
                  </label>
                  <input
                    type="date"
                    placeholder="Enter your DOB"
                    className="w-full rounded border-[1.5px] border-stroke py-3 px-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-white"
                  />
                </div>

                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black">Gender</label>
                  <select
                    className="w-full rounded border-[1.5px] border-stroke py-3 px-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-white"
                    defaultValue="" // Default value for placeholder
                  >
                    <option value="" disabled>
                      Select your gender
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="mb-4.5">
                <label className="mb-2.5 block text-black">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full rounded border-[1.5px] border-stroke py-3 px-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-white"
                />
              </div>
              <div className="flex gap-4 mt-4">
                <button className="rounded bg-primary p-2 font-medium text-gray hover:bg-opacity-90">
                  OnBoard
                </button>
                <button className="rounded bg-primary p-2 font-medium text-gray hover:bg-opacity-90">
                  Close
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default OnboardingForm;
