import React from "react";
import styled from "styled-components";
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
  }  
]


