import PropTypes from 'prop-types';
import {Link} from '@inertiajs/react';

const MovieCard = (props) => {

  return (
    <Link href={`/detailpage/${props.id}`} className="max-w-sm rounded overflow-hidden shadow-lg bg-white block">
      <img className="w-full" src={props.imgSrc} alt={`${props.title} Image`} />
      <div className="px-6 py-4">
        <div className="text-black text-xl mb-2">{props.title}</div>
        <p className="text-gray-700 text-base">{props.description}</p>
      </div>
    </Link>
  );
};
MovieCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
MovieCard.defaultProps = {
  imgSrc: 'https://via.placeholder.com/300',
  title: 'Movie Title',
  description: 'Movie Description',
};


export default MovieCard;
