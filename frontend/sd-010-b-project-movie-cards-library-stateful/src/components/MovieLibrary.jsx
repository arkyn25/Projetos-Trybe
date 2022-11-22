import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectGenre: '',
      movies: props.movies,
    };
  }

  onSearchTextChange = ({ target }) => {
    this.setState({
      searchText: target.value,
    });
  }

  onBookmarkedChange = ({ target }) => {
    this.setState({
      bookmarkedOnly: target.checked,
    });
  }

  onSelectedGenreChange = ({ target }) => {
    this.setState({
      selectGenre: target.value,
    });
  }

  renderNewMovie = (param, movies) => {
    this.setState({
      movies: [...movies, param],
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectGenre, movies } = this.state;
    const filteredMovies = movies
      .filter((movie) => (
        movie.title.includes(searchText)
        || movie.subtitle.includes(searchText)
        || movie.storyline.includes(searchText)));

    const bookmarkedFilter = filteredMovies
      .filter((movie) => ((bookmarkedOnly === false) ? true : movie.bookmarked));

    const filterByGenre = bookmarkedFilter
      .filter((movie) => movie.genre.includes(selectGenre));

    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectGenre={ selectGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ filterByGenre } />

        <AddMovie onClick={ (newMovie) => this.renderNewMovie(newMovie, movies) } />
      </div>
    );
  }
}

MovieLibrary.propTypes = ({
  movies: PropTypes.arrayOf(PropTypes.object),
}).isRequired;

export default MovieLibrary;
