import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faSlidersH, faRotateRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const InsertDiscountCode = () => {
    const [discountType, setDiscountType] = useState("Bedrag");
    const [maxUsage, setMaxUsage] = useState(false);
    const [discountCode, setDiscountCode] = useState("");

    const clearCode = () => {
        setDiscountCode("");
    };

    return (
        <div className="mt-4 insert-discount-code">
            <div className="title-container">
                <h2 className="fw-bold">Kortingscode toevoegen</h2>
            </div>
            <div className="p-4 mt-4">
                <div className="row">
                    <div className=" col-12 col-xl-5 pe-md-4 information-form">
                        <div className="d-flex align-items-center information-header">
                            <FontAwesomeIcon icon={faInfoCircle} className="header-icons header-icons" />
                            <h5 className="fw-bold mb-0">Informatie</h5>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                            <label className="fw-bold">Titel</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="d-flex align-items-center justify-content-between position-relative">
                            <label className="fw-bold">Code</label>
                            <input
                                type="text"
                                value={discountCode}
                                onChange={(e) => setDiscountCode(e.target.value)}
                            />
                            <span onClick={clearCode} className="position-absolute refresh-icon-container">
                                <FontAwesomeIcon icon={faRotateRight} className="text-muted refresh-icon" />
                            </span>
                        </div>
                        <div className="d-flex align-items-start justify-content-between">
                            <label className="fw-bold">Omschrijving</label>
                            <textarea
                                className="form-control placeholder-italic"
                                rows="3"
                                placeholder="Omschrijf hier de kortingsactie. 
                                             Waar is de korting voor bedoeld?"
                            ></textarea>
                        </div>
                    </div>
                    <div className="col-12 col-xl-5 settings-forms-container">
                        <div className="d-flex align-items-center settings-header">
                            <FontAwesomeIcon icon={faSlidersH} className="header-icons" />
                            <h5 className="fw-bold mb-0">Instellingen</h5>
                        </div>
                        <div className="border rounded settings-forms">
                            <div className="d-flex justify-content-between type-discount-container">
                                <label className="fw-bold">Type korting</label>
                                <select
                                    className="form-select"
                                    value={discountType}
                                    onChange={(e) => setDiscountType(e.target.value)}
                                >
                                    <option value="Bedrag">Bedrag</option>
                                    <option value="Percentage">Percentage</option>
                                </select>
                            </div>
                            {discountType === "Bedrag" && (
                                <div className="d-flex justify-content-between">
                                    <label className="fw-bold">Kortingsbedrag</label>
                                    <div className="d-flex align-items-center ">
                                        <input type="number" className="form-control me-2 first-number-input" placeholder="0" max={9999} min={0} />
                                        <span className="mb-3">,</span>
                                        <input type="number" className="form-control ms-2 second-number-input" placeholder="00" max={99} min={0} />
                                    </div>
                                </div>
                            )}
                            {discountType === "Percentage" && (
                                <div className="d-flex justify-content-between">
                                    <label className="fw-bold">Kortingspercentage</label>
                                    <input type="number" className="form-control first-number-input" placeholder="0" min={0} max={100} />
                                </div>
                            )}
                        </div>
                        <div className="border rounded settings-forms">
                            <div className="d-flex justify-content-between">
                                <label className="fw-bold">Geldig van datum</label>
                                <input type="date" className="form-control" />
                            </div>
                            <div className="d-flex justify-content-between">
                                <label className="fw-bold">Geldig tot datum<br /> <span className="optional">(optioneel)</span></label>
                                <input type="date" className="form-control" />
                            </div>
                        </div>
                        <div className="border rounded settings-forms">
                            <div className="d-flex">
                                <label className="fw-bold">Maximumgebruik</label>
                                <input
                                    className="form-check-input me-3 checkbox"
                                    type="checkbox"
                                    checked={maxUsage}
                                    onChange={() => setMaxUsage(!maxUsage)}
                                />

                                Ja
                            </div>
                            {maxUsage && (
                                <div className="d-flex ">
                                    <label className="fw-bold">Aantal keer te gebruiken</label>
                                    <input type="number" className="form-control number-of-use-input" placeholder="0" min={0} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-xl-10 mb-3">
                        <hr  />
                        </div>
                </div>
                <div>
                    <Link to="/shop/kortingscodes"
                        className="button button-cancel me-3 cancel-button" type="button">
                        <span className='search-text'>Annuleren</span>
                    </Link>
                    <button className="button button-primary" type="button">
                        <span className='search-text'>Opslaan</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InsertDiscountCode;
