import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Breadcrumb from '../Breadcrumbs/Breadcrumb';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Loader from '../../common/Loader';
import { getCandidateDetailsByToken } from '../../services/recruiter/candidate';

const ViewCandidateDetails = () => {
  const location = useLocation();
  const [loading, setLoading] = useState<boolean>(true);
  const [formData, setFormData] = useState({
    CandidateToken: '',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    address: '',
    emailId: '',
    mobileNo: '',
    qualification: '',
    educationPercent: '',
    experience: '',
    totalExperience: '',
    aadhaarNumber: '',
    panNumber: '',
    previousCompanyName: '',
    previousJobTitle: '',
    totalExp: '',
    preferredJob: '',
    lastJoinDate: '',
    lastLeavingDate: '',
  });

  useEffect(() => {
    const fetchCandidateDetails = async () => {
      try {
        // Extract token from URL
        const params = new URLSearchParams(location.search);
        const candidatetoken = params.get('candidatetoken');

        if (candidatetoken) {
          // Fetch data using the API
          const data = await getCandidateDetailsByToken(candidatetoken);
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
      } finally {
        setLoading(false);
      }
    };

    fetchCandidateDetails();
  }, [location.search]);

  return (
    <>
      <Breadcrumb pageName="Candidate Details" />
      {loading ? (
        <div
          className="flex justify-center items-start h-full"
          style={{ backgroundColor: 'transparent' }}
        >
          <Loader />
        </div>
      ) : (
        <div className="flex flex-col gap-9">
          <div className="relative rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                {formData.firstName} OnBoarded Details
              </h3>
            </div>
            {/* Close Button */}
            <NavLink
              to="/recruiter/interview-alignment/candidate-details"
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
                      value={formData.emailId || ''}
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
                      value={formData.mobileNo || ''}
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
                      Qualification
                    </label>
                    <input
                      type="text"
                      placeholder="qualification"
                      value={formData.qualification || ''}
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
                      Highest Education Percent
                    </label>
                    <input
                      type="text"
                      placeholder="highest education percent"
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

                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Experience
                    </label>
                    <input
                      type="text"
                      placeholder="Experience"
                      value={formData.experience || ''}
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
                      Total Experience
                    </label>
                    <input
                      type="text"
                      placeholder="Total experience"
                      value={formData.totalExperience || ''}
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
                      placeholder="Adhaar number"
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
                      placeholder="Pan number"
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
                      placeholder="Previous company name"
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
                      placeholder="Previous job title"
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
                      placeholder="Total experience"
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
                      Preferred Job
                    </label>
                    <input
                      type="text"
                      placeholder="Preferred job"
                      value={formData.preferredJob || ''}
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
                      placeholder="Joining date with last employer"
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
                      value={formData.lastJoinDate || ''}
                      readOnly
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                </div>

                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Last Leaving Date
                    </label>
                    <input
                      type="text"
                      placeholder="Last leaving date"
                      value={formData.lastLeavingDate || ''}
                      readOnly
                      // value={form.firstName}
                      // onChange={(e) =>
                      //   handleInputChange(index, 'firstName', e.target.value)
                      // }
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>

                  {/* <div className="w-full xl:w-1/2">
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
                  </div> */}
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
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ViewCandidateDetails;
