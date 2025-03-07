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
    
    // Validation errors
    const [errors, setErrors] = useState({});

    // Fetch random word on component mount
    useEffect(() => {
        fetchRandomWord();
    }, []);

    // Function to fetch random word from API
    const fetchRandomWord = async () => {
        try {
            const response = await fetch('https://random-word-api.herokuapp.com/word');
            const data = await response.json();
            if (data && data.length > 0) {
                // Convert to uppercase for better visibility as a discount code
                setDiscountCode(data[0].toUpperCase());
            }
        } catch (error) {
            console.error("Error fetching random word:", error);
        }
    };

    // Form validation
    const validateForm = () => {
        const newErrors = {};
        
        // Title validation
        if (!title.trim()) {
            newErrors.title = "Titel is verplicht";
        }
        
        // Code validation
        if (!discountCode.trim()) {
            newErrors.discountCode = "Code is verplicht";
        } else if (discountCode.length < 3) {
            newErrors.discountCode = "Code moet minimaal 3 tekens bevatten";
        }
        
        // Description validation
        if (!description.trim()) {
            newErrors.description = "Omschrijving is verplicht";
        }
        
        // Discount value validation
        if (discountType === "Bedrag") {
            if (!discountValue || discountValue <= 0) {
                newErrors.discountValue = "Voer een geldig bedrag in";
            }
            if (!discountCents && discountCents !== 0) {
                newErrors.discountCents = "Voer geldige centen in";
            }
        } else {
            if (!discountValue || discountValue <= 0 || discountValue > 100) {
                newErrors.discountValue = "Percentage moet tussen 1 en 100 zijn";
            }
        }
        
        // Date validation
        if (!validFrom) {
            newErrors.validFrom = "Geldig vanaf datum is verplicht";
        }
        
        if (validFrom && validTo && new Date(validFrom) > new Date(validTo)) {
            newErrors.validTo = "Einddatum moet na startdatum liggen";
        }
        
        // Max usage validation
        if (maxUsage && (!maxUsageCount || maxUsageCount < 1)) {
            newErrors.maxUsageCount = "Voer een geldig aantal in";
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        if (validateForm()) {
            // Create the discount object
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
            // Here you would typically send this data to an API
            
            // Navigate back to the discount codes page on success
            navigate('/shop/kortingscodes');
        } else {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="mt-4 insert-discount-code">
            <div className="title-container">
                <h2 className="fw-bold">Kortingscode toevoegen</h2>
            </div>
            <form className="p-4 mt-4" onSubmit={handleSubmit}>
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
                    <div className="col-12 col-xl-5 settings-forms-container">
                        <div className="d-flex align-items-center settings-header">
                            <FontAwesomeIcon icon={faSlidersH} className="header-icons" />
                            <h5 className="fw-bold mb-0">Instellingen</h5>
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
                    <Link to="/shop/kortingscodes"
                        className="button button-cancel me-3 cancel-button" type="button">
                        <span className='search-text'>Annuleren</span>
                    </Link>
                    <button 
                        className="button button-primary" 
                        type="submit"
                        disabled={isSubmitting}
                    >
                        <span className='search-text'>
                            {isSubmitting ? 'Bezig met opslaan...' : 'Opslaan'}
                        </span>
                    </button>
                </div>
            </form>
        </div>
    );
};
