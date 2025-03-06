import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faSlidersH, faRotateRight } from "@fortawesome/free-solid-svg-icons";

const InsertDiscountCode = () => {
    const [discountType, setDiscountType] = useState("Bedrag");
    const [maxUsage, setMaxUsage] = useState(false);
    const [discountCode, setDiscountCode] = useState("LENTE20");

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
                    <div className="col-md-5 pe-md-4 information-form">
                        <div className="d-flex align-items-center information-header">
                            <FontAwesomeIcon icon={faInfoCircle} className="me-2" />
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
                            <span onClick={clearCode} className="position-absolute refresh-icon">
                                <FontAwesomeIcon icon={faRotateRight} className="text-muted" />
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
                    <div className="col-md-5">
                        <div className="d-flex align-items-center settings-header">
                            <FontAwesomeIcon icon={faSlidersH} className="me-2" />
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
                                <div className="d-flex justify-content-between align-items-center">
                                    <label className="fw-bold">Kortingsbedrag</label>
                                    <div className="d-flex align-items-center">
                                        <input type="number" className="form-control me-2 first-number-input" placeholder="0" max={9999} min={0} />
                                        <span className="fs-5">,</span>
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
                                <label className="fw-bold">Geldig van</label>
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
                                    className="form-check-input me-4 checkbox"
                                    type="checkbox"
                                    checked={maxUsage}
                                    onChange={() => setMaxUsage(!maxUsage)}
                                />
                            </div>
                            {maxUsage && (
                                <div className="d-flex">
                                    <label className="fw-bold">Aantal keer te gebruiken</label>
                                    <input type="number" className="form-control number-of-use-input" placeholder="0" min={0} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InsertDiscountCode;
