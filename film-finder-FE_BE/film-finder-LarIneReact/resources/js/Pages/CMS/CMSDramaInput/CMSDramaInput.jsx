import { useState } from 'react';
import Sidebar from '../../../components/Sidebar';
import InputField from '../../../components/InputField';
import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

const StyledAutocomplete = styled(Autocomplete)({
  "& .MuiInputLabel-outlined:not(.MuiInputLabel-shrink)": {
    transform: "translate(34px, 20px) scale(1);"
  },
  "& .MuiInputLabel-outlined": {
    color: "white"
  },
  "&.Mui-focused .MuiInputLabel-outlined": {
    color: "white"
  },
  "& .MuiAutocomplete-inputRoot": {
    color: "white",
    '&[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input:first-of-type': {
      paddingLeft: 26
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "white"
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "white"
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "white"
    }
  },
  "& .MuiInputBase-input": {
    color: "white"
  },
  "& .MuiFormLabel-root": {
    color: "white"
  },
  "& .MuiChip-label": {
    color: "white"
  }
});

function CMSDramaInput() {
  const [bannerLink, setBannerLink] = useState('');
  const [bannerPreview, setBannerPreview] = useState('');
  const [actors, setActors] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedFilms, setSelectedFilms] = useState([]); // State baru untuk menyimpan nilai yang dipilih

  const handleBannerLinkChange = (e) => {
    setBannerLink(e.target.value);
  };

  const handlePreviewImage = () => {
    setBannerPreview(bannerLink);
  };

  const removeActor = (id) => {
    setActors(actors.filter(actor => actor.id !== id));
  };

  const handleGenreChange = (e) => {
    const {name, value } = e.target;
    setGenres(value);
    console.log('Genres:', value); // Debug: Melihat nilai yang dihasilkan
  };

  const handleAutocompleteChange = (event, value) => {
    setSelectedFilms(value);
    console.log('Selected films:', value); // Debug: Melihat nilai yang dihasilkan
  };

  const genreOptions = [
    { id: 1, name: 'action'},
    { id: 2, name: 'adventure'},
    { id: 3, name: 'romance'},
    { id: 4, name: 'drama'},
    { id: 5, name: 'sliceOfLife'},
  ];

  const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    {
      title: 'The Lord of the Rings: The Return of the King',
      year: 2003,
    },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
    {
      title: 'The Lord of the Rings: The Fellowship of the Ring',
      year: 2001,
    },
  ];

  return (
    <>
    <div className="flex">
      <Sidebar active_input_new_film={true} />
      <div className="flex-1 flex flex-col items-center p-10 bg-gray-800 text-white">
        <div className="w-full max-w-6xl bg-dark-card-bg rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-center mb-8">Input New Film</h1>
          <form className="space-y-6">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="space-y-2 w-full md:w-1/3">
                <label htmlFor="banner" className="block text-sm font-medium">Banner Image Link</label>
                <InputField
                  id="banner"
                  name="Banner"
                  type="text"
                  placeholder="Enter banner image link"
                  value={bannerLink}
                  onChange={handleBannerLinkChange}
                />
                <button
                  type="button"
                  className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md"
                  onClick={handlePreviewImage}
                >
                  Preview Image
                </button>
                {bannerPreview && <img id="banner-preview" className="mt-4 w-full rounded-md" src={bannerPreview} alt="Banner Preview" />}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full md:w-2/3">
                <div className="space-y-2">
                  <label htmlFor="title" className="block text-sm font-medium">Title</label>
                  <InputField
                    id="title"
                    name="Title"
                    type="text"
                    placeholder="Enter film title"
                    value=""
                    onChange={() => {}}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="alternative-title" className="block text-sm font-medium">Alternative Title</label>
                  <InputField
                    id="alternative-title"
                    name="Alternative Title"
                    type="text"
                    placeholder="Enter alternative title"
                    value=""
                    onChange={() => {}}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="year" className="block text-sm font-medium">Year</label>
                  <InputField
                    id="year"
                    name="Year"
                    type="number"
                    placeholder="Enter year"
                    value=""
                    onChange={() => {}}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="country" className="block text-sm font-medium">Country</label>
                  <InputField
                    id="country"
                    name="Country"
                    type="select"
                    placeholder="Select country"
                    value={[]}
                    onChange={() => {}}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="availability" className="block text-sm font-medium">Availability</label>
                  <InputField
                    id="availability"
                    name="Availability"
                    type="text"
                    placeholder="Enter availability (e.g., Netflix, Hulu)"
                    value={[]}
                    onChange={() => {}}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="trailer" className="block text-sm font-medium">Trailer Link</label>
                  <InputField
                    id="trailer"
                    name="Trailer Link"
                    type="url"
                    placeholder="Enter trailer link"
                    value=""
                    onChange={() => {}}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="awards" className="block text-sm font-medium">Awards</label>
                  <InputField
                    id="awards"
                    name="Awards"
                    type="select"
                    placeholder="Select award"
                    value={[]} // Ganti ini dengan array awards yang sesuai
                    onChange={() => {}}
                  />
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="synopsis" className="block text-sm font-medium">Synopsis</label>
              <textarea id="synopsis" rows="4" className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:ring focus:ring-blue-500 text-white" placeholder="Enter synopsis"></textarea>
            </div>
            <h3 className="mb-4 font-semibold text-white">Genres</h3>
            <InputField
              id="genres"
              name="Genres"
              type="checkbox"
              placeholder="Select genres"
              value={genres}
              onChange={handleGenreChange}
              options={genreOptions}
            />
            <div className="space-y-2">
            <label htmlFor="actors" className="block text-sm font-medium">Search Actors</label>
              <StyledAutocomplete
                className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:ring focus:ring-blue-500 text-white"
                placeholder="Search for actors"
                multiple
                id="tags-outlined"
                options={top100Films}
                getOptionLabel={(option) => option.title}
                defaultValue={[top100Films[0]]}
                filterSelectedOptions
                onChange={handleAutocompleteChange} // Tambahkan onChange di sini
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Actor Name"
                    placeholder="Search Actors"
                  />
                )}
              />
            </div>
            <div className="text-center">
              <button type="submit" className="px-6 py-3 bg-blue-500 rounded-md text-white font-semibold hover:bg-blue-600 transition">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}

export default CMSDramaInput;