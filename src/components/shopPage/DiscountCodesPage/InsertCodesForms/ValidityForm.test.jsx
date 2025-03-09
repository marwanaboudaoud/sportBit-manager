import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ValidityForm } from './ValidityForm';

describe('ValidityForm Component', () => {
  const mockProps = {
    validFrom: '2023-06-01',
    setValidFrom: jest.fn(),
    validTo: '2023-08-31',
    setValidTo: jest.fn(),
    errors: {}
  };

  test('renders date inputs correctly', () => {
    render(<ValidityForm {...mockProps} />);
    
    expect(screen.getByText('Geldig van datum')).toBeInTheDocument();
    expect(screen.getByText(/Geldig tot datum/)).toBeInTheDocument();
    expect(screen.getByText(/\(optioneel\)/)).toBeInTheDocument();
    
    const dateInputs = screen.getAllByDisplayValue(/2023-/);
    expect(dateInputs.length).toBe(2);
  });

  test('calls change handlers when dates change', () => {
    render(<ValidityForm {...mockProps} />);
    
    const dateInputs = screen.getAllByDisplayValue(/2023-/);
    
    fireEvent.change(dateInputs[0], { target: { value: '2023-07-01' } });
    expect(mockProps.setValidFrom).toHaveBeenCalledWith('2023-07-01');
    
    fireEvent.change(dateInputs[1], { target: { value: '2023-09-30' } });
    expect(mockProps.setValidTo).toHaveBeenCalledWith('2023-09-30');
  });

  test('shows validation errors when present', () => {
    const propsWithErrors = {
      ...mockProps,
      errors: {
        validFrom: 'Geldig van datum is verplicht',
        validTo: 'Geldig tot datum moet na geldig van datum liggen'
      }
    };
    
    render(<ValidityForm {...propsWithErrors} />);
    
    expect(screen.getByText('Geldig van datum is verplicht')).toBeInTheDocument();
    expect(screen.getByText('Geldig tot datum moet na geldig van datum liggen')).toBeInTheDocument();
  });

  test('handles empty date values correctly', () => {
    const propsWithEmptyDates = {
      ...mockProps,
      validFrom: '',
      validTo: ''
    };
    
    const { container } = render(<ValidityForm {...propsWithEmptyDates} />);
    
    const dateInputs = container.querySelectorAll('input[type="date"]');
    expect(dateInputs.length).toBe(2);
    expect(dateInputs[0].value).toBe('');
    expect(dateInputs[1].value).toBe('');
  });
});
