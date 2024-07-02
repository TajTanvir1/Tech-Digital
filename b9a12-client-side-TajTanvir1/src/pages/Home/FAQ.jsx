import { Link } from "react-router-dom";

const FAQ = () => {
  return (
    <div data-aos="fade-right" data-aos-duration="2000" className="mx-1 md:mx-4 my-6 md:my-10">
      <section className="dark:bg-[#ffebcc1d] border border-purple-300 rounded-lg dark:text-gray-800">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
        <h2 className="text-4xl font-bold text-center text-blue-900 underline mt-6 lg:mt-10 mb-4 lg:mb-8  dark-color animate__animated animate__heartBeat animate__slow animate__delay-2s animate__repeat-2">
        Frequently Asked Questions
      </h2>
          <p className="mt-4 mb-8 dark:text-gray-600 text-center md:w-[60%] mx-auto">
            Here we providing some (FAQ) Frequently Asked Questions with
            answers. Check it now, these can help you to know your basic
            Questions.
          </p>
          <div className="space-y-4">
            {/* 1st */}
            <details
              className="w-full border border-purple-200 rounded-lg"
              open=""
            >
              <summary className="px-4 text-lg font-semibold py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                <span className="font-bold">1.</span> What is Tech Digital?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 lg:text-lg -mt-4 dark:text-gray-600">
                <span className="font-semibold">Answer:</span> Tech Digital is a leading IT services company that offers comprehensive technology solutions to businesses. We specialize in network management, cybersecurity, cloud services, software development, and IT consulting. Our expert team works closely with clients to understand their unique needs, providing tailored solutions to enhance efficiency, security, and productivity. With a focus on innovation and customer satisfaction, Tech Digital ensures your business stays ahead in the rapidly evolving tech landscape.
              </p>
            </details>
            {/* 2nd */}
            <details
              className="w-full border border-purple-200 rounded-lg"
              open=""
            >
              <summary className="px-4 text-lg font-semibold py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                <span className="font-bold">2.</span> How does Tech Digital
                work?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 lg:text-lg -mt-4 dark:text-gray-600">
                <span className="font-semibold">Answer:</span> Tech Digital begins with a thorough consultation to understand your business needs. We conduct an assessment of your current IT infrastructure, followed by strategic planning to recommend the best solutions. Once the proposal is approved, our expert team implements the necessary IT services, including setup, configuration, and optimization. We ensure seamless integration and provide ongoing support and maintenance to keep your systems running smoothly. Our client-centric approach ensures tailored solutions and continuous improvement to help your business achieve its IT goals efficiently and securely.
              </p>
            </details>
            {/* 3rd */}
            <details
              className="w-full border border-purple-200 rounded-lg"
              open=""
            >
              <summary className="px-4 text-lg font-semibold py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                <span className="font-bold">3.</span> Can you develop custom software solutions?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 lg:text-lg -mt-4 dark:text-gray-600">
                <span className="font-semibold">Answer:</span> Yes, we specialize in developing custom software solutions tailored to meet your specific business needs. Whether you need a new application, an integration with existing systems, or enhancements to your current software, our team can help.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
