import { Radio, RadioGroup } from "@headlessui/react";
import TextAreaField from "./TextArea";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface CheckboxRegProps {
  options: { name: string; value: string }[];
  label: string;
  selectedCourse: any;
  onChange: (value: any) => void;
  required: boolean;
  formik: any;
}

export default function CheckboxReg({
  options,
  label,
  selectedCourse,
  onChange,
  required,
  formik
}: CheckboxRegProps) {


  return (
    <>
      <fieldset>
        <div className="text-[#374151] font-montserrat text-[14px] font-semibold leading-5 pb-2">
          {label}
          {required && <span className="text-[#EB5757]"> *</span>}
        </div>
        <RadioGroup value={selectedCourse} onChange={onChange} className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2">
          {options.map((option, optionIdx) => (
            <Radio
              key={option?.name}
              value={option?.value}
              aria-label={option?.name}
              className={classNames(
                optionIdx === 0 ? 'rounded-md shadow-md' : '',
                optionIdx === options.length - 1 ? 'rounded-md shadow-md' : '',
                'group relative flex cursor-pointer rounded-md shadow-md p-4 focus:outline-none data-[checked]:z-10 data-[checked]:border-indigo-200 data-[checked]:bg-indigo-50',
              )}
            >
              <span
                aria-hidden="true"
                className="mt-0.5 flex size-4 shrink-0 cursor-pointer items-center justify-center rounded-full border border-gray-300 bg-white group-data-[checked]:border-transparent group-data-[checked]:bg-indigo-600 group-data-[focus]:ring-2 group-data-[focus]:ring-indigo-600 group-data-[focus]:ring-offset-2"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
              </span>
              <span className="ml-3 flex flex-col">
                <span className="block text-gray-900 group-data-[checked]:text-indigo-900 font-montserrat text-sm font-medium leading-5">
                  {option?.name}
                </span>
              </span>
            </Radio>
          ))}
        </RadioGroup>
      </fieldset>
      {selectedCourse === "Others" && (
          <TextAreaField
            // label="Write your query"
            rows={4}
            id="otherText"
            placeholder="Write here"
            value={formik.values.otherText}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.otherText && formik.errors.otherText}
           className="flex flex-col gap-1 w-full"
          />
      )}
    </>
  );
}
