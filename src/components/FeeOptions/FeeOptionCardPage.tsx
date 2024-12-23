import React, { useEffect, useState } from 'react';
import BreadCrumbs from '@/common/uicomponents/BreadCrumbs';
import { useRouter } from 'next/router';
import FeeOptionCard from './FeeOptionCard';
import useCourseHooks from '@/hooks/useCourseHooks';
import { CircularProgress } from '@mui/material';
import useCartHooks from '@/hooks/useCartHooks';
import AlertModal from '@/common/uicomponents/AlertModal';

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ');
}

const FeeOptionCardPage = () => {
    const router = useRouter();
    const [pricing, setPricing] = useState<any[]>([]);
    const [selectedTier, setSelectedTier] = useState<any>(null);
    const [modalData, setModalData] = useState({ isOpen: false, title: '', message: '', redirect: false });

    const { Course, category } = router.query;
    const { loading, fetchCoursePlan } = useCourseHooks();
    const { addToCart, getCartItems } = useCartHooks();

    const handleProceed = async (id: any) => {
        const cart = await getCartItems();
        if (cart.length == 0) {
            const result = await addToCart(id)
            if (!result.error) {
                router.push("/cart");
            }
        } else {
            showModal("You already have a course in your cart. You can only take one course at a time.", "", false);
        }
    };

    const showModal = (title: any, message: any, redirect: boolean) => {
        setModalData({ isOpen: true, title, message, redirect: redirect });
    };

    const hideModal = () => {
        setModalData({ ...modalData, isOpen: false });
    };

    const handleclick = () => {
        if (modalData.redirect) {
            router.push('/');
        }
        hideModal()
    }

    const formatText = (text: any) => {
        if (!text) return '';
        return text.replace(/-/g, ' ').replace(/\b\w/g, (char: string) => char.toUpperCase());
    };

    useEffect(() => {
        fetchPlan();
    }, [category]);

    const fetchPlan = async () => {
        if (category) {
            const planList = await fetchCoursePlan(category);
            setPricing(planList || []);
            setSelectedTier(planList && planList[0]);
        }
    };

    if (!category)
        return (
            <div className='min-h-[30rem] px-4 xs:px-8 xl:px-16 3xl:px-24 py-12 font-montserrat text-[28px]'>
                Please select any course to proceed.
            </div>
        );

    return (
        <div className='min-h-[30rem]'>
            <BreadCrumbs
                routes={[
                    { name: 'Diploma Courses', href: '/', current: false },
                    { name: Course, href: Course, current: false },
                    { name: 'Fees', href: `/diploma/${Course}/fee-options`, current: true },
                ]}
            />
            <div className="bg-white">
                <main>
                    <div className="mx-auto my-16 max-w-4xl px-6 lg:px-8">
                        <div className="mx-auto max-w-4xl text-center">
                            <p className="mt-2 text-balance text-5xl font-semibold text-gray-900 sm:text-4xl font-montserrat tracking-[0.5px]">
                                {formatText(Course)}
                            </p>
                        </div>
                        <p className="mx-auto mt-6 max-w-2xl text-pretty text-center text-lg font-medium text-gray-600 sm:text-xl/8">
                            {`Choose an affordable plan that’s packed with the best features.`}
                        </p>
                        {loading ? (
                            <div className='min-h-[50rem] flex justify-center items-center'>
                                <CircularProgress style={{ color: '#E4087F' }} />
                            </div>
                        ) : (
                            <>
                                {pricing?.length === 0 ? (
                                    <div className='text-center m-8 sm:m-20 p-4 bg-[#FFF4F8] rounded-md text-[#E4087F] text-[20px] shadow-md font-montserrat font-semibold tracking-[0.5px]'>No data found, please try again after some time.</div>
                                ) : (
                                    <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-2">{pricing?.map((item, index) => (
                                        <FeeOptionCard
                                            key={index}
                                            item={item}
                                            classNames={classNames}
                                            isSelected={selectedTier?._id === item?._id}
                                            onSelect={setSelectedTier}
                                            handleProceed={handleProceed}
                                        />
                                    ))}</div>
                                )}
                            </>
                        )}
                    </div>
                </main>
            </div>
            <AlertModal
                isOpen={modalData.isOpen}
                title={modalData.title}
                message={modalData.message}
                redirect={modalData.redirect}
                onClose={hideModal}
                onClick={handleclick}
            />
        </div>
    );
};

export default FeeOptionCardPage;
