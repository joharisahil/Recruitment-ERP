import { useState } from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import { createClient } from '../../services/clientService';
import { toast } from 'react-toastify';

const AddNewClient = () => {
  const [clientName, setClientName] = useState('');
  const [profiles, setProfiles] = useState([
    { profile: '', pay: '', billingPoint: '', lockInPeriod: '' },
  ]);
  const [locations, setLocations] = useState([
    { location: '', interviewType: '', address: '' },
  ]);
  const [loading, setLoading] = useState(false);

  const handleAddProfile = () => {
    setProfiles([
      ...profiles,
      { profile: '', pay: '', billingPoint: '', lockInPeriod: '' },
    ]);
  };

  const handleAddLocation = () => {
    setLocations([
      ...locations,
      { location: '', interviewType: '', address: '' },
    ]);
  };

  const handleProfileChange = (
    index: number,
    field: keyof (typeof profiles)[0],
    value: string,
  ) => {
    const updatedProfiles = [...profiles];
    updatedProfiles[index][field] = value; // Update profile field value
    setProfiles(updatedProfiles);
  };

  const handleLocationChange = (
    index: number,
    field: keyof (typeof locations)[0],
    value: string,
  ) => {
    const updatedLocations = [...locations];
    updatedLocations[index][field] = value; // Update location field value
    setLocations(updatedLocations);
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const validProfiles = profiles
      .filter(({ profile }) => profile.trim() !== '')
      .map(({ profile, pay, billingPoint, lockInPeriod }) => ({
        profile,
        billingPoint: parseFloat(billingPoint) || 0,
        lockInPeriod: parseInt(lockInPeriod) || 0,
        payPoint: parseFloat(pay) || 0,
      }));

    const validLocations = locations
      .filter(({ location }) => location.trim() !== '')
      .map(({ location, interviewType, address }) => ({
        location,
        interviewType,
        address,
      }));

    const formData = {
      username: clientName.trim(),
      activeFlag: 'Y',
      roles: validProfiles,
      locations: validLocations,
    };

    if (!formData.username) {
      toast.error('Client Name is required.');
      return;
    }

    if (formData.roles.length === 0) {
      toast.error('At least one valid profile is required.');
      return;
    }

    if (formData.locations.length === 0) {
      toast.error('At least one valid location is required.');
      return;
    }

    try {
      setLoading(true);
      const response = await createClient(formData);
      toast.success(response.SuccessMessage || 'Client created successfully.');
      setClientName('');
      setProfiles([
        { profile: '', pay: '', billingPoint: '', lockInPeriod: '' },
      ]);
      setLocations([{ location: '', interviewType: '', address: '' }]);
    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Breadcrumb pageName="OnBoard Recruiter" />
      <div className="flex flex-col gap-9">
        <div className="relative rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              Recruiter OnBoarding Form
            </h3>
          </div>
          <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-500 text-2xl p-2">
            &times;
          </button>
          <form onSubmit={handleSubmit}>
            <div className="p-6.5">
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
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Profiles
                </label>
                {profiles.map((entry, index) => (
                  <div key={index} className="mb-2">
                    <input
                      type="text"
                      placeholder={`Profile ${index + 1}`}
                      value={entry.profile}
                      onChange={(e) =>
                        handleProfileChange(index, 'profile', e.target.value)
                      }
                      className="mb-2 w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary"
                    />
                    <input
                      type="number"
                      placeholder="Pay Point"
                      value={entry.pay}
                      onChange={(e) =>
                        handleProfileChange(index, 'pay', e.target.value)
                      }
                      className="mb-2 w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary"
                    />
                    <input
                      type="number"
                      placeholder="Billing Point"
                      value={entry.billingPoint}
                      onChange={(e) =>
                        handleProfileChange(
                          index,
                          'billingPoint',
                          e.target.value,
                        )
                      }
                      className="mb-2 w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary"
                    />
                    <input
                      type="number"
                      placeholder="Lock-In Period"
                      value={entry.lockInPeriod}
                      onChange={(e) =>
                        handleProfileChange(
                          index,
                          'lockInPeriod',
                          e.target.value,
                        )
                      }
                      className="mb-2 w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary"
                    />
                  </div>
                ))}
                <button
                  type="button"
                  onClick={handleAddProfile}
                  className="mt-2 rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
                >
                  Add Profile
                </button>
              </div>

              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Locations
                </label>
                {locations.map((entry, index) => (
                  <div key={index} className="mb-2">
                    <input
                      type="text"
                      placeholder={`Location ${index + 1}`}
                      value={entry.location}
                      onChange={(e) =>
                        handleLocationChange(index, 'location', e.target.value)
                      }
                      className="mb-2 w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary"
                    />
                    <select
                      value={entry.interviewType}
                      onChange={(e) =>
                        handleLocationChange(
                          index,
                          'interviewType',
                          e.target.value,
                        )
                      }
                      className="mb-2 w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary"
                    >
                      <option value="">Select Interview Type</option>
                      <option value="Online">Online</option>
                      <option value="Offline">Offline</option>
                      <option value="Hybrid">Hybrid</option>
                    </select>
                    <input
                      type="text"
                      placeholder={`Address ${index + 1}`}
                      value={entry.address}
                      onChange={(e) =>
                        handleLocationChange(index, 'address', e.target.value)
                      }
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary"
                    />
                  </div>
                ))}
                <button
                  type="button"
                  onClick={handleAddLocation}
                  className="mt-2 rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
                >
                  Add Location
                </button>
              </div>

              <button
                type="submit"
                className="w-full rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
                disabled={loading}
              >
                {loading ? 'Submitting...' : 'Add Client'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddNewClient;
