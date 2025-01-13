import React, { useState } from 'react';
import { createClient } from '../../../services/clientService';
import Breadcrumb from '../../../components/Breadcrumbs/Breadcrumb';
import { toast } from 'react-toastify';

interface Profile {
  profile: string;
  joiningPoint: string;
  location: string;
  interviewType: string;
  billingPoint: string;
  lockInPeriod: string;
  address: string;
  spoc: string;
  accountManager: string;
  interviewTiming: string;
  hiringParameter: string;
}

const OnboardClientForm = () => {
  const [clientName, setClientName] = useState('');
  const [profiles, setProfiles] = useState<Profile[]>([
    {
      profile: '',
      joiningPoint: '',
      location: '',
      interviewType: '',
      billingPoint: '',
      lockInPeriod: '',
      address: '',
      spoc: '',
      accountManager: '',
      interviewTiming: '',
      hiringParameter: '',
    },
  ]);
  const [validationErrors, setValidationErrors] = useState<
    Record<string, boolean>[]
  >([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleProfileChange = (
    index: number,
    value: string,
    field: keyof Profile,
  ) => {
    const updatedProfiles = [...profiles];
    updatedProfiles[index][field] = value;
    setProfiles(updatedProfiles);
  };

  const handleAddProfile = () => {
    setProfiles([
      ...profiles,
      {
        profile: '',
        joiningPoint: '',
        location: '',
        interviewType: '',
        billingPoint: '',
        lockInPeriod: '',
        address: '',
        spoc: '',
        accountManager: '',
        interviewTiming: '',
        hiringParameter: '',
      },
    ]);
  };

  const handleRemoveProfile = (index: number) => {
    const updatedProfiles = profiles.filter((_, i) => i !== index);
    setProfiles(updatedProfiles);
    const updatedErrors = validationErrors.filter((_, i) => i !== index);
    setValidationErrors(updatedErrors);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    let hasValidationErrors = false;

    // Validate client name
    if (!clientName.trim()) {
      hasValidationErrors = true;
    }

    // Validate profiles
    const profileErrors = profiles.map((entry) => {
      const errors: Record<string, boolean> = {};
      const mandatoryFields = [
        'profile',
        'joiningPoint',
        'location',
        'interviewType',
        'billingPoint',
        'lockInPeriod',
        'address',
        'spoc',
        'accountManager',
        'interviewTiming',
      ];

      const isPartiallyFilled = Object.values(entry).some(
        (value) => value.trim() !== '',
      );
      if (isPartiallyFilled) {
        mandatoryFields.forEach((field) => {
          if (!entry[field as keyof Profile]?.trim()) {
            errors[field] = true;
            hasValidationErrors = true;
          }
        });
      }

      return errors;
    });

    setValidationErrors(profileErrors);

    if (hasValidationErrors) {
      setIsSubmitting(false);
      return;
    }

    const nonEmptyProfiles = profiles.filter((entry) =>
      Object.values(entry).some((value) => value.trim() !== ''),
    );

    const payload = {
      RequestMap: {
        clientName: clientName.trim(),
        activeFlag: 'Y',
        Profiles: nonEmptyProfiles.map((entry) => ({
          ...entry,
          hiringParameters: entry.hiringParameter || '',
        })),
      },
    };

    try {
      const result = await createClient(payload);
      toast.success(result.SuccessMessage || 'Client created successfully!');
      // Reset the form after successful submission
      setClientName('');
      setProfiles([
        {
          profile: '',
          joiningPoint: '',
          location: '',
          interviewType: '',
          billingPoint: '',
          lockInPeriod: '',
          address: '',
          spoc: '',
          accountManager: '',
          interviewTiming: '',
          hiringParameter: '',
        },
      ]);
      setValidationErrors([]); // Clear validation errors
    } catch (error: any) {
      toast.error(
        error.message || 'An error occurred while creating the client.',
      ); // Display error message
    } finally {
      setIsSubmitting(false); // Stop loading spinner
    }
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
                  className={`w-full rounded border-[1.5px] ${
                    !clientName.trim() && validationErrors.length > 0
                      ? 'border-red-500 dark:border-red-500'
                      : 'border-stroke dark:border-form-strokedark'
                  } bg-transparent py-3 px-5 text-black dark:text-white outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:focus:border-primary`}
                />
              </div>

              {/* Profile Fields */}
              {profiles.map((entry, index) => (
                <div
                  key={index}
                  className="mb-4.5 border-b pb-4 last:border-none"
                >
                  <h4 className="mb-2.5 block font-medium text-black dark:text-white">
                    Profile {index + 1}
                  </h4>
                  {Object.keys(entry).map((key) => {
                    const isOptional = key === 'hiringParameter';
                    const placeholder = isOptional ? 'Optional' : 'Required';
                    const errorClass = validationErrors[index]?.[key]
                      ? 'border-red-500'
                      : 'border-stroke dark:border-form-strokedark';

                    return (
                      <div key={key} className="mb-2">
                        <input
                          type="text"
                          placeholder={`${key} (${placeholder})`}
                          value={entry[key as keyof Profile]}
                          onChange={(e) =>
                            handleProfileChange(
                              index,
                              e.target.value,
                              key as keyof Profile,
                            )
                          }
                          className={`w-full rounded border-[1.5px] ${errorClass} bg-transparent py-3 px-5 text-black dark:text-white outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:focus:border-primary`}
                        />
                      </div>
                    );
                  })}
                  {profiles.length > 1 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveProfile(index)}
                      className="mt-2 text-red-500 hover:underline"
                    >
                      Remove Profile
                    </button>
                  )}
                </div>
              ))}

              {/* Add Profile Button */}
              <button
                type="button"
                onClick={handleAddProfile}
                className="mb-4 w-full rounded bg-primary py-3 text-white hover:bg-primary-dark"
              >
                Add Profile
              </button>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full rounded bg-primary py-3 text-white flex justify-center items-center hover:bg-primary-dark"
                disabled={isSubmitting} // Disable button during submission
              >
                {isSubmitting ? (
                  <div className="loader border-t-transparent border-4 border-white w-5 h-5 rounded-full animate-spin"></div>
                ) : (
                  'Submit'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default OnboardClientForm;
