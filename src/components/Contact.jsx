
// import { Link } from "react-scroll";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      name="contact"
      className="contact bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6 font-semibold text-teal-100"></p>
        </div>
        <div className="flex flex-col justify-center items-center mx-auto">
          <p>
            {" "}
            <a
              className="flex gap-5 font-semibold"
              href="https://www.linkedin.com/in/sadakat-hossain"
            >
              <FaLinkedin className="text-2xl" />{" "}
              <span className="text-2xl text-purple-500 css">Linked In</span>
            </a>{" "}
          </p>
          <p>
            <a
              className="flex gap-5 font-semibold"
              href="https://www.facebook.com/Sadakathosen/"
            >
              <FaFacebook className="text-2xl" />{" "}
              <span className="text-2xl text-purple-500 css">Facebook</span>
            </a>
          </p>
          <p className="flex gap-2 text-2xl font-semibold css">
            <FaPhone /> {" "}
            <span className="text-2xl text-purple-500 font-semibold css">
              +880 1887023201
            </span>
          </p>
          <p className="text-2xl flex gap-2 font-semibold css">
            <FaMailBulk /> {" "}
            <span className="text-lg md:text-2xl text-purple-500">
              sadakt.hossain11@gmail.com
            </span>{" "}
          </p>
        </div>

        {/* Messaging Form */}
        <div className=" flex justify-center my-16 items-center">
          <form
            // onSubmit={handleSubmit}
            name="contact"
            method="POST"
            action=""
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              required
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button
              type="submit"
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
