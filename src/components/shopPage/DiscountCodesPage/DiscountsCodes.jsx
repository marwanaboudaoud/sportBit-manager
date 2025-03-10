import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPlus, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { DiscountsCards } from './Cards/DiscountCard';
import { Link } from 'react-router-dom';
import { DiscountCodesData } from './discountscodesData';


export const DiscountsCodes = () => {
    const [showInactive, setShowInactive] = useState(false);
    const [searchKeyword, setSearchKeyword] = useState('');
    const [activeSearchTerm, setActiveSearchTerm] = useState('');
    const [sortOption, setSortOption] = useState('');

    const [cardsData, setCardsData] = useState(DiscountCodesData);

    let filteredCards = cardsData.filter(card =>
        showInactive ||
        !(card.badge && card.badge.text === "VERLOPEN")
    );

    if (activeSearchTerm.trim() !== '') {
        filteredCards = filteredCards.filter(card =>
            card.title.toLowerCase().includes(activeSearchTerm.toLowerCase()) ||
            (card.dealName && card.dealName.toLowerCase().includes(activeSearchTerm.toLowerCase()))
        );
    }


    if (sortOption === 'date') {
        filteredCards = [...filteredCards].sort((a, b) => {
            if (!a.startDate) return 1;
            if (!b.startDate) return -1;
            const [dayA, monthA, yearA] = a.startDate.split('-').map(Number);
            const [dayB, monthB, yearB] = b.startDate.split('-').map(Number);
            const dateA = new Date(yearA, monthA - 1, dayA);
            const dateB = new Date(yearB, monthB - 1, dayB);
            return dateA - dateB;
        });
    } else if (sortOption === 'title') {
        filteredCards = [...filteredCards].sort((a, b) =>
            a.title.localeCompare(b.title)
        );
    }

    const handleDelete = (id) => {
        console.log(`Deleting card with ID: ${id}`);
        setCardsData(prevCards => prevCards.filter(card => card.id !== id));
    };

    const handleShowInactiveChange = (e) => {
        setShowInactive(e.target.checked);
    };

    const handleSortChange = (e) => {
        setSortOption(e.target.value);
    };

    const handleSearchChange = (e) => {
        const newSearchValue = e.target.value;
        setSearchKeyword(newSearchValue);

        if (newSearchValue.trim() === '') {
            setActiveSearchTerm('');
        }
    };

    const handleSearchClick = () => {
        setActiveSearchTerm(searchKeyword);
        console.log(`Searching for: ${searchKeyword}`);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSearchClick();
        }
    };

    return (
        <div className="discount-codes-container">
            <div className="discount-codes-wrapper">
                <h4 className="discount-codes-title roboto-bold mb-4">
                    Kortingscodes overzicht
                </h4>
                <p className="discount-codes-description roboto-regular mb-3">
                    In deze module kun je kortingscodes maken en zelf kiezen waar (potentiële) leden ze voor kunnen gebruiken.
                    <br />Bijvoorbeeld een kortingscode voor nieuwe leden die hun proefleskosten kunnen terugverdienen.
                </p>
                <hr className="mb-4" />
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="discount-codes-form-container d-flex flex-wrap align-items-center">
                        <div className="discount-codes-select-container mb-3 mb-xl-0">
                        <div className="custom-select-wrapper">
                            <select
                                className="form-select custom-select-input"
                                value={sortOption}
                                onChange={handleSortChange}
                            >
                                <option value="">Sorteer</option>
                                <option value="title">Sorteer op titel</option>
                                <option value="date">Sorteer op geldig van datum</option>
                            </select>
                            <div className="select-icon">
                                <FontAwesomeIcon icon={faCaretDown} />
                            </div>
                            </div>
                        </div>
                        <div className="discount-codes-search-container mb-3 mb-xl-0">
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control custom-search-input"
                                    placeholder="Zoek op trefwoord"
                                    value={searchKeyword}
                                    onChange={handleSearchChange}
                                    onKeyDown={handleKeyDown}
                                />
                                <button
                                    className="button button-primary search-button"
                                    type="button"
                                    onClick={handleSearchClick}
                                >
                                    <FontAwesomeIcon icon={faSearch} className="me-2 search-icon" />
                                    <span className='search-text'>Zoeken</span>
                                </button>
                            </div>
                        </div>
                        <div className="discount-codes-checkbox-container mb-3 mb-xl-0">
                            <div className="form-check custom-checkbox">
                                <input
                                    className="form-check-input me-4"
                                    type="checkbox"
                                    id="showInactiveCheckbox"
                                    checked={showInactive}
                                    onChange={handleShowInactiveChange}
                                />
                                <label className="form-check-label roboto-regular" htmlFor="showInactiveCheckbox">
                                    Toon <span className="text-decoration-underline">ook </span>inactieve kortingscodes
                                </label>
                            </div>
                        </div>
                        <div className="discount-codes-button-container ms-xl-auto">
                            <Link to="/shop/discount-codes/new"
                                className="button button-primary new-code-button"
                                type="button"
                            >
                                <FontAwesomeIcon icon={faPlus} className="me-2 search-icon" />
                                <span className='search-text'>Nieuwe kortingscode</span>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
            <div className="discounts-cards-container d-flex mt-4 ">
                {filteredCards.map(card => (
                    <div key={card.id}>
                        <DiscountsCards
                            title={card.title}
                            badge={card.badge}
                            startDate={card.startDate}
                            expiryLabel={card.expiryLabel}
                            expiryDate={card.expiryDate}
                            dealName={card.dealName}
                            discount={card.discount}
                            onDelete={() => handleDelete(card.id)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

