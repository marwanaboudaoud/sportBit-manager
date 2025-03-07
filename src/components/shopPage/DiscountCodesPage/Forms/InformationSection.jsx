import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faRotateRight } from "@fortawesome/free-solid-svg-icons";

export const InformationSection = ({ 
    discountCode, 
    setDiscountCode, 
    fetchRandomWord,
    title,
    setTitle,
    description,
    setDescription,
    errors
}) => (
    <div className="col-12 col-xl-5 pe-md-4 information-form">
        <div className="d-flex align-items-center information-header">
            <FontAwesomeIcon icon={faInfoCircle} className="header-icons" />
            <h5 className="fw-bold mb-0">Informatie</h5>
        </div>
        <div className="d-flex align-items-center justify-content-between">
            <label className="fw-bold">Titel</label>
            <div className="input-wrapper">
                <input 
                    type="text" 
                    className={`form-control ${errors.title ? 'is-invalid' : ''}`} 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                {errors.title && <div className="invalid-feedback">{errors.title}</div>}
            </div>
        </div>
        <div className="d-flex align-items-center justify-content-between position-relative">
            <label className="fw-bold">Code</label>
            <div className="input-wrapper position-relative">
                <input
                    type="text"
                    className={`form-control ${errors.discountCode ? 'is-invalid' : ''}`}
                    value={discountCode}
                    onChange={(e) => setDiscountCode(e.target.value)}
                />
                <span onClick={fetchRandomWord} className="position-absolute refresh-icon-container" title="Generate random code">
                    <FontAwesomeIcon icon={faRotateRight} className="text-muted refresh-icon" />
                </span>
                {errors.discountCode && <div className="invalid-feedback">{errors.discountCode}</div>}
            </div>
        </div>
        <div className="d-flex align-items-start justify-content-between">
            <label className="fw-bold">Omschrijving</label>
            <div className="input-wrapper">
                <textarea
                    className={`form-control placeholder-italic ${errors.description ? 'is-invalid' : ''}`}
                    rows="3"
                    placeholder="Omschrijf hier de kortingsactie. 
                             Waar is de korting voor bedoeld?"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                {errors.description && <div className="invalid-feedback">{errors.description}</div>}
            </div>
        </div>
    </div>
);

