import { NavLink } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import { getAllRecruiters } from '../../services/recruiterService';

const OnboardingList = () => {
  const [onboardingForms, setOnboardingForms] = useState<
    {
      id: string;
      firstName: string;
      lastName: string;
      email: string;
      status: string;
    }[]
  >([]);

  // Fetch onboarding forms
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllRecruiters();
        const formattedData = data.map((recruiter) => ({
          id: recruiter.token,
          firstName: recruiter.FirstName,
          lastName: recruiter.LastName,
          email: recruiter.EmailId,
          status: recruiter.status === 'FILLED' ? 'Completed' : 'Not Filled',
        }));
        setOnboardingForms(formattedData);
      } catch (error) {
        toast.error('Failed to fetch onboarding forms.', {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    };

    fetchData();
  }, []);

  // Copy the onboarding form link
  const copyToClipboard = (token: string) => {
    const onboardingLink = `http://localhost:5173/onboarding-form?token=${token}`;
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

  // Remove onboarding form
  const removeForm = (id: string) => {
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
                <p>
                  Status:{' '}
                  <span
                    className={`font-semibold ${
                      form.status === 'Completed'
                        ? ' text-red-500'
                        : 'text-gray-500'
                    }`}
                  >
                    {form.status}
                  </span>
                </p>
                <div className="flex gap-4 mt-4">
                  {form.status === 'Completed' ? (
                    <NavLink
                      to="/recruiter-master/onboarding-list/display-onboarding-form"
                      className="rounded bg-primary p-2 font-medium text-gray hover:bg-opacity-90"
                    >
                      View Form
                    </NavLink>
                  ) : (
                    <button
                      disabled
                      className="rounded bg-gray-300 p-2 font-medium text-gray cursor-not-allowed"
                    >
                      View Form
                    </button>
                  )}
                  <button
                    onClick={() => copyToClipboard(form.id)}
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
