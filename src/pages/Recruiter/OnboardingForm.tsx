import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  getRecruiterByToken,
  saveRecruiter,
} from '../../services/recruiterService';

const OnboardingForm = () => {
  const [submitForm, setSubmitForm] = useState(false);
  const [recruiterData, setRecruiterData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const [recruiterSubmitData, setRecruiterSubmitData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    mobileNoPersonal: '',
    mobileNoOfficial: '',
    dateOfBirth: '',
    gender: '',
    bankName: '',
    bankBranch: '',
    accountNo: '',
    ifscCode: '',
    panNumber: '',
    aadhaarNumber: '',
    previousCompanyName: '',
    previousJobTitle: '',
    totalExp: '',
    totalRecruitmentExp: '',
    lastJoinDate: '',
    lastWorkingDate: '',
  });

  const location = useLocation();
  const token = new URLSearchParams(location.search).get('token');
  // Separate refs for mobile and email OTP inputs
  const mobileOtpRefs = useRef<(HTMLInputElement | null)[]>([]);
  const emailOtpRefs = useRef<(HTMLInputElement | null)[]>([]);

  //API fetching handling firstname, lastname & email
  useEffect(() => {
    if (token) {
      const fetchRecruiterDetails = async () => {
        try {
          const response = await getRecruiterByToken(token);
          const { firstName, lastName, EmailIdPersonal } = response.Data;

          // Update both recruiterData and recruiterSubmitData
          setRecruiterData({
            firstName,
            lastName,
            email: EmailIdPersonal,
          });

          setRecruiterSubmitData((prev) => ({
            ...prev,
            firstName,
            lastName,
            email: EmailIdPersonal,
          }));
        } catch (error) {
          console.error('Failed to fetch recruiter details:', error);
        }
      };

      fetchRecruiterDetails();
    }
  }, [token]);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token) {
      console.error('Token is missing');
      return;
    }

    const payload = {
      RequestMap: {
        token,
        ...recruiterSubmitData,
      },
    };

    try {
      const response = await saveRecruiter(payload);
      alert(response.SuccessMessage); // Show success message
      setSubmitForm(true);
    } catch (error) {
      console.error('Failed to save recruiter:', error);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-9">
        <div className="relative rounded-sm border border-stroke">
          <div className="border-b border-stroke py-4 px-6.5">
            <h3 className="font-medium text-black">
              Recruiter OnBoarding Form
            </h3>
          </div>

          <form onSubmit={handleSubmit}>
            {submitForm ? (
              <div>
                <p className="text-3xl text-black">Form Submitted!!!!</p>
              </div>
            ) : (
              <div className="p-6.5">
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black">
                      First name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your first name"
                      value={recruiterSubmitData.firstName}
                      onChange={(e) =>
                        setRecruiterSubmitData({
                          ...recruiterSubmitData,
                          firstName: e.target.value,
                        })
                      }
                      className="w-full rounded border-[1.5px] border-stroke py-3 px-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-white"
                    />
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black">Last name</label>
                    <input
                      type="text"
                      placeholder="Enter your last name"
                      value={recruiterSubmitData.lastName}
                      onChange={(e) =>
                        setRecruiterSubmitData({
                          ...recruiterSubmitData,
                          lastName: e.target.value,
                        })
                      }
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
                      onChange={(e) =>
                        setRecruiterSubmitData({
                          ...recruiterSubmitData,
                          dateOfBirth: e.target.value,
                        })
                      }
                      className="w-full rounded border-[1.5px] border-stroke py-3 px-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-white"
                    />
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black">Gender</label>
                    <select
                      className="w-full rounded border-[1.5px] border-stroke py-3 px-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-white"
                      defaultValue="" // Default value for placeholder
                      onChange={(e) =>
                        setRecruiterSubmitData({
                          ...recruiterSubmitData,
                          gender: e.target.value,
                        })
                      }
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
                    onChange={(e) =>
                      setRecruiterSubmitData({
                        ...recruiterSubmitData,
                        address: e.target.value,
                      })
                    }
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
                      onChange={(e) =>
                        setRecruiterSubmitData({
                          ...recruiterSubmitData,
                          mobileNoPersonal: e.target.value,
                        })
                      }
                      className="w-full rounded border-[1.5px] border-stroke py-3 px-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-white"
                    />
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black">
                      Enter Mobile Number OTP
                    </label>
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
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

                      {/* Buttons */}
                      <div className="flex flex-col gap-2 sm:flex-row">
                        <button
                          type="button"
                          className="h-12 rounded bg-primary py-2 px-4 text-white transition hover:bg-primary-dark"
                          onClick={() => console.log('Get OTP clicked')} // Replace with your handler
                        >
                          Get OTP
                        </button>

                        <button
                          type="button"
                          className="h-12 rounded bg-green-500 py-2 px-4 text-white transition hover:bg-green-600"
                          onClick={() => console.log('Verify OTP clicked')} // Replace with your handler
                        >
                          Verify
                        </button>
                      </div>
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
                      value={recruiterSubmitData.email}
                      onChange={(e) =>
                        setRecruiterSubmitData({
                          ...recruiterSubmitData,
                          email: e.target.value,
                        })
                      }
                      className="w-full rounded border-[1.5px] border-stroke py-3 px-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-white"
                    />
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black">
                      Enter Email OTP
                    </label>
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
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

                      {/* Buttons */}
                      <div className="flex flex-col gap-2 sm:flex-row">
                        <button
                          type="button"
                          className="h-12 rounded bg-primary py-2 px-4 text-white transition hover:bg-primary-dark"
                          onClick={() => console.log('Get OTP clicked')} // Replace with your handler
                        >
                          Get OTP
                        </button>

                        <button
                          type="button"
                          className="h-12 rounded bg-green-500 py-2 px-4 text-white transition hover:bg-green-600"
                          onClick={() => console.log('Verify OTP clicked')} // Replace with your handler
                        >
                          Verify
                        </button>
                      </div>
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
                      onChange={(e) =>
                        setRecruiterSubmitData({
                          ...recruiterSubmitData,
                          bankName: e.target.value,
                        })
                      }
                      className="w-full rounded border-[1.5px] border-stroke py-3 px-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-white"
                    />
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black">
                      Bank Branch
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your account number"
                      onChange={(e) =>
                        setRecruiterSubmitData({
                          ...recruiterSubmitData,
                          bankBranch: e.target.value,
                        })
                      }
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
                      onChange={(e) =>
                        setRecruiterSubmitData({
                          ...recruiterSubmitData,
                          accountNo: e.target.value,
                        })
                      }
                      className="w-full rounded border-[1.5px] border-stroke py-3 px-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-white"
                    />
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black">IFSC Code</label>
                    <input
                      type="text"
                      placeholder="Enter your IFSC code"
                      onChange={(e) =>
                        setRecruiterSubmitData({
                          ...recruiterSubmitData,
                          ifscCode: e.target.value,
                        })
                      }
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
                      onChange={(e) =>
                        setRecruiterSubmitData({
                          ...recruiterSubmitData,
                          aadhaarNumber: e.target.value,
                        })
                      }
                      className="w-full rounded border-[1.5px] border-stroke py-3 px-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-white"
                    />
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black">Pan Card</label>
                    <input
                      type="text"
                      placeholder="Enter your pan number"
                      onChange={(e) =>
                        setRecruiterSubmitData({
                          ...recruiterSubmitData,
                          panNumber: e.target.value,
                        })
                      }
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
                      onChange={(e) =>
                        setRecruiterSubmitData({
                          ...recruiterSubmitData,
                          previousCompanyName: e.target.value,
                        })
                      }
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
                      onChange={(e) =>
                        setRecruiterSubmitData({
                          ...recruiterSubmitData,
                          previousJobTitle: e.target.value,
                        })
                      }
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
                      onChange={(e) =>
                        setRecruiterSubmitData({
                          ...recruiterSubmitData,
                          totalExp: e.target.value,
                        })
                      }
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
                      onChange={(e) =>
                        setRecruiterSubmitData({
                          ...recruiterSubmitData,
                          totalRecruitmentExp: e.target.value,
                        })
                      }
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
                      onChange={(e) =>
                        setRecruiterSubmitData({
                          ...recruiterSubmitData,
                          lastJoinDate: e.target.value,
                        })
                      }
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
                      onChange={(e) =>
                        setRecruiterSubmitData({
                          ...recruiterSubmitData,
                          lastWorkingDate: e.target.value,
                        })
                      }
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
                    Submit
                  </button>
                  <button className="rounded bg-primary p-2 font-medium text-gray hover:bg-opacity-90">
                    Close
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default OnboardingForm;
