import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { DiscountsCards } from './DiscountCard';

describe('DiscountsCards Component', () => {
  test('renders card with all properties', () => {
    const mockProps = {
      title: 'Summer Sale',
      dealName: 'SUMMER2023',
      discount: '20% korting',
      startDate: '01-06-2023',
      expiryLabel: 'tot',
      expiryDate: '31-08-2023',
      onDelete: jest.fn()
    };
    
    render(<DiscountsCards {...mockProps} />);
    
    expect(screen.getByText('Summer Sale')).toBeInTheDocument();
    expect(screen.getByText('SUMMER2023')).toBeInTheDocument();
    expect(screen.getByText('20% korting')).toBeInTheDocument();
    expect(screen.getByText('01-06-2023')).toBeInTheDocument();
    expect(screen.getByText('tot')).toBeInTheDocument();
    expect(screen.getByText('31-08-2023')).toBeInTheDocument();
  });
  
  test('renders card with badge', () => {
    const mockProps = {
      title: 'Expired Offer',
      badge: { text: 'VERLOPEN', variant: 'danger' },
      dealName: 'EXPIRED',
      discount: '5% korting',
      onDelete: jest.fn()
    };
    
    render(<DiscountsCards {...mockProps} />);
    
    expect(screen.getByText('Expired Offer')).toBeInTheDocument();
    expect(screen.getByText('VERLOPEN')).toBeInTheDocument();
  });
  
  test('calls onDelete when delete button is clicked', () => {
    const mockOnDelete = jest.fn();
    const mockProps = {
      title: 'Delete Test',
      dealName: 'DELETE',
      discount: '10% korting',
      onDelete: mockOnDelete
    };
    
    render(<DiscountsCards {...mockProps} />);
    
    const deleteButton = screen.getByLabelText('Delete');
    fireEvent.click(deleteButton);
    
    expect(mockOnDelete).toHaveBeenCalledTimes(1);
  });
});
