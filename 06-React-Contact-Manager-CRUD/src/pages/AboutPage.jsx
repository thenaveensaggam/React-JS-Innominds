import React from "react";
import LayoutHeading from "../components/LayoutHeading";

const AboutPage = () => {
  return (
    <>
      <LayoutHeading heading={"About us"} color={"text-gray-700"} />

      <div className="max-w-6xl mx-auto mt-6 px-4">
        <div className="md:w-2/3">
          <ul className="divide-y divide-gray-200 border border-gray-200 rounded-xl bg-white shadow">
            <li className="px-4 py-3">
              Application Name :{" "}
              <span className="font-semibold">Contact Manager App</span>
            </li>
            <li className="px-4 py-3">
              Version : <span className="font-semibold">1.0.1</span>
            </li>
            <li className="px-4 py-3">
              Developed By :{" "}
              <span className="font-semibold">React Developers</span>
            </li>
            <li className="px-4 py-3">
              Tech Stack :{" "}
              <span className="font-semibold">
                React , TailwindCSS, json-server, CRUD , Routing , Axios
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
