import { useState } from 'react';
import Breadcrumb from '../../../components/Breadcrumbs/Breadcrumb';
import { NavLink } from 'react-router-dom';

const InterviewStatus = () => {
  const [candidates, setCandidates] = useState([]); // State to store recruiter data
  const [loading, setLoading] = useState(true); // State to track loading state
  const [error, setError] = useState(null); // State to track error
  const [searchQuery, setSearchQuery] = useState(''); // State to track search query
  const [filter, setFilter] = useState('all'); // State to track filter type (e.g., 'all', 'firstName', 'lastName')

  // Filter candidates based on search query and filter type
  const filteredCandidates = candidates.filter((recruiter: any) => {
    const searchString = searchQuery.toLowerCase();
    if (filter === 'all') {
      return (
        candidates.FirstName.toLowerCase().includes(searchString) ||
        candidates.LastName.toLowerCase().includes(searchString) ||
        candidates.EmailId_Official.toLowerCase().includes(searchString)
      );
    }
    if (filter === 'firstName') {
      return candidates.FirstName.toLowerCase().includes(searchString);
    }
    if (filter === 'lastName') {
      return candidates.LastName.toLowerCase().includes(searchString);
    }
    return false;
  });

  return (
    <>
      <Breadcrumb pageName="Interview Status" />

      {/* Search and Filter Bar */}
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search candidates..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 rounded-md border border-stroke dark:border-strokedark dark:bg-boxdark dark:text-white w-1/2"
        />

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="p-2 relative rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"
        >
          <option value="all">Search All</option>
          <option value="firstName">First Name</option>
          <option value="lastName">Last Name</option>
        </select>
      </div>

      <div className="grid grid-cols-1 2xl:grid-cols-2 3xl:grid-cols-3 gap-6">
        {/* Loop through the filtered recruiters and display each one */}
        {/* {filteredCandidates.map((candidate: any, index: number) => ( */}
        <div
          // key={index}
          className="relative rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"
        >
          <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              {/* {candidate.FirstName}'s OnBoarding Form */}
              Candidate's OnBoarding Form
            </h3>
          </div>

          {/* Close Button */}
          <button
            //   onClick={() => removeForm(form.id)}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-500 text-2xl p-2"
          >
            &times;
          </button>

          {/* Candidate Summary Section */}
          <div className="flex flex-col md:flex-row items-center p-6.5">
            {/* Image on the left */}
            <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-15">
              <img
                src="/src/images/user/user-06.png" // Default image (API doesn't provide image URLs)
                alt="Candidate"
                className="w-40 h-40 object-cover rounded-full"
              />
            </div>

            {/* Content on the right */}
            <div className="text-center md:text-left">
              <h3 className="font-medium text-black dark:text-white">
                Candidate Summary
              </h3>
              {/* <p>First Name: {candidate.FirstName}</p>
                <p>Last Name: {candidate.LastName}</p>
                <p>Email: {candidate.EmailId_Official}</p> */}
              <p>First Name: Sahil</p>
              <p>Last Name: Johari</p>
              <p>Email: sahiljohari089@gmail.com</p>
              <div className="flex gap-4 mt-4 justify-center md:justify-start">
                <NavLink
                  //   to={`/recruiter-master/recruiter-details/display-recruiter-details?token=${candidate.token}`}
                  to={
                    '/recruiter/candidate-status/interview-status/assign-interview-status'
                  }
                  className="rounded bg-primary p-2 font-medium text-gray hover:bg-opacity-90"
                >
                  Assign Interview Status
                </NavLink>
                {/* Toggle Button */}
                {/* <div className="flex items-center">
                    <label
                      className="flex items-center cursor-pointer"
                      onClick={() => {
                        recruiter.isActive = !recruiter.isActive; // Flip the value
                        setRecruiters([...recruiters]); // Trigger a re-render
                      }}
                    >
                      <span className="mr-2 text-sm font-medium">
                        {recruiter.isActive ? 'Active' : 'Inactive'}
                      </span>
                      <div
                        className={`relative w-12 h-6 bg-gray-300 rounded-full ${
                          recruiter.isActive ? 'bg-green-500' : 'bg-red-500'
                        }`}
                      >
                        <div
                          className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-300 ${
                            recruiter.isActive ? 'transform translate-x-6' : ''
                          }`}
                        ></div>
                      </div>
                    </label>
                  </div> */}
              </div>
            </div>
          </div>
        </div>
        {/* ))} */}
      </div>
    </>
  );
};

export default InterviewStatus;
