import { useUserHook } from "@/container/UserModel/useUserHooks";
import { useEffect, useState } from "react";
import UserDetailsModal from "./UserDetailsModal";
import Pagination from "@/common/uicomponents/Pagination";
import { CircularProgress } from "@mui/material";
import dayjs from 'dayjs';
import { formatCourseName } from "@/utils/formatText";
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import localizedFormat from 'dayjs/plugin/localizedFormat';

dayjs.extend(localizedFormat);
dayjs.extend(utc);
dayjs.extend(timezone);

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function RegisteredUserList() {
    const { loading, getRegisterUserList } = useUserHook();
    const [users, setUsers] = useState<any[]>([]);
    const [modalData, setModalData] = useState<any>(null);
    const [page, setPage] = useState(1)
    const [userCount, setUserCount] = useState(null)
    // const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        fetchUserList(page);
    }, [])

    const fetchUserList = async (pageNumber: any) => {
        const list = await getRegisterUserList(pageNumber);
        if (list) {
            setUsers(list?.result)
            setUserCount(list?.dataCount)
        } else {
            setUsers([]);
        }
    }

    const handleDetailsModal = (id: any) => {
        const user = users?.find((user) => user?._id === id);
        setModalData(user)
    }

    const handleNext = () => {
        fetchUserList(page + 1)
        setPage(page + 1)
    }

    const handlePrevious = () => {
        fetchUserList(page - 1)
        setPage(page - 1)
    }

    return (
        <>
            <div className='h-[57vh] overflow-auto border border-gray-200 border-t-0'>
                <div className="px-4 sm:px-6 lg:px-8">
                    <div className="flow-root">
                        <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle">
                                {loading ? <div className="flex items-center justify-center min-h-[30rem] border-t border-gray-300"> <CircularProgress style={{ color: '#E4087F' }} /></div> :
                                    <table className="min-w-full border-separate border-spacing-0">
                                        <thead>
                                            <tr>
                                                <th scope="col" className="sticky top-0 z-10 border-y border-gray-300 bg-white/75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8">
                                                    Name
                                                </th>
                                                <th scope="col" className="sticky top-0 z-10 hidden border-y border-gray-300 bg-white/75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell">
                                                    Course Name
                                                </th>
                                                <th scope="col" className="sticky top-0 z-10 hidden border-y border-gray-300 bg-white/75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell">
                                                    Address
                                                </th>
                                                <th scope="col" className="sticky top-0 z-10 border-y border-gray-300 bg-white/75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter">
                                                    Email
                                                </th>
                                                <th scope="col" className="sticky top-0 z-10 border-y border-gray-300 bg-white/75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter">
                                                    WhatsApp Number
                                                </th>
                                                <th scope="col" className="sticky top-0 z-10 border-y border-gray-300 bg-white/75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter">
                                                    Registration Date 
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {users?.length > 0 ?
                                                (users?.map((user, userIdx) => (
                                                    <tr key={userIdx} onClick={() => handleDetailsModal(user._id)} className="cursor-pointer">
                                                        <td className={classNames(
                                                            userIdx !== users?.length - 1 ? 'border-b border-gray-200' : '',
                                                            'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8 ',
                                                        )}>
                                                            {user?.fullName}
                                                        </td>
                                                        <td className={classNames(
                                                            userIdx !== users?.length - 1 ? 'border-b border-gray-200' : '',
                                                            'hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:table-cell',
                                                        )}>
                                                            {user?.courseName ? formatCourseName(user.courseName) : "N/A"}
                                                        </td>
                                                        <td className={classNames(
                                                            userIdx !== users?.length - 1 ? 'border-b border-gray-200' : '',
                                                            'hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 lg:table-cell',
                                                        )}>
                                                            {user?.address?.city}, {user?.address?.state}, {user?.address?.country}

                                                        </td>
                                                        <td className={classNames(
                                                            userIdx !== users?.length - 1 ? 'border-b border-gray-200' : '',
                                                            'whitespace-nowrap px-3 py-4 text-sm text-gray-500',
                                                        )}>
                                                            {user?.email}
                                                        </td>
                                                        <td className={classNames(
                                                            userIdx !== users?.length - 1 ? 'border-b border-gray-200' : '',
                                                            'whitespace-nowrap px-3 py-4 text-sm text-gray-500',
                                                        )}>
                                                            {user?.whatsAppNumber || "N/A"}
                                                        </td>
                                                        <td className={classNames(
                                                            userIdx !== users?.length - 1 ? 'border-b border-gray-200' : '',
                                                            'whitespace-nowrap px-3 py-4 text-sm text-gray-500',
                                                        )}>
                                                           {dayjs(user?.createdAt).tz("Asia/Kolkata").format('DD MMMM YYYY, h:mm A')}
                                                        </td>
                                                    </tr>
                                                ))) :
                                                <tr>
                                                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 text-center sm:pl-6">
                                                        No users found.
                                                    </td>
                                                </tr>
                                            }
                                        </tbody>
                                    </table>}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {users?.length > 0 && <Pagination handlePreviousClick={handlePrevious} handleNextClick={handleNext} totalCount={userCount} page={page} />}
            {
                modalData !== null && <UserDetailsModal modalData={modalData} closeModal={() => setModalData(null)} />
            }
        </>


    )
}
