import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// ======== Defining Styled Components =================
const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  display: flex;
  ${"" /* background-color: rgb(9, 9, 121);
  background-repeat: no-repeat;
  background: linear-gradient(
    262deg,
    rgba(9, 9, 121, 1) 0%,
    rgba(2, 0, 36, 1) 1%
  ); */
    }
  background-color: #010116;
  ${"" /* background-repeat: no-repeat;
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

// ======== 


export default function AugmentedReality() {

    const [htmltopicsChecked, setHtmlTopicsChecked] = useState({
        htmlstructure: false,
        htmlelements: false,
        htmlattributes: false,
        textformatting: false,
        htmlimages: false,
        htmllinks: false,
        htmllists: false,
        htmlforms: false,
        semantichtml: false,
        documentstructure: false,
        htmlcomments: false,
        devtools: false,
    });

    const handleCheckboxChange = (topic) => {
        setHtmlTopicsChecked({
            ...htmltopicsChecked,
            [topic]: !htmltopicsChecked[topic],
        });
    };

    useEffect(() => {
        localStorage.setItem(
            "htmltopicsChecked",
            JSON.stringify(htmltopicsChecked)
        );
    }, [htmltopicsChecked]);

    useEffect(() => {
        const storedTopicsChecked = localStorage.getItem("htmltopicsChecked");
        if (storedTopicsChecked) {
            setHtmlTopicsChecked(JSON.parse(storedTopicsChecked));
        }
    }, []);


    return (
        <>
            <Section>
                <Container>
                    <section className="text-white body-font ">

                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white text-center mt-10">
                            Augmented Reality
                        </h1>

                        
                        <div className="mx-auto flex px-2 mt-8 mb-4 items-center justify-center">

                            <div className='w-1/3'>

                                <img
                                    className="mb-10 p-10 object-contain object-center rounded"
                                    alt="hero"
                                    src="/img/header-images/augmented-reality-header.jpg"
                                />
                            </div>
                            <div className='mx-auto flex px-2 mt-8 mb-4 items-center justify-center w-2/3'>
                                <div className="text-center lg:w-full w-full">

                                    <p className="mb-8 leading-relaxed text-justify">
                                        Augmented Reality (AR) represents a transformative technology that seamlessly integrates virtual elements into our real-world environment, enriching our perception and interaction with the surroundings. AR differs from virtual reality by overlaying computer-generated content onto the physical world instead of immersing users in a fully digital environment. This integration is facilitated through devices like smartphones, smart glasses, or headsets, serving as windows into the augmented experience. By analyzing and understanding the real-world environment, AR applications superimpose digital data such as images, videos, 3D models, or sounds in real-time, creating an interactive and immersive user experience.
                                        <br />
                                        <br />

                                        The beauty of AR lies in its versatility, impacting various sectors including gaming, education, healthcare, retail, and beyond. In the gaming realm, AR has birthed interactive experiences like Pokémon GO, where players can hunt for virtual creatures in their actual surroundings using mobile devices. This convergence of virtual gameplay and the real world has redefined engagement and entertainment.


                                    </p>
                                </div>
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
                                                    checked={htmltopicsChecked[front.storage]}
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

    )
}

const resources = [
    {
        title: "AR Core Developers Guide",
        image:
            "https://developers.google.com/static/ar/images/logo.svg",
        type: "Documentation",
        link: "https://developers.google.com/ar",
    },
    {
        title: "ARKit Documentation",
        image: "https://docs-assets.developer.apple.com/published/d79507481a/8a314378-9fab-428b-9dbc-4c52f56c209d.png",
        type: "Documentation",
        link: "https://developer.apple.com/documentation/arkit",
    },
    {
        title: "Introduction to Web AR Development",
        image: "https://logos-world.net/wp-content/uploads/2021/11/Udemy-Symbol.png",
        type: "Course",
        link: "https://www.udemy.com/course/introduction-to-web-ar-development/",
    },
    {
        title: "Augmented Reality for Everyone",
        image: "https://img.freepik.com/premium-vector/youtube-background-youtube-icon-social-media-icons-realistic-logo-vector-zaporizhzhia-ukraine-may-10-2021_399089-1047.jpgg",
        type: "Youtube Course",
        link: "https://www.youtube.com/watch?v=WzfDo2Wpxks",
    },
    
];

const topics = [
    { title: "Fundamental of AR", storage: "ar-fundamentals" },
    { title: "2D and 3D Graphics", storage: "ar-graphics" },
    { title: "Rendering Techniques", storage: "are-render" },
    { title: "Geometric Transformations", storage: "are-geo" },
    { title: "ARCore/ARKit", storage: "ar-arcore" },
    { title: "Unity", storage: "ar-unity" },
    { title: "3D Modelling Tools", storage: "ar-3d-modelling-tools" },
    { title: "Texturing", storage: "ar-texturing" },
    { title: "Animation", storage: "ar-animation" },
    { title: "AR Implementation", storage: "ar-ar-implementation" },
  
];
