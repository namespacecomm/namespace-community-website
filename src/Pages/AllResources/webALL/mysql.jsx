import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../../../components/Navbar/Navbar";
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
  @media only screen and (max-width: 768px) {
    width: 90vw;
    overflow-y: scroll;
    flex-direction: column;

    justify-content: space-between;
  }
`;

export const MYSQL = () => {
  const [mysqltopicsChecked, setMysqlTopicsChecked] = useState({
    sqldatatypes: false,
    sqlcommands: false,
    sqlconstraints: false,
    sqloperators: false,
    sqlclauses: false,
    sqltransactions: false,
    sqlstatements: false,
    sqlgroupingdata: false,
    sqlfunctions: false,
    sqljoins: false,
    sqltriggers: false,
    dbconnection: false,
    sqlintegration: false,
  });

  const handleCheckboxChange = (topic) => {
    setMysqlTopicsChecked({
      ...mysqltopicsChecked,
      [topic]: !mysqltopicsChecked[topic],
    });
  };

  useEffect(() => {
    localStorage.setItem(
      "mysqltopicsChecked",
      JSON.stringify(mysqltopicsChecked)
    );
  }, [mysqltopicsChecked]);

  useEffect(() => {
    const storedTopicsChecked = localStorage.getItem("mysqltopicsChecked");
    if (storedTopicsChecked) {
      setMysqlTopicsChecked(JSON.parse(storedTopicsChecked));
    }
  }, []);

  return (
    <>
      <Section>
        <Navbar />
        <Container>
          <section className="text-white body-font">
            <div className="mx-auto flex px-2 mt-8 mb-4 items-center justify-center flex-col">
              <img
                className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-contain object-center rounded"
                alt="css"
                src="https://img.freepik.com/free-vector/gradient-sql-illustration_23-2149247491.jpg?size=626&ext=jpg&ga=GA1.1.613098439.1696317950&semt=sph"
              />
              <div className="text-center lg:w-full w-full">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                  MySQL
                </h1>
                <p className="mb-8 leading-relaxed text-justify">
                  MySQL is an open-source relational database management system
                  (RDBMS). Its name is a combination of "My", the name of
                  co-founder Michael Widenius's daughter My, and "SQL", the
                  acronym for Structured Query Language. A relational database
                  organizes data into one or more data tables in which data may
                  be related to each other; these relations help structure the
                  data. SQL is a language that programmers use to create, modify
                  and extract data from the relational database, as well as
                  control user access to the database. In addition to relational
                  databases and SQL, an RDBMS like MySQL works with an operating
                  system to implement a relational database in a computer's
                  storage system, manages users, allows for network access and
                  facilitates testing database integrity and creation of
                  backups. MySQL is free and open-source software under the
                  terms of the GNU General Public License, and is also available
                  under a variety of proprietary licenses. MySQL was owned and
                  sponsored by the Swedish company MySQL AB, which was bought by
                  Sun Microsystems (now Oracle Corporation). In 2010, when
                  Oracle acquired Sun, Widenius forked the open-source MySQL
                  project to create MariaDB.
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
                          checked={mysqltopicsChecked[front.storage]}
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
    title: "W3Schools - MySQL Introduction",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/W3Schools_logo.svg/1088px-W3Schools_logo.svg.png",
    type: "Documentation",
    link: "https://www.w3schools.com/mysql/mysql_intro.asp",
  },
  {
    title: "MySQL Tutorial for Beginners[Full Course]",
    image:
      "https://i.ytimg.com/vi/7S_tz1z_5bA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDQRzwgDiYUwdEuDvClYax7UBqlWA",
    type: "Youtube video",
    link: "https://www.youtube.com/watch?v=7S_tz1z_5bA",
  },
  {
    title: "MySQL - The Basic // Learn SQL in 23 Easy Steps",
    image:
      "https://i.ytimg.com/vi/Cz3WcZLRaWc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDTQ6otNeU35mBTSy4SSmblwzkgzg",
    type: "Youtube video",
    link: "https://www.youtube.com/watch?v=Cz3WcZLRaWc",
  },
  {
    title: "MySQL Glossary",
    image:
      "https://pbs.twimg.com/profile_images/1511434207079407618/AwzUxnVf_400x400.png",
    type: "Documentation",
    link: "https://developer.mozilla.org/en-US/docs/Glossary/SQL",
  },
  {
    title: "SQL Explained in 100 Seconds",
    image:
      "https://i.ytimg.com/vi/zsjvFFKOm3c/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCd3M5-uv-3QGFoVgHpg18Cf1DbNg",
    type: "Youtube video",
    link: "https://www.youtube.com/watch?v=zsjvFFKOm3c",
  },
  {
    title: "The SQL Handbook",
    image: "https://flaviocopes.com/bootcamp.jpg",
    type: "Documentation",
    link: "https://flaviocopes.com/book/sql/",
  },
  {
    title: "Learn SQL/MySQL Basics",
    image: "https://img-c.udemycdn.com/course/240x135/4538848_d8a6_3.jpg",
    type: "Course",
    link: "https://www.udemy.com/course/learn-sqlmysql-database-basics-for-free/",
  },
  {
    title: "Beginner PHP and MySQL Tutorial",
    image: "https://img-b.udemycdn.com/course/240x135/9711_452b_8.jpg",
    type: "Course",
    link: "https://www.udemy.com/course/php-mysql-tutorial/",
  },
  {
    title: "MySQL Crash Course",
    image: "https://img-c.udemycdn.com/course/480x270/5363590_70a5_5.jpg",
    type: "Course",
    link: "https://www.udemy.com/course/mysql-course/",
  },
];

const topics = [
  { title: "SQL Data Types", storage: "sqldatatypes" },
  { title: "SQL Commands", storage: "sqlcommands" },
  { title: "SQL Constraints", storage: "sqlconstraints" },
  { title: "SQL Operators", storage: "sqloperators" },
  { title: "Clauses", storage: "sqlclauses" },
  { title: "Transactions", storage: "sqltransactions" },
  { title: "SQL Statements", storage: "sqlstatements" },
  { title: "Grouping Data", storage: "sqlgroupingdata" },
  { title: "SQL Functions", storage: "sqlfunctions" },
  { title: "SQL Joins", storage: "sqljoins" },
  { title: "Triggers", storage: "sqltriggers" },
  { title: "Database Connection", storage: "dbconnection" },
  { title: "SQL Integration", storage: "sqlintegration" },
];
