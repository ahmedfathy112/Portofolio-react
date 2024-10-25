import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function Resume(props) {
  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <section className="bg-black rounded-[20px] flex flex-col w-full min-h-screen p-[30px] pt-10">
        <article className="flex flex-row w-full">
          <h2 className="text-white text-[40px] font-bold font-['Roboto Slab']">
            Resume
          </h2>
          <div className="w-[300px] h-[0px] border-2 border-red-500 ml-3 mt-[35px]"></div>
        </article>
        <article className="flex flex-row w-full mt-5 max-md:flex-col">
          <div className="w-[50%] max-md:mb-7 max-md:w-full">
            <div className="flex flex-row">
              <i className="fa-solid fa-graduation-cap text-rose-500 text-3xl mr-3"></i>
              <h2 className="text-white text-[26px] font-medium font-['Poppins']">
                Education
              </h2>
            </div>
            <div className="felx flex-col w-full mt-[40px]">
              <div
                className="w-[450px] max-md:w-full h-[120px] bg-black rounded-xl border-2 border-neutral-800 p-[20px] max-md:h-auto"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
              >
                <div>
                  <span className="text-neutral-400 text-sm font-normal font-['Poppins'] leading-[30px]">
                    2020-2025
                    <br />
                  </span>
                  <span className="text-white text-lg font-normal font-['Poppins'] leading-[30px]">
                    Faculity of Science
                  </span>
                  <span className="text-white text-base font-normal font-['Poppins'] leading-[30px]">
                    -
                  </span>
                  <span className="text-neutral-400 text-base font-normal font-['Poppins'] leading-[30px]">
                    MU University,
                    <br />
                    Mansoura University, Egypt
                  </span>
                </div>
              </div>
              <div
                className="w-[450px] max-md:w-full max-md:h-[155px] mt-[20px] h-[120px] bg-black rounded-xl border-2 border-neutral-800 p-[20px] max-md:h-auto"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
              >
                <div>
                  <span className="text-neutral-400 text-sm font-normal font-['Poppins'] leading-[30px]">
                    2020-2025
                    <br />
                  </span>
                  <span className="text-white text-lg font-normal font-['Poppins'] leading-[30px]">
                    Department of Statistics and Computer Science
                  </span>
                  <span className="text-neutral-400 text-base font-normal font-['Poppins'] leading-[30px]">
                    <br />
                    Mansoura University, Egypt
                  </span>
                </div>
              </div>
              <div
                className="w-[450px] max-md:w-full mt-[20px] h-[120px] bg-black rounded-xl border-2 border-neutral-800 p-[20px] max-md:h-auto"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
              >
                <div>
                  <span className="text-neutral-400 text-sm font-normal font-['Poppins'] leading-[30px]">
                    2024-Present
                    <br />
                  </span>
                  <span className="text-white text-lg font-normal font-['Poppins'] leading-[30px]">
                    Vice Leader For Syntax Team
                  </span>
                  <span className="text-neutral-400 text-base font-normal font-['Poppins'] leading-[30px]">
                    <br />
                    Mansoura University
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[50%] max-md:w-full">
            <div className="flex flex-row">
              <i className="fa-solid fa-briefcase text-rose-500 text-3xl mr-[20px]"></i>
              <h2 className="text-white text-[26px] font-medium font-['Poppins']">
                Experience
              </h2>
            </div>
            <div className="felx flex-col w-full mt-[40px]">
              <div
                className="w-[450px] max-md:w-full h-[120px] bg-black rounded-xl border-2 border-neutral-800 p-[20px] max-md:h-auto"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
              >
                <div>
                  <span className="text-neutral-400 text-sm font-normal font-['Poppins'] leading-[30px]">
                    2021-2022
                    <br />
                  </span>
                  <span className="text-white text-lg font-normal font-['Poppins'] leading-[30px]">
                    Learning HTML & Css & JS
                  </span>
                  <span className="text-neutral-400 text-base font-normal font-['Poppins'] leading-[30px]">
                    <br />
                    Online Courses
                  </span>
                </div>
              </div>
              <div
                className="w-[450px] max-md:w-full mt-[20px] h-[120px] bg-black rounded-xl border-2 border-neutral-800 p-[20px] max-md:h-auto"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
              >
                <div>
                  <span className="text-neutral-400 text-sm font-normal font-['Poppins'] leading-[30px]">
                    2022-2023
                    <br />
                  </span>
                  <span className="text-white text-lg font-normal font-['Poppins'] leading-[30px]">
                    Learning React.Js & Tailwind and Do Projects
                  </span>
                  <span className="text-neutral-400 text-base font-normal font-['Poppins'] leading-[30px]">
                    <br />
                    Online Courses
                  </span>
                </div>
              </div>
              <div
                className="w-[450px] max-md:w-full mt-[20px] h-[120px] bg-black rounded-xl border-2 border-neutral-800 p-[20px] max-md:h-auto"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
              >
                <div>
                  <span className="text-neutral-400 text-sm font-normal font-['Poppins'] leading-[30px]">
                    2023-present
                    <br />
                  </span>
                  <span className="text-white text-lg font-normal font-['Poppins'] leading-[30px]">
                    Learning Next.Js and Projects
                  </span>
                  <span className="text-neutral-400 text-base font-normal font-['Poppins'] leading-[30px]">
                    <br />
                    Online Courses
                  </span>
                </div>
              </div>
            </div>
          </div>
        </article>
        <article className="bg-stone-950 flex flex-row flex-wrap p-[30px] mt-[100px] pb-32 max-md:flex-col">
          <div className="w-[50%] max-md:w-full max-md:mb-7">
            <h2 className="text-white text-[26px] font-medium font-['Poppins']">
              Working Skills
            </h2>
            <div className="w-full flex flex-row flex-wrap p-[20px] pt-[35px]">
              <div className="w-auto m-[20px] h-[34px] px-5 py-[5px] bg-zinc-900 rounded-lg justify-center items-center gap-2.5 inline-flex max-md:m-0 max-md:mt-4 max-md:ml-1">
                <div className="text-neutral-400 text-base font-normal font-['Poppins']">
                  Responsive Design
                </div>
              </div>
              <div className="w-auto m-[20px] h-[34px] px-5 py-[5px] bg-zinc-900 rounded-lg justify-center items-center gap-2.5 inline-flex max-md:m-0 max-md:mt-4 max-md:ml-1">
                <div className="text-neutral-400 text-base font-normal font-['Poppins']">
                  Using Figma
                </div>
              </div>
              <div className="w-auto m-[20px] h-[34px] px-5 py-[5px] bg-zinc-900 rounded-lg justify-center items-center gap-2.5 inline-flex max-md:m-0 max-md:mt-4 max-md:ml-1">
                <div className="text-neutral-400 text-base font-normal font-['Poppins']">
                  Using AI
                </div>
              </div>
              <div className="w-auto m-[20px] h-[34px] px-5 py-[5px] bg-zinc-900 rounded-lg justify-center items-center gap-2.5 inline-flex max-md:m-0 max-md:mt-4 max-md:ml-1">
                <div className="text-neutral-400 text-base font-normal font-['Poppins']">
                  React.Js
                </div>
              </div>
              <div className="w-auto m-[20px] h-[34px] px-5 py-[5px] bg-zinc-900 rounded-lg justify-center items-center gap-2.5 inline-flex max-md:m-0 max-md:mt-4 max-md:ml-1">
                <div className="text-neutral-400 text-base font-normal font-['Poppins']">
                  Tailwind
                </div>
              </div>
              <div className="w-auto m-[20px] h-[34px] px-5 py-[5px] bg-zinc-900 rounded-lg justify-center items-center gap-2.5 inline-flex max-md:m-0 max-md:mt-4 max-md:ml-1">
                <div className="text-neutral-400 text-base font-normal font-['Poppins']">
                  HTML & CSS
                </div>
              </div>
              <div className="w-auto m-[20px] h-[34px] px-5 py-[5px] bg-zinc-900 rounded-lg justify-center items-center gap-2.5 inline-flex max-md:m-0 max-md:mt-4 max-md:ml-1">
                <div className="text-neutral-400 text-base font-normal font-['Poppins']">
                  Next.Js
                </div>
              </div>
              <div className="w-auto m-[20px] h-[34px] px-5 py-[5px] bg-zinc-900 rounded-lg justify-center items-center gap-2.5 inline-flex max-md:m-0 max-md:mt-4 max-md:ml-1">
                <div className="text-neutral-400 text-base font-normal font-['Poppins']">
                  Git & Github
                </div>
              </div>
            </div>
          </div>
          <div className="w-[50%] max-md:w-full">
            <h2 className="text-white text-[26px] font-medium font-['Poppins']">
              Knowledges
            </h2>
            <div className="flex flex-row flex-wrap p-[20px] pt-[35px]">
              <div className="w-[111px] m-[20px] h-[34px] px-5 py-[5px] bg-zinc-900 rounded-lg justify-center items-center gap-2.5 inline-flex">
                <div className="text-neutral-400 text-base font-normal font-['Poppins']">
                  Flexibility
                </div>
              </div>
              <div className="w-[142px] m-[20px] h-[34px] px-5 py-[5px] bg-zinc-900 rounded-lg justify-center items-center gap-2.5 inline-flex">
                <div className="text-neutral-400 text-base font-normal font-['Poppins']">
                  Social Media
                </div>
              </div>
              <div className="w-[171px] m-[20px] h-[34px] px-5 py-[5px] bg-zinc-900 rounded-lg justify-center items-center gap-2.5 inline-flex">
                <div className="text-neutral-400 text-base font-normal font-['Poppins']">
                  Communication
                </div>
              </div>
              <div className="w-[193px] m-[20px] h-[34px] px-5 py-[5px] bg-zinc-900 rounded-lg justify-center items-center gap-2.5 inline-flex">
                <div className="text-neutral-400 text-base font-normal font-['Poppins']">
                  Time Management
                </div>
              </div>
              <div className="w-auto m-[20px] h-[34px] px-5 py-[5px] bg-zinc-900 rounded-lg justify-center items-center gap-2.5 inline-flex">
                <div className="text-neutral-400 text-base font-normal font-['Poppins']">
                  Learning
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}

export default Resume;
