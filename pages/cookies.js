import React from "react";
import Link from "next/link";

const Cookies = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="cookie-policy-h1">Cookie Policy</h1>
      <p>Effective Date: 31-May-2024 Last Updated: 31-May-2024</p>
      &nbsp;
      <h5>What are cookies?</h5>
      <div className="cookie-policy-p">
        <p>
          This Cookie Policy explains what cookies are and how we use them, the
          types of cookies we use i.e, the information we collect using cookies
          and how that information is used, and how to manage the cookie
          settings.
        </p>
        <p>
          Cookies are small text files that are used to store small pieces of
          information. They are stored on your device when the website is loaded
          on your browser. These cookies help us make the website function
          properly, make it more secure, provide better user experience, and
          understand how the website performs and to analyze what works and
          where it needs improvement.
        </p>
      </div>
      &nbsp;
      <h5>How do we use cookies?</h5>
      <div className="cookie-policy-p">
        <p>
          As most of the online services, our website uses first-party and
          third-party cookies for several purposes. First-party cookies are
          mostly necessary for the website to function the right way, and they
          do not collect any of your personally identifiable data.
        </p>
        <p>
          The third-party cookies used on our website are mainly for
          understanding how the website performs, how you interact with our
          website, keeping our services secure, providing advertisements that
          are relevant to you, and all in all providing you with a better and
          improved user experience and help speed up your future interactions
          with our website.
        </p>
        <p>
          Chrome:{" "}
          <Link
            href="https://support.google.com/accounts/answer/32050"
            target="_blank" className="text-sm text-gray-700 hover:text-gray-900 mt-2 md:mt-0 hover:underline"
          >
            https://support.google.com/accounts/answer/32050
          </Link>
        </p>
        <p>
          Safari:{" "}
          <Link
            href="https://support.apple.com/en-in/guide/safari/sfri11471/mac"
            target="_blank" className="text-sm text-gray-700 hover:text-gray-900 mt-2 md:mt-0 hover:underline"
          >
            https://support.apple.com/en-in/guide/safari/sfri11471/mac
          </Link>
        </p>
        <p>
          Firefox:{" "}
          <Link
            href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox?redirectslug=delete-cookies-remove-info-websites-stored&redirectlocale=en-US"
            target="_blank" className="text-sm text-gray-700 hover:text-gray-900 mt-2 md:mt-0 hover:underline"
          >
            https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox?redirectslug=delete-cookies-remove-info-websites-stored&redirectlocale=en-US
          </Link>
        </p>
        <p>
          Internet Explorer:{" "}
          <Link
            href="https://support.microsoft.com/en-us/topic/how-to-delete-cookie-files-in-internet-explorer-bca9446f-d873-78de-77ba-d42645fa52fc"
            target="_blank" className="text-sm text-gray-700 hover:text-gray-900 mt-2 md:mt-0 hover:underline"
          >
            https://support.microsoft.com/en-us/topic/how-to-delete-cookie-files-in-internet-explorer-bca9446f-d873-78de-77ba-d42645fa52fc
          </Link>
        </p>
        <p>
          If you are using any other web browser, please visit your browser&apos;s
          official support documents.
        </p>
      </div>
      <p className="cookie-policy-p">
        Cookie Policy Generated By{" "}
        <Link
          target="_blank" className="text-sm text-gray-700 hover:text-gray-900 mt-2 md:mt-0 hover:underline"
          href="https://www.cookieyes.com/?utm_source=CP&utm_medium=footer&utm_campaign=UW"
        >
          CookieYes - Cookie Policy Generator
        </Link>
        .
      </p>
    </div>
  );
};

export default Cookies;
