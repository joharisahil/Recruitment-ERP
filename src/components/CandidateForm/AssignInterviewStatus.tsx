import { useState } from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import { NavLink } from 'react-router-dom';

const AssignInterviewStatus = () => {
  const [showDateOfJoining, setShowDateOfJoining] = useState(false);
  const [showNewDateOfJoining, setShowNewDateOfJoining] = useState(false);
  const [dateOfJoining, setDateOfJoining] = useState('');
  const [newDateOfJoining, setNewDateOfJoining] = useState('');

  return (
    <>
      <Breadcrumb pageName="Assign Interview Status" />

      <div className="flex flex-col gap-9">
        <div className="relative rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              Apply Candidate Interview
            </h3>
          </div>
          {/* Close Button */}
          <NavLink
            to={'/recruiter/candidate-status/interview-status'}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-500 text-2xl p-2"
          >
            &times;
          </NavLink>

          <form>
            <div className="p-6.5">
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Interview Status
                </label>
                <select
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  defaultValue="" // Default value for placeholder
                >
                  <option value="" disabled>
                    Select interview status
                  </option>
                  <option value="do not turn up">Do not turn up</option>
                  <option value="reschedule interview">
                    Reschedule interview
                  </option>
                  <option value="rejected">Rejected</option>
                </select>
              </div>

              <div className="mb-4.5">
                <label className="block text-black dark:text-white">
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={showDateOfJoining}
                    onChange={() => setShowDateOfJoining(!showDateOfJoining)}
                  />
                  Date of Joining
                </label>
                {showDateOfJoining && (
                  <input
                    type="date"
                    value={dateOfJoining}
                    onChange={(e) => setDateOfJoining(e.target.value)}
                    className="mt-2 w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                )}
              </div>

              <div className="mb-4.5">
                <label className="block text-black dark:text-white">
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={showNewDateOfJoining}
                    onChange={() =>
                      setShowNewDateOfJoining(!showNewDateOfJoining)
                    }
                  />
                  New Date of Interview
                </label>
                {showNewDateOfJoining && (
                  <input
                    type="date"
                    value={newDateOfJoining}
                    onChange={(e) => setNewDateOfJoining(e.target.value)}
                    className="mt-2 w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                )}
              </div>

              <button
                type="submit"
                className="w-full rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90 flex justify-center items-center "
              >
                Assign Interview Status
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AssignInterviewStatus;
