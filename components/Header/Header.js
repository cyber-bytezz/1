import { Nav } from "@components/Nav";
import Image from "next/image";
import { SectionContainer } from "@components/Section";

export const Header = () => {
  return (
    <header className="header fixed left-0 w-full z-30 top-0 bg-white backdrop-filter backdrop-blur-md bg-opacity-50">
      <SectionContainer className="header--container wrap wrap-px px-4 py-2 md:px-6 md:py-3 flex justify-between items-center">
        <div className="flex items-center justify-start w-full md:justify-center"> {/*  mobile and center in desktop */}
          <div className="header-logo--container flex items-center ml-[-30px] md:ml-0"> {/* Adjusted ml-[-30px] for desktop view */}
            <h1 className="logo mb-0">
              <Image
                src="/favicon.png"
                alt="logo"
                className="h-12 w-auto lg:h-14" // Adjusted height to h-12 and lg:h-14 for larger logo
                height="50" // Adjusted height to 60
                width="50" // Adjusted width to 60
                priority
              />
            </h1>
            <p className="ml-2xl text-2xl font-bold text-gray-800 font-custom"> {/* Adjusted font size to text-3xl */}
              Teddlo
            </p>
          </div>
        </div>
        <div className="hidden md:flex items-center justify-center w-full ml-[-70px]"> {/* Adjusted ml-[-70px] for alignment */}
          {/*<a
            href="https://google.com"
            className="text-sm text-black-800 hover:underline ml-[-30px]" // Adjusted ml-[-30px] to move left 
          >
            Request a Free Trial
          </a>*/}
          <a
            role="button"
            href="https://calendly.com/flapdocs/teddlo-book-a-demo-call-with-the-founding-team"
            className="btn btn--secondary ml-2 text-sm py-1 px-2" // Adjusted ml-2 to move left and reduce gap
          >
            Book a Demo
          </a>
        </div>
        <div className="flex md:hidden items-center justify-center w-full mt-2 ml-[-30px]"> {/* Adjusted ml-[-30px] for mobile view */}
          <Nav isMobile /> {/* Render mobile Nav */}
        </div>
      </SectionContainer>
    </header>
  );
};
