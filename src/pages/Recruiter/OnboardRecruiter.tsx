import { useState } from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';

type RecruiterFormField = 'firstName' | 'lastName' | 'email' | 'submitted';

interface RecruiterForm {
  firstName: string;
  lastName: string;
  email: string;
  submitted: boolean;
}

const OnboardRecruiter = () => {
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
  };

  const addNewRecruiterForm = () => {
    setRecruiterForms([
      ...recruiterForms,
      { firstName: '', lastName: '', email: '', submitted: false },
    ]);
  };

  const toggleFormView = (index: number) => {
    const updatedForms = [...recruiterForms];
    updatedForms[index].submitted = false;
    setRecruiterForms(updatedForms);
  };

  const removeForm = (index: number) => {
    setRecruiterForms(recruiterForms.filter((_, i) => i !== index));
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
            {/* Close Button */}
            <button
              onClick={() => removeForm(index)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-500 text-2xl p-2"
            >
              &times;
            </button>

            {form.submitted ? (
              <div className="p-6.5">
                <h3 className="font-medium text-black dark:text-white">
                  Recruiter Summary
                </h3>
                <p>First Name: {form.firstName}</p>
                <p>Last Name: {form.lastName}</p>
                <p>Email: {form.email}</p>
                <p>Status: Not Filled</p>
                <div className="flex gap-4 mt-4">
                  <button
                    className="rounded bg-primary p-2 font-medium text-gray hover:bg-opacity-90"
                    onClick={() => toggleFormView(index)}
                  >
                    View Form
                  </button>
                  <button className="rounded bg-primary p-2 font-medium text-gray hover:bg-opacity-90">
                    Get Link
                  </button>
                </div>
              </div>
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
