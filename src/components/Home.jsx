import SadakatImg from "/assets/person.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 home"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="small-screen hidden">
          {/* small device */}
          <img
            src={SadakatImg}
            alt="profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
        <div className="flex flex-col justify-center h-full">
          <div>
            <h3 className="text-xl sm:text-3xl font-bold text-sky-600">
              Hello, I'm Sadakat hossain
            </h3>
            <h3 className="text-2xl sm:text-5xl font-bold text-white">
              MERN Stack Developer
            </h3>
          </div>
          <p className="text-gray-500 py-4 max-w-md">
            <span className="font-bold">Welcome to Sadakat's Profile Home.</span> As a web developer I have better experience building and designing
            website.You have got a brief idea about me in this website.I can be
            your best choice for front-end and back-end website development.{" "}
            <br />
            <br /> Honesty is the best policy.
          </p>

          <div className="portfolio-btn flex flex-col sm:flex-row gap-5">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
            <button className=" text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              <BsFillPersonLinesFill className="mx-2" size={30} />
              Download Resume
            </button>
          </div>
        </div>
        {/* large device */}
        <div className="big-screen w-96 mb-56">
          <img
            src={SadakatImg}
            alt="profile"
            className="rounded-2xl mx-auto mt-48"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
