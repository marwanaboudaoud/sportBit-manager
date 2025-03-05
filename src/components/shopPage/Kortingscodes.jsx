import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPlus } from '@fortawesome/free-solid-svg-icons';
import KortingCards from './KortingCard';

const Kortingscodes = () => {
    const [showInactive, setShowInactive] = useState(false);
    const [searchKeyword, setSearchKeyword] = useState('');
    const [activeSearchTerm, setActiveSearchTerm] = useState('');
    const [sortOption, setSortOption] = useState('');
   
    const [cardsData, setCardsData] = useState([
        {
            id: 1,
            title: "VRAAGROY",
            badge: { text: "ACTIEF", variant: "green" },
            expiryLabel: "tot",
            expiryDate: "21-12-2024",
            dealName: "Roy trakteert",
            discount: "€20 Korting",
        },
        {
            id: 2,
            title: "LENTE20",
            badge: { text: "VERLOPEN", variant: "danger" },
            dealName: "Lentedeal",
            discount: "€20 Korting",
        },
        {
            id: 3,
            title: "HERFST2023",
            badge: { text: "ACTIEF", variant: "success" },
            startDate: "10-10-2024",
            expiryLabel: "tot",
            expiryDate: "21-12-2024",
            dealName: "Herfstdeal",
            discount: "€20 Korting",
        },
        {
            id: 4,
            title: "QMNL10!",
            badge: { text: "ACTIEF", variant: "success" },
            startDate: "21-06-2023",
            expiryLabel: "tot",
            expiryDate: "21-12-2024",
            dealName: "Herfstdeal",
            discount: "€20 Korting",
        }
    ]);

    let filteredCards = cardsData.filter(card =>
        showInactive ||
        !(card.badge && card.badge.text === "VERLOPEN")
    );

    if (activeSearchTerm.trim() !== '') {
        filteredCards = filteredCards.filter(card =>
            card.title.toLowerCase().includes(activeSearchTerm.toLowerCase())
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
        setSearchKeyword(e.target.value);
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
        <div className="kortingscodes-container">
            <div className="kortingscodes-wrapper">
                <h4 className="kortingscodes-title fw-bold">
                    Kortingscodes overzicht
                </h4>
                <p className="kortingscodes-description mb-3">
                    In deze module kun je kortingscodes maken en zelf kiezen waar (potentiële) leden ze voor kunnen gebruiken.
                    <br />Bijvoorbeeld een kortingscode voor nieuwe leden die hun proefleskosten kunnen terugverdienen.
                </p>
                <hr className="mb-4" />
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="kortingscodes-form-container d-flex flex-wrap align-items-center">
                        <div className="kortingscodes-select-container mb-3 mb-lg-0">
                            <select
                                className="form-select custom-select-input"
                                value={sortOption}
                                onChange={handleSortChange}
                            >
                                <option value="">Selecteer sorteeroptie</option>
                                <option value="title">Sorteer op titel</option>
                                <option value="date">Sorteer op geldig van datum</option>
                            </select>
                        </div>
                        <div className="kortingscodes-search-container mb-3 mb-lg-0">
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
                                    className="btn btn-secondary"
                                    type="button"
                                    onClick={handleSearchClick}
                                >
                                    <FontAwesomeIcon icon={faSearch} className="me-2 search-icon" />
                                    <span className='search-text'>Zoeken</span>
                                </button>
                            </div>
                        </div>
                        <div className="kortingscodes-checkbox-container mb-3 mb-lg-0">
                            <div className="form-check custom-checkbox">
                                <input
                                    className="form-check-input me-4"
                                    type="checkbox"
                                    id="showInactiveCheckbox"
                                    checked={showInactive}
                                    onChange={handleShowInactiveChange}
                                />
                                <label className="form-check-label" htmlFor="showInactiveCheckbox">
                                    Toon <span className="text-decoration-underline">ook </span>inactieve kortingscodes
                                </label>
                            </div>
                        </div>
                        <div className="kortingscodes-button-container ms-lg-auto">
                            <button
                                className="btn btn-secondary"
                                type="button"
                                style={{ padding: '14px 20px', height: '50px' }}
                            >
                                <FontAwesomeIcon icon={faPlus} className="me-2 search-icon" />
                                <span className='search-text'>Nieuwe kortingscode</span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="korting-cards-container d-flex mt-4 ">
                {filteredCards.map(card => (
                    <div key={card.id}>
                        <KortingCards
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

export default Kortingscodes;
