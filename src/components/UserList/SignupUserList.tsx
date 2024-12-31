import Pagination from "@/common/uicomponents/Pagination"
import { useUserHook } from "@/container/UserModel/useUserHooks";
import { CircularProgress } from "@mui/material";
import dayjs from "dayjs";
import { useEffect, useState } from "react"

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function SignupUserList() {
    const [page, setPage] = useState<number>(1);
    const [users, setUsers] = useState<any>([])
    const [userCount, setUserCount] = useState(null)
    const { loading, getSignupUserList } = useUserHook();

    useEffect(() => {
        fetchUserList(page)
    }, [])

    const fetchUserList = async (pageNumber: any) => {
        const list = await getSignupUserList(pageNumber)
        if (list) {
            setUserCount(list?.dataCount || 0);
            setUsers(list?.result || []);
        } else {
            console.error("Failed to fetch user list");
            setUsers([]); 
        }
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
            <div className='h-[60vh] overflow-auto border border-gray-300 border-t-0'>
                <div className="px-4 sm:px-6 lg:px-8">
                    <div className="flow-root">
                        <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle">
                            {loading ? <div className="flex items-center justify-center min-h-[30rem] border-t border-gray-300"> <CircularProgress style={{ color: '#E4087F' }}/></div>:
                                <table className="min-w-full border-separate border-spacing-0">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="sticky top-0 z-10 border-y border-gray-300 bg-white/75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8">
                                                Name
                                            </th>
                                            <th scope="col" className="sticky top-0 z-10 hidden border-y border-gray-300 bg-white/75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell">
                                                Email
                                            </th>
                                            <th scope="col" className="sticky top-0 z-10 hidden border-y border-gray-300 bg-white/75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell">
                                                Phone
                                            </th>
                                            <th scope="col" className="sticky top-0 z-10 border-y border-gray-300 bg-white/75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter">
                                                Address
                                            </th>
                                            <th scope="col" className="sticky top-0 z-10 border-y border-gray-300 bg-white/75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter">
                                                Role
                                            </th>
                                            <th scope="col" className="sticky top-0 z-10 border-y border-gray-300 bg-white/75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter">
                                                Login Count
                                            </th>
                                            <th scope="col" className="sticky top-0 z-10 border-y border-gray-300 bg-white/75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter">
                                                Joining date
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users?.length > 0 ? (users?.map((user: any, userIdx: any) => {
                                            return (
                                                <tr key={user.email}>
                                                    <td
                                                        className={classNames(
                                                            userIdx !== users?.length - 1 ? 'border-b border-gray-200' : '',
                                                            'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8',
                                                        )}
                                                    >
                                                        {user?.first_name ? `${user?.first_name} ${user?.last_name}` : "N/A"}
                                                    </td>
                                                    <td
                                                        className={classNames(
                                                            userIdx !== users?.length - 1 ? 'border-b border-gray-200' : '',
                                                            'hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:table-cell',
                                                        )}
                                                    >
                                                        {user?.email ? user?.email : "N/A"}
                                                    </td>
                                                    <td
                                                        className={classNames(
                                                            userIdx !== users?.length - 1 ? 'border-b border-gray-200' : '',
                                                            'hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 lg:table-cell',
                                                        )}
                                                    >
                                                        {user?.phone ? `+${user?.phone?.code}${user?.phone?.number}` : 'N/A'}
                                                    </td>
                                                    <td
                                                        className={classNames(
                                                            userIdx !== users?.length - 1 ? 'border-b border-gray-200' : '',
                                                            'whitespace-nowrap px-3 py-4 text-sm text-gray-500',
                                                        )}
                                                    >
                                                        {user?.address ? `${user?.address?.city}, ${user?.address?.state}, ${user?.address?.country}` : 'N/A'}
                                                    </td>
                                                    <td
                                                        className={classNames(
                                                            userIdx !== users?.length - 1 ? 'border-b border-gray-200' : '',
                                                            'whitespace-nowrap px-3 py-4 text-sm text-gray-500',
                                                        )}
                                                    >
                                                        {user?.role}
                                                    </td>
                                                    <td
                                                        className={classNames(
                                                            userIdx !== users?.length - 1 ? 'border-b border-gray-200' : '',
                                                            'whitespace-nowrap px-3 py-4 text-sm text-gray-500',
                                                        )}
                                                    >
                                                        {user?.loginCount}
                                                    </td>
                                                    <td
                                                        className={classNames(
                                                            userIdx !== users.length - 1 ? 'border-b border-gray-200' : '',
                                                            'whitespace-nowrap px-3 py-4 text-sm text-gray-500',
                                                        )}
                                                    >
                                                        {dayjs(user?.createdAt).format('DD MMMM YYYY, h:mm A')}
                                                    </td>
                                                </tr>
                                            )
                                        }
                                        )) :
                                            <tr>
                                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 text-center sm:pl-6">
                                                    No users found.
                                                </td>
                                            </tr>}
                                    </tbody>
                                </table>
}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {users?.length > 0 && <Pagination handlePreviousClick={handlePrevious} handleNextClick={handleNext} totalCount={userCount} page={page} />}
        </>
    )
}
