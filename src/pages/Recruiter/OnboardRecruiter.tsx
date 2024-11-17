import { useState } from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import OnboardingList from './OnboardingList';

type RecruiterFormField = 'firstName' | 'lastName' | 'email' | 'submitted';

interface RecruiterForm {
  firstName: string;
  lastName: string;
  email: string;
  submitted: boolean;
}

const OnboardRecruiter = () => {
  const navigate = useNavigate();
  const [recruiterForms, setRecruiterForms] = useState<RecruiterForm[]>([
    { firstName: '', lastName: '', email: '', submitted: false },
  ]);

  const handleInputChange = (
    index: number,
    field: RecruiterFormField,
    value: string | boolean,
  ) => {
    const updatedForms = [...recruiterForms];
    updatedForms[index] = {
      ...updatedForms[index],
      [field]: value,
    };
    setRecruiterForms(updatedForms);
  };

  const handleSubmit = (index: number, event: React.FormEvent) => {
    event.preventDefault();
    const updatedForms = [...recruiterForms];
    updatedForms[index].submitted = true;
    setRecruiterForms(updatedForms);

    navigate('/recruiter-master/onboarding-list');
  };

  const addNewRecruiterForm = () => {
    setRecruiterForms([
      ...recruiterForms,
      { firstName: '', lastName: '', email: '', submitted: false },
    ]);
  };

  const removeForm = (index: number) => {
    setRecruiterForms(recruiterForms.filter((_, i) => i !== index));
  };

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

  return (
    <>
      <Breadcrumb pageName="OnBoard Recruiter" />

      <div className="flex flex-col gap-9">
        {recruiterForms.map((form, index) => (
          <div
            key={index}
            className="relative rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"
          >
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Recruiter OnBoarding Form
              </h3>
            </div>
            {/* Close Button */}
            <button
              onClick={() => removeForm(index)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-500 text-2xl p-2"
            >
              &times;
            </button>

            {form.submitted ? (
              <OnboardingList />
            ) : (
              <form onSubmit={(event) => handleSubmit(index, event)}>
                <div className="p-6.5">
                  <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                    <div className="w-full xl:w-1/2">
                      <label className="mb-2.5 block text-black dark:text-white">
                        First name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your first name"
                        value={form.firstName}
                        onChange={(e) =>
                          handleInputChange(index, 'firstName', e.target.value)
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
                        placeholder="Enter your last name"
                        value={form.lastName}
                        onChange={(e) =>
                          handleInputChange(index, 'lastName', e.target.value)
                        }
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="mb-4.5">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      value={form.email}
                      onChange={(e) =>
                        handleInputChange(index, 'email', e.target.value)
                      }
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                  <button
                    type="submit"
                    onClick={copyToClipboard}
                    className="w-full rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
                  >
                    Get Link
                  </button>
                </div>
              </form>
            )}
          </div>
        ))}

        <div className="flex justify-end">
          <button
            onClick={addNewRecruiterForm}
            className="sm:w-1/3 md:w-1/4 rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
          >
            Add New Recruiter
          </button>
        </div>
      </div>
    </>
  );
};

export default OnboardRecruiter;
