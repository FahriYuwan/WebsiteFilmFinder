import { useState } from 'react';
import { usePage, useForm, router } from "@inertiajs/react";
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
  const { countries: initialCountries, actors: initialActors, awards: initialAwards, genres: initialGenres } = usePage().props;
  const [countriesList, setCountriesList] = useState('');
  const [bannerFile, setBannerFile] = useState(null);
  const [bannerPreview, setBannerPreview] = useState(null);  
  const [actors, setActors] = useState([]);
  const [genres, setGenres] = useState([]);
  const [genreOptions, setGenreOptions] = useState(initialGenres);
  const [actorOptions, setActorOptions] = useState(initialActors);
  const [awardOptions, setAwardOptions] = useState(initialAwards);
  const [Awards, setAwards] = useState([]);
  const [title, setTitle] = useState('');
  const [alternativeTitle, setAlternativeTitle] = useState('');
  const [year, setYear] = useState('');
  const [availability, setAvailability] = useState('');
  const [trailerLink, setTrailerLink] = useState('');
  const [synopsis, setSynopsis] = useState('');
  const [duration, setDuration] = useState('');
  const { put } = useForm();

  const handleBannerUploadChange = (e) => {
    const file = e.target.files[0];
    setBannerFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBannerPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setBannerPreview(null);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'country_name') {
      setCountriesList(value);
      // alert('Country selected: ' + value);
    } else if (name === 'Title') {
      setTitle(value);
      // alert('Title: ' + value);
    } else if (name === 'Alternative Title') {
      setAlternativeTitle(value);
      // alert('Alternative Title: ' + value);
    } else if (name === 'Year') {
      // alert('Year: ' + value);
      setYear(value);
    } else if (name === 'Availability') {
      // alert('Availability: ' + value);
      setAvailability(value);
    } else if (name === 'Trailer Link') {
      // alert('Trailer Link: ' + value);
      setTrailerLink(value);
    } else if (name === 'Synopsis') {
      // alert('Synopsis: ' + value);
      setSynopsis(value);
    } else if (name === 'duration') {
      // alert('Duration: ' + value);
      setDuration(value);
    }
  };

  // const removeActor = (id) => {
  //   setActors(actors.filter(actor => actor.id !== id));
  // };

  const handleGenreChange = (e) => {
    const { name, value } = e.target;
    setGenres(value);
    console.log(value);
  };

  const handleAutocompleteChange = (event, value) => {
    setActors(value);
    console.log(value);
  };

  const handleAwardsChange = (event, value) => {
    setAwards(value);
    console.log(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Siapkan FormData untuk Cloudinary
    const formData = new FormData();
    formData.append("file", bannerFile);  // Pastikan bannerFile berisi file yang akan di-upload
    formData.append("upload_preset", "ml_default"); // Isi dengan Upload Preset Anda
    formData.append("cloud_name", "dp4sbd8c9"); // Isi dengan Cloud Name Anda

    try {
        // Upload gambar ke Cloudinary
        // const res = await fetch(`https://api.cloudinary.com/v1_1/dp4sbd8c9/image/upload`, {
        //     method: "POST",
        //     body: formData
        // });
        // const data = await res.json();

        // // Dapatkan URL gambar dari Cloudinary
        // const imageUrl = data.secure_url;
        // console.log(imageUrl);

        // Kirim data lainnya ke server Laravel
        put(route('cms.dramainput.store', {
            bannerFile: bannerFile, 
            title: title,
            alternative_title: alternativeTitle,
            year_release: year,
            countries_id: countriesList,
            availability: availability,
            url_trailer: trailerLink,
            awards_id: Awards,
            duration: duration,
            genres_id: genres,
            actors_id: actors,
            synopsis: synopsis
        }, {headers: {
          'Content-Type': 'multipart/form-data',  // Set appropriate headers
          }}), {
            onSuccess: () => {
                // Reset semua state setelah sukses
                setBannerFile(null);
                setBannerLink('');
                setBannerPreview('');
                setTitle('');
                setAlternativeTitle('');
                setYear('');
                setCountriesList('');
                setAvailability('');
                setTrailerLink('');
                setAwards([]);
                setDuration('');
                setSynopsis('');
                setGenres([]);
                setActors([]);
                alert('Film has been added!');
                router.get(route('cms.dramainput.index'));
            },
            onError: (errors) => {
                console.log(errors);
            }
        });
    } catch (error) {
        console.error("Error uploading image to Cloudinary:", error);
    }
};

  return (
    <>
      <div className="flex">
        <Sidebar active_input_new_film={true} />
        <div className="flex-1 flex flex-col items-center p-10 bg-gray-800 text-white">
          <div className="w-full max-w-6xl bg-dark-card-bg rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-center mb-8">Input New Film</h1>
            <form className="space-y-6" onSubmit={handleSubmit} encType="multipart/form-data">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="space-y-2 w-full md:w-1/3">
                <label htmlFor="bannerFile" className="block text-sm font-medium">Banner Image</label>
                <InputField
                  id="bannerFile"
                  name="bannerFile"
                  type="file"
                  accept="image/*"
                  required
                  onChange={handleBannerUploadChange}
                />
                {bannerPreview && <img id="banner-preview" className="mt-4 w-full rounded-md" src={bannerPreview} alt="Banner Preview" />}                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full md:w-2/3">
                  <div className="space-y-2">
                    <label htmlFor="title" className="block text-sm font-medium">Title</label>
                    <InputField
                      id="title"
                      name="Title"
                      type="text"
                      placeholder="Enter film title"
                      value={title}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="alternative-title" className="block text-sm font-medium">Alternative Title</label>
                    <InputField
                      id="alternative-title"
                      name="Alternative Title"
                      type="text"
                      placeholder="Enter alternative title"
                      value={alternativeTitle}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="year" className="block text-sm font-medium">Year</label>
                    <InputField
                      id="year"
                      name="Year"
                      type="number"
                      placeholder="Enter year"
                      value={year}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="country" className="block text-sm font-medium">Country</label>
                    <InputField
                      id="countries_id"
                      name="country_name"
                      type="select"
                      placeholder="Select country"
                      value={initialCountries}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="availability" className="block text-sm font-medium">Availability</label>
                    <InputField
                      id="availability"
                      name="Availability"
                      type="text"
                      placeholder="Enter availability (e.g., Netflix, Hulu)"
                      value={availability}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="trailer" className="block text-sm font-medium">Trailer Link</label>
                    <InputField
                      id="trailer"
                      name="Trailer Link"
                      type="url"
                      placeholder="Enter trailer link"
                      value={trailerLink}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="awards" className="block text-sm font-medium">Awards</label>
                    <StyledAutocomplete
                      className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:ring focus:ring-blue-500 text-white"
                      placeholder="Search for awards"
                      multiple
                      id="tags-outlined"
                      options={awardOptions}
                      getOptionLabel={(option) => option.award_name}
                      filterSelectedOptions
                      onChange={handleAwardsChange}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Award Name"
                          placeholder="Search Awards"
                        />
                      )}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="duration" className="block text-sm font-medium">Duration</label>
                    <InputField
                      id="duration"
                      name="duration"
                      type="number"
                      placeholder="Enter duration"
                      value={duration}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="synopsis" className="block text-sm font-medium">Synopsis</label>
                <textarea id="synopsis" name="Synopsis" rows="4" className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:ring focus:ring-blue-500 text-white" placeholder="Enter synopsis" value={synopsis} onChange={handleInputChange}></textarea>
              </div>
              <h3 className="mb-4 font-semibold text-white">Genres</h3>
              <InputField
                id="genre_id"
                name="genre_name"
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
                  options={actorOptions}
                  getOptionLabel={(option) => option.actor_name}
                  defaultValue={[actorOptions[0]]}
                  filterSelectedOptions
                  onChange={handleAutocompleteChange}
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