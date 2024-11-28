"use client"
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const navigation = {
  solutions: [
    { name: 'Maternal Medicine', href: '/diploma/maternal-medical' },
    { name: 'Reproductive Endocrinology & Infertility', href: '/diploma/reproductive-endocrinology' },
    { name: 'Gynaecology Endoscopy', href: '/diploma/gynaecology-endoscopy' },
    { name: 'Fetal Medicine and Ultrasound', href: '/diploma/fetal-medicine-and-ultrasound' },
  ],
  support: [
    { name: 'Academic Calendar', href: '/academic-calendar' },
    { name: 'Publications', href: '#' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Diplomas', href: '#' },
    { name: 'Need Help, Contact Us', href: '#' },
  ],
  legal: [
    { name: 'FAQ', href: '#' },
    { name: 'Privacy', href: '#' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: <FaFacebook />,
    },
    {
      name: 'Instagram',
      href: '#',
      icon: <FaInstagram />,
    },
    {
      name: 'X',
      href: '#',
      icon: <FaTwitter />,
    },
  ],
}

export default function Footer() {
  // const [captcha, setCaptcha] = useState(generateCaptcha());

  // function generateCaptcha() {
  //   const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  //   return Array.from({ length: 6 }, () =>
  //     chars[Math.floor(Math.random() * chars.length)]
  //   ).join("");
  // }

  // Function to handle reload
  // function reloadCaptcha() {
  //   setCaptcha(generateCaptcha());
  // }



  return (
    <footer className="bg-[#290849]">
      <div className="mx-auto  px-6 pb-8 pt-20 sm:pt-24 lg:px-40 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm/6 font-semibold text-[#FFFFFF]">Solutions</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm/6 text-[#D1D5DB] hover:text-gray-400">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm/6 font-semibold text-[#FFFFFF]">Support</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm/6 text-[#D1D5DB] hover:text-gray-400">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm/6 font-semibold text-[#FFFFFF]">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm/6 text-[#D1D5DB] hover:text-gray-400">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm/6 font-semibold text-[#FFFFFF]">Support</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm/6 text-[#D1D5DB] hover:text-gray-400">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-10 xl:mt-0">
            <h3 className="text-sm/6 font-semibold text-[#FFFFFF]">Subscribe to our newsletter</h3>
            <p className="mt-2 text-sm/6 text-[#D1D5DB]">
              The latest news, articles, and resources, sent to your inbox weekly.
            </p>
            <form className="mt-6 sm:max-w-md">
              <input
                id="email-address"
                name="email-address"
                type="email"
                required
                placeholder="Enter your email"
                autoComplete="email"
                className="w-full min-w-0 appearance-none rounded-md border-0 bg-white px-3 py-2 text-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
              />

              {/* <div className="flex items-center pt-4">
                <div className="bg-gray-200 border border-gray-300 text-gray-800 flex items-center font-semibold px-4 py- rounded-md text-lg shadow-md tracking-wide">
                  XPDG4K
                  <input
                    type="text"
                    placeholder="Enter Captcha"
                    className="flex-1 px-4 py-2 text-gray-700 bg-gray-200  placeholder-gray-400  rounded-md shadow-sm  focus:outline-none"
                  />
                </div>
              </div> */}


              <div className="flex items-center pt-4 w-full">
                <div className="w-full bg-gray-200 border-4 border-gray-300 text-gray-800 flex items-center gap-2 font-semibold rounded-md text-lg shadow-md tracking-wide">
                  {/* {captcha} */}
                  <button
                    // onClick={reloadCaptcha}
                    className="ml- text-gray-600 hover:text-gray-800 focus:outline-none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 9.75a7.5 7.5 0 0113.5-3m0 0l-3 3m3-3h-3m6 7.5a7.5 7.5 0 01-13.5 3m0 0l3-3m-3 3h3"
                      />
                    </svg>
                  </button>
                  <input
                  type="text"
                  placeholder="Enter Captcha"
                  className="flex-1 px-4 py-2 ml- text-gray-700 bg-gray-200 placeholder-gray-400 rounded-md shadow-sm focus:outline-none"
                />
                </div>
              </div>



              <div className="mt-4 sm:mt-6 sm:shrink-0">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-md bg-[#E4087F] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-[#E4087F] border-2 border-[#E4087F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E4087F]"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-500 pt-8 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-24">
          <div className="flex gap-x-6 md:order-2">
            {navigation.social.map((item) => (
              <Link key={item.name} href={item.href} className="text-[#E4087F] hover:text-[#eb98c4]">
                {item.icon}
              </Link>
            ))}
          </div>
          <p className="mt-8 text-sm/6 text-[#D1D5DB] md:order-1 md:mt-0">
            ©copyright 2024 KnowledgeBridge International Private Limited All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
