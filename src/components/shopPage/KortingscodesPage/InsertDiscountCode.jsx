import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlidersH } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

import {
    InformationSection,
    DiscountTypeForm,
    ValidityForm,
    MaxUsageForm
} from './Forms';

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
                    <InformationSection
                        discountCode={discountCode}
                        setDiscountCode={setDiscountCode}
                        clearCode={clearCode}
                    />
                    <div className="col-12 col-xl-5 settings-forms-container">
                        <div className="d-flex align-items-center settings-header">
                            <FontAwesomeIcon icon={faSlidersH} className="header-icons" />
                            <h5 className="fw-bold mb-0">Instellingen</h5>
                        </div>
                        <DiscountTypeForm discountType={discountType} setDiscountType={setDiscountType} />
                        <ValidityForm />
                        <MaxUsageForm maxUsage={maxUsage} setMaxUsage={setMaxUsage} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-xl-10 mb-3">
                        <hr />
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
