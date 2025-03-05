import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPlus } from '@fortawesome/free-solid-svg-icons';
import KortingCards from './KortingCard';

const Kortingscodes = () => {
    const cardsData = [
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
            startDate: "21-06-2023",
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
    ];

    const handleDelete = (id) => {
        console.log(`Delete card with ID: ${id}`);
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
                <form>
                    <div className="kortingscodes-form-container d-flex flex-wrap align-items-center">
                        <div className="kortingscodes-select-container mb-3 mb-lg-0">
                            <select className="form-select custom-select-input">
                                <option selected>Sorteer op titel</option>
                                <option>Actieve kortingscodes</option>
                                <option>Inactieve kortingscodes</option>
                            </select>
                        </div>
                        <div className="kortingscodes-search-container mb-3 mb-lg-0">
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control custom-search-input"
                                    placeholder="Zoek op trefwoord"
                                />
                                <button className="btn btn-secondary" type="button">
                                    <FontAwesomeIcon icon={faSearch} className="me-2 search-icon" />
                                    <span className='search-text'>Zoeken</span>
                                </button>
                            </div>
                        </div>
                        <div className="kortingscodes-checkbox-container mb-3 mb-lg-0">
                            <div className="form-check custom-checkbox">
                                <input className="form-check-input me-4" type="checkbox" id="showInactiveCheckbox" />
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
                {cardsData.map(card => (
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
