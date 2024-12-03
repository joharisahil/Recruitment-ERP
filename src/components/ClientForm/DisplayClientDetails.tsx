import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Breadcrumb from '../Breadcrumbs/Breadcrumb';
import { getClientDetails } from '../../services/clientService';

const DisplayClientDetails = () => {
  const location = useLocation();
  const [clientData, setClientData] = useState<any>(null);
  const [selectedProfile, setSelectedProfile] = useState<string>('');
  const [selectedLocation, setSelectedLocation] = useState<string>('');

  const [profileDetails, setProfileDetails] = useState<any>(null);

  const clientToken = new URLSearchParams(location.search).get('token') || '';

  useEffect(() => {
    if (clientToken) {
      const fetchClientData = async () => {
        try {
          const response = await getClientDetails(clientToken);
          setClientData(response.Data);
        } catch (error) {
          console.error('Error fetching client data', error);
        }
      };
      fetchClientData();
    }
  }, [clientToken]);

  useEffect(() => {
    if (clientData?.Profiles) {
      // Update Location when Profile changes
      if (selectedProfile) {
        const profile = clientData.Profiles.find(
          (profile: any) => profile.profile === selectedProfile,
        );
        setProfileDetails(profile);
        if (profile && profile.location !== selectedLocation) {
          setSelectedLocation(profile.location); // Set Location only if different
        }
      }
    }
  }, [selectedProfile, clientData]);

  useEffect(() => {
    if (clientData?.Profiles) {
      // Update Profile when Location changes
      if (selectedLocation) {
        const locationData = clientData.Profiles.find(
          (profile: any) => profile.location === selectedLocation,
        );
        setProfileDetails(locationData);
        if (locationData && locationData.profile !== selectedProfile) {
          setSelectedProfile(locationData.profile); // Set Profile only if different
        }
      }
    }
  }, [selectedLocation, clientData]);

  const handleProfileChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // Only update state if it's different from current selection
    const profileValue = e.target.value;
    if (profileValue !== selectedProfile) {
      setSelectedProfile(profileValue);
    }
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // Only update state if it's different from current selection
    const locationValue = e.target.value;
    if (locationValue !== selectedLocation) {
      setSelectedLocation(locationValue);
    }
  };

  return (
    <>
      <Breadcrumb pageName="OnBoarding Details" />
      <div className="flex flex-col gap-9">
        <div className="relative rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              Client OnBoarding Summary
            </h3>
          </div>
          {/* Close Button */}
          <NavLink
            to="/client-master/client-details"
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-500 text-2xl p-2"
          >
            &times;
          </NavLink>

          <form action="#">
            <div className="p-6.5">
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Client Name
                </label>
                <input
                  type="text"
                  placeholder="Enter client name"
                  value={clientData?.clientName || ''}
                  readOnly
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>

              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Profile
                  </label>
                  <select
                    value={selectedProfile}
                    onChange={handleProfileChange}
                    className="w-full rounded border-[1.5px] border-stroke py-3 px-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-white dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  >
                    <option value="" disabled>
                      Select Client Profile
                    </option>
                    {clientData?.Profiles.map((profile: any) => (
                      <option key={profile.profile} value={profile.profile}>
                        {profile.profile}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Location
                  </label>
                  <select
                    value={selectedLocation}
                    onChange={handleLocationChange}
                    className="w-full rounded border-[1.5px] border-stroke py-3 px-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-white dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  >
                    <option value="" disabled>
                      Select Client Location
                    </option>
                    {clientData?.Profiles.map((profile: any) => (
                      <option key={profile.location} value={profile.location}>
                        {profile.location}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Automatically fill the form based on selected profile or location */}
              {profileDetails && (
                <>
                  <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                    <div className="w-full xl:w-1/2">
                      <label className="mb-2.5 block text-black dark:text-white">
                        Account Manager
                      </label>
                      <input
                        type="text"
                        value={profileDetails?.accountManager || ''}
                        readOnly
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                    </div>
                    <div className="w-full xl:w-1/2">
                      <label className="mb-2.5 block text-black dark:text-white">
                        SPOC
                      </label>
                      <input
                        type="text"
                        value={profileDetails?.spoc || ''}
                        readOnly
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                    </div>
                  </div>
                  <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                    <div className="w-full xl:w-1/2">
                      <label className="mb-2.5 block text-black dark:text-white">
                        Interview Type
                      </label>
                      <input
                        type="text"
                        value={profileDetails?.interviewType || ''}
                        readOnly
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                    </div>

                    <div className="w-full xl:w-1/2">
                      <label className="mb-2.5 block text-black dark:text-white">
                        Interview Timing
                      </label>
                      <input
                        type="text"
                        value={profileDetails?.interviewTiming || ''}
                        readOnly
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                    </div>
                  </div>
                  <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                    <div className="w-full xl:w-1/2">
                      <label className="mb-2.5 block text-black dark:text-white">
                        Billing Point
                      </label>
                      <input
                        type="number"
                        value={profileDetails?.billingPoint || ''}
                        readOnly
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                    </div>

                    <div className="w-full xl:w-1/2">
                      <label className="mb-2.5 block text-black dark:text-white">
                        Joining Point
                      </label>
                      <input
                        type="number"
                        value={profileDetails?.joiningPoint || ''}
                        readOnly
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                    </div>
                  </div>
                  <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                    <div className="w-full xl:w-1/2">
                      <label className="mb-2.5 block text-black dark:text-white">
                        LockIn Period
                      </label>
                      <input
                        type="number"
                        value={profileDetails?.lockInPeriod || ''}
                        readOnly
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                    </div>

                    <div className="w-full xl:w-1/2">
                      <label className="mb-2.5 block text-black dark:text-white">
                        Address
                      </label>
                      <input
                        type="text"
                        value={profileDetails?.address || ''}
                        readOnly
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                    </div>
                  </div>
                  <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                    <div className="w-full xl:w-1/2">
                      <label className="mb-2.5 block text-black dark:text-white">
                        Hiring Parameters
                      </label>
                      <input
                        type="text"
                        value={profileDetails?.hiringParameter || ''}
                        readOnly
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default DisplayClientDetails;
