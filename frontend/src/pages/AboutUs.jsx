import React from "react";
import Logo from "../components/BrandLogo/Logo";

function AboutUs() {
  return (
    <>
      <article className="w-full box-border">
        <h2 className="font-extrabold text-5xl text-center border-b-2 py-3">
          Who Are <span className="text-green-900">We</span>?
        </h2>
        <div className="px-5 py-2 bg-zinc-100">
          <h2 className="font-bold text-3xl py-3 lg:text-center">
            Our <span className="text-green-900">Vision</span>;
          </h2>
          <p className="pl-3 lg:px-40 text-xl lg:text-center">
            At <span className="text-green-900 font-bold text-2xl">Royar</span>,
            our vision is to redefine the real estate industry with unwavering
            commitment, innovation and a customer-focused approach. We aim to be
            the first choice for individuals and families looking for their
            dream homes and the reliable partner for real estate investors
            looking for profitable opportunities. Our goal is to create a
            lasting impact on the communities we serve by setting new standards
            of excellence, transparency and professionalism in the real estate
            industry.
          </p>
          <div className="flex justify-center items-center">
            <div className="h-1 w-full lg:w-1/2 bg-green-950 my-5" />
          </div>
          <h2 className="font-bold text-3xl py-3 lg:text-center">
            Our <span className="text-green-900">Mission</span>;
          </h2>
          <p className="pl-3 lg:px-40 text-xl lg:text-center">
            <span className="text-green-900 font-bold text-2xl">Royar</span>'s
            mission is to empower our team of dedicated real estate agents to
            provide our clients with exceptional guidance, support and
            expertise. We strive to create an environment where home buyers,
            sellers and investors feel safe and informed throughout their real
            estate journey. Through ethical practices, cutting-edge technology,
            and personalized service, we are committed to positively
            contributing to the growth and development of the real estate
            industry while helping our clients achieve their real estate goals.
          </p>
          <div className="flex justify-center items-center">
            <div className="h-1 w-full lg:w-1/2 bg-green-950 my-5 shadow-xl" />
          </div>
          <div className="lg:px-40 text-xl lg:text-center card-scale hover:my-5">
            <h2 className="font-bold text-3xl py-3 text-green-900">Address</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.1909945492375!2d28.833082775513436!3d40.999192619985074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa49f65565ccf%3A0xb5aee30acacd589b!2zWmFmZXIsIFnEsWxkxLFyxLFtIEJleWF6xLF0IENkLiAxNC8zIEQ6MSwgMzQxOTQgQmFow6dlbGlldmxlci_EsHN0YW5idWw!5e0!3m2!1sen!2str!4v1700319375067!5m2!1sen!2str"
              className="py-2 w-full h-80 shadow-xl"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <p className="text-xl text-center lg:mt-3">
              Fevzi Çakmak Mahallesi Yıldirim Beyazit Caddesi Basak Sk.No:3/1
              34194 Bahçelievler / ISTANBUL
            </p>
          </div>
          <div className="flex justify-center items-center">
            <div className="h-1 w-full lg:w-1/2 bg-green-950 my-5" />
          </div>
        </div>
        <div className="p-10 text-6xl text-center bg-neutral-900 text-yellow-50 mb-[-3rem] card-scale">
          <Logo width={"300px"} height={"100px"} fontSize={"60px"} subTextSize={"30px"} />
        </div>
      </article>
    </>
  );
}

export default AboutUs;
