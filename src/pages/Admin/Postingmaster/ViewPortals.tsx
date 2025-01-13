import { useEffect, useState } from 'react';
import Breadcrumb from '../../../components/Breadcrumbs/Breadcrumb';
import { getAllPortals, Portal } from '../../../services/postingService';
import { getPostingsByPortal, Posting } from '../../../services/postingService';
import { toast } from 'react-toastify';

const ViewPortals = () => {
  const [portals, setPortals] = useState<Portal[]>([]);
  const [postings, setPostings] = useState<Posting[]>([]);
  const [loading, setLoading] = useState(false);
  const [portalData, setPortalData] = useState({
    portalToken: '',
    SPOC: '',
    jobInventory: '',
    inventoryStartDate: '',
    inventoryEndDate: '',
    subject: '',
    assignedTo: '',
    permittedRefresh: '',
    postingId: '',
  });
  const [errors, setErrors] = useState({
    portalToken: '',
    postingId: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const fetchedPortals = await getAllPortals();
        setPortals(fetchedPortals);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleChange = async (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    setPortalData((prevData) => ({ ...prevData, [name]: value }));

    // Clear error when user starts typing/selecting
    if (errors[name as keyof typeof errors]) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    }

    // When portalToken changes, fetch related postings and populate fields
    if (name === 'portalToken') {
      const selectedPortal = portals.find(
        (portal) => portal.portalToken === value,
      );
      if (selectedPortal) {
        setPortalData({
          ...portalData,
          portalToken: selectedPortal.portalToken,
          SPOC: selectedPortal.SPOC,
          jobInventory: selectedPortal.jobInventory,
          inventoryStartDate: selectedPortal.inventoryStartDate,
          inventoryEndDate: selectedPortal.inventoryEndDate,
          subject: '',
          assignedTo: '',
          permittedRefresh: '',
          postingId: '',
        });
        setPostings([]);
      }

      try {
        const fetchedPostings = await getPostingsByPortal(value);
        setPostings(fetchedPostings);
      } catch (error) {
        const errorMessage =
          error instanceof Error
            ? error.message
            : 'An unexpected error occurred';

        toast.error(errorMessage, {
          position: 'top-right',
        });
      }
    }

    // When postingId changes, populate related fields
    if (name === 'postingId') {
      const selectedPosting = postings.find(
        (posting) => posting.postingId.toString() === value,
      );
      if (selectedPosting) {
        setPortalData((prevData) => ({
          ...prevData,
          subject: selectedPosting.subject,
          assignedTo: selectedPosting.assignedTo,
          permittedRefresh: selectedPosting.permittedRefresh,
        }));
      }
    }
  };

  return (
    <>
      <Breadcrumb pageName="View Portal" />

      <div className="flex flex-col gap-9">
        <div className="relative rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              Portal Details
            </h3>
          </div>

          <div>
            <div className="p-6.5">
              {/* Portal Dropdown */}
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Portal name
                </label>
                <select
                  name="portalToken"
                  value={portalData.portalToken}
                  onChange={handleChange}
                  className={`w-full rounded border-[1.5px] border-stroke py-3 px-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary ${
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

              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  SPOC
                </label>
                <input
                  type="text"
                  name="SPOC"
                  value={portalData.SPOC}
                  onChange={handleChange}
                  placeholder="SPOC"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  disabled
                />
              </div>

              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Job posting inventory
                </label>
                <input
                  type="text"
                  name="jobInventory"
                  value={portalData.jobInventory}
                  onChange={handleChange}
                  placeholder="Job inventory"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  disabled
                />
              </div>
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Inventory start date
                </label>
                <input
                  type="text"
                  name="inventoryStartDate"
                  value={portalData.inventoryStartDate}
                  onChange={handleChange}
                  placeholder="Start date"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  disabled
                />
              </div>
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Inventory end date
                </label>
                <input
                  type="text"
                  name="inventoryEndDate"
                  value={portalData.inventoryEndDate}
                  onChange={handleChange}
                  placeholder="End date"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  disabled
                />
              </div>

              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Select posting
                </label>
                <select
                  name="postingId"
                  value={portalData.postingId}
                  onChange={handleChange}
                  className={`w-full rounded border-[1.5px] border-stroke py-3 px-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary ${
                    errors.postingId ? 'border-red-500' : ''
                  }`}
                  disabled={loading || postings.length === 0}
                >
                  <option value="" disabled>
                    {loading
                      ? 'Loading postings...'
                      : postings.length === 0
                      ? 'No postings available'
                      : 'Select posting'}
                  </option>
                  {postings.map((posting) => (
                    <option key={posting.postingId} value={posting.postingId}>
                      {posting.subject}
                    </option>
                  ))}
                </select>
                {errors.postingId && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.postingId}
                  </p>
                )}
              </div>

              {/* Fields for posting details */}
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={portalData.subject}
                  placeholder="Subject"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  disabled
                />
              </div>
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Assigned to
                </label>
                <input
                  type="text"
                  name="assignedTo"
                  value={portalData.assignedTo}
                  placeholder="Assigned to"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  disabled
                />
              </div>
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Permitted refresh
                </label>
                <input
                  type="text"
                  name="permittedRefresh"
                  value={portalData.permittedRefresh}
                  placeholder="Permitted refresh"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  disabled
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewPortals;
