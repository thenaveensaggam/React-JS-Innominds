import React from "react";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

const LayoutHeading = (props) => {
  const { heading, color, isAddBtn } = props;

  return (
    <div className="max-w-6xl mx-auto mt-6 px-4">
      {/* Heading and Button on same line */}
      <div className="flex items-center justify-between">
        <h1 className={`text-2xl font-semibold ${color}`}>{heading}</h1>
        {isAddBtn && (
          <Link
            to="/contacts/add"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-3 py-2 cursor-pointer rounded-lg shadow-md transition-colors duration-200"
          >
            <Plus size={20} />
            Add
          </Link>
        )}
      </div>

      {/* Subheading / description */}
      <p className="italic text-gray-600 mt-2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci
        aspernatur aut cumque dolore doloremque dolorum earum eligendi error ex
        impedit ipsa itaque magni maiores maxime molestias mollitia nihil nobis
        non officia placeat quae, quasi reprehenderit sed sequi sint, vero.
      </p>
    </div>
  );
};

export default LayoutHeading;
