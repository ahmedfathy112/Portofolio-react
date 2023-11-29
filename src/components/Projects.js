import { useState } from "react";

function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");
  const handleButtonClick = (category) => {
    setActiveCategory(category);
  };
  const CardsData = [
    {
      id: 1,
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
      id: 8,
      image:
        "https://cdn.pixabay.com/photo/2020/05/21/11/13/shopping-5200288_1280.jpg",
      category: "reactjs",
      span: "ReactJs & Tailwind",
      nameCard: "Golden Store",
      post: "https://www.linkedin.com/posts/ahmed-fathy-20178319a_hello-linkedin-members-id-like-to-share-activity-7132699667070410752-vMTI?utm_source=share&utm_medium=member_desktop",
    },
    {
      id: 9,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSjSrF9MIstgS3uUG8T5Pj5WHRurqjQlMKFA&usqp=CAU",
      category: "reactjs",
      span: "ReactJs & Tailwind",
      nameCard: "Hoobank",
      post: "https://www.linkedin.com/posts/ahmed-fathy-20178319a_hello-linkedin-members-new-project-with-activity-7133547174948159488--TeT?utm_source=share&utm_medium=member_desktop",
    },
    {
      id: 10,
      image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      category: "reactjs",
      span: "ReactJs & Tailwind",
      nameCard: "E-commerce site",
      post: "https://www.linkedin.com/posts/ahmed-fathy-20178319a_hello-everybody-id-like-to-share-with-activity-7125854546811138048-_00d?utm_source=share&utm_medium=member_desktop",
    },
    {
      id: 11,
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      category: "reactjs",
      span: "ReactJs",
      nameCard: "First Project in React",
      post: "https://www.linkedin.com/posts/ahmed-fathy-20178319a_im-happy-to-share-with-you-my-fisrt-project-activity-7124084405924413440-sVhw?utm_source=share&utm_medium=member_desktop",
    },
  ];

  const filteredCards =
    activeCategory === "all"
      ? CardsData
      : CardsData.filter((card) => card.category === activeCategory);

  return (
    <>
      <section className="bg-black rounded-[20px] flex flex-col w-full min-h-[270vh] p-[30px] pt-10">
        <article className="flex flex-row w-full justify-start">
          <h2 className="text-white text-[40px] font-bold font-['Roboto Slab']">
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
          <div className="flex flex-row flex-wrap w-full mt-[35px]">
            {filteredCards.map((card) => {
              return (
                <>
                  <div
                    key={card.id}
                    className="w-[100% / 3] h-auto bg-stone-950 rounded-xl border-2 border-neutral-800 p-4 m-5 "
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
                        className="text-center text-white mr-4 text-2xl"
                      >
                        <i className="fa-solid fa-eye"></i>
                      </a>
                      <a
                        href={card.repo}
                        target="_blank"
                        className="text-center text-white mr-4 text-2xl"
                      >
                        <i className="fa-solid fa-book"></i>
                      </a>
                      <a
                        href={card.post}
                        target="_blank"
                        className="text-center text-white mr-4 text-lg"
                      >
                        View Post
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
