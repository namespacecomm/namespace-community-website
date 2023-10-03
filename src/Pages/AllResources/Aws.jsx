import React from "react";
const serviceData = [
  {
    image: "https://cdn-images-1.medium.com/max/360/0*uGnkedWzlM-J1bYC",
    description:
      "Amazon Elastic Compute Cloud (Amazon EC2) provides scalable computing capacity in the Amazon Web Services (AWS) cloud.",
  },
  {
    image: "https://awsmag.com/content/images/2021/06/Amazon-S3cover-1.png",
    description:
      "Amazon Simple Storage Service (Amazon S3) is an object storage service that offers industry-leading scalability, data availability, security, and performance.",
  },
  {
    image: "https://cdn.holistics.io/landing/databases/amazon-rds.png",
    description:
      "Amazon Relational Database Service (Amazon RDS) makes it easy to set up, operate, and scale a relational database in the cloud.",
  },
  {
    image:
      "https://miro.medium.com/v2/resize:fit:506/1*VKfs2PGyMm5FZfJD72kYCw.png",
    description:
      "AWS Lambda lets you run code without provisioning or managing servers. You pay only for the compute time you consume.",
  },
  {
    image:
      "https://i0.wp.com/foxutech.com/wp-content/uploads/2017/09/What-is-IAM-in-AWS-and-How-to-Create-user-in-IAM.png?fit=640%2C597&ssl=1",
    description:
      "AWS Identity and Access Management (IAM) enables you to securely control access to AWS services and resources for your users.",
  },
  {
    image:
      "https://miro.medium.com/v2/resize:fit:2570/1*YcNHxdrbPlV-lWjN_0Ek3g.png",
    description:
      "Amazon Virtual Private Cloud (Amazon VPC) lets you provision a logically isolated section of the AWS Cloud where you can launch AWS resources into a virtual network.",
  },
];

const Aws = () => {
  return (
    <>
      <br />
      <br />
      <div className="mt-16">
        <h1 className="text-3xl text-center mb-8 mt-10">Services of AWS</h1>
        <div className="flex flex-wrap justify-center">
          {serviceData.map((service, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-4">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden h-full">
                <div className="aspect-ratio-16/9">
                  <img
                    src={service.image}
                    alt=""
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    Service {index + 1}
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
    </>
  );
};

export default Aws;
