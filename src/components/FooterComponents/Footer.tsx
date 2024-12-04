"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { TbReload } from "react-icons/tb";

const navigation = {
  solutions: [
    { name: 'Maternal Medicine', href: '/diploma/maternal-medical' },
    { name: 'Reproductive Endocrinology & Infertility', href: '/diploma/reproductive-endocrinology' },
    { name: 'Gynaecology Endoscopy', href: '/diploma/gynaecology-endoscopy' },
    { name: 'Fetal Medicine and Ultrasound', href: '/diploma/fetal-medicine-and-ultrasound' },
  ],
  support: [
    { name: 'Academic Calendar', href: '/academic-calender' },
    { name: 'Publications', href: '/publications' },
  ],
  company: [
    { name: 'About', href: '/#ebcog' },
    { name: 'Diplomas', href: '/#diplomas' },
    { name: 'Need Help, Contact Us', href: '/reach-out' },
    { name: 'Contact Us', href: '/contact-us' },
  ],
  legal: [
    { name: 'FAQ', href: '/#faq' },
    { name: 'Privacy', href: '/privacy-policy' },
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
};

export default function Footer() {
  const [captcha, setCaptcha] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [email, setEmail] = useState("");
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isCaptchaValid, setIsCaptchaValid] = useState(true);

  useEffect(() => {
    setCaptcha(generateCaptcha());
  }, []);

  useEffect(() => {
    validateEmail(email);
  }, [email]);

  function generateCaptcha() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    return Array.from({ length: 6 }, () =>
      chars[Math.floor(Math.random() * chars.length)]
    ).join("");
  }

  function reloadCaptcha() {
    setCaptcha(generateCaptcha());
    setCaptchaInput(""); // Clear input field
  }

  function validateEmail(value:any) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(value) || value.length === 0);
    checkButtonState(value, captchaInput);
  }

  function checkButtonState(emailValue:any, captchaValue:any) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(emailValue);
    const isCaptchaFilled = captchaValue.length > 0;
    setIsButtonActive(isEmailValid && isCaptchaFilled);
  }

  function validateCaptcha() {
    return captchaInput === captcha;
  }

  function handleSubmit(e:any) {
    e.preventDefault();
    if (!isButtonActive) return;

    if (!validateCaptcha()) {
      setIsCaptchaValid(false);
      return;
    }

    setIsCaptchaValid(true);
    alert("Subscribed successfully!");
    setEmail("");
    setCaptchaInput("");
    setCaptcha(generateCaptcha());
  }

  return (
    <footer id="footer" className="bg-[#290849]">
      <div className="mx-auto px-6 pb-8 pt-20 sm:pt-24 lg:px-40 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-[14px] font-montserrat font-semibold text-[#FFFFFF]">Solutions</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-[16px] font-montserrat text-[#D1D5DB] hover:text-gray-400">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-[14px] font-montserrat font-semibold text-[#FFFFFF]">Support</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-[16px] font-montserrat text-[#D1D5DB] hover:text-gray-400">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-[14px] font-montserrat font-semibold text-[#FFFFFF]">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-[16px] font-montserrat text-[#D1D5DB] hover:text-gray-400">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-[14px] font-montserrat font-semibold text-[#FFFFFF]">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-[16px] font-montserrat text-[#D1D5DB] hover:text-gray-400">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-10 xl:mt-0">
            <h3 className="text-[14px] font-montserrat font-semibold text-[#FFFFFF]">Subscribe to our newsletter</h3>
            <p className="mt-2 text-[16px] font-montserrat text-[#D1D5DB]">
              The latest news, articles, and resources, sent to your inbox weekly.
            </p>
            <form className="mt-6 sm:max-w-md" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full min-w-0 appearance-none rounded-md border-0 px-3 py-2 text-base text-gray-900 shadow-sm ring-1 ring-inset ${
                  isValidEmail ? "ring-gray-300" : "ring-red-500"
                } placeholder:text-[#6B7280] focus:ring-2 focus:ring-indigo-600 sm:text-[16px]`}
              />
              {!isValidEmail && (
                <p className="mt-2 text-sm text-red-500">Please enter a valid email address.</p>
              )}
              <div className="flex items-center pt-4 w-full">
                <div className="w-full pl-3 bg-gray-200 border border-gray-300 text-gray-800 flex items-center gap-1 rounded-md text-sm shadow-md tracking-wide">
                  <div className="flex gap-1">
                    {captcha}
                    <button
                      onClick={reloadCaptcha}
                      type="button"
                      className="text-gray-600 hover:text-gray-800 focus:outline-none text-[16px]"
                    >
                      <TbReload />
                    </button>
                  </div>
                  <input
                    type="text"
                    placeholder="Enter Captcha"
                    value={captchaInput}
                    onChange={(e) => {
                      setCaptchaInput(e.target.value);
                      checkButtonState(email, e.target.value);
                    }}
                    className="w-full min-w-0 appearance-none rounded-md border-none bg-white py-2 text-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-[#6B7280] focus:ring-2 focus:ring-indigo-600 sm:text-[16px]"
                  />
                </div>
              </div>
              {!isCaptchaValid && (
                <p className="mt-2 text-sm text-red-500">Captcha does not match. Please try again.</p>
              )}
              <div className="mt-4 sm:mt-6 sm:shrink-0">
                <button
                  type="submit"
                  disabled={!isButtonActive}
                  className={`flex w-full items-center justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm ${
                    isButtonActive
                      ? "bg-[#E4087F] hover:bg-[#9e0659] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      : "bg-[#e498c1] cursor-not-allowed"
                  }`}
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
          <p className="mt-8 text-[16px] font-montserrat text-[#D1D5DB] md:order-1 md:mt-0">
            ©copyright 2024 KnowledgeBridge International Private Limited All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
