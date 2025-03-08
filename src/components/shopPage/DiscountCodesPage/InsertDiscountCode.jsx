import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlidersH } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from 'react-router-dom';

import {
    InformationSection,
    DiscountTypeForm,
    ValidityForm,
    MaxUsageForm
} from './Forms';

export const InsertDiscountCode = () => {
    const navigate = useNavigate();
    
    // Form state
    const [title, setTitle] = useState("");
    const [discountCode, setDiscountCode] = useState("");
    const [description, setDescription] = useState("");
    const [discountType, setDiscountType] = useState("Bedrag");
    const [discountValue, setDiscountValue] = useState("");
    const [discountCents, setDiscountCents] = useState("");
    const [validFrom, setValidFrom] = useState("");
    const [validTo, setValidTo] = useState("");
    const [maxUsage, setMaxUsage] = useState(false);
    const [maxUsageCount, setMaxUsageCount] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    const [errors, setErrors] = useState({});

    useEffect(() => {
        fetchRandomWord();
    }, []);
    const fetchRandomWord = async () => {
        try {
            const response = await fetch('https://random-word-api.herokuapp.com/word');
            const data = await response.json();
            if (data && data.length > 0) {
                setDiscountCode(data[0].toUpperCase());
            }
        } catch (error) {
            console.error("Error fetching random word:", error);
        }
    };

    const validateForm = () => {
        const newErrors = {};
                if (!title.trim()) {
            newErrors.title = "Titel is verplicht";
        }
        
        if (!discountCode.trim()) {
            newErrors.discountCode = "Code is verplicht";
        } else if (discountCode.length < 3) {
            newErrors.discountCode = "Code moet minimaal 3 tekens bevatten";
        }
        
        if (!description.trim()) {
            newErrors.description = "Omschrijving is verplicht";
        }
        
        if (discountType === "Bedrag") {
            if (!discountValue || discountValue <= 0) {
                newErrors.discountValue = "Voer een geldig bedrag in";
            }
        } else {
            if (!discountValue || discountValue <= 0 || discountValue > 100) {
                newErrors.discountValue = "Percentage moet tussen 1 en 100 zijn";
            }
        }
        
        if (!validFrom) {
            newErrors.validFrom = "Geldig vanaf datum is verplicht";
        }
        
        if (validFrom && validTo && new Date(validFrom) > new Date(validTo)) {
            newErrors.validTo = "Einddatum moet na startdatum liggen";
        }
        

        if (maxUsage && (!maxUsageCount || maxUsageCount < 1)) {
            newErrors.maxUsageCount = "Aantal moet groter zijn dan 0";
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        if (validateForm()) {
            const discountData = {
                title,
                code: discountCode,
                description,
                discountType,
                value: discountType === "Bedrag" 
                    ? parseFloat(`${discountValue}.${discountCents || '00'}`) 
                    : parseInt(discountValue),
                validFrom,
                validTo,
                maxUsage,
                maxUsageCount: maxUsage ? parseInt(maxUsageCount) : null
            };
            
            console.log("Form submitted successfully:", discountData);

            navigate('/shop/discount-codes');
        } else {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="mt-4 insert-discount-code ">
            <div className="title-container">
                <h2 className="roboto-bold">Kortingscode toevoegen</h2>
            </div>
            <form className="px-5 mt-4" onSubmit={handleSubmit}>
                <div className="row">
                    <InformationSection
                        discountCode={discountCode}
                        setDiscountCode={setDiscountCode}
                        title={title}
                        setTitle={setTitle}
                        description={description}
                        setDescription={setDescription}
                        fetchRandomWord={fetchRandomWord}
                        errors={errors}
                    />
                    <div className="col-12 col-xl-5 settings-forms-container mt-4 mt-xl-0">
                        <div className="d-flex align-items-center settings-header">
                            <FontAwesomeIcon icon={faSlidersH} className="header-icons" />
                            <h5 className="roboto-bold mb-0">Instellingen</h5>
                        </div>
                        <DiscountTypeForm 
                            discountType={discountType} 
                            setDiscountType={setDiscountType}
                            discountValue={discountValue}
                            setDiscountValue={setDiscountValue}
                            discountCents={discountCents}
                            setDiscountCents={setDiscountCents}
                            errors={errors}
                        />
                        <ValidityForm 
                            validFrom={validFrom}
                            validTo={validTo}
                            setValidFrom={setValidFrom}
                            setValidTo={setValidTo}
                            errors={errors}
                        />
                        <MaxUsageForm 
                            maxUsage={maxUsage}     
                            setMaxUsage={setMaxUsage}
                            maxUsageCount={maxUsageCount}
                            setMaxUsageCount={setMaxUsageCount}
                            errors={errors}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-xl-10 mb-3">
                        <hr />
                    </div>
                </div>
                <div>
                    <Link to="/shop/discount-codes"
                        className="button button-cancel me-3 cancel-button" type="button">
                        <span className='search-text'>Annuleren</span>
                    </Link>
                    <button 
                        className="button button-primary" 
                        type="submit"
                        disabled={isSubmitting}
                    >
                        <span>
                            {isSubmitting ? 'Bezig met opslaan...' : 'Opslaan'}
                        </span>
                    </button>
                </div>
            </form>
        </div>
    );
};
