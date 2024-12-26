import { useUserHook } from "@/container/UserModel/useUserHooks";
import { useEffect, useState } from "react";
import UserDetailsModal from "./UserDetailsModal";

export default function RegisteredUserList() {
    const {getRegisterUserList} = useUserHook();
    const [users, setUsers] = useState<any[]>([]);
    const [modalData, setModalData] = useState<any>(null);
    // const [showModal, setShowModal] = useState(false)

    useEffect(()=>{
        fetchUserList();
    },[])

    const fetchUserList = async () =>{
        const list = await getRegisterUserList();
        setUsers(list)
    }

    const handleDetailsModal = (id:any) =>{
        const user = users.find((user) => user._id === id);
        setModalData(user)
        // setShowModal(true)
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
                                            Name
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Course Name
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Address
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Email
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            WhatsApp Number
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    {users.length > 0 ? (
                                        users.map((user) => (
                                            <tr key={user._id} onClick={()=>handleDetailsModal(user._id)} className="cursor-pointer">
                                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                                    {user?.fullName}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                    {user?.courseName}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                    {user?.address?.city}, {user?.address?.state}, {user?.address?.country}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                    {user?.email}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                    {user?.whatsAppNumber || "N/A"}
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
            {
                modalData !== null && <UserDetailsModal modalData={modalData} closeModal={()=> setModalData(null)}/>
            }
        </div>
    );
}