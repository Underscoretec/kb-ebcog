const RefundPolicy = () => {

    return (
        <div className="bg-gray-100 text-gray-800 min-h-screen">
            {/* Header Section */}
            <header className="bg-gray-400 text-white p-6">
                <div className="container mx-auto text-center">
                    <h1 className="text-3xl md:text-4xl font-bold">Cancellation, Refund and Return Policy</h1>
                    <p className="mt-2 text-lg"></p>
                </div>
            </header>

            {/* Main Content Section */}
            <main className="container mx-auto p-6">
                {/* Introduction */}
                <section className="mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold my-4 ">Eligibility for Refund</h2>
                    <p className="text-[#1d1c1c] font-montserrat text-[18px] font-normal leading-[25px] py-2 xl:leading-[27px]">
                        A refund may be issued or claimed by a customer in the following circumstances:
                    </p>
                    <ul className='flex flex-col gap-6 list-disc py-4 pl-5'>
                        <li className="text-[#555555] font-montserrat text-[18px] font-normal leading-[25px]"><span className="font-semibold">Course Cancellation : </span>{`If the organization cancels the diploma course before its commencement, a full refund will be provided.`}</li>
                        <li className="text-[#555555] font-montserrat text-[18px] font-normal leading-[25px]"><span className="font-semibold">Failure to Deliver Promised Content, if any : </span>{`If the organization fails to deliver a significant portion of the promised course content or materials within the first 30 days of the course.`}</li>
                        <li className="text-[#555555] font-montserrat text-[18px] font-normal leading-[25px]"><span className="font-semibold">Instructor Unavailability : </span>{`If the primary instructor(s) become unavailable and a suitable replacement cannot be found within 14 days of the scheduled start date.`}</li>
                        <li className="text-[#555555] font-montserrat text-[18px] font-normal leading-[25px]"><span className="font-semibold">Technical Issues : </span>{`If persistent technical problems prevent students from accessing online course materials for more than 7 consecutive days.`}</li>
                        <li className="text-[#555555] font-montserrat text-[18px] font-normal leading-[25px]"><span className="font-semibold">Accreditation Loss : </span>{`If the organization loses its accreditation or certification to offer the diploma course during the program duration.`}</li>
                    </ul>

                </section>

                {/* Refund Process */}
                <section className="mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold my-4 ">Refund Process</h2>
                    <p className="text-[#1d1c1c] font-montserrat text-[18px] font-normal leading-[25px] py-2 xl:leading-[27px]">
                        To claim a refund:
                    </p>
                    <ul className='flex flex-col gap-6 list-disc py-4 pl-5'>
                        <li className="text-[#555555] font-montserrat text-[18px] font-normal leading-[25px]">{`Submit a written request to email within 45 days of the course start date.`}</li>
                        <li className="text-[#555555] font-montserrat text-[18px] font-normal leading-[25px]">{`Clearly state the reason for the refund request, referencing one of the eligible circumstances listed above.`}</li>
                        <li className="text-[#555555] font-montserrat text-[18px] font-normal leading-[25px]">{`Provide any relevant supporting documentation.`}</li>
                    </ul>

                </section>

                {/* Refund Amount */}
                <section className="mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold my-4 ">Refund Amount</h2>
                    <ul className='flex flex-col gap-6 list-disc py-4 pl-5'>
                        <li className="text-[#555555] font-montserrat text-[18px] font-normal leading-[25px]"><span className="font-semibold">For circumstances 1-3 : </span>{`100% refund of course fees paid.`}</li>
                        <li className="text-[#555555] font-montserrat text-[18px] font-normal leading-[25px]"><span className="font-semibold">For circumstances 4-5 : </span>{`Prorated refund based on the portion of the course completed.`}</li>
                    </ul>

                </section>

                {/* Refund Timeline */}
                <section className="mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold my-4 ">Refund Timeline</h2>
                    <p className="text-[#1d1c1c] font-montserrat text-[18px] font-normal leading-[25px] py-2 xl:leading-[27px]">
                        Refunds will be processed within 60 days of receiving a valid refund request.
                    </p>
                </section>

                {/*Non-Refundable Items */}
                <section className="mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold my-4 ">Non-Refundable Items</h2>
                    <p className="text-[#1d1c1c] font-montserrat text-[18px] font-normal leading-[25px] py-2 xl:leading-[27px]">
                    The following items are non-refundable:
                    </p>
                    <ul className='flex flex-col gap-6 list-disc py-4 pl-5'>
                        <li className="text-[#555555] font-montserrat text-[18px] font-normal leading-[25px]">{`Application fees, if any.`}</li>
                        <li className="text-[#555555] font-montserrat text-[18px] font-normal leading-[25px]">{`Registration fees, if any.`}</li>
                        <li className="text-[#555555] font-montserrat text-[18px] font-normal leading-[25px]">{`Course materials already provided or consumed.`}</li>
                        
                    </ul>
                </section>

                {/*Exceptions */}
                <section className="mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold my-4 ">Exceptions</h2>
                    <ul className='flex flex-col gap-6 list-disc py-4 pl-5'>
                        <li className="text-[#555555] font-montserrat text-[18px] font-normal leading-[25px]">{`No refunds will be issued after 45 days from the course start date, except in case of accreditation loss.`}</li>
                        <li className="text-[#555555] font-montserrat text-[18px] font-normal leading-[25px]">{`Refunds may be denied in cases of student misconduct or violation of academic integrity policies.`}</li>
                    </ul>

                </section>

                {/*Mode of Refund */}
                <section className="mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold my-4 ">Mode of Refund</h2>
                    <ul className='flex flex-col gap-6 list-disc py-4 pl-5'>
                        <li className="text-[#555555] font-montserrat text-[18px] font-normal leading-[25px]">{`Refunds will be made to the original payment source or through electronic transfer to the student's bank account5.`}</li>
                        <li className="text-[#555555] font-montserrat text-[18px] font-normal leading-[25px]">{`The organization reserves the right to modify this refund policy. Any changes will be communicated to enrolled students and posted on the official website.`}</li>
                    </ul>

                </section>
            </main>
        </div>
    );
}

export default RefundPolicy;

