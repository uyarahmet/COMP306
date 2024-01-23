import React from "react";

import { FaWhatsapp } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import Logo from "../components/BrandLogo/Logo";

function Contact() {
  return (
    <>
      <article className="w-full box-border relative">
        <h2 className="font-extrabold text-5xl text-center border-b-2 py-3">
          Let's <span className="text-green-900">Connect</span>!
        </h2>
        <div className="px-5 py-2 bg-zinc-100 lg:flex lg:flex-row-reverse lg:items-center">
          <div className="z-10 lg:w-1/2 lg:ml-[-10rem] lg:bg-white lg:p-14 lg:shadow-lg card-scale">
            <div className="relative text-center">
              <h2 className="font-semibold text-2xl py-3 title-shadow">
                How can I<span className="text-green-900"> contact</span>?
              </h2>
              <p className="pl-2 pb-5 text-xl">
                Contact us effortlessly via WhatsApp, Telegram, or phone for
                personalized real estate assistance. Our dedicated agents are
                committed to promptly addressing your inquiries and needs
                through convenient communication channels, ensuring efficient
                and professional service.
              </p>
              <div className="flex items-center justify-center gap-8 z-10">
                <a
                  href="https://wa.me/+905377674049"
                  className="w-20 bg-green-500 rounded-full flex items-center justify-center p-4 card-scale hover:bg-green-700"
                >
                  <FaWhatsapp color="white" size={50} />
                </a>
                <a
                  className="w-20 bg-blue-500 card-scale hover:bg-blue-700 rounded-full flex items-center justify-center p-4 "
                  href="https://t.me/Chocolate_bunn"
                >
                  <FaTelegram color="white" size={50} />
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="h-1 w-1/2 bg-green-950 my-5" />
            </div>
            <h2 className="font-bold text-3xl py-3 text-center">
              Our <span className="text-green-900">mail</span> adresses;
            </h2>
            <p className="text-4xl flex flex-col text-green-900 font-bold underline text-center">
              <a href="mailto:ahmet@royar.co">ahmet@royar.co</a>
              <a href="mailto:ahmet@royar.co">roman@royar.co</a>
              <a href="mailto:ahmet@royar.co">support@royar.co</a>
            </p>
            <div className="flex items-center justify-center">
              <div className="h-1 w-1/2 bg-green-950 my-5" />
            </div>
          </div>
          <div id="adress" className="lg:w-1/2 z-0 hover:z-10 card-scale hover:my-5">
            <h2 className="font-bold text-3xl py-3 text-green-900">Address;</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.1909945492375!2d28.833082775513436!3d40.999192619985074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa49f65565ccf%3A0xb5aee30acacd589b!2zWmFmZXIsIFnEsWxkxLFyxLFtIEJleWF6xLF0IENkLiAxNC8zIEQ6MSwgMzQxOTQgQmFow6dlbGlldmxlci_EsHN0YW5idWw!5e0!3m2!1sen!2str!4v1700319375067!5m2!1sen!2str"
              className="py-2 w-full h-80 lg:h-[1000px] border-4 shadow-2xl"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <p className="text-xl text-center lg:mt-5">
              Fevzi Çakmak Mahallesi Yıldırım Beyazit Caddesi Başak Sk.No:3/1
              34194 Bahçelievler / İSTANBUL
            </p>
            <div className="flex items-center justify-center">
              <div className="h-1 w-1/2 bg-green-950 my-5" />
            </div>
          </div>
        </div>
        <div className="p-10 text-6xl text-center bg-neutral-900 text-yellow-50 mb-[-3rem] card-scale">
          <Logo width={"300px"} height={"100px"} fontSize={"60px"} subTextSize={"30px"} />
        </div>
      </article>
    </>
  );
}

export default Contact;
