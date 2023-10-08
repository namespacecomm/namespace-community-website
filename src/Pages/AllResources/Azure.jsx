import React from "react";


const serviceData = [
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdlVnxdkbK9b-sjv85KfT6WzdwcKfgBTCCcB8kfjiaI_mvkT1CLZyT8b3K0iBC6LMy8-A&usqp=CAU",
    description:
      "Provision Windows and Linux VMs in seconds",
  },
  
  {
    image: "https://ehnkw9yknjp.exactdn.com/app/themes/coginiti-sage/resources/svg/Logo=Azure%20SQL%20Server,%20Color=Yes.svg",
    description:
      "Migrate, modernize, and innovate on the modern SQL family of cloud databases",
  },
  {
    image:
      "https://i0.wp.com/build5nines.com/wp-content/uploads/2019/03/Azure_CosmosDB_Featured_Image.png?fit=900%2C504&ssl=1",
    description:
      "Build or modernize scalable, high-performance apps",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMVby7EXn4R8kim6dhVXot9eA73kGFR1w93KOSUIWoWrO0vJMlwocMkJTffJimnmwfZ7U&usqp=CAU",
    description:
      "Deploy and scale containers on managed Kubernetes",
  },
  {
    image:
      "https://cdn.analyticsvidhya.com/wp-content/uploads/2020/12/77489Microsoft-Cognitive-Services.png",
    description:
      "Add cognitive capabilities to apps with APIs and AI services",
  },
  {
    image:
      "data:image/png;base64,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",
    description:
      "Quickly create powerful cloud apps for web and mobile",
  },
  {
    image:
      "https://azurebrains.com/wp-content/uploads/2020/02/playfab-og-image.png",
    description:
      "Everything you need to build and operate a live game on one platform",
  },
  {
    image: "https://www.reddragonitsolution.com/____impro/1/onewebmedia/AVD.png?etag=%224539-627a3ca0%22&sourceContentType=image%2Fpng",
    description:
      "Enable a secure, remote desktop experience from anywhere",
  },
  {
    image:
      "https://miro.medium.com/v2/resize:fit:1200/0*ldthmt0_rXlefMA9.png",
    description:
      "Execute event-driven serverless code functions with an end-to-end development experience",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM5VFBRZV_00PDRAlq8xP8AwTLfaE4IdNOWgdejzQFZ4NutIHTcS-EGgYNMZOyTYBtx6w&usqp=CAU",
    description:
      "Jump in and explore a diverse selection of today's quantum hardware, software, and solutions",
  },
  {
    image:
      "https://wpezblog.blob.core.windows.net/blog-media/2022/10/icon-azure_arc-320x180.png",
    description:
      "Secure, develop, and operate infrastructure, apps and Azure services anywhere",
  },
  
];

const Azure = () => {
  return (
    <>
      <br />
      <br />
      <div className="mt-16">
        <h1 className="text-3xl text-center mb-8 mt-10">Explore some of the most popular Microsoft Azure products</h1>
        <div className="flex flex-wrap justify-center">
          {serviceData.map((service, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-4">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden h-full">
                <div className="aspect-ratio-16/9">
                  <img
                    src={service.image}
                    alt=""
                    className=" w-full h-150"
                  />
                </div>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    Services {index + 1}
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



export default Azure;
