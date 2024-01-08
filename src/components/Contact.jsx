
// import { Link } from "react-scroll";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      name="contact"
      className="contact bg-gradient-to-b text-center from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact Information
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
        <div className="flex">
          <div className="my-auto ml-8">
            <h2 className="text-3xl font-bold">Hi sir,</h2>
            <p>Are yor want ot send a message to Sadakat Hossain? </p>
          </div>
          <div className="m-auto  pt-20">
            <form
              // onSubmit={handleSubmit}
              name="contact"
              method="POST"
              action=""
              className=" flex flex-col w-full"
            >
              <div>
                <div className="flex gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    required
                    className="p-2 bg-transparent border-x-2 border rounded-md text-white focus:outline-none"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    className="p-2 bg-transparent border-x-2 border rounded-md text-white focus:outline-none"
                  />
                </div>
                <div className="pt-6">
                  <textarea
                    name="message"
                    placeholder="Enter your message"
                    rows="4"
                    required
                    className="p-2 bg-transparent border-x-2 border rounded-md text-white focus:outline-none w-full"
                  ></textarea>
                </div>
              </div>
              <input className="text-white bg-gradient-to-b from-indigo-700 to-black px-6 py-1 my-8 mx-auto rounded hover:scale-110 duration-100" type="submit" value="Send" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
