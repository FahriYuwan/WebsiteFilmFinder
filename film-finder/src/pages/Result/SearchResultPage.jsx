import NavBar from '../../components/NavBar'; 
import FilterBar from '../../components/FilterBar'; 
import SearchResults from '../../components/SearchResults'; 

const SearchPage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen w-full">
      <NavBar />
      <div className="w-full p-4">
        <FilterBar />
        <SearchResults />
      </div>
    </div>
  );
};

export default SearchPage;
