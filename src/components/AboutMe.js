function AboutMe() {
  return (
    <>
      <section className="w-full flex flex-col p-[30px] pt-20 bg-black rounded-[20px] min-h-[150vh] max-md:min-h-auto max-md:pb-40">
        <article className="w-full flex flex-col">
          <div className="flex flex-row w-full">
            <h2 className="text-white text-[40px] font-bold font-['Roboto Slab']">
              About Me
            </h2>
            <div className="w-[300px] max-md:w-[200px] h-[0px] border-2 mt-[30px] ml-[20px] border-red-500"></div>
          </div>
          <div className="w-full flex flex-col mt-[30px]">
            <div className="w-[676px] max-md:w-[350px] text-neutral-400 text-base font-normal font-['Poppins'] leading-7">
              Hello! My name is Ahmed Fathy, and I am a Front-end Developer. I
              have a strong passion for creating beautiful and user-friendly
              websites. I am skilled in HTML, CSS, and JavaScript, and I enjoy
              using frameworks like React.js and Next.js to build responsive web
              applications.
            </div>
            <div className="w-[676px] max-md:w-[350px] text-neutral-400 text-base font-normal font-['Poppins'] leading-7 mt-5">
              I have worked on several projects, including a news website, an
              e-commerce shop cart, and my personal portfolio. Each project has
              helped me improve my skills and learn new technologies. I believe
              in the importance of good design and user experience. I am always
              eager to learn and grow as a developer. Thank you for visiting my
              portfolio, and I hope you enjoy exploring my work! Feel free to
              modify any part of it to better match your style or preferences!
            </div>
          </div>
        </article>
        <article className="flex w-full flex-col">
          <div className="text-white text-[38px] mt-[20px] font-medium font-['Poppins']">
            What I do!
          </div>
          <div className="flex flex-row flex-wrap w-full justify-center">
            <div className="w-[350px] max-md:h-[370px] min-h-[250px] m-[25px] bg-black rounded-xl border-2 border-neutral-800 flex flex-col p-[18px]">
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
            <div className="w-[350px] max-md:h-[370px] min-h-[250px] m-[25px] bg-black rounded-xl border-2 border-neutral-800 flex flex-col p-[18px]">
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
            <div className="w-[350px] max-md:h-[370px] min-h-[250px] m-[25px] bg-black rounded-xl border-2 border-neutral-800 flex flex-col p-[18px]">
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
