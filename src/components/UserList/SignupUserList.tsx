import Pagination from "@/common/uicomponents/Pagination"

const people: any[] = [
    { name: 'Dummy data', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    { name: 'Dummy data', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    { name: 'Dummy data', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    { name: 'Dummy data', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    { name: 'Dummy data', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    { name: 'Dummy data', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    { name: 'Dummy data', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    { name: 'Dummy data', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    { name: 'Dummy data', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    { name: 'Dummy data', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    { name: 'Dummy data', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    { name: 'Dummy data', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    { name: 'Dummy data', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    { name: 'Dummy data', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    { name: 'Dummy data', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    { name: 'Dummy data', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    // More people...
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function SignupUserList() {
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
                                            <th
                                                scope="col"
                                                className="sticky top-0 z-10 border-y border-gray-300 bg-white/75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                                            >
                                                Name
                                            </th>
                                            <th
                                                scope="col"
                                                className="sticky top-0 z-10 hidden border-y border-gray-300 bg-white/75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell"
                                            >
                                                Email
                                            </th>
                                            <th
                                                scope="col"
                                                className="sticky top-0 z-10 hidden border-y border-gray-300 bg-white/75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell"
                                            >
                                                Phone
                                            </th>
                                            <th
                                                scope="col"
                                                className="sticky top-0 z-10 border-y border-gray-300 bg-white/75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                                            >
                                                Address
                                            </th>
                                            <th
                                                scope="col"
                                                className="sticky top-0 z-10 border-y border-gray-300 bg-white/75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                                            >
                                                Role
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {people.length > 0 ? (people.map((person, personIdx) => {
                                            return (
                                                <tr key={person.email}>
                                                    <td
                                                        className={classNames(
                                                            personIdx !== people.length - 1 ? 'border-b border-gray-200' : '',
                                                            'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8',
                                                        )}
                                                    >
                                                        {person.name}
                                                    </td>
                                                    <td
                                                        className={classNames(
                                                            personIdx !== people.length - 1 ? 'border-b border-gray-200' : '',
                                                            'hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:table-cell',
                                                        )}
                                                    >
                                                        {person.title}
                                                    </td>
                                                    <td
                                                        className={classNames(
                                                            personIdx !== people.length - 1 ? 'border-b border-gray-200' : '',
                                                            'hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 lg:table-cell',
                                                        )}
                                                    >
                                                        {person.email}
                                                    </td>
                                                    <td
                                                        className={classNames(
                                                            personIdx !== people.length - 1 ? 'border-b border-gray-200' : '',
                                                            'whitespace-nowrap px-3 py-4 text-sm text-gray-500',
                                                        )}
                                                    >
                                                        {person.role}
                                                    </td>
                                                    <td
                                                        className={classNames(
                                                            personIdx !== people.length - 1 ? 'border-b border-gray-200' : '',
                                                            'whitespace-nowrap px-3 py-4 text-sm text-gray-500',
                                                        )}
                                                    >
                                                        {person.role}
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Pagination />
        </>
    )
}
