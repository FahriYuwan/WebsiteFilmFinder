import PropTypes from 'prop-types';
import { Link } from '@inertiajs/react';

const MovieCard = (props) => {

  const truncateText = (text, maxLength = 50) => {
    if (text.length <= maxLength) {
      return text;
    }
    const truncated = text.substring(0, maxLength);
    const lastCommaIndex = truncated.lastIndexOf(',');
    if (lastCommaIndex !== -1) {
      return truncated.substring(0, lastCommaIndex) + '...';
    }
    return truncated + '...';
  };

  const handleImageError = (e) => {
    e.target.src = 'https://via.placeholder.com/300'; // URL gambar fallback
  };

  return (
    <Link href={`/detailpage/${props.id}`} className="max-w-sm rounded overflow-hidden shadow-lg bg-white block">
      <img
        className="w-full"
        src={props.imgSrc}
        alt={`${props.title} Image`}
        onError={handleImageError} // Tambahkan onError handler
      />
      <div className="px-6 py-4">
        <div className="text-black text-xl mb-2">{props.title}</div>
        <p className="text-gray-700 text-base">{truncateText(props.availability)}</p>
      </div>
    </Link>
  );
};

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  availability: PropTypes.string.isRequired,
};

MovieCard.defaultProps = {
  imgSrc: 'https://via.placeholder.com/300',
  title: 'Movie Title',
  availability: 'N/A',
};

export default MovieCard;