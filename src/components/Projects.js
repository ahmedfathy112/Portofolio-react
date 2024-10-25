import { useState } from "react";
import latestNews from "../images/latestNews.png";
import FullEcommerce from "../images/FullEcommerce.png";
import CoffeeShop from "../images/coffeeShop.png";
import stopWatch from "../images/stopWatch.png";
import Whether from "../images/whether.png";
function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");
  const handleButtonClick = (category) => {
    setActiveCategory(category);
  };
  const CardsData = [
    {
      id: 7,
      image:
        "https://ahmedfathy112.github.io/Shopping-Web/shoppers-delight-logo.png",
      category: "js",
      span: "HTML & Css & Js",
      nameCard: "Shoping Design",
      url: "https://ahmedfathy112.github.io/Shopping-Web/",
      repo: "https://github.com/ahmedfathy112/Shopping-Web",
    },
    {
      id: 1,
      image: `${latestNews}`,
      category: "reactjs",
      span: "Next.Js Tailwind",
      nameCard: "صحيفة اليوم",
      url: "https://news-two-rouge.vercel.app/",
      repo: "https://github.com/ahmedfathy112/News.git",
    },
    {
      id: 9,
      image: `${FullEcommerce}`,
      category: "reactjs",
      span: "React.Js Tailwind",
      nameCard: "Full E-commerce",
      url: "https://ahmedfathy112.github.io/Full-E-commerce/",
      repo: "https://github.com/ahmedfathy112/Full-E-commerce.git",
    },
    {
      id: 10,
      image: `${CoffeeShop}`,
      category: "js",
      span: "HTML & Css & Js",
      nameCard: "Coffee Shop",
      url: "https://ahmedfathy112.github.io/CoffeeShop/",
      repo: "https://github.com/ahmedfathy112/CoffeeShop.git",
    },
    {
      id: 11,
      image: `${stopWatch}`,
      category: "js",
      span: "HTML & Css & Js",
      nameCard: "Stop Watch",
      url: "https://ahmedfathy112.github.io/Online-Stopwatch/",
      repo: "https://github.com/ahmedfathy112/Online-Stopwatch.git",
    },
    {
      id: 11,
      image: `${Whether}`,
      category: "js",
      span: "HTML & Css & Js",
      nameCard: "Whether",
      url: "https://ahmedfathy112.github.io/Weather-Dark/",
      repo: "https://github.com/ahmedfathy112/Weather-Dark.git",
    },
    {
      id: 8,
      image:
        "https://ahmedfathy112.github.io/island-food/images/island-img/landing.jpg",
      category: "design",
      span: "HTML & Css",
      nameCard: "Island Food",
      url: "https://ahmedfathy112.github.io/island-food/",
      repo: "https://github.com/ahmedfathy112/island-food",
    },
    {
      id: 2,
      image: "https://ahmedfathy112.github.io/cave-dev/5.jpg",
      category: "js",
      span: "HTML & Css & Js",
      nameCard: "Cave Dev",
      url: "https://ahmedfathy112.github.io/cave-dev/",
      repo: "https://github.com/ahmedfathy112/cave-dev",
    },
    {
      id: 3,
      image:
        "https://ahmedfathy112.github.io/Sure-Wheels/Audi%20background.jpg",
      category: "js",
      span: "HTML & Css & Js",
      nameCard: "Sure Wheels",
      url: "https://ahmedfathy112.github.io/Sure-Wheels/",
      repo: "https://github.com/ahmedfathy112/Sure-Wheels",
    },
    {
      id: 4,
      image: "https://ahmedfathy112.github.io/shahed-filmak/Rumble.jpg",
      category: "design",
      span: "HTML & Css",
      nameCard: "Aflamak",
      url: "https://ahmedfathy112.github.io/shahed-filmak/",
      repo: "https://github.com/ahmedfathy112/shahed-filmak",
    },
    {
      id: 5,
      image:
        "https://ahmedfathy112.github.io/My-Portoflio/images/Layer%201.png",
      category: "js",
      span: "HTML & Css & Js",
      nameCard: "Last Portofolio",
      url: "https://ahmedfathy112.github.io/My-Portoflio/",
      repo: "https://github.com/ahmedfathy112/My-Portoflio",
    },
    {
      id: 5,
      image:
        "https://ahmedfathy112.github.io/Mooviie/images/elbeat%20beaty.jpg",
      category: "js",
      span: "HTML & Css & Js",
      nameCard: "Moviees",
      url: "https://ahmedfathy112.github.io/Mooviie/",
      repo: "https://github.com/ahmedfathy112/Mooviie",
    },
    {
      id: 6,
      image:
        "https://ahmedfathy112.github.io/Muslim/images/%D8%AF%D8%B9%D8%A7%D8%A6%D9%8A.png",
      category: "js",
      span: "HTML & Css & Js",
      nameCard: "Muslim",
      url: "https://ahmedfathy112.github.io/Muslim/",
      repo: "https://github.com/ahmedfathy112/Muslim",
    },
  ];

  const filteredCards =
    activeCategory === "all"
      ? CardsData
      : CardsData.filter((card) => card.category === activeCategory);

  return (
    <>
      <section className="bg-black rounded-[20px] flex flex-col w-full min-h-[270vh] p-[30px] pt-10 max-md:min-h-auto max-md:pb-40">
        <article className="flex flex-row w-full justify-start">
          <h2 className="text-white text-[40px] font-bold font-['Roboto Slab'] max-md:mb-10">
            Projects
          </h2>
          <div className="w-[300px] h-[0px] mt-[35px] ml-[20px] border-2 border-red-500"></div>
        </article>
        <article className="flex flex-col w-full">
          <nav className="flex flex-row justify-end w-full">
            <div
              onClick={() => handleButtonClick("all")}
              className="text-red-500 text-base font-medium font-['Poppins'] capitalize cursor-pointer mr-4"
            >
              All
            </div>
            <div
              onClick={() => handleButtonClick("design")}
              className="text-neutral-400 text-base font-medium font-['Poppins'] capitalize cursor-pointer mr-4"
            >
              HTML & Css
            </div>
            <div
              onClick={() => handleButtonClick("js")}
              className="text-neutral-400 text-base font-medium font-['Poppins'] capitalize cursor-pointer mr-4"
            >
              HTML & Css & Js
            </div>
            <div
              onClick={() => handleButtonClick("reactjs")}
              className="text-neutral-400 text-base font-medium font-['Poppins'] capitalize cursor-pointer mr-4"
            >
              ReactJS
            </div>
          </nav>
          <div className="flex justify-center flex-row flex-wrap w-full mt-[35px]">
            {filteredCards.map((card) => {
              return (
                <>
                  <div
                    key={card.id}
                    className="w-1/4 h-auto bg-stone-950 rounded-xl border-2 border-neutral-800 p-4 m-5 max-md:w-full"
                  >
                    <img src={card.image} className="h-[200px] w-full"></img>
                    <span className="text-neutral-400 text-xs font-normal font-['Poppins'] capitalize mt-5">
                      {card.span}
                    </span>
                    <h2 className="text-white text-base font-medium font-['Poppins'] capitalize mt-1">
                      {card.nameCard}
                    </h2>
                    <div className="flex justify-center mt-5">
                      <a
                        href={card.url}
                        target="_blank"
                        className="text-center text-white mr-4 text-lg"
                      >
                        <i className="fa-solid fa-eye"></i>
                      </a>
                      <a
                        href={card.repo}
                        target="_blank"
                        className="text-center text-white mr-4 text-lg"
                      >
                        <i className="fa-solid fa-book"></i>
                      </a>
                      {/* <a
                        href={card.post}
                        target="_blank"
                        className="text-center text-white mr-4 text-lg"
                      >
                        <i class="fa-solid fa-newspaper"></i>
                      </a> */}
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </article>
      </section>
    </>
  );
}

export default Projects;
