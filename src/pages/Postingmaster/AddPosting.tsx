import { useState, useEffect } from 'react';
import {
  getAllPortals,
  fetchRecruiters,
  createPosting,
  Portal,
  Recruiter,
} from '../../services/postingService';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import { toast } from 'react-toastify';

const AddPosting = () => {
  const [portals, setPortals] = useState<Portal[]>([]);
  const [recruiters, setRecruiters] = useState<Recruiter[]>([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    portalToken: '',
    subject: '',
    assignedTo: '',
    permittedRefresh: '',
  });
  const [errors, setErrors] = useState({
    portalToken: '',
    assignedTo: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [fetchedPortals, fetchedRecruiters] = await Promise.all([
          getAllPortals(),
          fetchRecruiters(),
        ]);
        setPortals(fetchedPortals);
        setRecruiters(fetchedRecruiters);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

    // Clear error when user starts typing/selecting
    if (errors[name as keyof typeof errors]) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    }
  };

  const validate = (): boolean => {
    const newErrors = {
      portalToken: '',
      assignedTo: '',
    };
    let isValid = true;

    if (!formData.portalToken) {
      newErrors.portalToken = 'Portal name is required';
      isValid = false;
    }
    if (!formData.assignedTo) {
      newErrors.assignedTo = 'Assigned to is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    const payload = {
      RequestMap: {
        portalToken: formData.portalToken,
        subject: formData.subject,
        assignedTo: formData.assignedTo,
        permittedRefresh: formData.permittedRefresh,
      },
    };

    try {
      setLoading(true);
      await createPosting(payload);
      toast.success('Posting created successfully!');
      setFormData({
        portalToken: '',
        subject: '',
        assignedTo: '',
        permittedRefresh: '',
      });
    } catch (error) {
      toast.error('Failed to create posting. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Breadcrumb pageName="Add Posting" />

      <div className="flex flex-col gap-9">
        <div className="relative rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              Add Posting
            </h3>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="p-6.5">
              {/* Portal Name */}
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Portal name
                </label>
                <select
                  name="portalToken"
                  value={formData.portalToken}
                  onChange={handleChange}
                  className={`w-full rounded border-[1.5px] border-stroke py-3 px-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-white dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary ${
                    errors.portalToken ? 'border-red-500' : ''
                  }`}
                  disabled={loading}
                >
                  <option value="" disabled>
                    {loading ? 'Loading portals...' : 'Select portal name'}
                  </option>
                  {portals.map((portal) => (
                    <option key={portal.portalToken} value={portal.portalToken}>
                      {portal.portal}
                    </option>
                  ))}
                </select>
                {errors.portalToken && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.portalToken}
                  </p>
                )}
              </div>

              {/* Subject */}
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter subject"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>

              {/* Assign To */}
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Assign to
                </label>
                <select
                  name="assignedTo"
                  value={formData.assignedTo}
                  onChange={handleChange}
                  className={`w-full rounded border-[1.5px] border-stroke py-3 px-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-white dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary ${
                    errors.assignedTo ? 'border-red-500' : ''
                  }`}
                  disabled={loading}
                >
                  <option value="" disabled>
                    {loading ? 'Loading recruiters...' : 'Select recruiter'}
                  </option>
                  {recruiters.map((recruiter) => (
                    <option
                      key={recruiter.token}
                      value={recruiter.EmailId_Official}
                    >
                      {recruiter.EmailId_Official}
                    </option>
                  ))}
                </select>
                {errors.assignedTo && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.assignedTo}
                  </p>
                )}
              </div>

              {/* Permitted Refresh */}
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Permitted refresh
                </label>
                <input
                  type="number"
                  name="permittedRefresh"
                  value={formData.permittedRefresh}
                  onChange={handleChange}
                  placeholder="Enter permitted refresh"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90 flex justify-center items-center"
                disabled={loading}
              >
                {loading ? 'Submitting...' : 'Add Posting'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddPosting;
