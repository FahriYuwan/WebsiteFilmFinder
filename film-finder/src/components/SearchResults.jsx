import React, { useState } from 'react';
import PropTypes from 'prop-types';

const initialData = [
  {
    title: 'Once Upon a Time in Hollywood',
    year: '2019',
    platforms: 'Netflix, Amazon Prime',
    status: 'Released',
    genre: 'Drama, Comedy',
    actors: 'Leonardo DiCaprio, Brad Pitt, Margot Robbie'
  },
  {
    title: 'The Morning Show',
    year: '2021',
    platforms: 'Apple TV+',
    status: 'Released',
    award: 'Golden Globe 2022 Best Drama',
    genre: 'Drama',
    actors: 'Jennifer Aniston, Steve Carell, Reese Witherspoon'
  },
  {
    title: 'Extraction',
    year: '2020',
    platforms: 'Netflix',
    status: 'Released',
    award: 'Emmy 2021 Best Stunt Coordination',
    genre: 'Action, Thriller',
    actors: 'Chris Hemsworth, Rudhraksh Jaiswal'
  },
  {
    title: 'The Boys',
    year: '2019',
    platforms: 'Amazon Prime',
    status: 'Released',
    award: 'Saturn Award 2020 Best Superhero Series',
    genre: 'Action, Comedy, Drama',
    actors: 'Karl Urban, Jack Quaid, Antony Starr'
  },
{
  title: 'Stranger Things',
  year: '2016',
  platforms: 'Netflix',
  status: 'Released',
  award: 'Emmy 2017 Best Drama Series',
  genre: 'Drama, Fantasy, Horror',
  actors: 'Winona Ryder, David Harbour, Finn Wolfhard'
},
{
  title: 'Breaking Bad',
  year: '2008',
  platforms: 'Netflix, Amazon Prime',
  status: 'Released',
  award: 'Emmy 2014 Best Drama Series',
  genre: 'Crime, Drama, Thriller',
  actors: 'Bryan Cranston, Aaron Paul, Anna Gunn'
},
{
  title: 'The Mandalorian',
  year: '2019',
  platforms: 'Disney+',
  status: 'Released',
  award: 'Emmy 2020 Best Visual Effects',
  genre: 'Action, Adventure, Fantasy',
  actors: 'Pedro Pascal, Gina Carano, Giancarlo Esposito'
},
{
  title: 'Game of Thrones',
  year: '2011',
  platforms: 'HBO Max',
  status: 'Released',
  award: 'Emmy 2019 Best Drama Series',
  genre: 'Action, Adventure, Drama',
  actors: 'Emilia Clarke, Peter Dinklage, Kit Harington'
},
{
  title: 'The Witcher',
  year: '2019',
  platforms: 'Netflix',
  status: 'Released',
  award: 'Saturn Award 2021 Best Fantasy Series',
  genre: 'Action, Adventure, Drama',
  actors: 'Henry Cavill, Freya Allan, Anya Chalotra'
},
{
  title: 'The Crown',
  year: '2016',
  platforms: 'Netflix',
  status: 'Released',
  award: 'Golden Globe 2021 Best Drama Series',
  genre: 'Biography, Drama, History',
  actors: 'Claire Foy, Olivia Colman, Imelda Staunton'
},
{
  title: 'The Queen\'s Gambit',
  year: '2020',
  platforms: 'Netflix',
  status: 'Released',
  award: 'Golden Globe 2021 Best Limited Series',
  genre: 'Drama',
  actors: 'Anya Taylor-Joy, Chloe Pirrie, Bill Camp'
},
{
  title: 'The Handmaid\'s Tale',
  year: '2017',
  platforms: 'Hulu',
  status: 'Released',
  award: 'Emmy 2017 Best Drama Series',
  genre: 'Drama, Sci-Fi, Thriller',
  actors: 'Elisabeth Moss, Yvonne Strahovski, Joseph Fiennes'
},
{
  title: 'Westworld',
  year: '2016',
  platforms: 'HBO Max',
  status: 'Released',
  award: 'Emmy 2017 Best Supporting Actress',
  genre: 'Drama, Mystery, Sci-Fi',
  actors: 'Evan Rachel Wood, Jeffrey Wright, Ed Harris'
},
{
  title: 'The Umbrella Academy',
  year: '2019',
  platforms: 'Netflix',
  status: 'Released',
  award: 'Saturn Award 2019 Best Superhero Series',
  genre: 'Action, Adventure, Comedy',
  actors: 'Elliot Page, Tom Hopper, David Castañeda'
},
{
  title: 'Black Mirror',
  year: '2011',
  platforms: 'Netflix',
  status: 'Released',
  award: 'Emmy 2017 Best TV Movie',
  genre: 'Drama, Sci-Fi, Thriller',
  actors: 'Daniel Lapaine, Hannah John-Kamen, Michaela Coel'
},
{
  title: 'The Office',
  year: '2005',
  platforms: 'Netflix, Amazon Prime',
  status: 'Released',
  award: 'Golden Globe 2006 Best Actor',
  genre: 'Comedy',
  actors: 'Steve Carell, Jenna Fischer, John Krasinski'
},
{
  title: 'Friends',
  year: '1994',
  platforms: 'Netflix, HBO Max',
  status: 'Released',
  award: 'Emmy 2002 Best Comedy Series',
  genre: 'Comedy, Romance',
  actors: 'Jennifer Aniston, Courteney Cox, Lisa Kudrow'
},
{
  title: 'The Big Bang Theory',
  year: '2007',
  platforms: 'Netflix, Amazon Prime',
  status: 'Released',
  award: 'Emmy 2010 Best Comedy Series',
  genre: 'Comedy, Romance',
  actors: 'Johnny Galecki, Jim Parsons, Kaley Cuoco'
},
{
  title: 'Sherlock',
  year: '2010',
  platforms: 'Netflix, Amazon Prime',
  status: 'Released',
  award: 'Emmy 2014 Best TV Movie',
  genre: 'Crime, Drama, Mystery',
  actors: 'Benedict Cumberbatch, Martin Freeman, Una Stubbs'
},
{
  title: 'House of Cards',
  year: '2013',
  platforms: 'Netflix',
  status: 'Released',
  award: 'Golden Globe 2014 Best Actor',
  genre: 'Drama',
  actors: 'Kevin Spacey, Robin Wright, Michael Kelly'
},
{
  title: 'Narcos',
  year: '2015',
  platforms: 'Netflix',
  status: 'Released',
  award: 'Golden Globe 2016 Best Actor',
  genre: 'Biography, Crime, Drama',
  actors: 'Pedro Pascal, Wagner Moura, Boyd Holbrook'
},
{
  title: 'Mindhunter',
  year: '2017',
  platforms: 'Netflix',
  status: 'Released',
  award: 'Saturn Award 2018 Best New Media TV Series',
  genre: 'Crime, Drama, Thriller',
  actors: 'Jonathan Groff, Holt McCallany, Anna Torv'
},
{
  title: 'Ozark',
  year: '2017',
  platforms: 'Netflix',
  status: 'Released',
  award: 'Emmy 2020 Best Supporting Actress',
  genre: 'Crime, Drama, Thriller',
  actors: 'Jason Bateman, Laura Linney, Sofia Hublitz'
},
{
  title: 'Better Call Saul',
  year: '2015',
  platforms: 'Netflix, Amazon Prime',
  status: 'Released',
  award: 'Emmy 2015 Best Supporting Actor',
  genre: 'Crime, Drama',
  actors: 'Bob Odenkirk, Rhea Seehorn, Jonathan Banks'
},
{
  title: 'Peaky Blinders',
  year: '2013',
  platforms: 'Netflix',
  status: 'Released',
  award: 'BAFTA 2018 Best Drama Series',
  genre: 'Crime, Drama',
  actors: 'Cillian Murphy, Paul Anderson, Helen McCrory'
},
{
  title: 'The Walking Dead',
  year: '2010',
  platforms: 'Netflix, Amazon Prime',
  status: 'Released',
  award: 'Saturn Award 2012 Best Horror TV Series',
  genre: 'Drama, Horror, Thriller',
  actors: 'Andrew Lincoln, Norman Reedus, Melissa McBride'
},
{
  title: 'Fargo',
  year: '2014',
  platforms: 'Hulu',
  status: 'Released',
  award: 'Emmy 2014 Best Miniseries',
  genre: 'Crime, Drama, Thriller',
  actors: 'Billy Bob Thornton, Martin Freeman, Allison Tolman'
},
{
  title: 'True Detective',
  year: '2014',
  platforms: 'HBO Max',
  status: 'Released',
  award: 'Emmy 2014 Best Director',
  genre: 'Crime, Drama, Mystery',
  actors: 'Matthew McConaughey, Woody Harrelson, Michelle Monaghan'
},
{
  title: 'Homeland',
  year: '2011',
  platforms: 'Netflix, Amazon Prime',
  status: 'Released',
  award: 'Emmy 2012 Best Drama Series',
  genre: 'Crime, Drama, Mystery',
  actors: 'Claire Danes, Mandy Patinkin, Damian Lewis'
},
{
  title: 'Dexter',
  year: '2006',
  platforms: 'Netflix, Amazon Prime',
  status: 'Released',
  award: 'Golden Globe 2010 Best Actor',
  genre: 'Crime, Drama, Mystery',
  actors: 'Michael C. Hall, Jennifer Carpenter, David Zayas'
},
{
  title: 'Lost',
  year: '2004',
  platforms: 'Netflix, Amazon Prime',
  status: 'Released',
  award: 'Emmy 2005 Best Drama Series',
  genre: 'Adventure, Drama, Fantasy',
  actors: 'Jorge Garcia, Josh Holloway, Yunjin Kim'
},
{
  title: 'The Sopranos',
  year: '1999',
  platforms: 'HBO Max',
  status: 'Released',
  award: 'Emmy 2004 Best Drama Series',
  genre: 'Crime, Drama',
  actors: 'James Gandolfini, Lorraine Bracco, Edie Falco'
},
{
  title: 'Mad Men',
  year: '2007',
  platforms: 'Netflix, Amazon Prime',
  status: 'Released',
  award: 'Emmy 2008 Best Drama Series',
  genre: 'Drama',
  actors: 'Jon Hamm, Elisabeth Moss, Vincent Kartheiser'
},
{
  title: 'The Wire',
  year: '2002',
  platforms: 'HBO Max',
  status: 'Released',
  award: 'Peabody Award 2004',
  genre: 'Crime, Drama, Thriller',
  actors: 'Dominic West, Lance Reddick, Sonja Sohn'
},
{
  title: 'Chernobyl',
  year: '2019',
  platforms: 'HBO Max',
  status: 'Released',
  award: 'Emmy 2019 Best Limited Series',
  genre: 'Drama, History, Thriller',
  actors: 'Jessie Buckley, Jared Harris, Stellan Skarsgård'
},
{
  title: 'The Expanse',
  year: '2015',
  platforms: 'Amazon Prime',
  status: 'Released',
  award: 'Saturn Award 2017 Best Science Fiction TV Series',
  genre: 'Drama, Mystery, Sci-Fi',
  actors: 'Steven Strait, Dominique Tipper, Wes Chatham'
},
{
  title: 'The Marvelous Mrs. Maisel',
  year: '2017',
  platforms: 'Amazon Prime',
  status: 'Released',
  award: 'Golden Globe 2018 Best TV Series',
  genre: 'Comedy, Drama',
  actors: 'Rachel Brosnahan, Alex Borstein, Tony Shalhoub'
},
{
  title: 'The Good Place',
  year: '2016',
  platforms: 'Netflix, Amazon Prime',
  status: 'Released',
  award: 'Critics\' Choice TV Award 2018 Best Actress',
  genre: 'Comedy, Drama, Fantasy',
  actors: 'Kristen Bell, William Jackson Harper, Jameela Jamil'
},
{
  title: 'Brooklyn Nine-Nine',
  year: '2013',
  platforms: 'Netflix, Hulu',
  status: 'Released',
  award: 'Golden Globe 2014 Best TV Series',
  genre: 'Comedy, Crime',
  actors: 'Andy Samberg, Stephanie Beatriz, Terry Crews'
},
{
  title: 'Parks and Recreation',
  year: '2009',
  platforms: 'Netflix, Amazon Prime',
  status: 'Released',
  award: 'Golden Globe 2014 Best Actress',
  genre: 'Comedy',
  actors: 'Amy Poehler, Rashida Jones, Nick Offerman'
},
{
  title: 'Community',
  year: '2009',
  platforms: 'Netflix, Hulu',
  status: 'Released',
  award: 'Critics\' Choice TV Award 2012 Best Comedy Series',
  genre: 'Comedy',
  actors: 'Joel McHale, Danny Pudi, Donald Glover'
},
{
  title: 'Arrested Development',
  year: '2003',
  platforms: 'Netflix, Hulu',
  status: 'Released',
  award: 'Emmy 2004 Best Comedy Series',
  genre: 'Comedy',
  actors: 'Jason Bateman, Michael Cera, Portia de Rossi'
},
{
  title: '30 Rock',
  year: '2006',
  platforms: 'Netflix, Hulu',
  status: 'Released',
  award: 'Emmy 2007 Best Comedy Series',
  genre: 'Comedy',
  actors: 'Tina Fey, Alec Baldwin, Tracy Morgan'
},
{
  title: 'Veep',
  year: '2012',
  platforms: 'HBO Max',
  status: 'Released',
  award: 'Emmy 2015 Best Comedy Series',
  genre: 'Comedy',
  actors: 'Julia Louis-Dreyfus, Tony Hale, Anna Chlumsky'
},
{
  title: 'Fleabag',
  year: '2016',
  platforms: 'Amazon Prime',
  status: 'Released',
  award: 'Emmy 2019 Best Comedy Series',
  genre: 'Comedy, Drama',
  actors: 'Phoebe Waller-Bridge, Sian Clifford, Olivia Colman'
},
{
  title: 'Killing Eve',
  year: '2018',
  platforms: 'Hulu',
  status: 'Released',
  award: 'Golden Globe 2019 Best Actress',
  genre: 'Action, Adventure, Drama',
  actors: 'Jodie Comer, Sandra Oh, Fiona Shaw'
},
{
  title: 'The Americans',
  year: '2013',
  platforms: 'Amazon Prime',
  status: 'Released',
  award: 'Emmy 2018 Best Drama Series',
  genre: 'Crime, Drama, Mystery',
  actors: 'Keri Russell, Matthew Rhys, Keidrich Sellati'
},
{
  title: 'Hannibal',
  year: '2013',
  platforms: 'Netflix, Amazon Prime',
  status: 'Released',
  award: 'Saturn Award 2014 Best Network TV Series',
  genre: 'Crime, Drama, Horror',
  actors: 'Hugh Dancy, Mads Mikkelsen, Caroline Dhavernas'
},
{
  title: 'Mr. Robot',
  year: '2015',
  platforms: 'Amazon Prime',
  status: 'Released',
  award: 'Golden Globe 2016 Best TV Series',
  genre: 'Crime, Drama, Thriller',
  actors: 'Rami Malek, Christian Slater, Carly Chaikin'
}
];

const SearchResults = ({ filters }) => {
  const [data, setData] = useState(initialData);

  const filteredData = data.filter((item) => {
    const yearRange = filters.year ? filters.year.split('-') : [];
    const startYear = yearRange[0] ? parseInt(yearRange[0], 10) : null;
    const endYear = yearRange[1] ? parseInt(yearRange[1], 10) : null;

    return (
      (!filters.year || (item.year >= startYear && item.year <= endYear)) &&
      (!filters.genre || item.genre.includes(filters.genre)) &&
      (!filters.status || item.status === filters.status) &&
      (!filters.availability || item.platforms.includes(filters.availability)) &&
      (!filters.award || (filters.award === 'HasAward' ? item.award : !item.award))
    );
  });

  return (
    <div className="mt-8 max-w-4xl mx-auto">
      {filteredData.map((item, index) => (
        <div key={index} className="flex items-start space-x-4 mb-6 bg-gray-800 rounded p-4">
          <div className="w-24 h-24 bg-gray-300 rounded-lg flex-shrink-0">
            <img src="https://via.placeholder.com/96" alt={item.title} className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-semibold text-white">{item.title}</h2>
            <p className="text-sm text-gray-400">{item.year}</p>
            <p className="text-sm text-gray-400">{item.platforms}</p>
            <p className="text-sm text-gray-400">{item.status}</p>
            <p className="text-sm text-gray-400">{item.award}</p>
            <p className="text-sm text-gray-400">{item.genre}</p>
            <p className="text-sm text-gray-400">{item.actors}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

SearchResults.propTypes = {
  filters: PropTypes.shape({
    year: PropTypes.string,
    genre: PropTypes.string,
    status: PropTypes.string,
    availability: PropTypes.string,
    award: PropTypes.string,
  }).isRequired,
};

export default SearchResults;