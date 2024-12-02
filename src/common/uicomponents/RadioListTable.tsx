import { Radio, RadioGroup } from '@headlessui/react';

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

interface RadioListTableProps {
    settings: { name: string, value: string}[];
    label: string;
    selectedCourse: any;
    onChange: (value: any) => void;
    required: boolean;
}

export default function RadioListTable({ settings, label, selectedCourse, onChange,required }: RadioListTableProps) {
    
    return (
        <fieldset aria-label="Privacy setting">
            <div className="text-[#374151] font-montserrat text-[14px] font-semibold leading-5 pb-2">{label}{required && <span className="text-[#EB5757]"> *</span>}</div>
            <RadioGroup value={selectedCourse} onChange={onChange} className="-space-y-px rounded-md bg-white">
                {settings.map((setting, settingIdx) => (
                    <Radio
                        key={setting.name}
                        value={setting.value} 
                        aria-label={setting.name}
                        className={classNames(
                            settingIdx === 0 ? 'rounded-tl-md rounded-tr-md' : '',
                            settingIdx === settings.length - 1 ? 'rounded-bl-md rounded-br-md' : '',
                            'group relative flex cursor-pointer border border-gray-200 p-4 focus:outline-none data-[checked]:z-10 data-[checked]:border-indigo-200 data-[checked]:bg-indigo-50',
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
                                {setting.name}
                            </span>
                        </span>
                    </Radio>
                ))}
            </RadioGroup>
        </fieldset>
    );
}
