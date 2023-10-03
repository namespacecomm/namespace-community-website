import React from "react";
import styled from "styled-components";
import Footer from "../../../components/Footer/Footer";
import Navbar from "../../../components/Navbar/Navbar";
import framework from '../../../assets/framework.json'
import Lottie from 'lottie-react'
import { Card } from "../../../components/Resources/Card";

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

export const FrontEndFramework = () => {
 

 



  

  return (
    <>
      <Section>
        <Navbar />
        <Container>
          <section className="text-white body-font">
            <div className="mx-auto flex px-2 items-center justify-center flex-col">
              <Lottie animationData={framework} className="h-[500px] "/>
              <div className="text-center lg:w-full w-full">
                
                  <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                   Front-End FrameWorks
                  </h1>
                
                <p className="mb-8 leading-relaxed text-lg text-center">
                A JavaScript frontend framework is a collection of JavaScript code libraries that helps developers with standard programming features and tasks. In addition, it offers reusable code components, a universal development environment, compilers, toolsets, code libraries, APIs, etc., to facilitate the app.
                </p>
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Popular front end frameworks</h1>
                <div className="grid grid-cols-1 w-full gap-x-4 gap-y-4">
                  {FrameWorks?.map((ele,ind)=>{
                    return <Card key={ind} {...ele}/>
                   
                  })}
                </div>
              </div>
            </div>
            {/* <-------------------------------Topics Section ----------------------------------------------> */}
            
            <div className="flex flex-wrap m-2">
             
            </div>
            {/* <-----------------------------------------------RESOURCES SECTION---------------------------------------------------> */}
     
          </section>
        </Container>
      </Section>
      <Footer />
    </>
  );
};

const FrameWorks=[
  {
    "name": "ReactJS",
    "description": "ReactJS is a popular JavaScript library for building user interfaces. It allows developers to create dynamic and interactive web applications with reusable components.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
    "resources": [
      {
        "title": "Official Documentation",
        "url": "https://reactjs.org/"
      },
      {
        "title": "React Community",
        "url": "https://reactjs.org/community/support.html"
      },
      {
        "title": "React Native for Mobile Development",
        "url": "https://reactnative.dev/"
      }
    ]
  },
  {
    "name": "Angular",
    "description": "Angular is a robust front-end framework developed and maintained by Google. It enables the creation of dynamic single-page applications with powerful features like two-way data binding and dependency injection.",
    "image": "https://cdn.iconscout.com/icon/free/png-256/free-angularjs-2-1175271.png?f=webp",
    "resources": [
      {
        "title": "Official Documentation",
        "url": "https://angular.io/"
      },
      {
        "title": "Angular Community",
        "url": "https://community.angular.io/"
      },
      {
        "title": "Angular CLI for Command Line Tools",
        "url": "https://cli.angular.io/"
      }
    ]
  },
  {
    "name": "Vue.js",
    "description": "Vue.js is a progressive JavaScript framework known for its simplicity and flexibility. It allows developers to build intricate web interfaces using components while providing an approachable and adaptable learning curve.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png?20170311074507",
    "resources": [
      {
        "title": "Official Documentation",
        "url": "https://vuejs.org/"
      },
      {
        "title": "Vue.js Guide",
        "url": "https://vuejs.org/v2/guide/"
      },
      {
        "title": "Vue.js Devtools Extension",
        "url": "https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd"
      }
    ]
  },
  {
    "name": "Ember.js",
    "description": "Ember.js is an opinionated framework that promotes convention over configuration. It facilitates the rapid development of ambitious web applications, offering a strong set of tools and practices for building scalable and maintainable front-end systems.",
    "image": "https://emberjs.com/images/brand/ember-tomster-lockup-4c.svg",
    "resources": [
      {
        "title": "Official Documentation",
        "url": "https://emberjs.com/"
      },
      {
        "title": "Ember.js Guides",
        "url": "https://guides.emberjs.com/release/"
      },
      {
        "title": "Ember Observer (Add-ons and Community)",
        "url": "https://emberobserver.com/"
      }
    ]
  },
  {
    "name": "Svelte",
    "description": "Svelte is a radical new approach to building user interfaces. It shifts the work of rendering from the browser to the compile step, resulting in smaller, faster applications. Svelte provides a simple and intuitive way to create reactive components.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/1200px-Svelte_Logo.svg.png",
    "resources": [
      {
        "title": "Official Documentation",
        "url": "https://svelte.dev/"
      },
      {
        "title": "Svelte REPL for Trying Out Code",
        "url": "https://svelte.dev/repl"
      },
      {
        "title": "SvelteKit for Building Web Applications",
        "url": "https://kit.svelte.dev/"
      }
    ]
  },
  {
    "name": "Bootstrap",
    "description": "Bootstrap is a popular CSS framework that simplifies web development by providing a wide range of pre-designed components and styles.",
    "image": "https://getbootstrap.com/docs/5.0/assets/img/bootstrap-icons.png",
    "resources": [
      {
        "title": "Official Documentation",
        "url": "https://getbootstrap.com/"
      },
      {
        "title": "Bootstrap Icons",
        "url": "https://icons.getbootstrap.com/"
      },
      {
        "title": "Bootstrap Themes",
        "url": "https://themes.getbootstrap.com/"
      },
      {
        "title": "Bootstrap Blog",
        "url": "https://blog.getbootstrap.com/"
      },
      {
        "title": "Bootstrap Expo",
        "url": "https://expo.getbootstrap.com/"
      },
      {
        "title": "Stack Overflow - Bootstrap",
        "url": "https://stackoverflow.com/questions/tagged/bootstrap"
      },
      {
        "title": "Bootstrap CDN",
        "url": "https://www.bootstrapcdn.com/"
      }
    ]
  },
  {
    "name": "Tailwind CSS",
    "description": "Tailwind CSS is a utility-first CSS framework that helps you quickly build modern and responsive web interfaces.",
    "image": "https://tailwindcss.com/_next/static/media/twitter-square.daf3c23deca356f8d5bc1b0977c1e88b.png",
    "resources": [
      {
        "title": "Official Documentation",
        "url": "https://tailwindcss.com/docs"
      },
      {
        "title": "Tailwind UI",
        "url": "https://tailwindui.com/"
      },
      {
        "title": "Tailwind CSS Play",
        "url": "https://play.tailwindcss.com/"
      },
      {
        "title": "Awesome Tailwind CSS",
        "url": "https://github.com/aniftyco/awesome-tailwindcss"
      },
      {
        "title": "Tailwind CSS on GitHub",
        "url": "https://github.com/tailwindcss/tailwindcss"
      },
      {
        "title": "Stack Overflow - Tailwind CSS",
        "url": "https://stackoverflow.com/questions/tagged/tailwind-css"
      },
      {
        "title": "Tailwind CSS CDN",
        "url": "https://cdnjs.com/libraries/tailwindcss"
      }
    ]
  },
  {
    "name": "Material-UI",
    "description": "Material-UI is a popular React UI framework that implements Google's Material Design guidelines to create beautiful and responsive web applications.",
    "image": "https://material-ui.com/static/logo.png",
    "resources": [
      {
        "title": "Official Documentation",
        "url": "https://material-ui.com/"
      },
      {
        "title": "Material-UI Icons",
        "url": "https://material.io/resources/icons/"
      },
      {
        "title": "Material-UI Templates",
        "url": "https://material-ui.com/store/"
      },
      {
        "title": "Material-UI GitHub Repository",
        "url": "https://github.com/mui-org/material-ui"
      },
      {
        "title": "Material-UI Blog",
        "url": "https://material-ui.com/blog/"
      },
      {
        "title": "Stack Overflow - Material-UI",
        "url": "https://stackoverflow.com/questions/tagged/material-ui"
      },
      {
        "title": "Material-UI CDN",
        "url": "https://cdnjs.com/libraries/material-ui"
      }
    ]
  },
  {
    "name": "Chakra UI",
    "description": "Chakra UI is a popular React UI framework that provides a set of accessible and customizable UI components to help you build elegant and responsive web applications.",
    "image": "https://chakra-ui.com/logo.svg",
    "resources": [
      {
        "title": "Official Documentation",
        "url": "https://chakra-ui.com/"
      },
      {
        "title": "Chakra UI GitHub Repository",
        "url": "https://github.com/chakra-ui/chakra-ui"
      },
      {
        "title": "Chakra UI Color Mode Documentation",
        "url": "https://chakra-ui.com/docs/features/color-mode"
      },
      {
        "title": "Chakra UI Icons",
        "url": "https://chakra-ui.com/docs/media-and-icons/icon"
      },
      {
        "title": "Chakra UI Discord Community",
        "url": "https://discord.com/invite/chakra-ui"
      },
      {
        "title": "Chakra UI Stack Overflow",
        "url": "https://stackoverflow.com/questions/tagged/chakra-ui"
      },
      {
        "title": "Chakra UI Prisma Store",
        "url": "https://chakra-ui.com/prisma"
      }
    ]
  }
  
  
  
  
]


