import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MaxUsageForm } from './MaxUsageForm';

describe('MaxUsageForm Component', () => {
  const mockProps = {
    maxUsage: false,
    setMaxUsage: jest.fn(),
    maxUsageCount: '',
    setMaxUsageCount: jest.fn(),
    errors: {}
  };

  test('renders checkbox correctly', () => {
    render(<MaxUsageForm {...mockProps} />);
    
    expect(screen.getByText('Maximumgebruik')).toBeInTheDocument();
    
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
  });

  test('does not show count input when maxUsage is false', () => {
    render(<MaxUsageForm {...mockProps} />);
    
    expect(screen.queryByText('Aantal keer te gebruiken')).not.toBeInTheDocument();
  });

  test('shows count input when maxUsage is true', () => {
    const propsWithMaxUsage = {
      ...mockProps,
      maxUsage: true
    };
    
    render(<MaxUsageForm {...propsWithMaxUsage} />);
    
    expect(screen.getByText('Aantal keer te gebruiken')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('0')).toBeInTheDocument();
  });

  test('toggles maxUsage when checkbox is clicked', () => {
    render(<MaxUsageForm {...mockProps} />);
    
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    
    expect(mockProps.setMaxUsage).toHaveBeenCalledWith(true);
  });

  test('calls setMaxUsageCount when count input changes', () => {
    const propsWithMaxUsage = {
      ...mockProps,
      maxUsage: true
    };
    
    render(<MaxUsageForm {...propsWithMaxUsage} />);
    
    const countInput = screen.getByPlaceholderText('0');
    fireEvent.change(countInput, { target: { value: '10' } });
    
    expect(mockProps.setMaxUsageCount).toHaveBeenCalledWith('10');
  });

  test('shows validation error for maxUsageCount', () => {
    const propsWithError = {
      ...mockProps,
      maxUsage: true,
      errors: {
        maxUsageCount: 'Aantal moet groter zijn dan 0'
      }
    };
    
    render(<MaxUsageForm {...propsWithError} />);
    
    expect(screen.getByText('Aantal moet groter zijn dan 0')).toBeInTheDocument();
  });
});
