import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
 
  ${
    "" 
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

export const Firebase = () => {
    const [firebaseTopicsChecked, setFirebaseTopicsChecked] = useState({
      authentication: false,
      firestore: false,
      storage: false,
      realtimedatabase: false,
      hosting: false,
      cloudfunctions: false,
      security: false,
      analytics: false,
    });

    const handleCheckboxChange = (topic) => {
        setFirebaseTopicsChecked({
            ...firebaseTopicsChecked,
            [topic]: !firebaseTopicsChecked[topic],
        });
    };
    useEffect(() => {
        localStorage.setItem(
          "firebaseTopicsChecked",
          JSON.stringify(firebaseTopicsChecked)
        );
      }, [firebaseTopicsChecked]);

      useEffect(() => {
        const storedTopicsChecked = localStorage.getItem("firebaseTopicsChecked");
        if (storedTopicsChecked) {
          setFirebaseTopicsChecked(JSON.parse(storedTopicsChecked));
        }
      }, []);
      return (
        <>
          <Section>
            <Container>
              <section className="text-white body-font">
                <div className="mx-auto flex px-2 mt-8 mb-4 items-center justify-center flex-col">
                  <img
                    className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-contain object-center rounded"
                    alt="hero"
                    src="https://firebase.google.com/images/social.png"
                  />
                  <div className="text-center lg:w-full w-full">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                      Firebase
                    </h1>
                    <p className="mb-8 leading-relaxed text-justify">
                    Firebase is a Google-backed Backend-as-a-Service (BaaS) platform that offers a suite of cloud-based services 
                    for developing web and mobile applications. It includes features like 
                    real-time databases, authentication, cloud storage, serverless functions, 
                    hosting, machine learning, analytics, and more, making it easier for 
                    developers to build, deploy, and manage applications. Firebase is widely used 
                    for creating modern, feature-rich apps with less backend complexity. It helps 
                    developers to build their apps faster and in a more secure way. 
                    No programming is required on the firebase side which makes it easy to 
                    use its features more efficiently. It provides services to android, ios, web, 
                    and unity. It provides cloud storage. It uses NoSQL for the database for the storage of data.
                    </p>
                  </div>
                </div>
                {/* <-------------------------------Topics Section ----------------------------------------------> */}
                <h2 className="mb-2 text-lg font-semibold text-white">
                  Topics you need to cover:
                </h2>
                <ul className="flex flex-wrap m-2">
                  {topics.map((front) => {
                    return (
                      <li className="p-2 lg:w-max md:w-1/2" key={front.title}>
                        <div className="h-full flex items-center border-gray-200 border px-4 py-2 rounded-lg hover:scale-105 transition-all">
                          <div className="flex items-center gap-3">
                            <label
                              htmlFor={front.storage}
                              className="text-white title-font font-bold text-xl cursor-pointer"
                            >
                              {front.title}
                            </label>
                            <input
                              type="checkbox"
                              id={front.storage}
                              checked={firebaseTopicsChecked[front.storage]}
                              onChange={() => handleCheckboxChange(front.storage)}
                              className="w-4 h-4"
                            />
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
                {/* <-----------------------------------------------RESOURCES SECTION---------------------------------------------------> */}
                <section className="text-white body-font">
                  <div className=" px-0 py-14 mx-auto">
                    <div className="flex flex-col text-left w-full mb-2">
                      <h1 className="text-xl font-bold title-font mb-4 text-white-900 tracking-widest">
                        Resources:
                      </h1>
                    </div>
                    <ul className="grid lg:grid-cols-2 grid-cols-1 gap-4">
                      {resources.map((resource) => {
                        return (
                          <li
                            className="lg:w-full bg-black/20 p-4 rounded-xl hover:scale-[102%] transition-all duration-200 ease-in-out"
                            key={resource.title}
                          >
                            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                              <img
                                alt="team"
                                className="flex-shrink-0 rounded-lg w-48 h-48 object-contain sm:mb-0 mb-4"
                                src={resource.image}
                              />
                              <div className="text-left flex-grow sm:pl-8">
                                <Link to={resource.link} target={"_blank"}>
                                  <h2 className="title-font font-medium text-xl pb-1 text-white underline underline-offset-2">
                                    {resource.title}
                                  </h2>
                                </Link>
    
                                <h3 className="text-white mb-3">{resource.type}</h3>
                              </div>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </section>
              </section>
            </Container>
          </Section>
        </>
      );
    };

    const resources = [
        {
          title: "Firebase Roadmap",
          image: "https://firebase.google.com/static/images/brand-guidelines/logo-vertical.png",
          type: "Roadmap",
          link: "https://firebase.google.com/community/learn",
        },
        {
          title: "Getting started with Firebase",
          image:
            "https://webartdevelopers.com/blog/wp-content/uploads/2020/10/firebase-logo.png",
          type: "Documentation",
          link: "https://firebase.google.com/community/learn",
        },
        {
          title: "Introduction to Firebase",
          image:
            "https://i.ytimg.com/vi/s1SNak0_D4k/mqdefault.jpg",
          type: "Collection Of Tutorials",
          link: "https://blog.back4app.com/firebase/",
        },
      
        {
          title: "React Native Firebase",
          image:
            "https://madewithnetworkfra.fra1.digitaloceanspaces.com/spatie-space-production/29202/react-native-firebase-2.jpg",
          type: "Course",
          link: "https://rnfirebase.io/",
        },
        {
            title: "W3Schools Firebase Introduction",
            image:
              "https://yt3.googleusercontent.com/dW6to0x5Crmeh7yi-YPLcQRqVrBtx2BSh8eoKTJbE8NbjloQ0sqlmdszIlxokJU_97-ndOt_=s900-c-k-c0x00ffffff-no-rj",
            type: "Collection Of Tutorials",
            link: "https://www.geeksforgeeks.org/firebase-introduction/",
          },
        {
          title: "Firebase Fundamentals",
          image:
            "https://i.ytimg.com/vi/p9pgI3Mg-So/maxresdefault.jpg",
          type: "Youtube Video",
          link: "https://www.youtube.com/watch?v=p9pgI3Mg-So",
        },
        {
          title: "Learning Firebase",
          image:
            "https://www.learndash.com/wp-content/uploads/udemy_coupons.png",
          type: "Course",
          link: "https://www.udemy.com/course/learning-firebase/",
        },
        {
          title: "Firebase - Ultimate Beginner's Guide",
          image:
            "https://i.ytimg.com/vi/9kRgVxULbag/sddefault.jpg",
          type: "Youtube Video",
          link: "https://www.youtube.com/watch?v=9kRgVxULbag",
        },
          
      ];
      
      const topics = [
        {
          title: "Authentication with Firebase",
          storage: "authentication",
        },
        {
          title: "Firebase Firestore",
          storage: "firestore",
        },
        {
          title: "Firebase Storage",
          storage: "storage",
        },
        {
          title: "Firebase Realtime Database",
          storage: "realtimedatabase",
        },
        {
          title: "Firebase Hosting",
          storage: "hosting",
        },
        {
          title: "Firebase Cloud Functions",
          storage: "cloudfunctions",
        },
        {
          title: "Firebase Security Rules",
          storage: "security",
        },
        {
          title: "Firebase Analytics",
          storage: "analytics",
        },
      ];
      
      
