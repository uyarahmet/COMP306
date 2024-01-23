import React from "react";
import mobileImg from "../assets/images/mobile-sell.png";
import desktopImg from "../assets/images/desktop-sell.png";
import houseIcon from "../assets/images/house-icon.svg";
import { FaWhatsapp } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

function Sell() {
  return (
    <section>
      <div className="relative">
        <img
          className="lg:hidden w-full max-h-[341px]"
          src={mobileImg}
          alt="sell-image"
        />
        <img
          className="hidden lg:block w-full max-h-[454px]"
          src={desktopImg}
          alt="sell-image"
        />
        <div className="sell-text">
          <h1 className="text-white mb-14 text-3xl lead-h1  leading-10 w-[300px] h-[120px] text-center lg:text-5xl lg:w-full font-semibold">
            Sell your home with us and be sure that you didn’t sell it short
          </h1>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row-reverse lg:pt-24 box-content lg:px-32">
        <div className="flex justify-center">
          <img
            src={houseIcon}
            alt="house-icon"
            className="text-center mb-[-4rem] w-[310px] lg:w-[1200px]"
          />
        </div>
        <article className="mx-14 flex flex-col justify-center gap-16">
          <div>
            <h2 className="text-start text-black text-4xl font-bold  mb-5">
              Sell your home with professional agents
            </h2>
            <p className="text-base font-normal ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              numquam officiis asperiores veniam nam fuga exercitationem harum
              autem, eum vero.
            </p>
          </div>
          <div>
            <h2 className="text-start text-black text-4xl font-bold  mb-5">
              Sell directly to Opendoor
            </h2>
            <p className="text-base font-normal ">
              Get an all-cash offer from our trusted partner, Opendoor, to sell
              your home faster and avoid the hassle of showings.
            </p>
          </div>
          <div>
            <h2 className="text-start text-black text-4xl font-bold  mb-5">
              Contact Us
            </h2>
            <p className="mb-10">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos, inventore.
            </p>
            <div className="flex items-center justify-center lg:justify-start gap-8 z-10">
              <div>
                <a
                  href="tel:+905498705654"
                  className="w-20 bg-neutral-700 rounded-full flex items-center justify-center p-5 card-scale hover:bg-neutral-800"
                >
                  <FaPhoneAlt color="white" size={40} />
                </a>
                <p>Call Now</p>
              </div>
              <div>
                <a
                  href="https://wa.me/+905377674049"
                  className="w-20 bg-green-500 rounded-full flex items-center justify-center p-4 card-scale hover:bg-green-700"
                >
                  <FaWhatsapp color="white" size={50} />
                </a>
                <p>Whatsapp</p>
              </div>
              <div>
                <a
                  className="w-20 bg-blue-500 card-scale hover:bg-blue-700 rounded-full flex items-center justify-center p-4 "
                  href="https://t.me/Chocolate_bunn"
                >
                  <FaTelegram color="white" size={50} />
                </a>
                <p>Telegram</p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Sell;
