import { useState, useEffect } from 'react';
import { getAllPortals, Portal } from '../../services/postingService';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';

const AddPosting = () => {
  const [portals, setPortals] = useState<Portal[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPortals = async () => {
      try {
        setLoading(true);
        const fetchedPortals = await getAllPortals(); // Fetch portals via the service
        setPortals(fetchedPortals);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching portals:', error);
        setLoading(false);
      }
    };

    fetchPortals();
  }, []);

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

          <form action="#">
            <div className="p-6.5">
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Portal name
                </label>
                <select
                  className="w-full rounded border-[1.5px] border-stroke py-3 px-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-white dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  defaultValue=""
                >
                  <option value="" disabled>
                    {loading ? 'Loading portals...' : 'Select portal name'}
                  </option>
                  {portals.map((portal) => (
                    <option key={portal.PortalId} value={portal.portal}>
                      {portal.portal}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Enter subject"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>

              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Assign to
                </label>
                <select
                  className="w-full rounded border-[1.5px] border-stroke py-3 px-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-white dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select recruiter
                  </option>
                  <option value="">Shivang</option>
                  <option value="">Keshav</option>
                  <option value="">Yaman</option>
                </select>
              </div>

              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Permitted refresh
                </label>
                <input
                  type="number"
                  placeholder="Enter permitted refresh"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90 flex justify-center items-center"
              >
                Add Posting
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddPosting;
