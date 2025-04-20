import { useState } from 'react';
import Breadcrumb from '../../../components/Breadcrumbs/Breadcrumb';

const DropReasonList = () => {
  const [fields, setFields] = useState(['']); // Initialize with one empty input field

  const handleAddField = () => {
    setFields([...fields, '']); // Add a new empty input field
  };

  const handleFieldChange = (index: number, value: string) => {
    const updatedFields = [...fields];
    updatedFields[index] = value; // Update the specific field
    setFields(updatedFields);
  };

  const handleDeleteField = (index: number) => {
    const updatedFields = fields.filter((_, i) => i !== index); // Remove the field at the given index
    setFields(updatedFields);
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log(fields); // Handle the submit logic here
  };

  return (
    <>
      <Breadcrumb pageName="Add Drop Reason" />

      <div className="flex flex-col gap-9">
        <div className="relative rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              Create Drop Reason Dropdown
            </h3>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="p-6.5">
              <div className="mb-4.5 flex flex-col gap-6">
                {fields.map((field, index) => (
                  <div className="w-full flex items-center gap-4" key={index}>
                    <div className="flex-1">
                      <label
                        className="mb-2.5 block text-black dark:text-white"
                        htmlFor={`field-${index}`}
                      >
                        List item {index + 1}
                      </label>
                      <input
                        id={`field-${index}`}
                        type="text"
                        value={field}
                        onChange={(e) =>
                          handleFieldChange(index, e.target.value)
                        }
                        placeholder="Enter interview status item"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => handleDeleteField(index)}
                      className="rounded bg-red-500 p-3 mt-8 font-medium text-white hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </div>
                ))}

                <button
                  type="button"
                  onClick={handleAddField}
                  className="sm:w-1/3 md:w-1/4 rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90 flex justify-center items-center"
                >
                  Add more item
                </button>
              </div>

              <button
                type="submit"
                className="sm:w-1/3 md:w-1/4 rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90 flex justify-center items-center"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default DropReasonList;
