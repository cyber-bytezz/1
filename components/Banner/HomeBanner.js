import React from "react";
import { ButtonGroup } from "@components/Button";
import { Content } from "@components/Content";
import { SectionContainer } from "@components/Section";
import { PageTitle } from "@components/Title";
import { Customers } from "@components/Customers";
import Typing from "@components/Typing/Typing";
import { Button } from "@components/Button/Button"; // Adjust the import path

export const HomeBanner = () => {
    const words = ["University", "College", "Higher-ed Institution"];

    return (
        <SectionContainer className="page-banner--container py-8">
            <SectionContainer className="page-banner--inner-container wrap wrap-px z-10">
                <PageTitle className="text-center mx-auto font-bold text-4xl md:text-5xl"> {/* Adjust font size */}
                    Increase Student <br className="hidden md:inline" /> Learning Engagement
                </PageTitle>
                <Content className="text-center" alignment="center">
                    <p>
                        Are you a{" "}
                        <span className="font-semibold">
                            <Typing words={words} />
                        </span>{" "}
                        <br />
                        Transform <b>Post-Teaching Support</b> With Our AI toolkit<br />
                        Responsible AI integration, tailored for your class, to Provide<br />
                        <b>Tutoring Support 24/7.</b>
                    </p>
                </Content>
                <div className="mt-6 mb-4 text-center">
                    <ButtonGroup alignment="center">
                        <Button
                            href="https://google.com"
                            variant="secondary"
                            className="text-sm md:text-base py-2 px-4 md:py-3 md:px-6 w-32 md:w-auto"
                        >
                            Book a Demo
                        </Button>
                    </ButtonGroup>
                    
                </div>
                <Customers />
            </SectionContainer>
        </SectionContainer>
        
    );
};

export default HomeBanner;
