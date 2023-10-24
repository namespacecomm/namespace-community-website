import React from "react";
import { Link } from "react-router-dom";

const serviceData = [
  {
    image: "https://www.digitalocean.com/_next/static/media/cloudways-logo.4b393732.svg",
    title: "Managed hosting",
    description:
      "Cloudways is a fully-managed cloud hosting solution for digital agencies & ecommerce businesses. Built to deliver performance without complexity.",
  },
  {
    image: "https://www.digitalocean.com/_next/static/media/droplets-icon.b6e4bb89.svg",
    title: "Virtual machines",
    description:
      "DigitalOcean Droplets are simple, scalable virtual machines for all your web hosting and VPS hosting needs.",
  },
  {
    image: "https://www.digitalocean.com/_next/static/media/kubernetes-icon.bab9c67d.svg",
    title: "Kubernetes",
    description:
      "DigitalOcean Kubernetes is a managed solution that is easy to scale and includes a 99.5% SLA for HA and free control plane.",
  },
  {
    image:
      "https://www.digitalocean.com/_next/static/media/app-platform-icon.699988d5.svg",
      title: "App Platform",
      description:
      "Build and deploy apps without managing infrastructure with DigitalOcean’s Platform as a Service and serverless solutions.",
  },
  {
    image:
      "https://www.digitalocean.com/_next/static/media/managed-databases-icon.34e236c6.svg",
      title: "Managed databases",
      description:
      "Managed MongoDB, Kafka, MySQL, PostgreSQL, and Managed Databases for Redis®* let you focus on your apps while we update and scale your databases.",
  },
  {
    image:
      "https://www.digitalocean.com/_next/static/media/spaces-storage-icon.847a812f.svg",
      title: "Storage",
      description:
      "DigitalOcean Spaces object storage and Volumes block storage are business-ready storage solutions.",
  },
];

export const DigitalOcean = () => {
  return (
    <>
      <br />
      <br />
      <div className="mt-16">
        <h1 className="text-3xl text-center mb-8 mt-10">Services of Digital Ocean</h1>
        <div className="flex flex-wrap justify-center">
          {serviceData.map((service, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-4">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden h-full">
                <div className="aspect-ratio-16/9 flex justify-center">
                  <img
                    src={service.image}
                    alt=""
                    className="object-cover rounded-lg w-auto h-[120px]"
                    // style={{height: 100}}
                  />
                </div>
                <div className="px-6 py-4">
                  <div className="font-bold text-gray-500 text-xl mb-2">
                    {index +1}. {service.title}
                  </div>
                  <p className="text-gray-700 text-base">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <section className="text-white body-font">
                  <div className=" px-0 py-14 mx-auto">
                    <div className="flex justify-center text-3xl w-full mb-2">
                        Resources:
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
    </>
  );
};
const resources = [
  {
    title: "Digital Ocean tutorial",
    image: "https://urbankenyans.com/wp-content/uploads/2018/01/digitalocean-logo.jpg",
    type: "Tutorial",
    link: "https://www.digitalocean.com/community/tutorials",
  },
  {
    title: "Digital Ocean Community Answers",
    image:
      "https://www.influxdata.com/wp-content/uploads/DigitalOcean-logo.jpg",
    type: "Questions and Answer",
    link: "https://www.digitalocean.com/community/questions",
  },
  {
    title: "Learning Path",
    image:
      "https://coupontree.co/wp-content/uploads/2018/10/DigitalOcean-Custom-Images.jpg",
    type: "Guides",
    link: "https://www.digitalocean.com/community/learning-paths",
  },

  {
    title: "Digital Ocean Courses",
    image:
      "https://1.bp.blogspot.com/-RmWKmonya7A/XzFf91T8ZEI/AAAAAAAAJME/sP6rtNp66D0RXEpd8ohJK5Ps9FS9kfFkQCLcBGAsYHQ/s2100/udemy-logo-1.png",
    type: "Course",
    link: "https://www.udemy.com/course/digitalocean/",
  },
  {
    title: "Learn from experts",
    image:
      "https://www.newcoupons.info/wp-content/uploads/2019/09/digitaloean-new-droplets.png",
    type: "Youtube",
    link: "https://www.youtube.com/watch?v=g1-nQ9pvbxc",
  },
  {
    title: "Official docs",
    image:
      "https://th.bing.com/th/id/OIP.EZ-VrdJIBlTOQICaJq0MIgHaDq?pid=ImgDet&rs=1",
    type: "Documentation",
    link: "https://docs.digitalocean.com/",
  },    
];



