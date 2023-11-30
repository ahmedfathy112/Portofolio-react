function AboutMe() {
  return (
    <>
      <section className="w-full flex flex-col p-[30px] pt-20 bg-black rounded-[20px] min-h-[130vh] max-md:min-h-[180vh]">
        <article className="w-full flex flex-col">
          <div className="flex flex-row w-full">
            <h2 className="text-white text-[40px] font-bold font-['Roboto Slab']">
              About Me
            </h2>
            <div className="w-[300px] max-md:w-[200px] h-[0px] border-2 mt-[30px] ml-[20px] border-red-500"></div>
          </div>
          <div className="w-full flex flex-col mt-[30px]">
            <div className="w-[676px] max-md:w-[350px] text-neutral-400 text-base font-normal font-['Poppins'] leading-7">
              As a budding Frontend Developer diving into the world of ReactJS,
              JavaScript, HTML, and CSS, my journey is one of curiosity and
              exploration. While I may be new to this dynamic realm, my passion
              for crafting engaging user interfaces drives me forward.
            </div>
            <div className="w-[676px] max-md:w-[350px] text-neutral-400 text-base font-normal font-['Poppins'] leading-7 mt-5">
              Armed with the foundational knowledge of ReactJS and its allied
              technologies, I am eager to shape the digital landscape, learning
              and growing with every line of code I write. My focus lies in
              combining design and functionality to create seamless and
              responsive web experiences that captivate and delight users.
            </div>
          </div>
        </article>
        <article className="flex w-full flex-col">
          <div className="text-white text-[38px] mt-[20px] font-medium font-['Poppins']">
            What I do!
          </div>
          <div className="flex flex-row flex-wrap w-full justify-center">
            <div className="w-[350px] max-md:h-[300px] h-[250px] m-[25px] bg-black rounded-xl border-2 border-neutral-800 flex flex-col p-[18px]">
              <div className="w-full flex flex-row">
                <i className="fa-solid fa-code text-fuchsia-400 text-[40px]"></i>
                <h2 className="text-white text-[26px] font-medium font-['Poppins'] ml-[16px]">
                  Front-End
                </h2>
              </div>
              <p className="text-neutral-400 text-base font-normal font-['Poppins'] leading-[30px] mt-[20px] pl-[35px]">
                "As a frontend developer, I possess the ability to translate any
                design into code in a professional and aesthetically appealing
                manner, aiming to captivate users' attention"
              </p>
            </div>
            <div className="w-[350px] max-md:h-[340px] h-[250px] m-[25px] bg-black rounded-xl border-2 border-neutral-800 flex flex-col p-[18px]">
              <div className="w-full flex flex-row">
                <i className="fa-solid fa-mobile text-yellow-500 text-[40px]"></i>
                <h2 className="text-white text-[26px] font-medium font-['Poppins'] ml-[16px]">
                  Responsive Design
                </h2>
              </div>
              <p className="text-neutral-400 text-base font-normal font-['Poppins'] leading-[30px] mt-[20px] pl-[35px]">
                "I have the capability to ensure that my code remains consistent
                and responsive across various screens, be it mobiles, tablets,
                or larger displays, utilizing Tailwind CSS or by manual
                adaptation."
              </p>
            </div>
            <div className="w-[350px] max-md:h-[300px] h-[250px] m-[25px] bg-black rounded-xl border-2 border-neutral-800 flex flex-col p-[18px]">
              <div className="w-full flex flex-row">
                <i className="fa-solid fa-chalkboard text-rose-400 text-[40px]"></i>
                <h2 className="text-white text-[26px] font-medium font-['Poppins'] ml-[16px]">
                  Learning agility
                </h2>
              </div>
              <p className="text-neutral-400 text-base font-normal font-['Poppins'] leading-[30px] mt-[20px] pl-[35px]">
                "I possess a rapid learning ability for emerging technologies,
                whether they are libraries aiding in swift workflow or other
                technological advancements."
              </p>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}

export default AboutMe;
