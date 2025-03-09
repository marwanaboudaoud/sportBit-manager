import React from 'react';
import { render, screen } from '@testing-library/react';
import { DiscountTypeForm } from './DiscountTypeForm';

describe('DiscountTypeForm Component', () => {
  const mockProps = {
    discountType: 'Bedrag',
    setDiscountType: jest.fn(),
    discountValue: '',
    setDiscountValue: jest.fn(),
    discountCents: '',
    setDiscountCents: jest.fn(),
    errors: {}
  };

  test('renders with amount discount type by default', () => {
    render(<DiscountTypeForm {...mockProps} />);
    
    expect(screen.getByText('Type korting')).toBeInTheDocument();
    expect(screen.getByText('Kortingsbedrag')).toBeInTheDocument();
    
    const inputs = screen.getAllByRole('spinbutton');
    expect(inputs).toHaveLength(2);
  });
  
  test('changes form when discount type changes', () => {
    const { rerender } = render(<DiscountTypeForm {...mockProps} />);
    

    expect(screen.getByText('Kortingsbedrag')).toBeInTheDocument();
    expect(screen.getAllByRole('spinbutton')).toHaveLength(2);
    
    rerender(
      <DiscountTypeForm 
        {...mockProps} 
        discountType="Percentage" 
      />
    );
    
    expect(screen.getByText('Kortingspercentage')).toBeInTheDocument();
    expect(screen.getAllByRole('spinbutton')).toHaveLength(1);
  });
  
  test('shows validation error for discount value', () => {
    const propsWithErrors = {
      ...mockProps,
      errors: {
        discountValue: 'Voer een geldig bedrag in'
      }
    };
    
    render(<DiscountTypeForm {...propsWithErrors} />);
    
    expect(screen.getByText('Voer een geldig bedrag in')).toBeInTheDocument();
  });
  
  test('shows validation error for discount cents', () => {
    const propsWithCentsError = {
      ...mockProps,
      errors: {
        discountCents: 'Voer geldige centen in'
      }
    };
    
    render(<DiscountTypeForm {...propsWithCentsError} />);
    
    expect(screen.getByText('Voer geldige centen in')).toBeInTheDocument();
  });
});
