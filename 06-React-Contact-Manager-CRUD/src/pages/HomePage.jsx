import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div
      className="h-screen w-full bg-cover bg-center flex items-center justify-between px-12"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f')",
      }}
    >
      {/* Left Side Heading */}
      <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg max-w-md">
        Contact Manager App
      </h1>

      {/* Right Side Buttons */}
      <div className="flex space-x-4">
        <Link
          to="/contacts/admin"
          className="px-6 py-3 bg-green-600 text-white rounded-xl shadow-lg hover:bg-green-700 transition"
        >
          Contacts Admin
        </Link>
        <Link
          to="/"
          className="px-6 py-3 bg-yellow-500 text-black rounded-xl shadow-lg hover:bg-yellow-600 transition"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
