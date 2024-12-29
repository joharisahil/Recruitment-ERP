import React, { useState } from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';

type Field = {
  mainField: string;
  subFields: string[];
};

const InterviewStatusList = () => {
  // Define the fields state with proper types
  const [fields, setFields] = useState<Field[]>([
    { mainField: '', subFields: [] }, // Initialize with one field having no subfields
  ]);

  const handleAddField = () => {
    setFields([...fields, { mainField: '', subFields: [] }]); // Add a new field with no subfields
  };

  const handleFieldChange = (index: number, value: string) => {
    const updatedFields = [...fields];
    updatedFields[index].mainField = value; // Update the main field's value
    setFields(updatedFields);
  };

  const handleSubFieldChange = (
    mainFieldIndex: number,
    subFieldIndex: number,
    value: string,
  ) => {
    const updatedFields = [...fields];
    updatedFields[mainFieldIndex].subFields[subFieldIndex] = value; // Update the specific subfield
    setFields(updatedFields);
  };

  const handleAddSubField = (mainFieldIndex: number) => {
    const updatedFields = [...fields];
    updatedFields[mainFieldIndex].subFields.push(''); // Add an empty subfield to the specific main field
    setFields(updatedFields);
  };

  const handleDeleteField = (index: number) => {
    const updatedFields = fields.filter((_, i) => i !== index); // Remove the field at the given index
    setFields(updatedFields);
  };

  const handleDeleteSubField = (
    mainFieldIndex: number,
    subFieldIndex: number,
  ) => {
    const updatedFields = [...fields];
    updatedFields[mainFieldIndex].subFields = updatedFields[
      mainFieldIndex
    ].subFields.filter((_, i) => i !== subFieldIndex); // Remove the subfield at the given index
    setFields(updatedFields);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(fields); // Handle the submit logic here
  };

  return (
    <>
      <Breadcrumb pageName="Add Interview Status List" />

      <div className="flex flex-col gap-9">
        <div className="relative rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              Create Interview Status Dropdown
            </h3>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="p-6.5">
              <div className="mb-4.5 flex flex-col gap-6">
                {fields.map((field, mainFieldIndex) => (
                  <div
                    className="w-full flex flex-col gap-4"
                    key={mainFieldIndex}
                  >
                    <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4">
             
                      <div className="w-full sm:flex-1">
                        <label
                          className="mb-2.5 block text-black dark:text-white"
                          htmlFor={`field-${mainFieldIndex}`}
                        >
                          List item {mainFieldIndex + 1}
                        </label>
                        <input
                          id={`field-${mainFieldIndex}`}
                          type="text"
                          value={field.mainField}
                          onChange={(e) =>
                            handleFieldChange(mainFieldIndex, e.target.value)
                          }
                          placeholder="Enter interview status item"
                          className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                          style={{
                            height: '3rem', 
                          }}
                        />
                      </div>

              
                      <div className="flex flex-wrap gap-2 mt-4 sm:mt-0 w-full sm:w-auto">
                        <button
                          type="button"
                          onClick={() => handleDeleteField(mainFieldIndex)}
                          className="flex-1 sm:flex-none rounded bg-red-500 px-4 py-2 font-medium text-white hover:bg-red-600"
                          style={{
                            height: '3rem', 
                          }}
                        >
                          Delete
                        </button>

                        <button
                          type="button"
                          onClick={() => handleAddSubField(mainFieldIndex)}
                          className="flex-1 sm:flex-none rounded bg-primary px-4 py-2 font-medium text-white hover:bg-primary-dark"
                          style={{
                            height: '3rem', 
                          }}
                        >
                          Add Subfield
                        </button>
                      </div>
                    </div>

                    {field.subFields.map((subField, subFieldIndex) => (
                      <div
                        className="flex items-center gap-4"
                        key={subFieldIndex}
                      >
                        <div className="flex-1">
                          <label
                            className="mb-2.5 block text-black dark:text-white"
                            htmlFor={`sub-field-${mainFieldIndex}-${subFieldIndex}`}
                          >
                            Subfield {subFieldIndex + 1}
                          </label>
                          <input
                            id={`sub-field-${mainFieldIndex}-${subFieldIndex}`}
                            type="text"
                            value={subField}
                            onChange={(e) =>
                              handleSubFieldChange(
                                mainFieldIndex,
                                subFieldIndex,
                                e.target.value,
                              )
                            }
                            placeholder="Enter subfield item"
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            style={{
                              height: '3rem',
                            }}
                          />
                        </div>
                        <button
                          type="button"
                          onClick={() =>
                            handleDeleteSubField(mainFieldIndex, subFieldIndex)
                          }
                          className="rounded bg-red-500 px-4 py-2 mt-8 font-medium text-white hover:bg-red-600 flex-shrink-0"
                          style={{
                            height: '3rem',
                          }}
                        >
                          Delete Subfield
                        </button>
                      </div>
                    ))}
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

export default InterviewStatusList;
