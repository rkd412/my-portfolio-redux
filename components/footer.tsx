// components/Footer.js
import { FaGithub, FaCodepen, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=" py-4 sticky bottom-0">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm">
          &copy; 2025 Robert K. Davis. All rights reserved.
        </p>

        <div className="flex space-x-4">
          <a
            href="https://github.com/rkd412"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaGithub size={32} />
          </a>

          <a
            href="https://codepen.io/rkd412"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaCodepen size={32} />
          </a>

          <a
            href="https://linkedin.com/in/robert-davis-b72893217"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaLinkedin size={32} />
          </a>
        </div>
      </div>
    </footer>
  );
}
