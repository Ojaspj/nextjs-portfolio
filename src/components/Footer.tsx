import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between gap-8 px-4 sm:px-6 lg:px-8">
        <div className="w-[50%]">
          <p className="mb-6 text-xl  font-semibold text-white">
            Prajwal Joshi
          </p>
          <p className="mb-4">
            I am a highly skilled Software Engineer with 2+ years of experience
            having worked as Frontend dev and having real-world experience in
            building web applications.
          </p>
          <div className="flex space-x-4">
          <a
            href="https://www.linkedin.com/in/prajwal-joshi-3b3734156"
            className="hover:text-white transition-colors duration-300"
          >
            <FaLinkedinIn size={25} />
          </a>
          <a
            href="https://x.com/mr_prajwaljoshi"
            className="hover:text-white transition-colors duration-300"
          >
            <FaTwitter size={25} />
          </a>
          <a
            href="https://github.com/Ojaspj"
            className="hover:text-white transition-colors duration-300"
          >
            <FaGithub size={25} />
          </a>
        </div>
        </div>

        
      </div>
    </footer>
  );
}

export default Footer;
