import React, { useRef } from 'react';

const OnboardingForm = () => {
  // Separate refs for mobile and email OTP inputs
  const mobileOtpRefs = useRef<(HTMLInputElement | null)[]>([]);
  const emailOtpRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Common function to handle OTP input
  const handleOTPChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    refs: React.MutableRefObject<(HTMLInputElement | null)[]>,
  ) => {
    const { value } = e.target;

    if (/^\d$/.test(value)) {
      // Navigate to the next input if a single digit is entered
      if (index < refs.current.length - 1) {
        refs.current[index + 1]?.focus();
      }
    } else if (value === '') {
      // Navigate to the previous input if backspace is pressed
      if (index > 0) {
        refs.current[index - 1]?.focus();
      }
    } else {
      // Remove invalid input
      e.target.value = '';
    }
  };

  return (
    <>
      <div className="flex flex-col gap-9">
        <div className="relative rounded-sm border border-stroke">
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
                <label className="mb-2.5 block text-black">Address</label>
                <input
                  type="text"
                  placeholder="Enter your address"
                  className="w-full rounded border-[1.5px] border-stroke py-3 px-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-white"
                />
              </div>

              {/* Mobile Number and OTP fields */}
              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black">
                    Mobile Number
                  </label>
                  <input
                    type="number"
                    placeholder="Enter your mobile number"
                    className="w-full rounded border-[1.5px] border-stroke py-3 px-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-white"
                  />
                </div>

                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black">
                    Enter Mobile Number OTP
                  </label>
                  <div className="flex gap-2">
                    {Array(4)
                      .fill(0)
                      .map((_, index) => (
                        <input
                          key={index}
                          type="text"
                          maxLength={1}
                          className="w-12 h-12 text-center rounded border-[1.5px] border-stroke py-2 px-3 text-lg outline-none transition focus:border-primary active:border-primary"
                          ref={(el) => (mobileOtpRefs.current[index] = el)} // Use mobile refs
                          onChange={(e) =>
                            handleOTPChange(e, index, mobileOtpRefs)
                          } // Handle input
                        />
                      ))}
                  </div>
                </div>
              </div>

              {/* Email and OTP fields */}
              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full rounded border-[1.5px] border-stroke py-3 px-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-white"
                  />
                </div>

                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black">
                    Enter Email OTP
                  </label>
                  <div className="flex gap-2">
                    {Array(4)
                      .fill(0)
                      .map((_, index) => (
                        <input
                          key={index}
                          type="text"
                          maxLength={1}
                          className="w-12 h-12 text-center rounded border-[1.5px] border-stroke py-2 px-3 text-lg outline-none transition focus:border-primary active:border-primary"
                          ref={(el) => (emailOtpRefs.current[index] = el)} // Use email refs
                          onChange={(e) =>
                            handleOTPChange(e, index, emailOtpRefs)
                          } // Handle input
                        />
                      ))}
                  </div>
                </div>
              </div>

              {/* Bank Details fields */}
              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black">Bank Name</label>
                  <input
                    type="text"
                    placeholder="Enter your bank name"
                    className="w-full rounded border-[1.5px] border-stroke py-3 px-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-white"
                  />
                </div>

                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black">Bank Branch</label>
                  <input
                    type="text"
                    placeholder="Enter your account number"
                    className="w-full rounded border-[1.5px] border-stroke py-3 px-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-white"
                  />
                </div>
              </div>

              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black">
                    Account Number
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your account number"
                    className="w-full rounded border-[1.5px] border-stroke py-3 px-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-white"
                  />
                </div>

                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black">IFSC Code</label>
                  <input
                    type="text"
                    placeholder="Enter your IFSC code"
                    className="w-full rounded border-[1.5px] border-stroke py-3 px-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-white"
                  />
                </div>
              </div>

              {/* Document Details fields */}
              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black">
                    Adhaar Number
                  </label>
                  <input
                    type="number"
                    placeholder="Enter your adhaar number"
                    className="w-full rounded border-[1.5px] border-stroke py-3 px-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-white"
                  />
                </div>

                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black">Pan Card</label>
                  <input
                    type="number"
                    placeholder="Enter your pan number"
                    className="w-full rounded border-[1.5px] border-stroke py-3 px-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-white"
                  />
                </div>
              </div>

              {/* Experience fields */}
              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black">
                    Previous Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your previous company name"
                    className="w-full rounded border-[1.5px] border-stroke py-3 px-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-white"
                  />
                </div>

                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black">
                    Previous Job Title
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your previous job title"
                    className="w-full rounded border-[1.5px] border-stroke py-3 px-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-white"
                  />
                </div>
              </div>

              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black">
                    Total Experience
                  </label>
                  <input
                    type="number"
                    placeholder="Enter your total experience"
                    className="w-full rounded border-[1.5px] border-stroke py-3 px-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-white"
                  />
                </div>

                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black">
                    Total Recruitement Experience
                  </label>
                  <input
                    type="number"
                    placeholder="Enter your recruitement experience"
                    className="w-full rounded border-[1.5px] border-stroke py-3 px-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-white"
                  />
                </div>
              </div>

              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black">
                    Joining Date With Last Employer
                  </label>
                  <input
                    type="date"
                    // placeholder="Enter your joining date with last employer"
                    className="w-full rounded border-[1.5px] border-stroke py-3 px-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-white"
                  />
                </div>

                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black">
                    Last Working Date With Last Employer
                  </label>
                  <input
                    type="date"
                    // placeholder="Enter your last working date with last employer"
                    className="w-full rounded border-[1.5px] border-stroke py-3 px-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-white"
                  />
                </div>
              </div>

              {/* Education fields */}
              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black">
                    Highest Education
                  </label>
                  <select
                    className="w-full rounded border-[1.5px] border-stroke py-3 px-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-white"
                    defaultValue="" // Default value for placeholder
                  >
                    <option value="" disabled>
                      Select your Education
                    </option>
                    <option value="bachelors">Bachelors</option>
                    <option value="masters">Masters</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black">
                    Highest Education Percentage
                  </label>
                  <input
                    type="number"
                    placeholder="Enter your percentage"
                    className="w-full rounded border-[1.5px] border-stroke py-3 px-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-white"
                  />
                </div>
              </div>

              {/* Document upload fields */}
              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <label className="mb-3 block text-black">
                    Attach Profile Picture
                  </label>
                  <input
                    type="file"
                    className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-0 file:py-3 file:px-5 file:bg-primary file:text-white file:hover:bg-opacity-90 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
                  />
                </div>

                <div className="w-full xl:w-1/2">
                  <label className="mb-3 block text-black">
                    Attach Adhaar Card
                  </label>
                  <input
                    type="file"
                    className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-0 file:py-3 file:px-5 file:bg-primary file:text-white file:hover:bg-opacity-90 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
                  />
                </div>
              </div>

              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <label className="mb-3 block text-black">
                    Attach Pan Card
                  </label>
                  <input
                    type="file"
                    className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-0 file:py-3 file:px-5 file:bg-primary file:text-white file:hover:bg-opacity-90 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
                  />
                </div>

                <div className="w-full xl:w-1/2">
                  <label className="mb-3 block text-black">
                    Attach Last Company Experience Letter
                  </label>
                  <input
                    type="file"
                    className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-0 file:py-3 file:px-5 file:bg-primary file:text-white file:hover:bg-opacity-90 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
                  />
                </div>
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
