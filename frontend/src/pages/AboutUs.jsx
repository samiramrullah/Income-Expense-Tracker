import React from 'react'

const AboutUs = () => {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 mt-2">
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4">About Me</h1>
          <p className="font-normal text-base leading-6 text-gray-600 dark:text-white">
          I'm Samir Alam, passionate about software development and technology, with a strong foundation in web development, machine learning, and app development. Let's turn ideas into reality through code and innovation.
          </p>
        </div>
        <div className="w-full lg:w-8/12">
          <img className="w-full h-full" src="https://i.ibb.co/FhgPJt8/Rectangle-116.png" alt="A group of People" />
        </div>
      </div>

      <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4">My Story</h1>
          <p className="font-normal text-base leading-6 text-gray-600 dark:text-white">
            With a background in full stack development and security analysis, I have a comprehensive understanding of the entire software development lifecycle. I enjoy building robust applications, exploring innovative technologies, and ensuring secure solutions. My journey in tech has been driven by a curiosity to learn and a passion for creating impactful software.
          </p>
        </div>
        <div className="w-full lg:w-8/12 lg:pt-8">
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img className="md:block hidden" src="https://www.nexel.in/media/blog/banner/web_development_Z62jy4k.jpg" alt="Alexa featured Image" />
              <p className="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">Web Development</p>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img className="md:block hidden" src="https://blog.daway.in/wp-content/uploads/2024/01/1_cG6U1qstYDijh9bPL42e-Q.jpg" alt="Olivia featured Image" />
              <p className="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">Machine Learning</p>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img className="md:block hidden" src="https://cdn.prod.website-files.com/6410ebf8e483b5bb2c86eb27/6410ebf8e483b5758186fbd8_ABM%20college%20mobile%20app%20dev%20main.jpg" alt="Liam featued Image" />
              <p className="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">App Development</p>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img className="md:block hidden" src="https://res.cloudinary.com/highereducation/images/f_auto,q_auto/v1662131677/ComputerScience.org/cybersecurity_degrees_6720dc664/cybersecurity_degrees_6720dc664.jpg?_i=AA" alt="Elijah featured image" />
              <p className="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">Security Analysis</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
