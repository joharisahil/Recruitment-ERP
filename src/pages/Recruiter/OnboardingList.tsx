import { NavLink } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

const OnboardingList = () => {
  // Mock data
  const [onboardingForms, setOnboardingForms] = useState([
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      status: 'Not Filled',
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@example.com',
      status: 'Completed',
    },
  ]);

  // Function to copy the onboarding form link
  const copyToClipboard = () => {
    const onboardingLink = 'http://localhost:5173/onboarding-form';
    navigator.clipboard
      .writeText(onboardingLink)
      .then(() => {
        toast.success('Link copied to clipboard!', {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      })
      .catch(() => {
        toast.error('Failed to copy link.', {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      });
  };

  // Function to remove an onboarding form
  const removeForm = (id: number) => {
    const updatedForms = onboardingForms.filter((form) => form.id !== id);
    setOnboardingForms(updatedForms);
    if (updatedForms.length === 0) {
      toast.info('No onboarding forms available.', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <>
      <Breadcrumb pageName="OnBoarding List" />

      <div className="flex flex-col gap-9">
        {onboardingForms.length > 0 ? (
          onboardingForms.map((form) => (
            <div
              key={form.id}
              className="relative rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"
            >
              <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Recruiter OnBoarding Form
                </h3>
              </div>
              {/* Close Button */}
              <button
                onClick={() => removeForm(form.id)}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-500 text-2xl p-2"
              >
                &times;
              </button>

              <div className="p-6.5">
                <h3 className="font-medium text-black dark:text-white">
                  Recruiter Summary
                </h3>
                <p>First Name: {form.firstName}</p>
                <p>Last Name: {form.lastName}</p>
                <p>Email: {form.email}</p>
                <p>Status: {form.status}</p>
                <div className="flex gap-4 mt-4">
                  <NavLink
                    // to={`/recruiter-master/onboarding-list/display-onboarding-form/${form.id}`}
                    to="/recruiter-master/onboarding-list/display-onboarding-form"
                    className="rounded bg-primary p-2 font-medium text-gray hover:bg-opacity-90"
                  >
                    View Form
                  </NavLink>
                  <button
                    onClick={copyToClipboard}
                    className="rounded bg-primary p-2 font-medium text-gray hover:bg-opacity-90"
                  >
                    Get Link
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500">
            <p>No onboarding forms available.</p>
          </div>
        )}
      </div>
    </>
  );
};

export default OnboardingList;
