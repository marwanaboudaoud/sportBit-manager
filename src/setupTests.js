
import '@testing-library/jest-dom';


jest.mock('@fortawesome/react-fontawesome', () => ({
  FontAwesomeIcon: () => 'FontAwesomeIcon'
}));
