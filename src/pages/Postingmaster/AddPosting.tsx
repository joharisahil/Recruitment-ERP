import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';

const AddPosting = () => {
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
          {/* Close Button */}
          {/* <button
        //   onClick={() => removeForm(index)}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-500 text-2xl p-2"
      >
        &times;
      </button> */}

          <form action="#">
            <div className="p-6.5">
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Portal name
                </label>
                <select
                  className="w-full rounded border-[1.5px] border-stroke py-3 px-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-white dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  defaultValue="" // Default value for placeholder
                >
                  <option value="" disabled>
                    Select portal name
                  </option>
                  <option value="">Naukari</option>
                  <option value="">Shine</option>
                  <option value="">Time</option>
                </select>
              </div>
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Enter subject"
                  // value={form.lastName}
                  // onChange={(e) =>
                  //   handleInputChange(index, 'lastName', e.target.value)
                  // }
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Assign to
                </label>
                <select
                  className="w-full rounded border-[1.5px] border-stroke py-3 px-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-white dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  defaultValue="" // Default value for placeholder
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
                  //   value={form.email}
                  //   onChange={(e) =>
                  //     handleInputChange(index, 'email', e.target.value)
                  //   }
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>

              <button
                type="submit"
                // onClick={copyToClipboard}
                className="w-full rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90 flex justify-center items-center "
              >
                Add Posting
              </button>
            </div>
          </form>
        </div>

        {/* <div className="flex justify-end">
      <button
        // onClick={addNewRecruiterForm}
        className="sm:w-1/3 md:w-1/4 rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
      >
        Add New Recruiter
      </button>
    </div> */}
      </div>
    </>
  );
};

export default AddPosting;
