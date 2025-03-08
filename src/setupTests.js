// Add Jest extended matchers
import '@testing-library/jest-dom';

// Mock FontAwesome icons
jest.mock('@fortawesome/react-fontawesome', () => ({
  FontAwesomeIcon: () => 'FontAwesomeIcon'
}));
