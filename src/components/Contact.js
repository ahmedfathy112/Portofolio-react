import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ydq7hod",
        "template_un9433f",
        form.current,
        "Qy_gtKV_i7kNrc_-_"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
    alert("Thank you for message");
  };
  return (
    <>
      <section className=" bg-black rounded-[20px] min-h-[120vh] p-[30px] pt-10 flex justify-center flex-col w-full max-md:min-h-[150vh]">
        <article className="flex flex-row w-full justify-start">
          <h2 className="text-white text-[40px] font-bold font-['Roboto Slab']">
            Contact
          </h2>
          <div className="w-[300px] h-[0px] mt-[35px] ml-[20px] border-2 border-red-500"></div>
        </article>
        <article
          className="w-[60%]  h-[588px] flex flex-col mt-[35px] mx-auto bg-black rounded-[20px] border-2 border-neutral-800 p-[30px] pl-[40px] max-md:pl-[20px] max-md:w-full max-md:translate-x-0"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <div className="w-[486.67px] max-md:w-full">
            <span className="text-neutral-400 text-[25px] font-normal font-['Poppins'] uppercase leading-[41px]">
              I
            </span>
            <span className="text-neutral-400 text-[25px] font-normal font-['Poppins'] lowercase leading-[41px]">
              ’M ALWAYS OPEN TO DISCUSSING PRODUCT
              <br />
            </span>
            <span className="text-gray-200 text-[25px] font-semibold font-['Poppins'] lowercase leading-[41px]">
              DESIGN WORK OR PARTNERSHIPS.
            </span>
          </div>
          <form
            className="w-full flex flex-col mt-[40px]"
            ref={form}
            onSubmit={sendEmail}
          >
            <div className="w-full relative flex flex-col">
              <label
                htmlFor="name"
                className="text-neutral-400 text-base font-medium font-['DM Sans'] mb-3"
              >
                *name
              </label>
              <input
                name="user_name"
                type="text"
                className="bg-transparent border-b-2 rounded-md  border-zinc-800 outline-none text-white"
              ></input>
            </div>
            <div className="w-full relative flex flex-col mt-[20px]">
              <label
                htmlFor="email"
                className="text-neutral-400 text-base font-medium font-['DM Sans'] mb-3"
              >
                *Email
              </label>
              <input
                name="user_email"
                type="Email"
                className="bg-transparent border-b-2 rounded-md  border-zinc-800 outline-none text-white"
              ></input>
            </div>
            <div className="w-full relative flex flex-col mt-[20px]">
              <label
                htmlFor="message"
                className="text-neutral-400 text-base font-medium font-['DM Sans'] mb-3"
              >
                *Message
              </label>
              <input
                name="message"
                type="text"
                className="bg-transparent border-b-2 rounded-md  border-zinc-800 outline-none text-white max-md:h-[40px]"
              ></input>
            </div>
            <button
              type="submit"
              value="Send"
              className="flex  text-white mt-[25px] items-center justify-center border-2 w-[133px] h-[50px] rounded-xl text-center"
            >
              Submit
            </button>
          </form>
        </article>
      </section>
    </>
  );
}

export default Contact;
