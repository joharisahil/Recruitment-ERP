import { NavLink } from 'react-router-dom';
import Breadcrumb from '../Breadcrumbs/Breadcrumb';

const DisplayOnBoardingForm = () => {
  return (
    <>
      <Breadcrumb pageName="OnBoarding Details" />
      <div className="flex flex-col gap-9">
        <div className="relative rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              Recruiter OnBoarding Summary
            </h3>
          </div>
          {/* Close Button */}
          <NavLink
            to="/recruiter-master/onboarding-list"
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-500 text-2xl p-2"
          >
            &times;
          </NavLink>

          <form action="#">
            <div className="p-6.5">
              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    First name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your first name"
                    // value={form.firstName}
                    // onChange={(e) =>
                    //   handleInputChange(index, 'firstName', e.target.value)
                    // }
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>

                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Last name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your last name"
                    // value={form.lastName}
                    // onChange={(e) =>
                    //   handleInputChange(index, 'lastName', e.target.value)
                    // }
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>
              </div>

              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Date Of Birth
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your DOB"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>

                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Gender
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your Gender"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>
              </div>

              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Address
                </label>
                <input
                  type="text"
                  placeholder="Enter your address"
                  //   value={form.email}
                  //   onChange={(e) =>
                  //     handleInputChange(index, 'email', e.target.value)
                  //   }
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>

              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your first name"
                    // value={form.firstName}
                    // onChange={(e) =>
                    //   handleInputChange(index, 'firstName', e.target.value)
                    // }
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>

                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Mobile Number
                  </label>
                  <input
                    type="number"
                    placeholder="Enter your last name"
                    // value={form.lastName}
                    // onChange={(e) =>
                    //   handleInputChange(index, 'lastName', e.target.value)
                    // }
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>
              </div>

              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Bank Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your bank name"
                    // value={form.firstName}
                    // onChange={(e) =>
                    //   handleInputChange(index, 'firstName', e.target.value)
                    // }
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>

                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Bank Branch
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your bank branch"
                    // value={form.lastName}
                    // onChange={(e) =>
                    //   handleInputChange(index, 'lastName', e.target.value)
                    // }
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>
              </div>

              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Account Number
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your account number"
                    // value={form.firstName}
                    // onChange={(e) =>
                    //   handleInputChange(index, 'firstName', e.target.value)
                    // }
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>

                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    IFSC Code
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your IFSC code"
                    // value={form.lastName}
                    // onChange={(e) =>
                    //   handleInputChange(index, 'lastName', e.target.value)
                    // }
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>
              </div>

              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Adhaar Number
                  </label>
                  <input
                    type="number"
                    placeholder="Enter your adhaar number"
                    // value={form.firstName}
                    // onChange={(e) =>
                    //   handleInputChange(index, 'firstName', e.target.value)
                    // }
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>

                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Pan Number
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your pan number"
                    // value={form.lastName}
                    // onChange={(e) =>
                    //   handleInputChange(index, 'lastName', e.target.value)
                    // }
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>
              </div>

              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Previous Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your previous company name"
                    // value={form.firstName}
                    // onChange={(e) =>
                    //   handleInputChange(index, 'firstName', e.target.value)
                    // }
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>

                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Previous Job Title
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your previous job title"
                    // value={form.lastName}
                    // onChange={(e) =>
                    //   handleInputChange(index, 'lastName', e.target.value)
                    // }
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>
              </div>

              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Total Experience
                  </label>
                  <input
                    type="number"
                    placeholder="Enter your total experience"
                    // value={form.firstName}
                    // onChange={(e) =>
                    //   handleInputChange(index, 'firstName', e.target.value)
                    // }
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>

                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Total Recruitement Experience
                  </label>
                  <input
                    type="number"
                    placeholder="Enter your total recruitement experience"
                    // value={form.lastName}
                    // onChange={(e) =>
                    //   handleInputChange(index, 'lastName', e.target.value)
                    // }
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>
              </div>

              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Joining Date With Last Employer
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your joining date with last employer"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>

                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Last Working Date With Last Employer
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your last working date with last employer"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>
              </div>

              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Highest Education
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your highest education"
                    // value={form.firstName}
                    // onChange={(e) =>
                    //   handleInputChange(index, 'firstName', e.target.value)
                    // }
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>

                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Highest Education Percentage
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your highest education percentage"
                    // value={form.lastName}
                    // onChange={(e) =>
                    //   handleInputChange(index, 'lastName', e.target.value)
                    // }
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>
              </div>

              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row xl:flex-wrap">
                <div className="w-full xl:w-1/6">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Profile Picture
                  </label>
                  <button
                    className="w-full rounded bg-primary py-3 px-5 text-white transition hover:bg-primary-dark focus:outline-none"
                    onClick={() => alert('Downloading Highest Education file')}
                  >
                    Download
                  </button>
                </div>

                <div className="w-full xl:w-1/6">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Adhaar Card
                  </label>
                  <button
                    className="w-full rounded bg-primary py-3 px-5 text-white transition hover:bg-primary-dark focus:outline-none"
                    onClick={() =>
                      alert('Downloading Highest Education Percentage file')
                    }
                  >
                    Download
                  </button>
                </div>

                <div className="w-full xl:w-1/6">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Pan Card
                  </label>
                  <button
                    className="w-full rounded bg-primary py-3 px-5 text-white transition hover:bg-primary-dark focus:outline-none"
                    onClick={() => alert('Downloading Year of Graduation file')}
                  >
                    Download
                  </button>
                </div>

                <div className="w-full xl:w-1/6">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Expeience Letter
                  </label>
                  <button
                    className="w-full rounded bg-primary py-3 px-5 text-white transition hover:bg-primary-dark focus:outline-none"
                    onClick={() => alert('Downloading Institution Name file')}
                  >
                    Download
                  </button>
                </div>
              </div>

              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Official Email
                </label>
                <input
                  type="email"
                  placeholder="Enter official email"
                  //   value={form.email}
                  //   onChange={(e) =>
                  //     handleInputChange(index, 'email', e.target.value)
                  //   }
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>
              <div className="flex gap-4 mt-4">
                <NavLink
                  to="/recruiter-master/onboard-recruiter"
                  className="rounded bg-primary p-2 font-medium text-gray hover:bg-opacity-90"
                  // onClick={() => toggleFormView(index)}
                >
                  OnBoard
                </NavLink>
                <NavLink
                  to="/recruiter-master/onboard-recruiter"
                  className="rounded bg-primary p-2 font-medium text-gray hover:bg-opacity-90"
                >
                  Close
                </NavLink>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default DisplayOnBoardingForm;
