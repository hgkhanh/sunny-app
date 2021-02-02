import { render, screen } from '@testing-library/react';
import App from './App';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';

const mockStore = configureMockStore([thunk]);
describe('<App />', () => {
  test('should renders home page with App name', () => {
    const store = mockStore({});

    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const linkElement = screen.getByText(/Follow weather of the city you like/i);
    expect(linkElement).toBeInTheDocument();
  });
});
