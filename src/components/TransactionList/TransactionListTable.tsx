import Pagination from '@/common/uicomponents/Pagination';
import useOrdersHooks from '@/hooks/useOrdersHooks';
import { CircularProgress } from '@mui/material';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react'

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const TransactionListTable = () => {
    const { loading, getTransactionList } = useOrdersHooks();
    const [transactions, setTransaction] = useState<any[]>([]);
    const [page, setPage] = useState<number>(1);
    const [Count, setCount] = useState(null)

    useEffect(() => {
        fetchTransactionList(page);
    }, [])

    const fetchTransactionList = async (pageNumber: number) => {
        const transactionList = await getTransactionList(pageNumber);
        // console.log("transactionList====>", transactionList)
        if (transactionList) {
            setCount(transactionList?.dataCount || 0)
            setTransaction(transactionList?.result)
        } else {
            console.error("Failed to fetch user list");
            setTransaction([]);
        }
    }

    const getStatusStyles = (status: 'success' | 'pending' | 'cancelled' | 'failed' | string) => {
        switch (status) {
            case 'success':
                return 'bg-green-100 border border-green-300 text-green-700';
            case 'pending':
                return 'bg-[#FDE8E8] border border-[#f7bcbc] text-[#fa3c3c]';
            case 'cancelled':
                return 'bg-[#EDEBFE] text-[#5521B5]';
            case 'failed':
                return 'bg-[#f2f0f0] border border-[#ebe8e8] text-[#d6d6d6]';
            default:
                return 'bg-gray-100 text-gray-700 bg-green-50';
        }
    };

    const handleNext = () => {
        fetchTransactionList(page + 1)
        setPage(page + 1)
    }

    const handlePrevious = () => {
        fetchTransactionList(page - 1)
        setPage(page - 1)
    }

    return (
        <>
            <div className='h-[58vh] overflow-auto border border-gray-300 border-t-0 mt-8'>
                <div className="px-4 sm:px-6 lg:px-8">
                    <div className="flow-root">
                        <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle">
                                {loading ? <div className="flex items-center justify-center min-h-[30rem] border-t border-gray-300"> <CircularProgress style={{ color: '#E4087F' }} /></div> :
                                    <table className="min-w-full border-separate border-spacing-0">
                                        <thead>
                                            <tr>
                                                <th scope="col" className="sticky top-0 z-10 border-y border-gray-300 bg-white/75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8">
                                                    Payment Id
                                                </th>
                                                <th scope="col" className="sticky top-0 z-10 hidden border-y border-gray-300 bg-white/75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell">
                                                    User name
                                                </th>
                                                <th scope="col" className="sticky top-0 z-10 hidden border-y border-gray-300 bg-white/75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell">
                                                    Email
                                                </th>
                                                <th scope="col" className="sticky top-0 z-10 hidden border-y border-gray-300 bg-white/75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell">
                                                    Phone
                                                </th>
                                                <th scope="col" className="sticky top-0 z-10 border-y border-gray-300 bg-white/75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter">
                                                    Payment Date
                                                </th>
                                                <th scope="col" className="sticky top-0 z-10 border-y border-gray-300 bg-white/75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter">
                                                    Amount
                                                </th>
                                                <th scope="col" className="sticky top-0 z-10 border-y border-gray-300 bg-white/75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter">
                                                    Payment status
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {transactions?.length > 0 ?
                                                (transactions?.map((transaction, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td className={classNames(
                                                                index !== transaction?.length - 1 ? 'border-b border-gray-200' : '',
                                                                'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8',
                                                            )}>
                                                                {transaction?.paymentId ? transaction?.paymentId : "N/A"}
                                                            </td>
                                                            <td className={classNames(
                                                                index !== transaction?.length - 1 ? 'border-b border-gray-200' : '',
                                                                'hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:table-cell',
                                                            )}>
                                                                {transaction?.customerId ? `${transaction?.customerId?.first_name} ${transaction?.customerId?.last_name}` : "N/A"}
                                                            </td>
                                                            <td className={classNames(
                                                                index !== transaction?.length - 1 ? 'border-b border-gray-200' : '',
                                                                'hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:table-cell',
                                                            )}>
                                                                {transaction?.customerId ? transaction?.customerId?.email : "N/A"}
                                                            </td>
                                                            <td className={classNames(
                                                                index !== transaction?.length - 1 ? 'border-b border-gray-200' : '',
                                                                'hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 lg:table-cell',
                                                            )}>
                                                                {transaction?.customerId ? `+${transaction?.customerId?.phoneNo}` : "N/A"}

                                                            </td>
                                                            <td className={classNames(
                                                                index !== transaction?.length - 1 ? 'border-b border-gray-200' : '',
                                                                'whitespace-nowrap px-3 py-4 text-sm text-gray-500',
                                                            )}>
                                                                {transaction?.paidAt ? `${dayjs(transaction?.paidAt).format('DD MMMM YYYY, h:mm A')}` : "N/A"}
                                                            </td>
                                                            <td className={classNames(
                                                                index !== transaction?.length - 1 ? 'border-b border-gray-200' : '',
                                                                'whitespace-nowrap px-3 py-4 text-sm text-gray-500',
                                                            )}>
                                                                {transaction?.amount ? `${transaction?.amount} AED` : "N/A"}
                                                            </td>
                                                            <td className={classNames(
                                                                index !== transaction?.length - 1 ? 'border-b border-gray-200' : '',
                                                                'whitespace-nowrap px-3 py-4 text-sm text-gray-500',
                                                            )}>
                                                                <span className={`inline-flex items-center rounded-full ${getStatusStyles(transaction?.status)} px-4 py-1 text-xs font-semibold`}>{transaction?.status}</span>
                                                            </td>
                                                        </tr>
                                                    )
                                                })) :
                                                <tr>
                                                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 text-center sm:pl-6">
                                                        No orders found.
                                                    </td>
                                                </tr>
                                            }
                                        </tbody>
                                    </table>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {transactions?.length > 0 && <Pagination handlePreviousClick={handlePrevious} handleNextClick={handleNext} totalCount={Count} page={page} />}
        </>
    )
}

export default TransactionListTable