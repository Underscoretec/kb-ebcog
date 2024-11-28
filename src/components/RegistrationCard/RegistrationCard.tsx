import Button from '@/common/uicomponents/Button'
import ImageUploader from '@/common/uicomponents/ImageUploader'
import InputField from '@/common/uicomponents/InputField'
import RadioListTable from '@/common/uicomponents/RadioListTable'
import React from 'react'

const RegistrationCard = () => {

    const settings = [
        { name: 'Reproductive Medicine and Endocrinology' },
        { name: 'Ultrasound and Prenatal Medicine' },
        { name: 'Hysteroscopy and Laparoscopy' },
        { name: 'Maternal Medicine' },
      ]
      
    return (
        <div className="flex flex-col items-center justify-center bg-[#F9FAFB] pt-20 pb-32">
            <h2 className="text-[#111827] font-montserrat text-[30px] font-extrabold leading-[36px]">
                Registration
            </h2>
            <div className="text-[#4F46E5] font-montserrat text-sm font-semibold leading-5 pt-2 pb-12 text-center px-2">Diploma courses by European Board &
                College of Obstetrics and Gynaecology</div>
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-custom">
                <form className="space-y-6">
                    <InputField
                        label="Name"
                        id="name"
                        required
                    />
                    <InputField
                        label="Email Id"
                        type="email"
                        id="password"
                        required
                    />
                    <InputField
                        label="Whatsapp Number"
                        id="whatsapp"
                        required
                    />
                    <InputField
                        label="City"
                        id="city"
                        required
                    />
                    <InputField
                        label="State"
                        id="state"
                        required
                    />
                    <InputField
                        label="Country"
                        id="country"
                        required
                    />
                    <RadioListTable label='Please choose Diploma course for which you want to Register' settings={settings}/>
                    <ImageUploader label='Upload Your Latest Degree Certificate'/>
                    <ImageUploader label='Upload Your Basic Degree Document'/>
                    <Button
                        type="submit"
                        label="Submit"
                        className="w-full py-2 bg-[#E4087F] font-semibold text-white rounded-md hover:bg-[#ac0660] focus:outline-none focus:ring-2 focus:ring-[#E4087F] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                </form>
            </div>
        </div>
    )
}

export default RegistrationCard