import { useState } from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';

const AddNewClient = () => {
  const [clientName, setClientName] = useState('');
  const [profiles, setProfiles] = useState([{ profile: '', pay: '' }]);
  const [locations, setLocations] = useState([
    { location: '', interviewType: '' },
  ]);

  const handleAddProfile = () => {
    setProfiles([...profiles, { profile: '', pay: '' }]);
  };

  const handleAddLocation = () => {
    setLocations([...locations, { location: '', interviewType: '' }]);
  };

  const handleProfileChange = (index: number, value: string) => {
    const updatedProfiles = [...profiles];
    updatedProfiles[index].profile = value;
    setProfiles(updatedProfiles);
  };

  const handlePayChange = (index: number, value: string) => {
    const updatedProfiles = [...profiles];
    updatedProfiles[index].pay = value;
    setProfiles(updatedProfiles);
  };

  const handleLocationChange = (index: number, value: string) => {
    const updatedLocations = [...locations];
    updatedLocations[index].location = value;
    setLocations(updatedLocations);
  };

  const handleInterviewTypeChange = (index: number, value: string) => {
    const updatedLocations = [...locations];
    updatedLocations[index].interviewType = value;
    setLocations(updatedLocations);
  };

  const handleFormSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    // Filter out empty profile and pay fields
    const validProfiles = profiles.filter(
      (p) => p.profile.trim() !== '' && p.pay.trim() !== '',
    );

    // Filter out empty location and interview type fields
    const validLocations = locations.filter(
      (l) => l.location.trim() !== '' && l.interviewType.trim() !== '',
    );

    const formData = {
      clientName: clientName.trim(), // Include Client Name in Form Data
      profiles: validProfiles,
      locations: validLocations,
    };

    console.log('Form Submitted:', formData);

    // Reset the form fields
    setClientName('');
    setProfiles([{ profile: '', pay: '' }]);
    setLocations([{ location: '', interviewType: '' }]);

    // Placeholder for API call
    // axios.post('API_ENDPOINT', formData).then(...).catch(...);
  };

  return (
    <>
      <Breadcrumb pageName="OnBoard Client" />

      <div className="flex flex-col gap-9">
        <div className="relative rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              Client Onboarding Form
            </h3>
          </div>
          {/* Close Button */}
          {/* <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-500 text-2xl p-2">
            &times;
          </button> */}

          <form onSubmit={handleFormSubmit}>
            <div className="p-6.5">
              {/* Client Name */}
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Client Name
                </label>
                <input
                  type="text"
                  placeholder="Enter client name"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>

              {/* Profile Fields */}
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Profiles and Joining Pay
                </label>
                {profiles.map((entry, index) => (
                  <div key={index} className="mb-2">
                    <input
                      type="text"
                      placeholder={`Enter profile ${index + 1}`}
                      value={entry.profile}
                      onChange={(e) =>
                        handleProfileChange(index, e.target.value)
                      }
                      className="mb-2 w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                    <input
                      type="number"
                      placeholder={`Enter joining pay for profile ${index + 1}`}
                      value={entry.pay}
                      onChange={(e) => handlePayChange(index, e.target.value)}
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                ))}
                <button
                  type="button"
                  onClick={handleAddProfile}
                  className="mt-2 rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
                >
                  Add More Profile
                </button>
              </div>

              {/* Location Fields */}
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Locations and Interview Types
                </label>
                {locations.map((entry, index) => (
                  <div key={index} className="mb-2">
                    <input
                      type="text"
                      placeholder={`Enter location ${index + 1}`}
                      value={entry.location}
                      onChange={(e) =>
                        handleLocationChange(index, e.target.value)
                      }
                      className="mb-2 w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                    <select
                      value={entry.interviewType}
                      onChange={(e) =>
                        handleInterviewTypeChange(index, e.target.value)
                      }
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    >
                      <option value="" disabled>
                        Select Interview Type
                      </option>
                      <option value="Online">Online</option>
                      <option value="Offline">Offline</option>
                      <option value="Hybrid">Hybrid</option>
                    </select>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={handleAddLocation}
                  className="mt-2 rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
                >
                  Add More Location
                </button>
              </div>

              <button
                type="submit"
                className="w-full rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
              >
                Onboard Client
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddNewClient;
