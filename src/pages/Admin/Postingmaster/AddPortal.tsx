import { useState } from 'react';
import Breadcrumb from '../../../components/Breadcrumbs/Breadcrumb';
import { createPortal } from '../../../services/postingService';
import { toast } from 'react-toastify';

const AddPortal = () => {
  const [formValues, setFormValues] = useState({
    portal: '',
    SPOC: '',
    jobInventory: '',
    inventoryStartDate: '',
    inventoryEndDate: '',
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await createPortal(formValues);
      toast.success('Portal added successfully!');
      setFormValues({
        portal: '',
        SPOC: '',
        jobInventory: '',
        inventoryStartDate: '',
        inventoryEndDate: '',
      });
    } catch (error: any) {
      // Extract the backend error message
      const errorMessage =
        error.response?.data?.message ||
        'Failed to create portal. Please try again.';
      toast.error(errorMessage); // Display the backend error message
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Breadcrumb pageName="OnBoard Portal" />

      <div className="flex flex-col gap-9">
        <div className="relative rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              Portal OnBoarding
            </h3>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="p-6.5">
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Portal name
                </label>
                <input
                  type="text"
                  name="portal"
                  placeholder="Enter portal name"
                  value={formValues.portal}
                  onChange={handleInputChange}
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  required
                />
              </div>
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  SPOC
                </label>
                <input
                  type="text"
                  name="SPOC"
                  placeholder="Enter SPOC"
                  value={formValues.SPOC}
                  onChange={handleInputChange}
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  required
                />
              </div>
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Job posting inventory
                </label>
                <input
                  type="number"
                  name="jobInventory"
                  placeholder="Enter job posting inventory"
                  value={formValues.jobInventory}
                  onChange={handleInputChange}
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  required
                />
              </div>
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Inventory start date
                </label>
                <input
                  type="date"
                  name="inventoryStartDate"
                  value={formValues.inventoryStartDate}
                  onChange={handleInputChange}
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  required
                />
              </div>
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Inventory end date
                </label>
                <input
                  type="date"
                  name="inventoryEndDate"
                  value={formValues.inventoryEndDate}
                  onChange={handleInputChange}
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90 flex justify-center items-center"
              >
                {loading ? 'Adding...' : 'Add Portal'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddPortal;
