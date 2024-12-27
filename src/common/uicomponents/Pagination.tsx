export default function Pagination({handlePreviousClick, handleNextClick}:any) {
    return (
        <nav
            aria-label="Pagination"
            className="flex items-center justify-between border-t-0 border border-gray-200 bg-white py-3 px-3"
        >
            <div className="hidden sm:block">
                <p className="text-sm text-gray-700">
                    Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
                    <span className="font-medium">20</span> results
                </p>
            </div>
            <div className="flex flex-1 justify-between sm:justify-end">
                <div onClick={handlePreviousClick} className="cursor-pointer relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0">
                    Previous
                </div>
               <div onClick={handleNextClick} className="cursor-pointer relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0">
                    Next
                </div>
            </div>
        </nav>
    )
}
