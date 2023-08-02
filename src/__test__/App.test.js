import { render, screen, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import store from '../redux/store';
import App from '../App';

beforeEach(() => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
  );
});

describe('Integration Test', () => {
  it('should render all mock heros', async () => {
    const heros = document.querySelectorAll('.hero');
    expect(heros.length).toBe(3);
  });

  it('should filter only one hero', async () => {
    await act(async () => {
      const antiMage = screen.queryByText('Anti-Mage');
      const crystal = screen.queryByText('Crystal Maiden');
      const searchBar = screen.getByPlaceholderText('Search hero by name...');
      const heroList = screen.getByTestId('heros-list');

      expect(antiMage).toBeInTheDocument();
      expect(searchBar).toBeInTheDocument();

      userEvent.type(searchBar, 'Crystal');

      expect(heroList.children.length).toBe(1);
      expect(antiMage).not.toBeInTheDocument();
      expect(crystal).toBeInTheDocument();
    });
  });
});
