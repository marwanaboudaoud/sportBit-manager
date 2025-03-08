import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { DiscountsCodes } from './DiscountsCodes';

// Mock the discount codes data to avoid external dependencies
jest.mock('./discountscodesData', () => ({
  DiscountCodesData: [
    {
      id: 1,
      title: 'Zomer Korting',
      dealName: 'ZOMER2023',
      discount: '10% korting',
      startDate: '01-06-2023',
      expiryDate: '31-08-2023'
    },
    {
      id: 2,
      title: 'Nieuw Lid Korting',
      dealName: 'NIEUWLID',
      discount: '€5,00 korting',
      badge: { text: 'VERLOPEN', variant: 'danger' }
    }
  ]
}));

describe('DiscountsCodes Component', () => {
  test('renders discount cards', () => {
    render(
      <MemoryRouter>
        <DiscountsCodes />
      </MemoryRouter>
    );
    
    expect(screen.getByText('Zomer Korting')).toBeInTheDocument();
    expect(screen.getByText('ZOMER2023')).toBeInTheDocument();
 
    expect(screen.queryByText('Nieuw Lid Korting')).not.toBeInTheDocument();
  });
  
  test('filters discount cards when searching', () => {
    render(
      <MemoryRouter>
        <DiscountsCodes />
      </MemoryRouter>
    );
    
    const searchInput = screen.getByPlaceholderText('Zoek op trefwoord');
    fireEvent.change(searchInput, { target: { value: 'Zomer' } });
    

    const searchButton = screen.getByText('Zoeken');
    fireEvent.click(searchButton);
    

    expect(screen.getByText('Zomer Korting')).toBeInTheDocument();
  });
  
  test('shows inactive discount codes when checkbox is checked', () => {
    render(
      <MemoryRouter>
        <DiscountsCodes />
      </MemoryRouter>
    );
    
    const checkbox = screen.getByLabelText(/Toon ook inactieve kortingscodes/i);
    fireEvent.click(checkbox);
    
    expect(screen.getByText('Zomer Korting')).toBeInTheDocument();
    expect(screen.getByText('Nieuw Lid Korting')).toBeInTheDocument();
  });
});
