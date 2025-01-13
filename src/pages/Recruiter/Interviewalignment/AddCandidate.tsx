import React, { useState } from 'react';
import { saveCandidate } from '../../../services/recruiter/candidate';
import { toast } from 'react-toastify';
import Breadcrumb from '../../../components/Breadcrumbs/Breadcrumb';

const AddCandidate = () => {
  const [submitForm, setSubmitForm] = useState(false);

  const [candidateSubmitData, setCandidateSubmitData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    address: '',
    emailId: '',
    mobileNo: '',
    qualification: '',
    experience: '',
    educationPercent: '',
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      RequestMap: {
        ...candidateSubmitData,
      },
    };

    try {
      const response = await saveCandidate(payload);
      toast.success(response.SuccessMessage || 'Form Submitted Successfully');
      setSubmitForm(true);
    } catch (error) {
      console.error('Failed to save candidate:', error);
    }
  };

  return (
    <>
      <Breadcrumb pageName="OnBoarding Details" />
      <div className="flex flex-col gap-9">
        <div className="relative rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              Candidate OnBoarding Form
            </h3>
          </div>
          {/* Close Button */}
          {/* <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-500 text-2xl p-2">
            &times;
          </button> */}

          <form onSubmit={handleSubmit}>
            <div className="p-6.5">
              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    First name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter candidate first name"
                    onChange={(e) =>
                      setCandidateSubmitData({
                        ...candidateSubmitData,
                        firstName: e.target.value,
                      })
                    }
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>

                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Last name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter candidate last name"
                    onChange={(e) =>
                      setCandidateSubmitData({
                        ...candidateSubmitData,
                        lastName: e.target.value,
                      })
                    }
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
                    type="date"
                    placeholder="Enter candidate DOB"
                    onChange={(e) =>
                      setCandidateSubmitData({
                        ...candidateSubmitData,
                        dateOfBirth: e.target.value,
                      })
                    }
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>

                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Gender
                  </label>
                  <select
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    defaultValue="" // Default value for placeholder
                    onChange={(e) =>
                      setCandidateSubmitData({
                        ...candidateSubmitData,
                        gender: e.target.value,
                      })
                    }
                  >
                    <option value="" disabled>
                      Select candidate gender
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Address
                </label>
                <input
                  type="text"
                  placeholder="Enter candidate address"
                  onChange={(e) =>
                    setCandidateSubmitData({
                      ...candidateSubmitData,
                      address: e.target.value,
                    })
                  }
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
                    placeholder="Enter candidate email"
                    onChange={(e) =>
                      setCandidateSubmitData({
                        ...candidateSubmitData,
                        emailId: e.target.value,
                      })
                    }
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>

                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Mobile Number
                  </label>
                  <input
                    type="number"
                    placeholder="Enter candidate Mobile Number"
                    onChange={(e) =>
                      setCandidateSubmitData({
                        ...candidateSubmitData,
                        mobileNo: e.target.value,
                      })
                    }
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
                    placeholder="Enter candidate qualification"
                    onChange={(e) =>
                      setCandidateSubmitData({
                        ...candidateSubmitData,
                        qualification: e.target.value,
                      })
                    }
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>

                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Highest Education Percentage
                  </label>
                  <input
                    type="text"
                    placeholder="Enter candidate highest education percentage"
                    onChange={(e) =>
                      setCandidateSubmitData({
                        ...candidateSubmitData,
                        educationPercent: e.target.value,
                      })
                    }
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>
              </div>

              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Fresher/Experienced
                  </label>
                  <select
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    defaultValue="" // Default value for placeholder
                    onChange={(e) =>
                      setCandidateSubmitData({
                        ...candidateSubmitData,
                        experience: e.target.value,
                      })
                    }
                  >
                    <option value="" disabled>
                      Select from below
                    </option>
                    <option value="fresher">Fresher</option>
                    <option value="experienced">Experienced</option>
                  </select>
                </div>

                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Total Experience (if fresher then NA)
                  </label>
                  <input
                    type="text"
                    placeholder="Enter candidate experience"
                    onChange={(e) =>
                      setCandidateSubmitData({
                        ...candidateSubmitData,
                        totalExperience: e.target.value,
                      })
                    }
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
                    placeholder="Enter candidate adhaar number"
                    onChange={(e) =>
                      setCandidateSubmitData({
                        ...candidateSubmitData,
                        aadhaarNumber: e.target.value,
                      })
                    }
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>

                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Pan Number
                  </label>
                  <input
                    type="text"
                    placeholder="Enter candidate pan number"
                    onChange={(e) =>
                      setCandidateSubmitData({
                        ...candidateSubmitData,
                        panNumber: e.target.value,
                      })
                    }
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>
              </div>

              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Previous Company Name (if fresher then NA)
                  </label>
                  <input
                    type="text"
                    placeholder="Enter candidate previous company name"
                    onChange={(e) =>
                      setCandidateSubmitData({
                        ...candidateSubmitData,
                        previousCompanyName: e.target.value,
                      })
                    }
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>

                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Previous Job Title (if fresher then NA)
                  </label>
                  <input
                    type="text"
                    placeholder="Enter candidate previous job title"
                    onChange={(e) =>
                      setCandidateSubmitData({
                        ...candidateSubmitData,
                        previousJobTitle: e.target.value,
                      })
                    }
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>
              </div>

              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Total Skill Experience (if fresher then NA)
                  </label>
                  <input
                    type="text"
                    placeholder="Enter candidate total experience"
                    onChange={(e) =>
                      setCandidateSubmitData({
                        ...candidateSubmitData,
                        totalExp: e.target.value,
                      })
                    }
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>

                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Preferred Job
                  </label>
                  <input
                    type="text"
                    placeholder="Enter candidate preferred job"
                    onChange={(e) =>
                      setCandidateSubmitData({
                        ...candidateSubmitData,
                        preferredJob: e.target.value,
                      })
                    }
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>
              </div>

              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Joining Date With Last Employer (if fresher then NA)
                  </label>
                  <input
                    type="date"
                    placeholder="Enter candidate joining date with last employer"
                    onChange={(e) =>
                      setCandidateSubmitData({
                        ...candidateSubmitData,
                        lastJoinDate: e.target.value,
                      })
                    }
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>

                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Last Working Date With Last Employer (if fresher then NA)
                  </label>
                  <input
                    type="date"
                    placeholder="Enter candidate last working date with last employer"
                    onChange={(e) =>
                      setCandidateSubmitData({
                        ...candidateSubmitData,
                        lastLeavingDate: e.target.value,
                      })
                    }
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>
              </div>

              {/* <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Highest Education
                  </label>
                  <input
                    type="text"
                    placeholder="Enter candidate highest education"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>

                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Highest Education Percentage
                  </label>
                  <input
                    type="text"
                    placeholder="Enter candidate highest education percentage"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>
              </div> */}

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
                    Upload
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
                    Upload
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
                    Upload
                  </button>
                </div>

                <div className="w-full xl:w-1/6">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Resume
                  </label>
                  <button
                    className="w-full rounded bg-primary py-3 px-5 text-white transition hover:bg-primary-dark focus:outline-none"
                    onClick={() =>
                      toast.success('Downloading Institution Name file')
                    }
                  >
                    Upload
                  </button>
                </div>
              </div>
              <div className="flex gap-4 mt-4">
                <button
                  type="submit"
                  className="rounded bg-primary py-3 px-5 font-medium text-gray hover:bg-opacity-90"
                >
                  OnBoard Candidate
                </button>
                {/* <button className="rounded bg-primary p-2 font-medium text-gray hover:bg-opacity-90">
                  Close
                </button> */}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddCandidate;
