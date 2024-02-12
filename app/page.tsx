import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <div className="w-full h-screen text-center bg-amber-50">
      <div className="text-gray-800 max-w-[1240px] w-full h-full mx-auto p-2 flex flex-col justify-center items-center">
        <div>
          <p className="uppercase text-md">Hello World!</p>
          <h1 className=" py-4 text-[70px] font-bold ">
            I am
            <span className=""> Prajwal Joshi.</span>
          </h1>
          <h1 className="py-1 text-xl font-normal">
            Software Engineer | Frontend Developer | React | Flutter{" "}
          </h1>
          <p className="py-4 max-w-[70%] m-auto text-md font-normal">
            I design and code simple yet beautiful websites.
          </p>
        </div>

        <div className="flex gap-4  justify-between items-center">
          <div className="w-[600px] border-b border-gray-800 " />
          {/* social links  */}
          <div className="flex gap-4">
            <a
              href={"https://www.linkedin.com/in/prajwal-joshi-3b3734156/"}
              target="_blank"
            >
              <FaLinkedin size={30} />
            </a>
            <a href={"https://github.com/Ojaspj"} target="_blank">
              <FaGithub size={30} />
            </a>
            <a
              href="https://drive.google.com/file/d/1EDs7c0bvfIltq2FFK1OC6hEbNCvjLHP-/view?usp=sharing"
              target="_blank"
              className="rounded-full p-1 border border-gray-800"
            >
              <p className="font-bold text-sm">CV</p>
            </a>
          </div>
          <div className="w-[600px] border-b border-gray-800" />
        </div>
      </div>
    </div>
  );
}
