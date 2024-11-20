import ImageComponent from '@/common/uicomponents/ImageComponent';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { HiBars3 } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import ebcog from '../../../public/ebcog.png';
import kblogo from '../../../public/kblogo.png';
import Link from 'next/link';

const headerLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Diplomas", href: "#" },
    { name: "Academic Resources", href: "#" },
    { name: "Meet Us in Person", href: "#" },
];

export default function Header() {
    return (
        <Disclosure as="nav" className="bg-white shadow">
            <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-24 py-2">
                <div className="flex h-16 justify-between">
                    <div className="flex">
                        <div className="-ml-2 mr-2 flex items-center lg:hidden">
                            {/* Mobile menu button */}
                            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Open main menu</span>
                                <HiBars3 aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
                                <RxCross2 aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
                            </DisclosureButton>
                        </div>
                        <div className="flex shrink-0 items-center gap-8">
                            <div className="w-[150px] h-auto cursor-pointer">
                                <ImageComponent
                                    src={ebcog}
                                    alt="Image"
                                    className="h-full w-full"
                                    height={500}
                                    width={1000}
                                />
                            </div>

                            <div className="w-[200px] h-auto cursor-pointer">
                                <ImageComponent
                                    src={kblogo}
                                    alt="Image"
                                    className="h-full w-full"
                                    height={500}
                                    width={1000}
                                />
                            </div>
                        </div>
                        {/* Navbar items visible from lg screens */}
                        <div className="hidden lg:ml-20 lg:flex lg:space-x-8">
                            {headerLinks.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.href}
                                    className={`inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium ${
                                        link.name === "Home" ? "text-gray-900" : "text-gray-500 hover:text-gray-700"
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="shrink-0">
                            <button
                                type="button"
                                className="relative inline-flex items-center gap-x-1.5 rounded-md bg-[#E4087F] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                New Job
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu visible below lg screens */}
            <DisclosurePanel className="lg:hidden">
                <div className="space-y-1 pb-3 pt-2">
                    {headerLinks.map((link, index) => (
                        <DisclosureButton
                            key={index}
                            as="a"
                            href={link.href}
                            className={`block border-l-4 ${
                                link.name === "Home"
                                    ? "border-indigo-500 bg-indigo-50 text-indigo-700"
                                    : "border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                            } py-2 pl-3 pr-4 text-base font-medium sm:pl-5 sm:pr-6`}
                        >
                            {link.name}
                        </DisclosureButton>
                    ))}
                </div>
            </DisclosurePanel>
        </Disclosure>
    );
}
