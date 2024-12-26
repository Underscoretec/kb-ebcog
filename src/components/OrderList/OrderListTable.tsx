import useOrdersHooks from "@/hooks/useOrdersHooks";
import { useEffect, useState } from "react";

export default function OrderListTable() {
    const { getOrderList } = useOrdersHooks();
    const [orders, setOrders] = useState<any[]>([]);

    useEffect(() => {
        fetchUserList();
    }, [])

    const fetchUserList = async () => {
        const orderList = await getOrderList();
        setOrders(orderList)
        console.log("orderList===##", orderList)
    }


    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle px-2">
                        <div className="overflow-hidden shadow ring-1 ring-black/5 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                            Order Id
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Ordered By
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Email
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Phone
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Course name
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Discount
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Base price
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Total
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                           Order Status
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                           Payment status
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    {orders.length > 0 ? (
                                        orders.map((order) => (
                                            <tr key={order._id}>
                                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                                    {order?.orderId}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                    {order?.createdBy ? `${order?.createdBy?.first_name} ${order?.createdBy?.last_name}` : "N/A"}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                    {order?.createdBy ? `${order?.createdBy?.email}` : "N/A"}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                    {order?.createdBy ? `${order?.createdBy?.phoneNo}` : "N/A"}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                    {order?.items[0]?.courseId ? `${order?.items[0]?.courseId?.name}` :"N/A"}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                    {order?.items[0]?.courseId ? `${order?.items[0]?.courseId?.discount?.value} ${order?.items[0]?.courseId?.discount?.currency}` :"N/A"}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                    {order?.items[0]?.courseId ? `${order?.items[0]?.courseId?.price?.base} ${order?.items[0]?.courseId?.price?.currency}` :"N/A"}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                    {order?.payableAmount ? `${order?.payableAmount} AED` :"N/A"}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                    {order?.orderStatus ? `${order?.orderStatus?.status}` :"N/A"}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                    {order?.paymentStatus ? `${order?.paymentStatus?.status}` :"N/A"}
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 text-center sm:pl-6">
                                                No users found.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}