import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faRotateRight } from "@fortawesome/free-solid-svg-icons";

const InformationSection = ({ discountCode, setDiscountCode, clearCode }) => (
    <div className="col-12 col-xl-5 pe-md-4 information-form">
        <div className="d-flex align-items-center information-header">
            <FontAwesomeIcon icon={faInfoCircle} className="header-icons" />
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
);

export default InformationSection;
