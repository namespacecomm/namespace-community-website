import React from "react";
import styled from "styled-components";
import framework from "../../assets/framework.json";
import Lottie from "lottie-react";
import { Card } from "../../components/Resources/Card";

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

const Container = styled.div`
  scroll-snap-align: center;
  width: 1400px;
  padding-top: 100px;
  @media only screen and (max-width: 768px) {
    width: 90vw;
    overflow-y: scroll;
    flex-direction: column;

    justify-content: space-between;
  }
`;

export const CSSFramework = () => {
  return (
    <>
      <Section>
        <Container>
          <section class="text-white body-font">
            <div class="mx-auto flex px-2 items-center justify-center flex-col">
              <Lottie animationData={framework} className="h-[500px] " />
              <div class="text-center lg:w-full w-full">
                <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                  CSS Framework
                </h1>

                <p class="mb-8 leading-relaxed text-lg text-center">
                  Learn a CSS framework that simplifies web development.
                </p>
                <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                  Popular CSS frameworks
                </h1>
                <div className="grid grid-cols-1 w-full gap-x-4 gap-y-4">
                  {FrameWorks?.map((ele, ind) => {
                    return <Card key={ind} {...ele} />;
                  })}
                </div>
              </div>
            </div>
            {/* <-------------------------------Topics Section ----------------------------------------------> */}

            <div class="flex flex-wrap m-2"></div>
            {/* <-----------------------------------------------RESOURCES SECTION---------------------------------------------------> */}
          </section>
        </Container>
      </Section>
    </>
  );
};

const FrameWorks = [
  {
    name: "Bootstrap",
    description:
      "Bootstrap is a popular CSS framework that simplifies web development by providing a wide range of pre-designed components and styles.",
    image: "https://getbootstrap.com/docs/5.0/assets/img/bootstrap-icons.png",
    resources: [
      {
        title: "Official Documentation",
        url: "https://getbootstrap.com/",
      },
      {
        title: "Bootstrap Icons",
        url: "https://icons.getbootstrap.com/",
      },
      {
        title: "Bootstrap Themes",
        url: "https://themes.getbootstrap.com/",
      },
      {
        title: "Bootstrap Blog",
        url: "https://blog.getbootstrap.com/",
      },
      {
        title: "Bootstrap Expo",
        url: "https://expo.getbootstrap.com/",
      },
      {
        title: "Stack Overflow - Bootstrap",
        url: "https://stackoverflow.com/questions/tagged/bootstrap",
      },
      {
        title: "Bootstrap CDN",
        url: "https://www.bootstrapcdn.com/",
      },
    ],
  },
  {
    name: "Tailwind CSS",
    description:
      "Tailwind CSS is a utility-first CSS framework that helps you quickly build modern and responsive web interfaces.",
    image:
      "https://miro.medium.com/v2/resize:fit:644/1*d7Xs5RnaqcQtKzbNrAOAYA.png",
    resources: [
      {
        title: "Official Documentation",
        url: "https://tailwindcss.com/docs",
      },
      {
        title: "Tailwind UI",
        url: "https://tailwindui.com/",
      },
      {
        title: "Tailwind CSS Play",
        url: "https://play.tailwindcss.com/",
      },
      {
        title: "Awesome Tailwind CSS",
        url: "https://github.com/aniftyco/awesome-tailwindcss",
      },
      {
        title: "Tailwind CSS on GitHub",
        url: "https://github.com/tailwindcss/tailwindcss",
      },
      {
        title: "Stack Overflow - Tailwind CSS",
        url: "https://stackoverflow.com/questions/tagged/tailwind-css",
      },
      {
        title: "Tailwind CSS CDN",
        url: "https://cdnjs.com/libraries/tailwindcss",
      },
    ],
  },
  {
    name: "Material-UI",
    description:
      "Material-UI is a popular React UI framework that implements Google's Material Design guidelines to create beautiful and responsive web applications.",
    image: "https://material-ui.com/static/logo.png",
    resources: [
      {
        title: "Official Documentation",
        url: "https://material-ui.com/",
      },
      {
        title: "Material-UI Icons",
        url: "https://material.io/resources/icons/",
      },
      {
        title: "Material-UI Templates",
        url: "https://material-ui.com/store/",
      },
      {
        title: "Material-UI GitHub Repository",
        url: "https://github.com/mui-org/material-ui",
      },
      {
        title: "Material-UI Blog",
        url: "https://material-ui.com/blog/",
      },
      {
        title: "Stack Overflow - Material-UI",
        url: "https://stackoverflow.com/questions/tagged/material-ui",
      },
      {
        title: "Material-UI CDN",
        url: "https://cdnjs.com/libraries/material-ui",
      },
    ],
  },
  {
    name: "Chakra UI",
    description:
      "Chakra UI is a popular React UI framework that provides a set of accessible and customizable UI components to help you build elegant and responsive web applications.",
    image: "https://chakra-ui.com/og-image.png",
    resources: [
      {
        title: "Official Documentation",
        url: "https://chakra-ui.com/",
      },
      {
        title: "Chakra UI GitHub Repository",
        url: "https://github.com/chakra-ui/chakra-ui",
      },
      {
        title: "Chakra UI Color Mode Documentation",
        url: "https://chakra-ui.com/docs/features/color-mode",
      },
      {
        title: "Chakra UI Icons",
        url: "https://chakra-ui.com/docs/media-and-icons/icon",
      },
      {
        title: "Chakra UI Discord Community",
        url: "https://discord.com/invite/chakra-ui",
      },
      {
        title: "Chakra UI Stack Overflow",
        url: "https://stackoverflow.com/questions/tagged/chakra-ui",
      },
      {
        title: "Chakra UI Prisma Store",
        url: "https://chakra-ui.com/prisma",
      },
    ],
  },
];
