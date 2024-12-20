/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-var */
import { useEffect, useState } from "react";
import { parseCookies, setCookie } from "nookies";
import { AE, FR, IN } from "country-flag-icons/react/3x2";

// The following cookie name is important because it's Google-predefined for the translation engine purpose
const COOKIE_NAME = "googtrans";

// We should know a predefined nickname of a language and provide its title (the name for displaying)
interface LanguageDescriptor {
  flag: string;
  name: string;
  title: string;
}

// The following definition describes typings for JS-based declarations in public/assets/scripts/lang-config.js
declare global {
  namespace globalThis {
    var __GOOGLE_TRANSLATION_CONFIG__: {
      languages: LanguageDescriptor[];
      defaultLanguage: string;
    };
  }
}

export default function LanguageSwitcher() {
  const [currentLanguage, setCurrentLanguage] = useState<string>();
  const [languageConfig, setLanguageConfig] = useState<any>();
  // console.log(languageConfig, "languageConfig**")
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // When the component has initialized, we must activate the translation engine the following way.
  useEffect(() => {
    // 1. Read the cookie
    const cookies = parseCookies()
    const existingLanguageCookieValue = cookies[COOKIE_NAME];

    let languageValue;
    if (existingLanguageCookieValue) {
      // 2. If the cookie is defined, extract a language nickname from there.
      const sp = existingLanguageCookieValue.split("/");
      if (sp.length > 2) {
        languageValue = sp[2];
      }
    }
    // 3. If __GOOGLE_TRANSLATION_CONFIG__ is defined and we still not decided about languageValue, let's take a current language from the predefined defaultLanguage below.
    if (global.__GOOGLE_TRANSLATION_CONFIG__ && !languageValue) {
      languageValue = global.__GOOGLE_TRANSLATION_CONFIG__.defaultLanguage;
    }
    if (languageValue) {
      // 4. Set the current language if we have a related decision.
      setCurrentLanguage(languageValue);
    }
    // 5. Set the language config.
    if (global.__GOOGLE_TRANSLATION_CONFIG__) {
      setLanguageConfig(global.__GOOGLE_TRANSLATION_CONFIG__);
    }
  }, []);

  // Don't display anything if current language information is unavailable.
  if (!currentLanguage || !languageConfig) {
    return null;
  }

  const getDomain = (url: any, subdomain?: boolean) => {
    subdomain = subdomain || false;

    url = url.replace(/(https?:\/\/)?(www.)?/i, '');

    if (!subdomain) {
      url = url.split('.');

      url = url.slice(url.length - 2).join('.');
    }

    if (url.indexOf('/') !== -1) {
      return url.split('/')[0];
    }

    return url;
  }

  // The following function switches the current language
  const switchLanguage = (lang: string) => () => {
    // We just need to set the related cookie and reload the page
    // "/auto/" prefix is Google's definition as far as a cookie name
    setCookie(null, COOKIE_NAME, "/auto/" + lang)
    setCookie(null, COOKIE_NAME, "/auto/" + lang, { domain: `.${getDomain(window.location.hostname)}`, path: '/' })
    window.location.reload();
  };

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  const currentflag = languageConfig.languages.find(
    (ld: LanguageDescriptor) => ld.name === currentLanguage
  )?.flag

  return (
    <div className="relative text-center notranslate mt-5 lg:mt-0 flex justify-center">
      <button
        onClick={toggleDropdown}
        className="text-blue-600 cursor-pointer text-[12px] hover:bg-blue-100 ml-3 border border-[#dfddde] rounded-md px-3 py-1 flex items-center gap-2"
      >
        {currentflag === 'in' && <IN title="IN" className="flex gap-1 xl:gap-2 items-center w-6 h-6" />}
        {currentflag === 'ae' && <AE title="AE" className="flex gap-1 xl:gap-2 items-center w-6 h-6" />}
        {currentflag === 'fr' && <FR title="FR" className="flex gap-1 xl:gap-2 items-center w-6 h-6" />} {languageConfig.languages.find(
          (ld: LanguageDescriptor) => ld.name === currentLanguage
        )?.title}
      </button>
      {dropdownOpen && (
        <div className="absolute bg-white border mt-10 lg:mt- rounded shadow-lg w-40 text-black z-[101] right-[10%] sm:right-[28%] lg:right-0">
          {languageConfig.languages.map((ld: LanguageDescriptor) => (
            <div key={`l_s_${ld}`} className="p-2">
              {currentLanguage === ld.name ||
                (currentLanguage === "auto" &&
                  languageConfig.defaultLanguage === ld) ? (
                <div className="flex">
                  <div>
                    {ld?.flag === 'in' && <IN title="IN" className="flex gap-1 xl:gap-2 items-center w-6 h-6" />}
                    {ld?.flag === 'ae' && <AE title="AE" className="flex gap-1 xl:gap-2 items-center w-6 h-6" />}
                    {ld?.flag === 'fr' && <FR title="FR" className="flex gap-1 xl:gap-2 items-center w-6 h-6" />}
                  </div>
                  <span key={`l_s_${ld}`} className="mx-3 text-orange-300">
                    {ld.title}
                  </span>
                </div>
              ) : (
                <div className="flex">
                  <div>
                    {ld?.flag === 'in' && <IN title="IN" className="flex gap-1 xl:gap-2 items-center w-6 h-6" />}
                    {ld?.flag === 'ae' && <AE title="AE" className="flex gap-1 xl:gap-2 items-center w-6 h-6" />}
                    {ld?.flag === 'fr' && <FR title="FR" className="flex gap-1 xl:gap-2 items-center w-6 h-6" />}
                  </div>
                  <a
                    key={`l_s_${ld}`}
                    onClick={switchLanguage(ld.name)}
                    className="text-blue-300 mx-3 cursor-pointer hover:text-blue-600"
                  >
                    {ld.title}
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};


