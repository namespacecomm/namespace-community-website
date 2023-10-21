import React from "react";
import { Link } from "react-router-dom";

const serviceData = [
  {
    image: "https://miro.medium.com/max/1300/1*46UfaJiAcTnlC85L40T-Nw.png",
    description:
      "Secure and customizable compute service that lets you create and run virtual machines on Google’s infrastructure.",
  },
  {
    image: "https://i.ytimg.com/vi/_jJ-0ltqoC0/hqdefault.jpg",
    description:
      "Cloud Storage is a managed service for storing unstructured data. Store any amount of data and retrieve it as often as you like.",
  },
  {
    image: "https://cdn-ssl-devio-img.classmethod.jp/wp-content/uploads/2020/03/gcp-google-bigquery-logo_1200x630-960x504.png",
    description:
      "BigQuery is a serverless and cost-effective enterprise data warehouse that works across clouds and scales with your data. Use built-in ML/AI and BI for insights at scale. ",
  },
  {
    image:
      "https://cldcvr.com/img/gcp-case-study-cloudrun.png",
    description:
      "Build and deploy scalable containerized apps written in any language (including Go, Python, Java, Node.js, .NET, and Ruby) on a fully managed platform.",
  },
  {
    image:
      "https://www.pngkit.com/png/detail/442-4428479_google-kubernetesengine-google-gke-logo.png",
    description:
      "Put your containers on autopilot and securely run your enterprise workloads at scale—with little to no K8s expertise required.",
  },
  {
    image:
      "https://th.bing.com/th/id/OIP.fl_qZocZWgRLODhuYzhnogAAAA?pid=ImgDet&rs=1",
    description:
      "Vertex AI offers everything you need to build and use generative AI—from AI solutions, to Search and Conversation, to 100+ foundation models, to a unified AI platform.",
  },
  {
    image:"https://mma.prnewswire.com/media/1192823/Looker_Logo_Horizontal_FullColor_Logo.jpg?p=facebook",
    description:"Chat with your business data with Looker. More than just a modern business intelligence platform, you can turn to Looker for self-service or governed BI, build your own custom applications with trusted metrics, or even bring Looker modeling to your existing BI environment.",
  },
  {
    image:"https://nordicapis.com/wp-content/uploads/Apigee_TransparentPrimaryLogo-4.png",
    description:"Manage APIs with unmatched scale, security, and performance. Google Cloud’s native API management tool to build, manage, and secure APIs—for any use case, environment, or scale.",
  },
  {
    image:"https://www.cloudsavvyit.com/thumbcache/0/0/2c725b756b394ead5c1ff0402f0f7973/p/uploads/2020/04/ffd5f905.png",
    description:"Fully managed relational database service for MySQL, PostgreSQL, and SQL Server. More than 95% of Google Cloud's top 100 customers use Cloud SQL to run their businesses.",
  },
  {
    image:"https://th.bing.com/th/id/OIP.vCTk6ZPjvKOCKLQ3_gdIrQHaDD?pid=ImgDet&rs=1",
    description:"Cloud SDK: Libraries and tools for interacting with Google Cloud products and services.",
  },
  {
    image:"https://www.bdtask.com/blog/assets/plugins/ckfinder/core/connector/php/uploads/images/google-cloud-cdn.jpg",
    description:"Google's content delivery networks—Cloud CDN and Media CDN—scale to bring content closer to a global audience.",
  },
  {
    image:"https://uniqueideas.com/wp-content/uploads/2018/11/google-cloud-functions.png",
    description:"Run your code in the cloud with no servers or containers to manage with our scalable, pay-as-you-go functions as a service (FaaS) product.",
  },
];

export const Gcp = () => {
  return (
    <>
      <br />
      <br />
      <div className="mt-16">
        <h1 className="text-3xl text-center mb-8 mt-10">Services of GCP</h1>
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
                    {index +1}.
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
    title: "Google Cloud developer cheat sheet",
    image: "https://cloud.google.com/static/docs/get-started/images/google-cloud-cheat-sheet.png",
    type: "Cheat Sheet",
    link: "https://googlecloudcheatsheet.withgoogle.com/",
  },
  {
    title: "Getting started with Google cloud platform",
    image:
      "https://technofaq.org/wp-content/uploads/2020/10/GCP.png",
    type: "Documentation",
    link: "https://cloud.google.com/docs",
  },
  {
    title: "Cloud architectures",
    image:
      "https://cdn-images-1.medium.com/max/1600/1*Z7MnfVGt8ahH2uexR_b69Q.png",
    type: "Reference architectures",
    link: "https://cloud.google.com/architecture",
  },

  {
    title: "Google Cloud Courses",
    image:
      "https://solutionsreview.com/cloud-platforms/files/2020/09/oie_252213553DHiqLHI.jpg",
    type: "Course",
    link: "https://www.coursera.org/googlecloud",
  },
  {
    title: "Learn from GCP experts",
    image:
      "https://logodownload.org/wp-content/uploads/2021/06/google-cloud-logo-1.png",
    type: "Youtube",
    link: "https://www.youtube.com/@googlecloudtech",
  },
  {
    title: "Google Cloud Digital Leader Certification Study Course",
    image:
      "https://cdn.hackr.io/uploads/posts/large/1583474770bPwWsqDEqp.png",
    type: "Course",
    link: "https://www.freecodecamp.org/news/google-cloud-digital-leader-course/",
  },
  {
    title: "Google Cloud Skills Boost",
    image:
      "https://cdn.qwiklabs.com/Oj86F9WOage40XrbHU5S6eTZa4REdyo7iGcobbzetfg%3D",
    type: "Hands on exercises",
    link: "https://googlecloud.qwiklabs.com/discovery",
  },
  {
    title: "Google Cloud Certifications",
    image:
      "https://i1.wp.com/www.makeoverarena.com/wp-content/uploads/2021/01/Google-Cloud-Certification.jpg?resize=768%2C513&ssl=1",
    type: "Certifications",
    link: "https://cloud.google.com/learn/certification",
  },
    
];


export default Gcp;
