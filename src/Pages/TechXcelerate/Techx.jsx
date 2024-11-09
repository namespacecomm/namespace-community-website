import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  display: flex;
  ${
    "" /* background-color: rgb(9, 9, 121);
  background-repeat: no-repeat;
  background: linear-gradient(
    262deg,
    rgba(9, 9, 121, 1) 0%,
    rgba(2, 0, 36, 1) 1%
  ); */
  }
  background-color: #010116;
  ${
    "" /* background-repeat: no-repeat;
  background: no-repeat url("./img/bg.jpg"); */
  }
`;

const Section2 = styled.div`
  height: 100%;
  background-color: #010116;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 2rem 0;
`;

const YoutubeFrame = styled.iframe`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Container = styled.div`
  scroll-snap-align: center;
  width: 1440px;
  padding-top: 100px;
  @media only screen and (max-width: 738px) {
    width: 100vw;
    justify-content: center;
    align-items: center;
  }
  @media only screen and (max-width: 1030px) {
    width: 100vw;
    justify-content: center;
    align-items: center;
  }

  @media only screen and (max-width: 1030px) {
    width: 100vw;
    justify-content: center;
    align-items: center;
  }
`;

function TechX() {
  return (
    <>
      <Section>
        <Container>
          <div className=" px-6 py-10 ">
            <h2 className="text-3xl font-bold leading-tight text-transparent bg-clip-text  bg-gradient-to-r from-teal-400 to-yellow-200 sm:text-4xl lg:text-5xl text-center">
              TechXcelerate
            </h2>

            <p className="max-w-4xl mx-auto my-10 text-center text-xl font-bold leading-tight text-transparent bg-clip-text  bg-gradient-to-r from-amber-500 to-pink-500 ">
              Our society launched TechXcelerate in April 2023, a series of
              interactive sessions aimed at first and second-year students.
              These sessions feature beginner-level topics and the necessary
              tips and tricks to learn various technical domains, covering
              Competitive Programming, web development, app development, data
              science, and more. This year's sessions were delivered by some of
              the most prominent figures in the industry. We witnessed
              participation from 1,800+ unique students from various colleges
              across India, with 9+ hours of live interaction. TechXcelerate 2.0
              generated more than 7,500 impressions across social media channels
              in only 10 days, and the upcoming editions will surely see even
              greater success.
            </p>

            {/* Embedded Luma registration form */}

            {/* <div className="mx-auto flex flex-col gap-3">
              <div className="flex items-center justify-between flex-wrap gap-5">
                <h4 className="font-bold md:text-[64px] text-[44px] text-white mt-[100px]">
                  Register for TechXcelerate 2.0
                </h4>
              </div>
            </div>

            <div style={{ marginTop: "50px" }}>
              <iframe
                title="Unique Title for Accessibility"
                src="https://lu.ma/embed-checkout/evt-OQPjFH6fJtUOEA4"
                width="100%"
                height="800"
                style={{
                  border: "1px solid #bfcbda88",
                  borderRadius: "24px",
                  maxWidth: "", // Set maximum width if needed
                  margin: "0 auto", // Center the iframe
                  boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.9)", // Example box shadow
                }}
                allowfullscreen=""
                aria-hidden="false"
              />
            </div> */}

            <>
              <h2 className="mt-[100px] text-2xl text-center md:text-4xl lg:text-5xl font-bold">
                View Past{" "}
                <span className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-800">
                  <a href="https://linktr.ee/namespacecomm">Sessions</a>
                </span>
              </h2>

              {/* <div className="flex items-center justify-center mt-4">
                <a
                  href="https://drive.google.com/drive/folders/1eVfG4LUVbiEJ02F46odyqiRfhX342PXW?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    type="button"
                    className="text-white mt-1 bg-blue-700 font-medium rounded-lg text-sm px-8 py-2.5 text-center mr-0 mb-2"
                  >
                    Access Previous Year PPTs
                  </button>
                </a>
              </div> */}

              <div className="flex items-center justify-center mt-4">
                <a
                  href="https://www.youtube.com/@namespacecomm"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    type="button"
                    className="text-white mt-1 bg-blue-700 font-medium rounded-lg text-sm px-8 py-2.5 text-center mr-0 mb-2"
                  >
                    Our YouTube Channel
                  </button>
                </a>
              </div>

              <div className="w-full flex justify-center">
                <a
                  href="https://techx.namespacecomm.in"
                  target="_blank"
                  className=""
                >
                  <button
                    type="button"
                    className="text-white mt-1 bg-blue-700 font-medium rounded-lg text-sm px-8 py-2.5 text-center mr-0 mb-2"
                  >
                    Visit Our Website
                  </button>
                </a>
              </div>
              <Section2>
                <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center">
                  <YoutubeFrame src="https://www.youtube.com/embed/yw_5wT0OTfE?si=dLhthxsHjwVNt0AR" />
                  <YoutubeFrame src="https://www.youtube.com/embed/3P836wOGiJM?si=1ytAtyA-py_NJ7dU" />
                  <YoutubeFrame src="https://www.youtube.com/embed/GtFKD7S2DGY?si=Ibo54vY63ewepwa_" />
                  <YoutubeFrame src="https://www.youtube.com/embed/hP5s45CRFP8?si=D7-R3NmNZYmKV0_1" />
                  <YoutubeFrame src="https://www.youtube.com/embed/0S7-9D5emFM?si=81uAyTDD7SfmrBk4" />
                  <YoutubeFrame src="https://www.youtube.com/embed/0E-tI0M9eXY?si=0FC5N6inUazL5sZE" />
                  <YoutubeFrame src="https://www.youtube.com/embed/1DaSopBmZAk?si=1fZWAN8tqEQCcU21" />
                  <YoutubeFrame src="https://www.youtube.com/embed/jJScsZOrdzw?si=ODK4_oIOHlH6G13O" />
                </div>
              </Section2>
            </>
          </div>
        </Container>
      </Section>
    </>
  );
}

export default TechX;
