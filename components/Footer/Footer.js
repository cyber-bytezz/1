import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const CURRENT_YEAR = new Date().getFullYear();

export const Footer = () => {
    return (
        <footer id="footer" className="bg-white footerImage">
            {/* Footer Links */}
            <div className="footer--container wrap wrap-px relative z-10 py-4">
                <div className="footer--content-container flex justify-between items-center">
                    {/* Logo and Company Name */}
                    <div className="footer-logo--container flex items-center mb-4 md:mb-0">
                        <Link href="/">
                            <Image
                                src="/favicon.png"
                                alt="logo"
                                className="h-10 w-auto"
                                height="100"
                                width="100"
                                priority
                            />
                        </Link>
                        <span className="text-sm font-medium ml-2">© {CURRENT_YEAR} Teddlo Techworks Limited</span>
                    </div>
                    {/* Privacy Policy, Terms and Social Media Icons */}
                    <div className="footer-logo--container flex items-center mb-4 md:mb-0">
                        <div className="footer-links flex items-center md:items-start md:mr-8 ">
                            <Link href="https://app.termly.io/policy-viewer/policy.html?policyUUID=bc889635-f5e7-4237-b7a4-382dc06bd76d" target="_blank" className="text-sm text-gray-700 hover:text-gray-900 mt-2 mr-2 md:mt-0 hover:underline">
                                Privacy Policy
                            </Link>
                            <Link href="https://app.termly.io/policy-viewer/policy.html?policyUUID=efa05571-0d20-447f-b433-41050817ba1c" target="_blank" className="text-sm text-gray-700 hover:text-gray-900 mt-2 mr-2 md:mt-0 hover:underline">
                                Terms and Conditions
                            </Link>
                            <Link href="./cookies" target="_blank" className="text-sm text-gray-700 hover:text-gray-900 mt-2 md:mt-0 hover:underline">
                                Cookie Policy
                            </Link>
                        </div>
                        <div className="footer-social-icons flex gap-4">
                            <Link
                                href="https://www.linkedin.com/company/teddlo/"
                                target="_blank"
                                className="footer-social-icon"
                            >
                                <FontAwesomeIcon
                                    icon={faLinkedin}
                                    className="h-6 w-6 text-gray-700 hover:text-gray-900"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer--background"></div>
        </footer>
    );
};