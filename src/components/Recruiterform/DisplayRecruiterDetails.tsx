import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Breadcrumb from '../Breadcrumbs/Breadcrumb';
import { useEffect, useState } from 'react';
import { getRecruiterDetailsByToken } from '../../services/recruiterService';
import axios from 'axios';
import { toast } from 'react-toastify';

const DisplayRecruiterDetails = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    lastName: '',
    previousCompanyName: '',
    address: '',
    mobileNoPersonal: '',
    education: '',
    gender: '',
    bankBranch: '',
    previousJobTitle: '',
    lastWorkingDate: '',
    dateOfBirth: '',
    bankName: '',
    panNumber: '',
    totalExp: '',
    firstName: '',
    lastJoinDate: '',
    aadhaarNumber: '',
    educationPercent: '',
    mobileNoOfficial: '',
    accountNo: '',
    email: '',
    totalRecruitmentExp: '',
    ifscCode: '',
    emailIdOfficial: '',
  });

  useEffect(() => {
    const fetchRecruiterDetails = async () => {
      try {
        // Extract token from URL
        const params = new URLSearchParams(location.search);
        const token = params.get('token');

        if (token) {
          // Fetch data using the API
          const data = await getRecruiterDetailsByToken(token);
          setFormData(data);
        }
      } catch (error) {
        // Narrow the type of error to handle it safely
        if (axios.isAxiosError(error)) {
          console.error('Axios error:', error.response?.data || error.message);
          alert(
            error.response?.data?.message ||
              'Failed to fetch recruiter details.',
          );
        } else if (error instanceof Error) {
          console.error('Error:', error.message);
          alert(error.message);
        } else {
          console.error('Unknown error occurred.');
          alert('An unknown error occurred.');
        }
      }
    };

    fetchRecruiterDetails();
  }, [location.search]);

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
            to="/recruiter-master/recruiter-details"
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
                    value={formData.firstName || ''}
                    readOnly
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
                    value={formData.lastName || ''}
                    readOnly
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
                    value={formData.dateOfBirth || ''}
                    readOnly
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
                    value={formData.gender || ''}
                    readOnly
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
                  value={formData.address || ''}
                  readOnly
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
                    placeholder="Enter your email"
                    value={formData.email || ''}
                    readOnly
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
                    placeholder="Enter your Mobile Number"
                    value={formData.mobileNoPersonal || ''}
                    readOnly
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
                    value={formData.bankName || ''}
                    readOnly
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
                    value={formData.bankBranch || ''}
                    readOnly
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
                    value={formData.accountNo || ''}
                    readOnly
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
                    value={formData.ifscCode || ''}
                    readOnly
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
                    value={formData.aadhaarNumber || ''}
                    readOnly
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
                    value={formData.panNumber || ''}
                    readOnly
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
                    value={formData.previousCompanyName || ''}
                    readOnly
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
                    value={formData.previousJobTitle || ''}
                    readOnly
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
                    type="text"
                    placeholder="Enter your total experience"
                    value={formData.totalExp || ''}
                    readOnly
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
                    type="text"
                    placeholder="Enter your total recruitement experience"
                    value={formData.totalRecruitmentExp || ''}
                    readOnly
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
                    value={formData.lastJoinDate || ''}
                    readOnly
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
                    value={formData.lastWorkingDate || ''}
                    readOnly
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
                    value={formData.education || ''}
                    readOnly
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
                    value={formData.educationPercent || ''}
                    readOnly
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
                    onClick={() =>
                      toast.success('Downloading Highest Education file')
                    }
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
                      toast.success(
                        'Downloading Highest Education Percentage file',
                      )
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
                    onClick={() =>
                      toast.success('Downloading Year of Graduation file')
                    }
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
                    onClick={() =>
                      toast.success('Downloading Institution Name file')
                    }
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
                  value={formData.emailIdOfficial || ''} // Bind state
                  readOnly
                  //   value={form.email}
                  //   onChange={(e) =>
                  //     handleInputChange(index, 'email', e.target.value)
                  //   }
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default DisplayRecruiterDetails;
