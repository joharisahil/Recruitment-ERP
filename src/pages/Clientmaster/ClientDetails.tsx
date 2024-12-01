import { useState } from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import { NavLink } from 'react-router-dom';

const AllRecruiterDetails = () => {
  // Mock data for recruiters
  const mockRecruiters = [
    {
      token: 'token123',
      ClientName: 'ABC Corp',
      Profiles: 'Sales Officer, Recruiting Manager',
      Locations: 'Noida',
      Interviews: 'online',
    },
    {
      token: 'token456',
      ClientName: 'XYZ Ltd',
      Profiles: 'Recruiting Intern, BPO',
      Locations: 'Bangalore',
      Interviews: 'hybrid, online',
    },
    {
      token: 'token789',
      ClientName: 'TechSoft',
      Profiles: 'BPO, SDE-1',
      Locations: 'Noida, Pune, Hyderabad',
      Interviews: 'offline',
    },
  ];

  const [recruiters, setRecruiters] = useState(mockRecruiters); // State initialized with mock data
  const [searchQuery, setSearchQuery] = useState(''); // State to track search query
  const [filter, setFilter] = useState('all'); // State to track filter type (e.g., 'all', 'ClientName', 'Profiles')

  // Filter recruiters based on search query and filter type
  const filteredRecruiters = recruiters.filter((recruiter) => {
    const searchString = searchQuery.toLowerCase();
    if (filter === 'all') {
      return (
        recruiter.ClientName.toLowerCase().includes(searchString) ||
        recruiter.Profiles.toString().includes(searchString) ||
        recruiter.Locations.toLowerCase().includes(searchString) ||
        recruiter.Interviews.toString().includes(searchString)
      );
    }
    if (filter === 'clientName') {
      return recruiter.ClientName.toLowerCase().includes(searchString);
    }
    if (filter === 'profiles') {
      return recruiter.Profiles.toString().includes(searchString);
    }
    return false;
  });

  return (
    <>
      <Breadcrumb pageName="Clients List" />

      {/* Search and Filter Bar */}
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search recruiters..."
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
          <option value="clientName">Client Name</option>
          <option value="profiles">Profiles</option>
        </select>
      </div>

      <div className="grid grid-cols-1 2xl:grid-cols-2 3xl:grid-cols-3 gap-6">
        {/* Loop through the filtered recruiters and display each one */}
        {filteredRecruiters.map((recruiter, index) => (
          <div
            key={index}
            className="relative rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"
          >
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Client Details
              </h3>
            </div>

            {/* Close Button */}
            <button
              // Functionality for removing form can be added here
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-500 text-2xl p-2"
            >
              &times;
            </button>

            {/* Recruiter Summary Section */}
            <div className="p-6.5">
              {/* Content */}
              <h3 className="font-medium text-black dark:text-white">
                Client Summary
              </h3>
              <p>Client Name: {recruiter.ClientName}</p>
              <p>Profiles: {recruiter.Profiles}</p>
              <p>Locations: {recruiter.Locations}</p>
              <p>Interviews: {recruiter.Interviews}</p>
              <div className="flex gap-4 mt-4">
                {/* here change this button Navlink */}
                <NavLink
                  // to={`/recruiter-master/recruiter-details/display-recruiter-details?token=${recruiter.token}`}
                  to="/client-master/client-details/display-client-details"
                  className="rounded bg-primary p-2 font-medium text-gray hover:bg-opacity-90"
                >
                  View Details
                </NavLink>
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
        ))}
      </div>
    </>
  );
};

export default AllRecruiterDetails;
