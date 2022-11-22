import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
    this.resetMovie = this.resetMovie.bind(this);
    this.inputMovieTitle = this.inputMovieTitle.bind(this);
    this.inputMovieSubtitle = this.inputMovieSubtitle.bind(this);
    this.inputMovieImage = this.inputMovieImage.bind(this);
    this.inputMovieStoryline = this.inputMovieStoryline.bind(this);
    this.inputMovieRating = this.inputMovieRating.bind(this);
    this.inputMovieGenre = this.inputMovieGenre.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  onClick({ target }) {
    const { name, value } = target;

    this.setState({ [name]: value });
  }

  resetMovie() {
    const { onClick } = this.props;
    onClick(this.state);

    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  inputMovieTitle() {
    const { title } = this.state;

    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        Título
        <input
          name="title"
          type="text"
          id="title-input"
          data-testid="title-input"
          value={ title }
          onChange={ this.onClick }
        />
      </label>
    );
  }

  inputMovieSubtitle() {
    const { subtitle } = this.state;

    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          name="subtitle"
          value={ subtitle }
          type="text"
          id="subtitle-input"
          data-testid="subtitle-input"
          onChange={ this.onClick }
        />
      </label>
    );
  }

  inputMovieImage() {
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input
          name="imagePath"
          type="text"
          data-testid="image-input"
          onChange={ this.onClick }
        />
      </label>
    );
  }

  inputMovieStoryline() {
    const { storyline } = this.state;

    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          id="storyline-input"
          data-testid="storyline-input"
          cols="30"
          rows="10"
          onChange={ this.onClick }
          value={ storyline }
        />
      </label>
    );
  }

  inputMovieRating() {
    const { rating } = this.state;
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="rating"
          id="rating-input"
          data-testid="rating-input"
          onChange={ this.onClick }
          value={ rating }
        />
      </label>
    );
  }

  inputMovieGenre() {
    const { genre } = this.state;

    return (
      <label htmlFor="genre-input" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          id="genre-input"
          data-testid="genre-input"
          value={ genre }
          onChange={ this.onClick }
        >
          <option data-testid="genre-option" value="action">
            Ação
          </option>
          <option data-testid="genre-option" value="comedy">
            Comédia
          </option>
          <option data-testid="genre-option" value="thriller">
            Suspense
          </option>
        </select>
      </label>
    );
  }

  render() {
    return (
      <form action="" data-testid="add-movie-form">
        { this.inputMovieTitle() }
        { this.inputMovieSubtitle() }
        { this.inputMovieImage() }
        { this.inputMovieStoryline() }
        { this.inputMovieRating() }
        { this.inputMovieGenre() }
        <button
          data-testid="send-button"
          type="button"
          onClick={ () => {
            const { onClick } = this.props;

            this.resetMovie();
            onClick(this.state);
          } }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
