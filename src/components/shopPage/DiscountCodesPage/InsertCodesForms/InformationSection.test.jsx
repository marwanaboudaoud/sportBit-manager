import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { InformationSection } from './InformationSection';

describe('InformationSection Component', () => {
  const mockProps = {
    discountCode: 'SUMMER2023',
    setDiscountCode: jest.fn(),
    fetchRandomWord: jest.fn(),
    title: 'Summer Discount',
    setTitle: jest.fn(),
    description: 'Get 10% off during summer',
    setDescription: jest.fn(),
    errors: {}
  };

  test('renders all form fields correctly', () => {
    render(<InformationSection {...mockProps} />);
    
    expect(screen.getByText('Informatie')).toBeInTheDocument();
    
    expect(screen.getByText('Titel')).toBeInTheDocument();
    expect(screen.getByText('Code')).toBeInTheDocument();
    expect(screen.getByText('Omschrijving')).toBeInTheDocument();
    
    expect(screen.getByDisplayValue('Summer Discount')).toBeInTheDocument();
    expect(screen.getByDisplayValue('SUMMER2023')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Get 10% off during summer')).toBeInTheDocument();
  });

  test('calls input change handlers correctly', () => {
    render(<InformationSection {...mockProps} />);
    
    const titleInput = screen.getByDisplayValue('Summer Discount');
    fireEvent.change(titleInput, { target: { value: 'New Title' } });
    expect(mockProps.setTitle).toHaveBeenCalledWith('New Title');
    
    const codeInput = screen.getByDisplayValue('SUMMER2023');
    fireEvent.change(codeInput, { target: { value: 'NEWCODE' } });
    expect(mockProps.setDiscountCode).toHaveBeenCalledWith('NEWCODE');
    
    const descriptionInput = screen.getByDisplayValue('Get 10% off during summer');
    fireEvent.change(descriptionInput, { target: { value: 'New description' } });
    expect(mockProps.setDescription).toHaveBeenCalledWith('New description');
  });

  test('shows validation errors when present', () => {
    const propsWithErrors = {
      ...mockProps,
      errors: {
        title: 'Titel is verplicht',
        discountCode: 'Code is verplicht',
        description: 'Omschrijving is verplicht'
      }
    };
    
    render(<InformationSection {...propsWithErrors} />);
    
    expect(screen.getByText('Titel is verplicht')).toBeInTheDocument();
    expect(screen.getByText('Code is verplicht')).toBeInTheDocument();
    expect(screen.getByText('Omschrijving is verplicht')).toBeInTheDocument();
  });

  test('calls fetchRandomWord when refresh icon is clicked', () => {
    render(<InformationSection {...mockProps} />);
    
    const refreshIcon = screen.getByTitle('Generate random code');
    fireEvent.click(refreshIcon);
    
    expect(mockProps.fetchRandomWord).toHaveBeenCalledTimes(1);
  });
});
