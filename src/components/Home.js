function Home() {
  return (
    <>
      <section className="bg-black rounded-[20px] flex justify-center w-full min-h-[140vh] p-[30px] pt-10 max-md:min-h-[150vh]">
        <section className="flex flex-col border-2 rounded-3xl w-[50%] pb-[20px] pt-5 min-h-screen max-md:w-full">
          <article className="w-full flex justify-center">
            <img
              src="https://scontent.fcai21-2.fna.fbcdn.net/v/t39.30808-1/378386855_1092689881710858_5028889178979790790_n.jpg?stp=dst-jpg_p320x320&_nc_cat=101&ccb=1-7&_nc_sid=5740b7&_nc_eui2=AeFGsajBvhgk8fKmeT7nsKsinukWgn7grQOe6RaCfuCtA-en72sXhmVSBXxd3IFZwz2G_Uv7vbjplGrqgeaTUA7u&_nc_ohc=7qiDoXUSqWcAX-YV2m0&_nc_ht=scontent.fcai21-2.fna&oh=00_AfDKDgEY3KLE0oCSLV2rWJBjFDQKmTciuKTSymvbv9xOpQ&oe=656C6B85"
              className="h-[200px]"
            ></img>
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
                href="https://www.facebook.com/profile.php?id=100029095692492&mibextid=9R9pXO"
                className="mr-[15px] p-3 bg-stone-900 rounded-lg"
              >
                <i className="fa-brands fa-facebook-f text-blue-600 text-xl font-normal"></i>
              </a>
              <a
                target="_blank"
                href="https://x.com/Ahmedfa25589138?t=il-shvUWAd6Fyqs5DiHaEA&s=09"
                className="mr-[15px] p-3 bg-stone-900 rounded-lg"
              >
                <i className="fa-brands fa-twitter text-sky-500 text-xl font-normal"></i>
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/ahmed-fathy-20178319a/"
                className="mr-[15px] p-3 bg-stone-900 rounded-lg"
              >
                <i className="fa-brands fa-linkedin text-sky-900 text-xl font-normal"></i>
              </a>
              <a
                target="_blank"
                href="https://instagram.com/ahmed_fathy_960?igshid=OGQ5ZDc2ODk2ZA=="
                className="mr-[15px] p-3 bg-stone-900 rounded-lg"
              >
                <i className="fa-brands fa-instagram text-indigo-600 text-xl font-normal"></i>
              </a>
              <a
                target="_blank"
                href="https://github.com/ahmedfathy112"
                className="mr-[15px] p-3 bg-stone-900 rounded-lg"
              >
                <i className="fa-brands fa-github text-indigo-600 text-xl font-normal"></i>
              </a>
              <a
                target="_blank"
                href="https://wa.me/+201060733679"
                className="mr-[15px] p-3 bg-stone-900 rounded-lg"
              >
                <i className="fa-brands fa-whatsapp text-indigo-600 text-xl font-normal"></i>
              </a>
            </ul>
          </article>
          <article className="w-full flex justify-center mt-5">
            <div className="w-[340px] h-auto bg-stone-900 rounded-2xl flex flex-col p-[20px]">
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
                  <p className="text-white text-base font-normal font-['Poppins']">
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
              href="https://drive.google.com/file/d/17E5Vd8eJ8aUUtkXAbQWaVNEFNQhemPoP/view?usp=sharing.pdf"
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
