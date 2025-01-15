import React from "react";
import bg01 from "../assets/bg01.jpg";

export default function Home() {
  return (
    <>
      <div
        className="h-screen w-full bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bg01})` }}
      >
        homepage
      </div>
    </>
  );
}
