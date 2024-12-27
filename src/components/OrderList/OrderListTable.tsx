import Pagination from "@/common/uicomponents/Pagination";
import useOrdersHooks from "@/hooks/useOrdersHooks";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function OrderListTable() {
    const { getOrderList } = useOrdersHooks();
    const [orders, setOrders] = useState<any[]>([]);
    const [hasMore, setHasMore] = useState<boolean>(true);
    const [page, setPage] = useState<number>(1);

    useEffect(() => {
        fetchOrderList(page);
    }, [])

    const fetchOrderList = async (pageNumber: number) => {
        const orderList = await getOrderList(pageNumber);
        setOrders(orderList)
        if (orderList.length === 0) {
            setHasMore(false);
        } else {
            setOrders((prevOrders) => [...prevOrders, ...orderList]);
            setPage(pageNumber + 1); // Increment page for next fetch
        }
        console.log("hasMore", hasMore)
    }

    const getStatusStyles = (status: 'success' | 'pending' | 'cancelled' | string) => {
        switch (status) {
            case 'success':
                return {
                    bgColor: 'bg-green-100 border border-green-300',
                    textColor: 'text-green-700',
                };
            case 'pending':
                return {
                    bgColor: 'bg-[#FDE8E8] border border-[#f7bcbc]',
                    textColor: 'text-[#fa3c3c]',
                };
            case 'cancelled':
                return {
                    bgColor: 'bg-[#EDEBFE]',
                    textColor: 'text-[#5521B5]',
                };
            default:
                return {
                    bgColor: 'bg-gray-100',
                    textColor: 'text-gray-700',
                };
        }
    };

    return (
        <>
            <div className='h-[60vh] overflow-auto border border-gray-300 border-t-0 mt-8'>
                <div className="px-4 sm:px-6 lg:px-8">
                    <div className="flow-root">
                        <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle">

                                <table className="min-w-full border-separate border-spacing-0">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="sticky top-0 z-10 border-y border-gray-300 bg-white/75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8">
                                                Order Id
                                            </th>
                                            <th scope="col" className="sticky top-0 z-10 hidden border-y border-gray-300 bg-white/75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell">
                                                Ordered By
                                            </th>
                                            <th scope="col" className="sticky top-0 z-10 hidden border-y border-gray-300 bg-white/75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell">
                                                Email
                                            </th>
                                            <th scope="col" className="sticky top-0 z-10 border-y border-gray-300 bg-white/75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter">
                                                Phone
                                            </th>
                                            <th scope="col" className="sticky top-0 z-10 border-y border-gray-300 bg-white/75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter">
                                                Course name
                                            </th>
                                            <th scope="col" className="sticky top-0 z-10 border-y border-gray-300 bg-white/75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter">
                                                Discount
                                            </th>
                                            <th scope="col" className="sticky top-0 z-10 border-y border-gray-300 bg-white/75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter">
                                                Base price
                                            </th>
                                            <th scope="col" className="sticky top-0 z-10 border-y border-gray-300 bg-white/75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter">
                                                Total
                                            </th>
                                            <th scope="col" className="sticky top-0 z-10 border-y border-gray-300 bg-white/75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter">
                                                Order Status
                                            </th>
                                            <th scope="col" className="sticky top-0 z-10 border-y border-gray-300 bg-white/75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter">
                                                Payment status
                                            </th>
                                        </tr>
                                    </thead>
                                    {/* <InfiniteScroll
                                    dataLength={orders.length}
                                    next={() => fetchOrderList(page + 1)}
                                    inverse={true}
                                    hasMore={hasMore}
                                    loader={<h4>Loading...</h4>}
                                    scrollableTarget="scrollableDiv"
                                ></InfiniteScroll> */}
                                    <tbody>
                                        {orders.length > 0 ?
                                            (orders.map((order, orderIdx) => {
                                                const { bgColor, textColor } = getStatusStyles(order?.paymentStatus?.status);
                                                return (
                                                    <tr key={orderIdx}>
                                                        <td className={classNames(
                                                            orderIdx !== orders.length - 1 ? 'border-b border-gray-200' : '',
                                                            'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8',
                                                        )}>
                                                            {order?.orderId}
                                                        </td>
                                                        <td className={classNames(
                                                            orderIdx !== orders.length - 1 ? 'border-b border-gray-200' : '',
                                                            'hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:table-cell',
                                                        )}>
                                                            {order?.createdBy ? `${order?.createdBy?.first_name} ${order?.createdBy?.last_name}` : "N/A"}
                                                        </td>
                                                        <td className={classNames(
                                                            orderIdx !== orders.length - 1 ? 'border-b border-gray-200' : '',
                                                            'hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 lg:table-cell',
                                                        )}>
                                                            {order?.createdBy ? `${order?.createdBy?.email}` : "N/A"}

                                                        </td>
                                                        <td className={classNames(
                                                            orderIdx !== orders.length - 1 ? 'border-b border-gray-200' : '',
                                                            'whitespace-nowrap px-3 py-4 text-sm text-gray-500',
                                                        )}>
                                                            {order?.createdBy ? `${order?.createdBy?.phoneNo}` : "N/A"}
                                                        </td>
                                                        <td className={classNames(
                                                            orderIdx !== orders.length - 1 ? 'border-b border-gray-200' : '',
                                                            'whitespace-nowrap px-3 py-4 text-sm text-gray-500',
                                                        )}>
                                                            {order?.items[0]?.courseId ? `${order?.items[0]?.courseId?.name}` : "N/A"}
                                                        </td>

                                                        <td className={classNames(
                                                            orderIdx !== orders.length - 1 ? 'border-b border-gray-200' : '',
                                                            'whitespace-nowrap px-3 py-4 text-sm text-gray-500',
                                                        )}>
                                                            {order?.items[0]?.courseId ? `${order?.items[0]?.courseId?.discount?.value} ${order?.items[0]?.courseId?.discount?.currency}` : "N/A"}
                                                        </td>
                                                        <td className={classNames(
                                                            orderIdx !== orders.length - 1 ? 'border-b border-gray-200' : '',
                                                            'whitespace-nowrap px-3 py-4 text-sm text-gray-500',
                                                        )}>
                                                            {order?.items[0]?.courseId ? `${order?.items[0]?.courseId?.price?.base} ${order?.items[0]?.courseId?.price?.currency}` : "N/A"}
                                                        </td>
                                                        <td className={classNames(
                                                            orderIdx !== orders.length - 1 ? 'border-b border-gray-200' : '',
                                                            'whitespace-nowrap px-3 py-4 text-sm text-gray-500',
                                                        )}>
                                                            {order?.payableAmount ? `${order?.payableAmount} AED` : "N/A"}
                                                        </td>
                                                        <td className={classNames(
                                                            orderIdx !== orders.length - 1 ? 'border-b border-gray-200' : '',
                                                            'whitespace-nowrap px-3 py-4 text-sm text-gray-500',
                                                        )}>
                                                            <span className="inline-flex items-center bg-green-50 px-4 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 rounded-full">{order?.orderStatus ? `${order?.orderStatus?.status}` : "N/A"}</span>
                                                        </td>
                                                        <td className={classNames(
                                                            orderIdx !== orders.length - 1 ? 'border-b border-gray-200' : '',
                                                            'whitespace-nowrap px-3 py-4 text-sm text-gray-500',
                                                        )}>
                                                            <span className={`inline-flex items-center rounded-full ${bgColor} px-4 py-1 text-xs font-medium ${textColor}`}>{order?.paymentStatus ? `${order?.paymentStatus?.status}` : "N/A"}</span>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {orders.length > 0 && <Pagination handlePreviousClick={()=>fetchOrderList(page-1)} handleNextClick={() => fetchOrderList(page + 1)} />}
        </>
    )
}


