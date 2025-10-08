import React from "react";

import CounterRedux from "../components/CounterRedux.jsx";

const Home = () => {
  return (
    <>
      <section className="container mx-auto px-4 py-16 flex items-center">
        <div className="w-full">
          <CounterRedux />
        </div>
      </section>
    </>
  );
};
export default Home;
