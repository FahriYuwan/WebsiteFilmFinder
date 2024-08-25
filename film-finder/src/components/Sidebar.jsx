function Sidebar() {
  return (
    <div className="h-screen w-64 bg-gray-800 text-white flex flex-col p-4">
    <div className="text-2xl font-semibold mb-6 text-center">
      Film Finder
    </div>
    <ul className="space-y-4">
      <li>
        <a href="#" className="hover:bg-gray-700 p-2 rounded">
          Home
        </a>
      </li>
      <li>
        <a href="#" className="hover:bg-gray-700 p-2 rounded">
          Popular Movies
        </a>
      </li>
      <li>
        <a href="#" className="hover:bg-gray-700 p-2 rounded">
          Top Rated
        </a>
      </li>
      <li>
        <a href="#" className="hover:bg-gray-700 p-2 rounded">
          Upcoming
        </a>
      </li>
      <li>
        <a href="#" className="hover:bg-gray-700 p-2 rounded">
          Favorites
        </a>
      </li>
      <li>
        <a href="#" className="hover:bg-gray-700 p-2 rounded">
          Search
        </a>
      </li>
    </ul>
  </div>
);
};

export default Sidebar;