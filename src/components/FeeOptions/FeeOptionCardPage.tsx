import React, { useEffect, useState } from 'react';
import BreadCrumbs from '@/common/uicomponents/BreadCrumbs';
import { useRouter } from 'next/router';
import useCourseHooks from '@/hooks/useCourseHooks';
import { CircularProgress } from '@mui/material';
import useCartHooks from '@/hooks/useCartHooks';
import AlertModal from '@/common/uicomponents/AlertModal';
import CourseFeeCard from './CourseFeeCard';


const FeeOptionCardPage = () => {
    const router = useRouter();
    const [selectedTier, setSelectedTier] = useState([]);
    const [withHotelData, setWithHotelData] = useState();
    const [withoutHotelData, setWithoutHotelData] = useState();
    const [modalData, setModalData] = useState({ isOpen: false, title: '', message: '', redirect: false });

    const { Course, category } = router.query;
    const { loading, fetchCoursePlan} = useCourseHooks();
    const { addToCart, getCartItems, removeToCart } = useCartHooks();


    const handleProceed = async (selectedPlan: any) => {
        const cart = await getCartItems();
        if (cart?.length === 0) {
            const result = await addToCart(selectedPlan?._id)
            if (!result.error) {
                router.push("/cart");
            }
        } else if (cart?.length === 1 && cart[0]?.course?.category === selectedPlan?.category) {
            await removeToCart(cart[0]?.course?._id);
            const result = await addToCart(selectedPlan?._id)
            if (!result.error) {
                router.push("/cart");
            }
        } else {
            showModal("You already have a course in your cart. You can only take one course at a time.", "", true);
        }
    };

    const showModal = (title: any, message: any, redirect: boolean) => {
        setModalData({ isOpen: true, title, message, redirect: redirect });
    };

    const hideModal = () => {
        setModalData({ ...modalData, isOpen: false });
    };

    const handleClick = () => {
        if (modalData.redirect) {
            router.push('/cart');
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
            setSelectedTier(planList);
            console.log(planList, 'planList ##');
            const withoutHotel = planFilter(planList, 'withoutHotel');
            console.log(withoutHotel, 'withoutHotel ##');
            setWithoutHotelData(withoutHotel);

            const withHotel = planFilter(planList, 'withHotel');
            setWithHotelData(withHotel);
        }
    };

    const planFilter = (sourceData: [], matchString: string) => {
        if (sourceData && sourceData?.length > 0)
            return sourceData.filter((item: any) => item?.type === matchString)[0];

    }

    if (!category)
        return (
            <div className='min-h-[30rem] px-4 xs:px-8 xl:px-16 3xl:px-24 py-12 font-montserrat text-[28px]'>
                Please select any course to proceed.
            </div>
        );

    return (
        <div className='min-h-[40rem]'>
            <BreadCrumbs
                routes={[
                    { name: 'Diploma Courses', href: '/', current: false },
                    { name: Course, href: Course, current: false },
                    { name: 'Fees', href: `/diploma/${Course}/fee-options`, current: true },
                ]}
            />
            <div className="bg-white">
                <main>
                    <div className="mx-auto">
                        <div className="text-center px-4 py-12 sm:p-12 md:p-20 bg-[#290849]">
                            <p className="mt-2 text-balance text-white font-montserrat text-[20px] xs:text-[26px] sm:text-[30px] md:text-[36px] font-bold leading-[30px] xs:leading-[36px] sm:leading-[43.2px] text-center">
                                {formatText(Course)}
                            </p>
                            <p className="mx-auto mt-3 md:mt-6 text-pretty text-[#D1D5DB] font-montserrat text-[14px] sm:text-[16px] font-medium leading-[24px] text-center">
                                {`Choose an affordable plan that’s packed with the best features.`}
                            </p>
                        </div>
                        {loading ? (
                            <div className='min-h-[30rem] flex justify-center items-center'>
                                <CircularProgress style={{ color: '#E4087F' }} />
                            </div>
                        ) : (
                            selectedTier && selectedTier?.length === 0 ? (
                                <div className='text-center my-12 p-4 rounded-md bg-[#fff0f6] text-[#E4087F] max-w-4xl mx-auto font-semibold text-[22px]'>No data found, please try again after some time.</div>
                            ) :
                                <>
                                    < CourseFeeCard
                                        withHotelData={withHotelData}
                                        withoutHotelData={withoutHotelData}
                                        handleProceed={handleProceed}
                                    />
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
                onClick={handleClick}
            />
        </div>
    );
};

export default FeeOptionCardPage;
