import MyImage from "../images/myImage.jpg";

function Home() {
  return (
    <>
      <section className="bg-black rounded-[20px] flex justify-center w-full min-h-[160vh] p-[30px] pt-10 max-md:max-h-auto">
        <section className="flex flex-col border-2 rounded-3xl w-[50%] pb-[20px] pt-5 min-h-screen max-md:w-full max-md:min-h-[170vh]">
          <article className="w-full flex justify-center">
            <img src={MyImage} className="h-[200px] rounded-md"></img>
          </article>
          <article className="flex justify-center w-full flex-col pt-5">
            <h2 className="text-center text-white text-[26px] font-medium font-['Roboto Slab']">
              Ahmed Fathy
            </h2>
            <div className="w-auto h-[34px] px-5 py-[5px] bg-stone-900 rounded-lg justify-center items-center gap-2.5 inline-flex mt-3">
              <p className="text-neutral-400 text-base font-medium font-['Poppins']">
                Frontend Developer || ReactJS
              </p>
            </div>
            <ul className="flex flex-row list-none flex-wrap justify-center mt-[15px]">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/ahmed-fathy-20178319a/"
                className="mr-[15px] p-3 bg-stone-900 rounded-lg mt-[10px]"
              >
                <i className="fa-brands fa-linkedin text-sky-900 text-xl font-normal"></i>
              </a>
              <a
                target="_blank"
                href="https://instagram.com/ahmed_fathy_960?igshid=OGQ5ZDc2ODk2ZA=="
                className="mr-[15px] p-3 bg-stone-900 rounded-lg mt-[10px]"
              >
                <i className="fa-brands fa-instagram text-indigo-600 text-xl font-normal"></i>
              </a>
              <a
                target="_blank"
                href="https://github.com/ahmedfathy112"
                className="mr-[15px] p-3 bg-stone-900 rounded-lg mt-[10px]"
              >
                <i className="fa-brands fa-github text-indigo-600 text-xl font-normal"></i>
              </a>
              <a
                target="_blank"
                href="https://wa.me/+201060733679"
                className="mr-[15px] p-3 bg-stone-900 rounded-lg mt-[10px]"
              >
                <i className="fa-brands fa-whatsapp text-indigo-600 text-xl font-normal"></i>
              </a>
            </ul>
          </article>
          <article className="w-full flex justify-center mt-5">
            <div className="w-[360px] h-auto bg-stone-900 rounded-2xl flex flex-col p-[20px] max-md:w-[100%]">
              <div className="flex flex-row border-b-2 pb-3 border-neutral-700">
                <div className="bg-black rounded-lg shadow w-[50px] pl-4 pt-2 pb-2">
                  <i className="fa-solid fa-mobile text-pink-600 text-[22px] "></i>
                </div>
                <div className="ml-[20px]">
                  <h2 className="text-neutral-400 text-xs font-normal font-['Poppins']">
                    Phone
                  </h2>
                  <p className="text-white text-base font-normal font-['Poppins']">
                    01060733679
                  </p>
                </div>
              </div>
              <div className="flex flex-row border-b-2 pb-3 border-neutral-700 mt-3">
                <div className="bg-black rounded-lg shadow w-[50px] pl-4 pt-2 pb-2">
                  <i className="fa-solid fa-envelope text-slate-400 text-[22px] "></i>
                </div>
                <div className="ml-[20px]">
                  <h2 className="text-neutral-400 text-xs font-normal font-['Poppins']">
                    Email
                  </h2>
                  <p className="text-white text-base font-normal font-['Poppins'] max-md:text-sm">
                    ahmedfathy241110@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex flex-row border-b-2 pb-3 border-neutral-700 mt-3">
                <div className="bg-black rounded-lg shadow w-[50px] pl-4 pt-2 pb-2 h-[40px]">
                  <i className="fa-solid fa-location-dot text-rose-400  text-[22px] "></i>
                </div>
                <div className="ml-[20px]">
                  <h2 className="text-neutral-400 text-xs font-normal font-['Poppins']">
                    Location
                  </h2>
                  <p className="text-white text-base font-normal font-['Poppins']">
                    Egypt,Algharbiah,Elmahalla Elkobra
                  </p>
                </div>
              </div>
              <div className="flex flex-row border-b-2 pb-3 border-neutral-700 mt-3">
                <div className="bg-black rounded-lg shadow w-[50px] pl-4 pt-2 pb-2 h-[40px]">
                  <i className="fa-solid fa-calendar-days text-purple-400  text-[22px] "></i>
                </div>
                <div className="ml-[20px]">
                  <h2 className="text-neutral-400 text-xs font-normal font-['Poppins']">
                    Birthday
                  </h2>
                  <p className="text-white text-base font-normal font-['Poppins']">
                    octaber 12,2002
                  </p>
                </div>
              </div>
            </div>
          </article>
          <article className="flex justify-center w-full">
            <a
              href="https://drive.google.com/file/d/1Doovq799yn80lmHZc0y09ALLHADXdYyi/view?usp=drive_link"
              download="My-resume.pdf"
              className="text-center relative bg-gradient-to-r from-red-500 to-pink-600 w-[300px] h-[80px] mt-[20px] rounded-[40px] cursor-pointer"
            >
              <i className="fa-solid fa-download absolute top-[35%] left-[20%] text-white text-[22px] "></i>
              <div className="absolute top-[35%] left-[40%] text-white text-xl font-medium font-['Poppins']">
                Download CV
              </div>
            </a>
          </article>
        </section>
      </section>
    </>
  );
}

export default Home;
