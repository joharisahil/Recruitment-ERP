import { useEffect, useState } from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import { NavLink } from 'react-router-dom';
import { getAllClients } from '../../services/clientService';
import Loader from '../../common/Loader';

interface Client {
  clientId: string;
  clientName: string;
  profiles: string[];
  locations: string[];
  interviewTypes: string[];
  clientToken: string;
}

const ClientDetails = () => {
  const [Clients, setClients] = useState<Client[]>([]); // State for recruiters
  const [searchQuery, setSearchQuery] = useState(''); // State for search query
  const [filter, setFilter] = useState('all'); // State for filter type
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state

  // Fetch recruiters on component mount
  useEffect(() => {
    const fetchRecruiters = async () => {
      try {
        const clients = await getAllClients();
        setClients(clients);
      } catch (err) {
        setError('Failed to fetch client data');
      } finally {
        setLoading(false);
      }
    };

    fetchRecruiters();
  }, []);

  // Filter recruiters based on search query and filter type
  const filteredClients = Clients.filter((clients) => {
    const searchString = searchQuery.toLowerCase();
    if (filter === 'all') {
      return (
        clients.clientName.toLowerCase().includes(searchString) ||
        clients.profiles.join(', ').toLowerCase().includes(searchString) ||
        clients.locations.join(', ').toLowerCase().includes(searchString) ||
        clients.interviewTypes.join(', ').toLowerCase().includes(searchString)
      );
    }
    if (filter === 'clientName') {
      return clients.clientName.toLowerCase().includes(searchString);
    }
    if (filter === 'profiles') {
      return clients.profiles.join(', ').toLowerCase().includes(searchString);
    }
    return false;
  });

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <Breadcrumb pageName="Clients List" />

      {/* Search and Filter Bar */}
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search clients..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 rounded-md border border-stroke dark:border-strokedark dark:bg-boxdark dark:text-white w-1/2"
        />

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="p-2 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"
        >
          <option value="all">Search All</option>
          <option value="clientName">Client Name</option>
          <option value="profiles">Profiles</option>
        </select>
      </div>

      <div className="grid grid-cols-1 2xl:grid-cols-2 3xl:grid-cols-3 gap-6">
        {/* Loop through the filtered recruiters and display each one */}
        {filteredClients.map((client) => (
          <div
            key={client.clientId}
            className="relative rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"
          >
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Client Details
              </h3>
            </div>

            {/* Close Button */}
            <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-500 text-2xl p-2">
              &times;
            </button>

            {/* Recruiter Summary Section */}
            <div className="p-6.5">
              <h3 className="font-medium text-black dark:text-white">
                Client Summary
              </h3>
              <p>Client Name: {client.clientName}</p>
              <p>Profiles: {client.profiles.join(', ')}</p>
              <p>Locations: {client.locations.join(', ')}</p>
              <p>Interviews: {client.interviewTypes.join(', ')}</p>
              <div className="flex gap-4 mt-4">
                <NavLink
                  to={`/client-master/client-details/display-client-details?token=${client.clientToken}`}
                  className="rounded bg-primary p-2 font-medium text-gray hover:bg-opacity-90"
                >
                  View Details
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ClientDetails;
