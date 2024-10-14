import React from "react";
import java from "../../public/java.png";
import python from "../../public/python.webp";
import django from "../../public/django-logo.png";
import mongoDB from "../../public/mongodb.jpg";
import Go from "../../public/Go.png";
import sqlite from "../../public/Sqlite.png";
import djangorestFramework from "../../public/djangorestframework.png";


function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: python,
      name: "Python",
      sourceCode: "https://github.com/Mahesh6221/simple_primes",
    },
    {
      id: 2,
      logo: django,
      name: "Django",
      sourceCode: "https://github.com/Mahesh6221/myapp",
    },
    {
      id: 3,
      logo: mongoDB,
      name: "MongoDB",
      sourceCode: "https://github.com/Mahesh6221/Golang-Projects",
    },
    {
      id: 4,
      logo: Go,
      name: "Golang",
      sourceCode: "https://github.com/Mahesh6221/Golang-Projects",
    },
    {
      id: 5,
      logo: sqlite,
      name: "Sqlite",
      sourceCode: "https://github.com/Mahesh6221/companyapi",
    },
    {
      id: 6,
      logo: djangorestFramework,
      name: "DjangoRestFramework",
      sourceCode: "https://github.com/Mahesh6221/schoolapi",
    },
  ];

  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
        <span className="underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 my-5">
          {cardItem.map(({ id, logo, name, sourceCode }) => (
            <div
              className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                alt={name}
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="px-6 py-4 space-x-3 justify-around">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
                  Video
                </button>
                <a 
                  href={sourceCode} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                    Source code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
