import React from "react";
import Header from "../Components/Header";
import heroimage from "../assets/hero-image.png";
import herobackground from "../assets/hero-background.png";

const Home = () => {
  return (
    <>
      <Header />
      <section
        id="hero"
        className="bg-cover md:bg-contain bg-no-repeat bg-right pt-36 "
        style={{ backgroundImage: `url(${herobackground})` }}
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold leading-[64px] md:leading-[92px] text-white">
            THE <br />
            SHOE <br />
            COMPANY
          </h1>
          <div>
            <img
              className="w-full max-w-xl"
              src={heroimage}
              alt="white shoe image"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
