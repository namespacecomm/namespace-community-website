import React from "react";
import styled from "styled-components";
import "../Main.css";
import { Link } from "react-router-dom";

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
  @media only screen and (max-width: 1024px) {
    width: 100vw;
  }
  @media only screen and (max-width: 768px) {
    width: 90vw;
    overflow-y: scroll;
    flex-direction: column;

    justify-content: space-between;
  }
`;

// data

const Languages = [
  {
    name: "Python",
    link: "https://www.python.org/",
    imgURL: "https://cdn-icons-png.flaticon.com/128/5968/5968350.png",
    des: "Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation.",
  },
  {
    name: "Java",
    link: "https://www.java.com/",
    imgURL: "https://cdn-icons-png.flaticon.com/128/5968/5968282.png",
    des: "Java is a programming language and a platform. Java is a high level, robust, object-oriented and secure programming language.",
  },
  {
    name: "C++",
    link: "http://www.cplusplus.com/",
    imgURL: "https://cdn-icons-png.flaticon.com/128/6132/6132222.png",
    des: "C++ is a powerful general-purpose programming language. It can be used to develop operating systems, browsers, games, and so on.",
  },
  {
    name: "JavaScript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    imgURL: "https://cdn-icons-png.flaticon.com/128/5968/5968292.png",
    des: "JavaScript is a programming language used to create dynamic content for websites. It achieves this by adding new HTML elements while modifying existing ones.",
  },
  // Add more resources as needed
];

const Courses = [
  {
    name: "Coursera - Data Structures and Algorithms Specialization (by UC San Diego & National Research University Higher School of Economics)",
    link: "https://www.coursera.org/specializations/data-structures-algorithms",
    imgURL:
      "https://seekvectorlogo.com/wp-content/uploads/2022/02/coursera-vector-logo-2022-small.png",
  },
  {
    name: "edX - Algorithmic Design and Techniques (by University of Pennsylvania)",
    link: "https://www.edx.org/professional-certificate/algorithmic-design-and-techniques",
    imgURL: "https://www.edx.org/trademarks/edx-logo-registered-white.png",
  },
  {
    name: "Coursera - Algorithmic Toolbox (by UC San Diego & National Research University Higher School of Economics)",
    link: "https://www.coursera.org/specializations/data-structures",
    imgURL:
      "https://seekvectorlogo.com/wp-content/uploads/2022/02/coursera-vector-logo-2022-small.png",
  },
  {
    name: "edX - Data Structures and Software Design (by University of Pennsylvania)",
    link: "https://www.edx.org/professional-certificate/data-structures",
    imgURL: "https://www.edx.org/trademarks/edx-logo-registered-white.png",
  },
  {
    name: "Coursera - Algorithms Specialization (by Stanford University)",
    link: "https://www.coursera.org/specializations/algorithms",
    imgURL:
      "https://seekvectorlogo.com/wp-content/uploads/2022/02/coursera-vector-logo-2022-small.png",
  },
  {
    name: "edX - Data Structures Fundamentals (by Microsoft)",
    link: "https://www.edx.org/professional-certificate/data-structures-fundamentals",
    imgURL: "https://www.edx.org/trademarks/edx-logo-registered-white.png",
  },
];

const Platforms = [
  {
    name: "LeetCode",
    link: "https://leetcode.com/",
    imgURL: "data:image/png;base64,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",
  },
  {
    name: "HackerRank",
    link: "https://www.hackerrank.com/domains/tutorials/10-days-of-javascript",
    imgURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAWlBMVEUNFB4A6mT///8AAAANEh4NBR0A6GQNABoACxgFDhoNABcA7WU5PUMkKTAHm0gFv1UAABOwsbO/wMLr7O0AAAUYHibx8fKLjI8AAAuZmp0Jdjusra68vb/39/dMlznKAAAA/ElEQVR4nO3cOQ7CMBRF0YCBBMI8j/vfJkICiriBSETi65z6Fb5KFRcuCgAAAAAAAAAAAAAAAAAAAICPjRu+Xg3a6STucfK0bDrmq202Su/Gshy2UnYUuNv3mw5Z4vaUjTbVK/Bc90Yt1PNuEqtpdvb+KjVXaZ2vZs+PWM7rXhv1YqJQoUKFChUqVKhQoUKFChUqVKhQoUKFChX+uPCSMtdYhbdN5har8DMKFSpUqFChQoUKFSpUqFDhvxfG/8ePf08T/65NoUKFChUqVKhQoUKFChUqVKhQoUKFChVGLIz/pkL8dzGK+G+bAAAAAAAAAAAAAAAAAAAAAH/tDsvlYejehUEgAAAAAElFTkSuQmCC"
  },
  {
    name: "GeeksforGeeks Practice",
    link: "https://practice.geeksforgeeks.org/",
    imgURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBESEhgUEhEYGRISEhIUHBgVGBwSGBkUGRgZGhgZHBwcIS4lHSwrHxoYKDgnKzA1NUM1GiQ7QDszPy40NTEBDAwMEA8QHhISHjQrJSE0NDQ0MTQxNDQ0NDQ0NDQ0NDQxNDQxMTQxNDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ/Mf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABgcBBAUDAv/EAEUQAAIBAgEGCQkFBgYDAAAAAAABAgMRBAUGEiExQRciUVRhcYGRkwcTMkKhscHS4hRSYnLRIzNTgqLwFkNjkrLhRIPC/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAIDBAEF/8QALREAAgIBAgUDAgYDAAAAAAAAAAECAxExUQQSExQhQaHRMmEzQlJxgfAikbH/2gAMAwEAAhEDEQA/AOcADEeIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfJ0sDkLFVtdOhNxfrNaEexysn2DU6k3oc8Eoo5i4yXpOnHrk2/Yj3fk/xH8en/V+hLpy2LOhZ+kiAJLXzHxsfRUJ/lnZ/1JHFxuS8RQ/e0ZxXK09H/ctRxxa1IyrnHVM1AYMnCAAAAAAAAAABtYHJtev+6pTmuWMXo9sth2qGZGNlrlGEPzSu/wClM6ot6InGuctEyNgly8n+I/j0/wCr9Dyq5i4yPoypy6pNP2o705bEuhZ+kiwOljcg4ujrqYeeivWivOLtcb27TlkWsFbi1qfQABwAAAAAAAAAHVyHkGvi5cRaME7SnJcVdC+8+j3GnkyFGVaCrycaTktJx22+C2XfIXNhKcIQjGmoqmktFR2W3WLK4c2poopVnlvwcjJGbGGwyTUNOf35q7v0LYjvGTDNCWND0oxUVhGQaOIylQp6qlaEXySkk+41/wDEWC2faafedyjjkl6nWPOUU1Zq6e560eOGxtKr+7qQl+WSl7jaBLUi+WMzsNWTlTXmqnLFcVv8Uf0sV9lbJNbCz0asLX9GS1xkuh/Auk1MfgqdeDhVipRe57nuae5rlK5Vp6Ge3h4z8x8MpMHWziyHPB1NF8anO7jPlX3X0o5JmaxqebKLi8MAHUyBkWeLqaMdUI2c5/djyLlb3IJZ8IRi5PCNbJeTK2JnoUoXe9vVGK5W9xYWR8zcPRSlV/a1PxLiJ9Ed/b7Du5OwFLD01TpRSiu9ve297N00xrS1PRq4aMfL8s84QUVZJJLctSPQxc18RjKVP95VhH80lH3lhpNkHI/xDgl/5NPvNnD5Tw9TVTrQk+SMk33HMojzLc3WcTLGbWGxKblDRqP14cWV+ndLtO2jJ1rOp2UVJYZT2Xc36+Ed5cam3ZTitXU16rOQXliYQlBxmk4OLTUtmjvuU1leFCNeaw8nKkpcVv2pPer7GZrIKOh53EUqvyvU0wAVmYAAAAAAEnzUznlhmqVVt0G9T2uDfJ0dHcRgHU2nlEoTcHzIuLKmWqGGpKpOd1JcVRd3PVfi/rsK5yxnTisS2lN06e6MG9n4pLXL3dBxJTk0k5NqKsk3dJXvZcmswSlY2XW8RKenhHyD6BAzCDad02mtjWprtJLkbPHE0Wo1W6tPY9J8dLolv7e8jRg6pNaE4TlB5iXXk7KFLEQVSlLSi+xp701uZulOZvZZng6qmm3CVlOHLHlXSv72lvUasZxUou8ZJST5U9aZphNSR6dN3UX3NTK+TYYmlKlPZJanvjJbJLqKdxmGnRnKnNWnCTi/1XQ9vaXkV/5Rcm2cMRFbf2cuv1H3XXcRtjlZKuKrzHmXp/whmGw86k4wgrznJRS6WXBkTJkMLRjThtWuUt8pva/73WId5OsmqU54iS1U1oR/M/SfYtX8zLDFUcLI4WvEed+oZqY/HU6FN1KstGMd/K9yS3voPepUjGLlJ2jFNtvUkkrtlR5yZbli6rldqlBtQj0fefSyU58qLbrVXH7nSyznniKrcaLdOlsuvTa5XL1ezvIvOTk25NuT2uT0m+tsAzOTep5k5ym8yYPmx9A4QO1kfOfE4ZpKTnT+5NuSt+FvXH3dBY+SMt0MVTc4Stoq8oydnHr6NuvYU8ZjOUb2k1pLRdna8dtnyrUicbHE0VcRKGvlEqztzpddujQk1RTtKS1Of0+8igBFtt5ZVObm8sAA4RAAAABJs3c1PtdJ1XWcOPKKWhpXslrvpLl9h1JvwiUIObxEjJgnnB4udvwvrHB4udvwvrJdKRb21uxAzJO+Dxc7fhfWODxc7fhfWOlIdtbsQQE74PFzt+F9Y4PFzt+F9Y6Uh21uxBDBPODxc7fhfWODxc7fhfWOlIdtbsQQsfye49zoSoyeujLV+SV2u56XsNPg8XO34X1nYzczY+xzlNV9NSho6Oho77p30n095OEJJl1FNkJ5aJIcjOjC+dwdWNrtQc1+aHGXuOuedWClFxeySa7GrFzWTbJZTRx80cIqWDpK2ucPOPrnxvc0uw7h4YaiqcIwT1QjGK6opL4HuF4RyKwkiJ5/4908MqcXaVeWi/yLXLv1LtK0LUzjzb+2yg3W0FTjJW0NK7b1u+kuRHG4PFzt+H9ZTOEpMx302TnlIggJ3weLnb8L6xweLnb8L6yHSkU9tbsQQE74PFzt+F9Y4PFzt+F9Y6Uh21uxBATvg8XO34X1jg8XO34X1jpSHbW7EEBO+Dxc7fhfWODxc7fhfWOlIdtbsQQEozgzR+y0XVVdztKMWtDR1Sdr30nvsRci4teGVThKDxIAA4RBaeYaX2GFvv1r9fnH8LFWFl+TyqpYRxvrhVmu/jfFllX1GnhPxP4JYYMnHzjypLCUfOxpqaU4xknLQsnezvZ77LtNDePJ6MpKKy/Q65kr/hCnzReI/kHCFPmi8V/IR6kdynuat/Z/BYAK/wCEKfNF4r+QcIU+aLxX8hzqx3Hc1b+z+CwAV/whT5ovFfyDhCnzReK/kHVjuO5q39n8FgGCAcIU+aLxH8hJs28rTxdJ1ZUlTjpOMbS09JLa9i33XYySmnoShdCbxF+zO0DBo5Xxyw9CdZq/m4tpXtd7Er9LaJFjeFk3rmTnZEygsTQhWStpp3je+i02mr79aOiE8hPKyjAORnFlSeFo+djSU0pRUk5aFk9Sex77LtIvwhT5ovEfyEXNJ+Sud0IPEn7MsAFf8IU+aLxX8g4Qp80Xiv5CPVjuR7mrf2fwWACv+EKfNF4r+QcIU+aLxX8g6sdx3NW/s/gsAwQDhCnzReK/kHCFPmi8V/IOpHcdzVv7P4LABxM2srzxdJ1JUlCKm4q0tLSsld7Fvduw7ZNPPkujJSWUR/Pa32Gp/wCvv04lUFoZ/VdHBSX35049z0vgVeZ7dTzuL/E/gAArMwJp5OMWlOpRb9OKmuuOp+xruIWbWSsdLD1oVY/5crtcsXqku1NkovDyTqnyTTLsNTKWEjXpTpS2VItX5HufY7M9cNXjUhGcHeE0mmt6Z7M1nr6lHYvDTpTlTmrShJxa+Pbt7TyLUzmzahi1pRejXirKW6S+7L9StMoZPrYeehWg4vdf0ZflexmWcHE8u2l1v7GsACBSAfJ1cj5CxGLa83C0L65y1QXU/W6kEm9DsYuTwjXyXk6eJqxpQWuT1vdGO+T/AL5C4sBhIUacacFaMI6K+LfW9faaWQsh0sJDRhrlK2lJ7ZP4LoOuaYQ5T06KemsvVghHlFyio04UIvjTfnJdEY+jfrf/ABJfjMVClTlUm7QhFtvoKbytj54mtOrLbN6lt0Yr0Y9iFksLG5DirOWHLuTHyc5QVp4eT1r9pHqdlNd+i+0nRSOTcbPD1YVYelCV7cq2NPrVy48n4yFenGpB3hON10cqfSnqOVSysDhbOaPK9UemLw0atOVOavGcXFroasU5ljJs8NWlSktmuMt0ovZJF1HLy3keli6ejUVpK7jJelF9H6Epw5kTvp6i8aop0HVy1m/iMI3pw0obqkVeLXT93qftOQZWmtTzJRcXhn0AAcB94ehKpKMIRblKSikuVnrgMBVxE9ClTc5dGxdLexdpZObGbMMKtObUq7Vm16MVyR/UnGDkW1Uysf23OvknARw9GFKPqRs3yyeuT7W2b5hHnXqxhBzm0owTk29iSV2zVoeqkl4IL5Scbd0qKexSqy7eLD/6IOb2WsoPE151XslK0VyRWqK7vezRMk3lnk2z55tgAESsAAAluZecSoP7PWlalKXEk/Uk9qfQ33MslFEknzcztnhkqda86K2PbOK6OVdBdXZjwzZRxHL/AIyLQPDEUYVIuM4xlF7VJKS7meOAyhRrx0qVRTj0bV0NPWu03C83ZT0I7iMzsDPX5txf4JOK7thrrMbBf6nVp/8ARKwR5I7EHTW/yo4WEzXwVLXGgm1vnefslqO1FJKy2LVZH2YZJJLQlGKj4SMnlVnGMXKTSildt6kktrZz8rZcw+FjepPjboR40n2but6iuc4c5a2Lej6FFPVBPb0ze/q2EJTUSu2+MP32/uh753ZxvFT83TbVCD6tOS9Z9HIu3qjgBmbbeWeZOTk+ZgkGamcTwk9Cd3Qm+MtrhL7y+KI+Am08oRm4PmReNGrGcVKDTjJJpp3TTPYqHIGcVbCOy41JvXBvV0uL9V+wsfJGXsPil+znae+EuLNdm/rRpjNSPTqvjP8Ac6rV9pxcXmxgqrvKhFN74Xh/x1HbMksJ6lrin4ZFHmLgv9Rfzf8ARsUMzcDB3dNy/PJyXdsJGDnJHYgqa1+VHhhsPTpx0acFGK3RSivYe5hmpjcdSoR06tRQit739CW19hInnCNtlc56ZxqrfD0ZXpp8eS2Sa9VdCe3pPHOLO+ddOnQ0oUnqcnqnNcmr0V7fcRQossz4Rh4jiMrlj/syACkxgAAAAAAAAH3h684S0qc5Qkt8G4v2Ejwee+Mhqno1F+KOjLvjb3EZB1Sa0JRslH6WTyl5Qo+vhn/LNP3o935QKH8Cpf8Al/UrwEupIt7m3cnNfyhP/Lw2vllO/sS+JxMfndjaqt5xU4vdTWi/9zvLuZwQcc5P1IyvslqxJtu7bbettu7faACJUAAAAAADCbTunZrY1qaMgA7uAztxtFW85pxW6otL+r0u9nbw/lBl6+GTfLCdvY18SDgkpyXqWxvsjoyw15QaG+hU74v4njV8oUfUwz/mml7kyBA71JEu5s3JPjc+cXUVqehTXLFaUu+V17COYjETqS0qk5Tk98m5P27DzBFyb1KpTlL6mAAcIgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/9k="
  },
  {
    name: "Codechief",
    link: "https://www.codechef.com/",
    imgURL: "https://w7.pngwing.com/pngs/20/941/png-transparent-codechef-button-icon-thumbnail.png"
  },
];
const Dsa = () => {
  return (
    <>
      <Section>
        <Container>
          {/* --------------------------------MAIN HEADING------------------------------------------------------ */}
          <div className=" px-0 py-10 ">
            <h1 className="text-3xl text-center font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Data Structure and Algorithms
            </h1>
            {/* <************************************MAIN SECTION*******************************************> */}
            <section className="text-gray-600 body-font">
              <div className="px-5 py-24 mx-auto flex flex-wrap">
                <div className="flex flex-wrap w-full">
                  <div className="lg:w-3/5 md:w-1/2 md:pr-10 md:py-6">
                    <div className="flex relative pb-12">
                      <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                      </div>
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-700 inline-flex items-center justify-center text-white relative z-10">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="md:w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
                        </svg>
                      </div>
                      <div className="flex-grow pl-4">
                        <h2 className="font-bold title-font capitalize text-xl text-white mb-1 tracking-wider">
                          Why should I learn DSA?
                        </h2>
                        <p className=" text-white text-justify">
                          Learning data structures and algorithms (DSA) is
                          crucial for any aspiring programmer or software
                          engineer. DSA provides the foundation for solving
                          complex problems efficiently, enhancing coding skills,
                          and building robust, optimized software. It's
                          essential for acing technical interviews, developing
                          high-quality software, and excelling in the field of
                          computer science and software engineering.
                        </p>
                      </div>
                    </div>
                    <div className="flex relative pb-12">
                      <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                      </div>
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-700 inline-flex items-center justify-center text-white relative z-10">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 18v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-1m18-2H3a2 2 0 00-2 2v4a2 2 0 002 2h18a2 2 0 002-2v-4a2 2 0 00-2-2zM6 12v-2a2 2 0 012-2h8a2 2 0 012 2v2"></path>
                        </svg>
                      </div>
                      <div className="flex-grow pl-4">
                        <h2 className="font-bold title-font capitalize text-xl text-white mb-1 tracking-wider">
                          Choose Your Preferred Programming Language
                        </h2>
                        <p className="leading-relaxed text-white text-justify">
                          Select a language to implement and practice your data
                          structures and algorithms. Common choices include
                          Python, Java, C++, or JavaScript. The choice of
                          language depends on your goals and preferences.
                        </p>
                      </div>
                    </div>
                    <div className="flex relative pb-12">
                      <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                      </div>
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-700 inline-flex items-center justify-center text-white relative z-10">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"></path>
                        </svg>
                      </div>
                      <div className="flex-grow pl-4">
                        <h2 className="font-bold title-font capitalize text-xl text-white mb-1 tracking-wider">
                          Learn Basics
                        </h2>
                        <p className="leading-relaxed text-white text-justify">
                          Learn concepts like arrays, linked lists, stacks,
                          queues, recursion, sorting algorithms, searching
                          algorithms, hashing, time and space complexity
                          analysis, graphs, trees, dynamic programming, and
                          greedy algorithms. Understanding these fundamentals is
                          essential for effective problem-solving and efficient
                          software development.
                        </p>
                      </div>
                    </div>

                    <div className="flex relative">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-700 inline-flex items-center justify-center text-white relative z-10">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                          <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                      </div>
                      <div className="flex-grow pl-4">
                        <h2 className="font-bold title-font text-xl text-white mb-1 tracking-wider">
                          Practice, Practice, Practice
                        </h2>
                        <p className="leading-relaxed text-white text-justify">
                          Practicing DSA hones problem-solving skills, improves
                          algorithmic thinking, and enhances coding efficiency.
                          It's essential for excelling in technical interviews,
                          tackling real-world programming challenges, and
                          building high-performance software systems, making it
                          a vital skill for any programmer or software engineer.
                        </p>
                      </div>
                    </div>
                  </div>
                  <img
                    className="lg:w-2/5 md:w-1/2 object-contain object-center rounded-lg md:mt-0 mt-12"
                    src="https://cdn3d.iconscout.com/3d/premium/thumb/programming-6319119-5203659.png"
                    alt="step"
                  />
                </div>
              </div>
            </section>
            <section className="flex flex-col gap-5 ">
              <div>
                <h1 className="font-bold title-font text-2xl tracking-wider  mb-2 ">
                  Choose a Language
                </h1>
                <div className=" flex flex-wrap -m-2">
                  {Languages.map((Language) => {
                    return (
                      <div
                        className="p-3 lg:w-1/3 md:w-1/2 w-full"
                        key={Language.name}
                      >
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                          <img
                            alt="team"
                            className="w-16 h-16 object-contain object-center flex-shrink-0 rounded-full mr-4"
                            src={Language.imgURL}
                          />
                          <div className="flex-grow">
                            <Link to={Language.link}>
                              <h2 className="text-white title-font font-bold underline text-xl">
                                {Language.name}
                              </h2>
                            </Link>
                            <p className="text-white">{Language.des}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div>
                <h1 className="font-bold title-font text-2xl text-whitetracking-wider  m-3 ">
                  Courses
                </h1>
                <div className="flex flex-wrap -m-2">
                  {Courses.map((Course) => {
                    return (
                      <div
                        className="p-3 lg:w-1/3 md:w-1/2 w-full"
                        key={Course.name}
                      >
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                          <img
                            alt="team"
                            className="w-16 h-16 object-contain object-center flex-shrink-0 rounded-full mr-4"
                            src={Course.imgURL}
                          />
                          <div className="flex-grow">
                            <Link to={Course.link}>
                              <h2 className="text-white title-font font-bold underline text-xl">
                                {Course.name}
                              </h2>
                            </Link>
                            <p className="text-white">{Course.des}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div>
                <h1 className="font-bold title-font text-2xl text-whitetracking-wider  m-3 ">
                 Platforms to Practice
                </h1>
                <div className="flex flex-wrap -m-2">
                  {Platforms.map((Platform) => {
                    return (
                      <div
                        className="p-3 lg:w-1/3 md:w-1/2 w-full"
                        key={Platform.name}
                      >
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                          <img
                            alt="team"
                            className="w-16 h-16 object-contain object-center flex-shrink-0 rounded-full mr-4"
                            src={Platform.imgURL}
                          />
                          <div className="flex-grow">
                            <Link to={Platform.link}>
                              <h2 className="text-white title-font font-bold underline text-xl">
                                {Platform.name}
                              </h2>
                            </Link>
                            <p className="text-white">{Platform.des}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default Dsa;
