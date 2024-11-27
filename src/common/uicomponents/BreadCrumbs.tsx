import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/20/solid';

const BreadCrumbs = ({routes}:any) => {

  return (
    <nav aria-label="Breadcrumb" className="flex bg-[#F5F5F5] px-4 xs:px-8 xl:px-16 3xl:px-24 py-3 md:py-4 overflow-hidden">
      <ol role="list" className="flex items-center space-x-1 md:space-x-4">
        <li>
          <div>
            <a href="/" className="text-[#555555] hover:text-gray-500 font-Montserrat text-[14px] md:text-base font-medium leading-6">
              <span>Home</span>
            </a>
          </div>
        </li>
        {routes.map((page:any) => (
          <li key={page.name}>
            <div className="flex items-center">
              <ChevronRightIcon aria-hidden="true" className="size-6 shrink-0 text-[#9D9D9D]" />
              <a
                href={page.href}
                aria-current={page.current ? 'page' : undefined}
                className={`ml-1 md:ml-4 font-Montserrat text-[14px] truncate md:text-base font-medium leading-6 hover:text-gray-700 ${
                  page.current ? 'text-[#9D9D9D] w-[25%] xs:w-[70%] sm:w-[100%]' : 'text-[#555555]'
                }`}
              >
                {page.name}
              </a>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default BreadCrumbs;
