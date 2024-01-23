import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import Button from "./Button";

function HomePageCard({ id, title, text, btnText }) {
  const [bgGreen, setBgGreen] = useState({
    buy: false,
    sell: false,
    rent: false,
  });
  const handleMouseOver = (e) => {
    console.log(e);
    switch (e.target.id) {
      case "buy":
        setBgGreen((prev) => ({
          ...prev,
          buy: true,
        }));
        break;

      case "sell":
        setBgGreen((prev) => ({
          ...prev,
          sell: true,
        }));
        break;

      case "rent":
        setBgGreen((prev) => ({
          ...prev,
          rent: true,
        }));
        break;
    }
  };
  const handleMouseLeave = (e) => {
    switch (e.target.id) {
      case "buy":
        setBgGreen((prev) => ({
          ...prev,
          buy: false,
        }));
        break;

      case "sell":
        setBgGreen((prev) => ({
          ...prev,
          sell: false,
        }));
        break;

      case "rent":
        setBgGreen((prev) => ({
          ...prev,
          rent: false,
        }));
        break;
    }
  };

  return (
    <Link to={id}>
      <Card
        id={id}
        className={`h-[400px] w-[350px] lg:h-[600px] p-5 items-center justify-center ${id === "sell" ? "gap-3" : ""}`}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="my-5 text-xl">{text}</p>
        <Button
          className={`${
            bgGreen?.buy ? "bg-green-900 text-white" : ""
          } p-3 font-semibold uppercase border-2 border-green-900 rounded-sm`}
        >
          {btnText}
        </Button>
      </Card>
    </Link>
  );
}

export default HomePageCard;
