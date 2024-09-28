import NavBar from "../../components/NavBar";   
import MovieDetails from "../../components/MovieDetails";
import Comments from "../../components/Comments";

const DetailPage = ({film}) => {
    return (
      <div className="bg-gray-900 text-white min-h-screen">
        <NavBar />
        <MovieDetails film = {film}/>
        <Comments film = {film}/>
      </div>   
    );
  };

  export default DetailPage;