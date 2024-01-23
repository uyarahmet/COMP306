import React, { useEffect, useState } from "react";

import Loading from "../components/UI/Loading";
import ProductCard from "../components/UI/ProductCard";
import Form from "../components/Form/Form";
import ProductPageTitle from "../components/UI/ProductPageTitle";

function Rent() {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (response.ok) {
        const result = await response.json();
        setProduct(result);
      } else {
        throw new Error("Datas couldnt fetch");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const isContentLoading = isLoading ? (
    <Loading />
  ) : (
    <section className="box-border">
      <Form />
      <div>
        <ProductPageTitle>Real Estates & Homes for Sale</ProductPageTitle>
        <div className="md:flex">
          <div className="hidden md:flex w-1/2  pt-7">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.1909945492375!2d28.833082775513436!3d40.999192619985074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa49f65565ccf%3A0xb5aee30acacd589b!2zWmFmZXIsIFnEsWxkxLFyxLFtIEJleWF6xLF0IENkLiAxNC8zIEQ6MSwgMzQxOTQgQmFow6dlbGlldmxlci_EsHN0YW5idWw!5e0!3m2!1sen!2str!4v1700319375067!5m2!1sen!2str"
              className="w-full h-[800px] border-4 shadow-2xl"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="md:w-1/2 lg:flex lg:flex-col lg:justify-center lg:items-center lg:pl-5">
            <div className="p-5 bg-white text-center my-5 hidden lg:block w-full">
              <h2 className="text-xl">Real Estates & Homes for Rent</h2>
            </div>
            <div className="flex justify-center lg:justify-start flex-col lg:flex-row gap-5 items-center lg:flex-wrap md:overflow-y-auto lg:max-h-[700px] w-full">
                {product ? (
                  product.map((item) => (
                    <ProductCard key={item.id} item={item} />
                  ))
                ) : (
                  <p>Something went wrong!</p>
                )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  return <>{isContentLoading}</>;
}

export default Rent;
