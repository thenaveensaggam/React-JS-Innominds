import React from "react";
import Product from "../components/Product.jsx";

const About = () => {
  return (
    <>
      <section className="container mx-auto px-4 py-16 flex items-center">
        <div className="w-1/2 pl-12">
          <Product />
        </div>

        <div className="w-1/2">
          <img
            src="https://via.placeholder.com/600"
            alt="Landing Image"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>
    </>
  );
};
export default About;
