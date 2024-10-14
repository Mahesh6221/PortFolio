import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p>
          Hello, I'm Mahesh, a passionate Backend Developer with expertise in Django. With a solid background in IT, I strive to create efficient and scalable web applications that deliver impactful solutions and enhance user experiences.
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Education & Training
        </h1>
        <span>
          Bachelor of Engineering, Shri Shivaji Institute Of Engineering and Management Studies, Parbhani, 2021
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Skills & Expertise
        </h1>
        <span>
          Proficient in Python, Django, SqliteDatabase, Go, Mongodb, HTML, CSS, JavaScript. Experienced with MongoDB, Gin Framework, Django.
          Excellent problem-solving skills. Effective communicator and
          collaborator.
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Professional Experience
        </h1>
        <span>
          Software Developer, Arun Data Processing, March 2023 - July 2024. Develop and maintain backend systems using Golang. Design and implement REST APIs. Write clean, efficient, and maintainable code. Debug and troubleshoot software issues. Collaborate with team members to deliver high-quality software solutions. Participate in code reviews to ensure code quality and adherence to standards.  Key Responsibilities: Assisted in the development of web applications using Golang. Participated in daily stand-ups and sprint planning sessions as part of the Agile team. Contributed to debugging and fixing reported issues.
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Achievements & Awards
        </h1>
        <span>
          Achievements: Recognized by team leads for consistently meeting project deadlines.
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Mission Statement
        </h1>
        <p>
          My mission is to leverage my skills and creativity to deliver
          innovative Software solutions that exceed client expectations and
          contribute positively to the digital landscape. I am committed to
          continuous learning and growth, always seeking new challenges and
          opportunities to expand my horizons.
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Resume
        </h1>
        <p>Download my resume by clicking the button below:</p>
        <a 
          href="https://drive.google.com/file/d/1DmxBQO0k9rfYMne9RQpsG9x9gi2Vi8-s/view?usp=sharing" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <button 
            className="bg-green-600 text-white font-semibold py-2 px-4 rounded hover:bg-green-700"
          >
            Download Resume
          </button>
        </a>
      </div>
    </div>
  );
}

export default About;
