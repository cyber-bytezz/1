import { BadgeMessage, BadgeGroup, BadgeIcon } from "@components/Badge";
import { SectionContainer } from "@components/Section";
import { PageTitle } from "@components/Title";
import { Layout } from "@components/Layout";
import { HomeBanner } from "@components/Banner";
import { Columns } from "@components/Columns";
import { ContentImage } from "@components/ContentImage";
import { Content } from "@components/Content";
import { Accordion } from "@components/Accordion";
import Script from 'next/script'
//import { MotionBTTContainer } from "@components/Motion";
import SEO from "@components/SEO/SEO";
//import {CardBody,CardGroup,CardHeader,CardImage,Card,} from "@components/Card";
import Clients from "@components/Client/client";
//import { Customers } from "@components/Customers";
import { FixedPlugin } from "@components/Plugin";
import { Customers } from "@components/Customers";
import PopupForm from "@components/PopupForm"

export default function Home() {
  return (
    
    <Layout className="">
    <Script id="cookieyes" type="text/javascript" src="https://cdn-cookieyes.com/client_data/1d6a1764093f3d8a5d229c49/script.js"/>
      <SEO
        title="Teddlo"
        description="Traditional support methods are ineffective, compounded by the recent surge in AI-based cheating, which adds to the burden on faculty members.
        "
      />
      <PopupForm />
      <div className="main-wrapper bg-[#ffffff] relative z-10 pb-20 pt-20 ">
        <HomeBanner />
        {/* Components Container */}
        <SectionContainer className="components--container wrap wrap-px grid gap-8 sm:gap-20">
          
          {/* Features */}
          {/*<MotionBTTContainer transition={{ delay: 0.2, duration: 0.5 }}>*/}
            <SectionContainer id="features" className="features">

              <PageTitle className="text-center mx-auto font-bold text-4xl md:text-5xl">
                The Student Engagement Crisis 
              </PageTitle>
              <Content className="text-center" alignment="center">
                <p>
                  Poor Student Engagement - a key factor for Retention challenges, <br />
                  causes average annual losses of 1.4 million euros per institution. <br />
                  Traditional <b> support methods are ineffective</b> <br /> The recent <b>surge in AI-based cheating </b> adds to the burden on faculty.
                </p>
              </Content>
            </SectionContainer>

            <SectionContainer id="features" className="features">
              <PageTitle className="text-center mx-auto font-bold text-4xl md:text-5xl">
                Do the Teddlo way
              </PageTitle>
              <ContentImage />
            </SectionContainer>
         {/*</MotionBTTContainer>*/}
          {/* Card Container Tabs */}
          {/*<MotionBTTContainer transition={{ delay: 0.2, duration: 0.5 }}>
            <SectionContainer className="feature-tabs">
              <BadgeGroup alignment="center">
                <BadgeMessage>More Features</BadgeMessage>
                <BadgeIcon icon="twemoji:waving-hand" />
              </BadgeGroup>
              <PageTitle className="text-center mx-auto" type="default">
                Elevate Your Learning Experience with AI Tutor
              </PageTitle>
              <Content className="text-center" alignment="center">
                <p>
                  Explore the power of AI in education with our AI Tutor SaaS
                  product. Personalize your learning experience with our
                  flexible layouts, tailored courses, and adaptive lessons, all
                  designed to suit your unique learning style and goals.
                </p>
              </Content>
              <CardGroup className="grid scroll-m-24 gap-8 grid-cols-1 max-w-4xl mx-auto mt-24 md:grid-cols-2">
                <Card className="col-span-1 text-primary-900">
                  <CardBody className="w-full bg-white-600/20 p-12">
                    <CardImage src="/splash.jpeg" alt="Imagees" />
                    <CardHeader className="!text-black !text-2xl !font-bold">
                      Personalized Learning Paths
                    </CardHeader>
                    <p>
                      Tailor your learning experience with our AI-powered
                      platform. Customize your courses, modules, and lessons to
                      match your unique learning style and goals. AI Tutoring
                      adapts to you, ensuring a seamless and personalized
                      journey.
                    </p>
                  </CardBody>
                </Card>
                <Card className="col-span-1 text-primary-900">
                  <CardBody className="w-full bg-white-600/20 p-12">
                    <CardImage
                      src="/splash.jpeg"
                      alt="Progress Tracking image used."
                    />
                    <CardHeader className="!text-black !text-2xl !font-bold">
                      Intelligent Progress Monitoring
                    </CardHeader>
                    <p>
                      Stay motivated and track your progress intelligently with
                      AI Tutoring. Our SaaS solution allows you to monitor your
                      achievements using metrics like quizzes, assignments, and
                      course completion rates. Witness your continuous
                      improvement and the impact of your efforts.
                    </p>
                  </CardBody>
                </Card>
              </CardGroup>
            </SectionContainer>
          </MotionBTTContainer>*/}
          <Clients />
          {/* Testimonials */}
          {/*<MotionBTTContainer transition={{ delay: 0.2, duration: 0.5 }}>*/}
            {/* <SectionContainer id="testimonials" className="benefits">
            <BadgeGroup alignment="center">
                <BadgeMessage>Experts Says</BadgeMessage>
                <BadgeIcon icon="twemoji:waving-hand" />
              </BadgeGroup>
              <PageTitle className="text-center mx-auto" type="default">
                AI in Education <br />Experts Views and Real-World Examples
              </PageTitle>
              <Columns />
            </SectionContainer> */}
          {/*</MotionBTTContainer>*/}
          {/* Accordions */}
          {/*<MotionBTTContainer transition={{ delay: 0.2, duration: 0.5 }}>*/}
            <SectionContainer id="faq" className="faq">
              {/* <BadgeGroup alignment="center">
                <BadgeMessage>FAQ</BadgeMessage>
              </BadgeGroup> */}

              <PageTitle className="text-center mx-auto" type="default">
                Got some burning questions about AI Tutorial? <br></br>                
              </PageTitle>
              <Accordion />
            </SectionContainer>
          {/*</MotionBTTContainer>*/}
        </SectionContainer>
      </div>
      {/* <FixedPlugin/> */}
    </Layout>
    
  );
}
