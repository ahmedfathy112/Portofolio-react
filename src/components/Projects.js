import { useState } from "react";
import latestNews from "../images/latestNews.webp";
import FullEcommerce from "../images/FullEcommerce.webp";
import CoffeeShop from "../images/coffeeShop.webp";
import stopWatch from "../images/stopWatch.webp";
import Whether from "../images/whether.webp";
import Shootha from "../images/Shootha Goal.webp";
import StudentHostel from "../images/StudentHostel.webp";
import rawaq from "../images/Rawaq.webp";
import HospitalSystem from "../images/SystemHospital.webp";
import DamroResturant from "../images/damro-resturant.webp";
import Nursary from "../images/Nursary.webp";
import Richi from "../images/Richi.webp";
import CarRepairCenter from "../images/CarRepair.webp";
import EcommerceResturant from "../images/E-commerce-resturant.webp";
function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");
  const handleButtonClick = (category) => {
    setActiveCategory(category);
  };
  const CardsData = [
    {
      id: 1,
      image: `${HospitalSystem}`,
      category: "reactjs",
      span: "Next.Js Tailwind",
      nameCard: "Hospital System",
      url: "https://hosbtal-system.vercel.app/",
      repo: "https://github.com/ahmedfathy112/Hosbtal-System",
      dataos: "fade-right",
    },
    {
      id: 23,
      image: `${CarRepairCenter}`,
      category: "reactjs",
      span: "React.Js Tailwind Supabase",
      nameCard: "Car Repair Center",
      url: "https://car-repair-center.vercel.app/",
      repo: "https://github.com/ahmedfathy112/car-repair-center",
      dataos: "fade-down-left",
    },
    {
      id: 25,
      image: `${EcommerceResturant}`,
      category: "reactjs",
      span: "Next.Js Tailwind Supabase",
      nameCard: "E-commerce Resturant",
      url: "https://e-commerce-resturant-peach.vercel.app/",
      repo: "https://github.com/ahmedfathy112/E-commerce-Resturant",
      dataos: "fade-down-right",
    },
    {
      id: 24,
      image: `${Richi}`,
      category: "reactjs",
      span: "Next.Js Tailwind Supabase",
      nameCard: "Richi Glasses",
      url: "https://richi-glasses.vercel.app/",
      repo: "https://github.com/ahmedfathy112/Richi-Glasses",
      dataos: "fade-up",
    },
    {
      id: 19,
      image: `${DamroResturant}`,
      category: "reactjs",
      span: "Next.Js Tailwind Supabase",
      nameCard: "Damro Resturants",
      url: "https://damro-resturants.vercel.app/",
      repo: "https://github.com/ahmedfathy112/Damro-Resturants.git",
      dataos: "fade-left",
    },
    {
      id: 22,
      image: `${Nursary}`,
      category: "reactjs",
      span: "Next.Js Tailwind Supabase",
      nameCard: "Nursary Future",
      url: "https://nursary-future.vercel.app/",
      repo: "https://github.com/ahmedfathy112/nursary-future.git",
      dataos: "fade-up",
    },
    {
      id: 2,
      image: `${latestNews}`,
      category: "reactjs",
      span: "Next.Js Tailwind",
      nameCard: "Latest News",
      url: "https://news-two-rouge.vercel.app/",
      repo: "https://github.com/ahmedfathy112/News.git",
      dataos: "fade-up-left",
    },
    {
      id: 9,
      image: `${FullEcommerce}`,
      category: "reactjs",
      span: "React.Js Tailwind",
      nameCard: "Full E-commerce",
      url: "https://ahmedfathy112.github.io/Full-E-commerce/",
      repo: "https://github.com/ahmedfathy112/Full-E-commerce.git",
      dataos: "fade-up-right",
    },
    {
      id: 17,
      image: `${Shootha}`,
      category: "reactjs",
      span: "React.Js Tailwind",
      nameCard: "Shootha Goal",
      url: "https://shoothagoal.vercel.app/",
      repo: "https://github.com/ahmedfathy112/Football_Website",
      dataos: "fade-down-left",
    },
    {
      id: 18,
      image: `${StudentHostel}`,
      category: "reactjs",
      span: "React.Js Tailwind",
      nameCard: "Student Hostel",
      url: "https://ahmedfathy112.github.io/MansouraHousing/",
      repo: "https://github.com/ahmedfathy112/MansouraHousing",
      dataos: "fade-down-right",
    },
    {
      id: 10,
      image: `${CoffeeShop}`,
      category: "js",
      span: "HTML & Css & Js",
      nameCard: "Coffee Shop",
      url: "https://ahmedfathy112.github.io/CoffeeShop/",
      repo: "https://github.com/ahmedfathy112/CoffeeShop.git",
      dataos: "fade-up",
    },
    {
      id: 11,
      image: `${stopWatch}`,
      category: "js",
      span: "HTML & Css & Js",
      nameCard: "Stop Watch",
      url: "https://ahmedfathy112.github.io/Online-Stopwatch/",
      repo: "https://github.com/ahmedfathy112/Online-Stopwatch.git",
      dataos: "fade-right",
    },
    {
      id: 91,
      image: `${Whether}`,
      category: "js",
      span: "HTML & Css & Js",
      nameCard: "Whether",
      url: "https://ahmedfathy112.github.io/Weather-Dark/",
      repo: "https://github.com/ahmedfathy112/Weather-Dark.git",
      dataos: "fade-left",
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
      dataos: "fade-down",
    },
    {
      id: 3,
      image: "https://ahmedfathy112.github.io/cave-dev/5.jpg",
      category: "js",
      span: "HTML & Css & Js",
      nameCard: "Cave Dev",
      url: "https://ahmedfathy112.github.io/cave-dev/",
      repo: "https://github.com/ahmedfathy112/cave-dev",
      dataos: "fade-up-right",
    },
    {
      id: 4,
      image:
        "https://ahmedfathy112.github.io/Sure-Wheels/Audi%20background.jpg",
      category: "js",
      span: "HTML & Css & Js",
      nameCard: "Sure Wheels",
      url: "https://ahmedfathy112.github.io/Sure-Wheels/",
      repo: "https://github.com/ahmedfathy112/Sure-Wheels",
      dataos: "fade-up-left",
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
      dataos: "fade-down-left",
    },
    {
      id: 200,
      image:
        "https://ahmedfathy112.github.io/Mooviie/images/elbeat%20beaty.jpg",
      category: "js",
      span: "HTML & Css & Js",
      nameCard: "Moviees",
      url: "https://ahmedfathy112.github.io/Mooviie/",
      repo: "https://github.com/ahmedfathy112/Mooviie",
      dataos: "fade-down-right",
    },
    {
      id: 500,
      image: `${rawaq}`,
      category: "js",
      span: "HTML & Css & Js",
      nameCard: "Rawaq",
      url: "https://ahmedfathy112.github.io/rawaq-resturant/",
      repo: "https://github.com/ahmedfathy112/rawaq-resturant",
      dataos: "fade-up",
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
      dataos: "fade-down",
    },
  ];

  const filteredCards =
    activeCategory === "all"
      ? CardsData
      : CardsData.filter((card) => card.category === activeCategory);

  return (
    <>
      <section className="bg-black rounded-[20px] flex flex-col w-full !min-h-[350vh] p-[30px] pt-10  max-md:min-h-auto max-md:pb-40">
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
          <div className="flex justify-center flex-row flex-wrap w-full mt-[35px] overflow-x-hidden">
            {filteredCards.map((card) => {
              return (
                <>
                  <div
                    key={card.id}
                    className="w-1/4 h-auto bg-stone-950 rounded-xl border-2 border-neutral-800 p-4 m-5 max-md:w-[90%]"
                    data-aos={card?.dataos}
                  >
                    <img
                      loading="lazy"
                      src={card.image}
                      className="h-[200px] w-[90%]"
                      alt="CardImage "
                    />
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
                        className="text-center text-white mr-4 text-lg bg-orange-500 py-1 px-3 rounded-xl"
                        aria-label="url"
                      >
                        Demo <i className="fa-solid fa-eye"></i>
                      </a>
                      <a
                        href={card.repo}
                        target="_blank"
                        className="text-center text-white mr-4 text-lg bg-orange-500 py-1 px-3 rounded-xl"
                        aria-label="repo"
                      >
                        Rebo <i className="fa-solid fa-book"></i>
                      </a>
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
