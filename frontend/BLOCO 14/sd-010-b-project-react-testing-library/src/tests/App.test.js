import React from 'react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../helpers/renderWithRouters';
import App from '../App';

describe('Testa requisito 1 App.js', () => {
  it('renders a reading with the text `Pokédex`', () => {
    const { getByText } = renderWithRouter(
      <App />,
    );
    const heading = getByText(/Pokédex/i);
    expect(heading).toBeInTheDocument();
  });

  it('shows the Pokédex when the route is "/" ', () => {
    const { getByText, history } = renderWithRouter(<App />);
    const route = '/';
    history.push(route);

    const home = getByText('Home');
    expect(home).toBeInTheDocument();
    expect(getByText('Encountered pokémons')).toBeInTheDocument();
  });

  it('Renderiza o segundo link com texto About ', () => {
    const { getByText, history } = renderWithRouter(<App />);
    const route = '/';
    history.push(route);

    const about = getByText('About');
    expect(about).toBeInTheDocument();
  });

  it('Renderiza o terceiro link Favorite Pokémons', () => {
    const { getByText, history } = renderWithRouter(<App />);
    const route = '/';
    history.push(route);

    const favorite = getByText('Favorite Pokémons');
    expect(favorite).toBeInTheDocument();
  });

  it('Testa se primeiro link redireciona para "/"', () => {
    const { getByText, history } = renderWithRouter(<App />);

    const home = getByText('Home');
    userEvent.click(home);
    expect(history.location.pathname).toBe('/');
  });

  it('Testa se primeiro link redireciona para "About"', () => {
    const { getByText, history } = renderWithRouter(<App />);

    const about = getByText('About');
    userEvent.click(about);
    expect(history.location.pathname).toBe('/about');
  });

  it('Testa se primeiro link redireciona para "Favorites"', () => {
    const { getByText, history } = renderWithRouter(<App />);

    const favorite = getByText('Favorite Pokémons');
    userEvent.click(favorite);
    expect(history.location.pathname).toBe('/favorites');
  });

  it('Testa se primeiro link redireciona para "Not Found"', () => {
    const { getByText, history } = renderWithRouter(<App />);

    history.push('/notFound');
    expect(history.location.pathname).toBe('/notFound');
    const notFound = getByText('Page requested not found');
    expect(notFound).toBeInTheDocument();
  });
});
