import MyImage from "../images/myImage.webp";

function Home() {
  return (
    <>
      <section className="bg-black rounded-[20px] flex justify-center w-full min-h-[160vh] p-[30px] pt-10 max-md:max-h-auto">
        <section
          className="flex flex-col border-2 rounded-3xl w-[70%] pb-[20px] pt-5 min-h-screen max-md:w-full max-md:min-h-[100vh]"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
          data-aos-anchor-placement="top-bottom"
        >
          {/* My Image */}
          <article className="w-full flex justify-center">
            <img
              src={MyImage}
              className="h-[300px] rounded-md"
              alt="MyImage"
            ></img>
          </article>
          {/* personal info */}
          <article className="flex justify-center w-full flex-col pt-5">
            <h2 className="text-center text-white text-[26px] font-medium font-['Roboto Slab']">
              Ahmed Fathy
            </h2>
            <div className="w-auto h-[34px] px-5 py-[5px] bg-stone-900 rounded-lg justify-center items-center gap-2.5 inline-flex mt-3 ">
              <p className="text-neutral-400 text-base font-medium font-['Poppins'] max-md:text-center max-md:py-3">
                ReactJS || TailwindCss || NextJS || Supabase
              </p>
            </div>
            {/* Social Links */}
            <ul className="flex flex-row list-none flex-wrap justify-center mt-[15px]">
              <li>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/ahmed-fathy-16445537a"
                  className="mr-[15px] p-3 bg-stone-900 rounded-lg mt-[10px]"
                  aria-label="Visit LinkedIn"
                >
                  <i className="fa-brands fa-linkedin text-sky-900 text-xl font-normal"></i>
                </a>
              </li>
              <li>
                {" "}
                <a
                  target="_blank"
                  href="https://github.com/ahmedfathy112"
                  className="mr-[15px] p-3 bg-stone-900 rounded-lg mt-[10px]"
                  aria-label="Visit Github"
                >
                  <i className="fa-brands fa-github text-indigo-600 text-xl font-normal"></i>
                </a>
              </li>
              <li>
                {" "}
                <a
                  target="_blank"
                  href="https://wa.me/+201060733679"
                  className="mr-[15px] p-3 bg-stone-900 rounded-lg mt-[10px]"
                  aria-label="Visit Whatsapp"
                >
                  <i className="fa-brands fa-whatsapp text-indigo-600 text-xl font-normal"></i>
                </a>
              </li>
            </ul>
          </article>
          {/* Personal Details */}
          <article className="w-full flex justify-center mt-5">
            <div className="w-[450px] h-auto bg-stone-900 rounded-2xl flex flex-col p-[20px] max-md:w-[100%]">
              <div className="flex flex-row border-b-2 pb-3 border-neutral-700">
                <div className="bg-black rounded-lg shadow w-[50px] pl-4 pt-2 pb-2">
                  <i className="fa-solid fa-mobile text-pink-600 text-[22px] "></i>
                </div>
                <div className="ml-[20px]">
                  <h2 className="text-neutral-400 text-xs font-normal font-['Poppins']">
                    Phone
                  </h2>
                  <p className="text-white text-base font-normal font-['Poppins']">
                    +201060733679
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
          {/* CV Link */}
          <article className="flex justify-center w-full z-10">
            <a
              href="https://drive.google.com/file/d/1shjC_VXkKDy0psx4HHajeykAWE9W6H7M/view?usp=drive_link"
              download="Ahmed-Fathy`s cv.pdf"
              className="text-center relative bg-gradient-to-r from-red-500 to-pink-600 z-10 w-[300px] h-[80px] mt-[20px] rounded-[40px] cursor-pointer max-md:h-[60px]"
              target="_blank"
              aria-label="DownloadCv"
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
