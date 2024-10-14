import React from "react";
import {
  FaFacebook,
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa6";

function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className="flex flex-col items-center justify-center">
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=100069630823735" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={24} />
              </a>
              <a href="https://x.com/maheshpatil2203" target="_blank" rel="noopener noreferrer">
                <FaXTwitter size={24} />
              </a>
              <a href="https://www.instagram.com/mahi.patil_007/" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.linkedin.com/in/mahesh-patil-ab5072294/" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn size={24} />
              </a>
              <a href="https://github.com/Mahesh6221" target="_blank" rel="noopener noreferrer">
                <FaGithub  size={24} />
              </a>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">
                &copy; 2024 Your Company. All rights reserved.
              </p>
              <p className="text-sm">Supportive Partner ❤️ Mahesh</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
