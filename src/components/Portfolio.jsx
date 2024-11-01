
import foodVozoni from "../../public/assets/WebSc/FoodVozoni.png"
import IndianRoyal from "../../public/assets/WebSc/IndianRoyal.png"
import sprogramming from "../../public/assets/WebSc/SProgramming.png";
import jobsHouse from "../../public/assets/WebSc/JobsHouse.png";
import germotry from "../../public/assets/WebSc/Geometry.png";
import obsnest from "../../public/assets/WebSc/obsnest.png"

const Portfolio = () => {
  const portfolios = [

    {
      id: 1,
      src: obsnest,
      name: 'Obsnest Market',
      webLink: "https://obsnestmarket.netlify.app",
      client_repo: "https://github.com/sadakatsrabon/Obsnest-MarketPlace",
      server_repo: "https://github.com/sadakatsrabon/Obsnest-Server"
    },
    {
      id: 2,
      src: IndianRoyal,
      name: "Royal Indian Food",
      webLink: "https://indianroyal.netlify.app/",
      client_repo: "https://github.com/devSadakat/Indian-Royal",
      server_repo: "https://github.com/devSadakat/Server-Indian-Royal"
    },
    {
      id: 3,
      src: jobsHouse,
      name: "Job's House",
      webLink: "https://steady-bunny-6b6189.netlify.app",
      client_repo: "https://github.com/sadakatsrabon/Jobs-House",
    },

    {
      id: 4,
      src: foodVozoni,
      name: "Food Vozoni",
      webLink: "https://food-vozoni.web.app/",
      client_repo: "https://github.com/sadakatsrabon/Food-Vozoni",
      server_repo: "https://github.com/sadakatsrabon/Food-Vozoni-Server"
    },
    {
      id: 5,
      src: sprogramming,
      name: "S-Programming",
      webLink: "https://reliable-travesseiro-243f82.netlify.app",
      client_repo: "",
      server_repo: ""
    },
    {
      id: 6,
      src: germotry,
      name: "Germotry Genious",
      webLink: "https://neon-pony-919700.netlify.app",
      client_repo: "",
      server_repo: ""
    }

  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen portfolio"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            My Projects
          </p>
          <p className="py-6 font-semibold text-teal-100">
            Check out some of my work right here
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, webLink, client_repo, name }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="projects"
                className="rounded-md duration-200 hover:scale-105"
                onClick={() => window.open(webLink, "Live Web")}
              />
              <div className="flex items-center justify-center">
                <button
                  className="w-1/2 m-4 duration-200 hover:scale-105"
                  onClick={() => window.open(webLink, "Live Web")}
                >
                </button>
                <button
                  onClick={() => window.open(webLink, "Live Web")}
                  className="btn btn-outline btn-sm">{name}</button>
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 upperCa"
                  onClick={() => window.open(client_repo, "_blank")}
                >
                  GitHub
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
