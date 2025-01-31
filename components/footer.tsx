import { FaGithub, FaCodepen, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="m-2 py-4 sticky bottom-0">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm">
          &copy; 2025 RKD
        </p>

        <div className="flex space-x-4">
          <a
            href="https://github.com/rkd412"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={32} />
          </a>

          <a
            href="https://codepen.io/rkd412"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaCodepen size={32} />
          </a>

          <a
            href="https://linkedin.com/in/robert-davis-b72893217"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={32} />
          </a>
        </div>
      </div>
    </footer>
  );
}
