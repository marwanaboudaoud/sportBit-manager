import React from "react";

export const ValidityForm = ({ 
    validFrom, 
    setValidFrom, 
    validTo, 
    setValidTo,
    errors
}) => (
    <div className="border rounded settings-forms">
        <div className="d-flex justify-content-between">
            <label className="fw-bold">Geldig van datum</label>
            <div>
                <input 
                    type="date" 
                    className={`form-control ${errors.validFrom ? 'is-invalid' : ''}`}
                    value={validFrom || ''}
                    onChange={(e) => setValidFrom(e.target.value)}
                />
                {errors.validFrom && <div className="invalid-feedback">{errors.validFrom}</div>}
            </div>
        </div>
        <div className="d-flex justify-content-between">
            <label className="fw-bold">Geldig tot datum<br /> <span className="optional">(optioneel)</span></label>
            <div>
                <input 
                    type="date" 
                    className={`form-control ${errors.validTo ? 'is-invalid' : ''}`}
                    value={validTo || ''}
                    onChange={(e) => setValidTo(e.target.value)}
                />
                {errors.validTo && <div className="invalid-feedback">{errors.validTo}</div>}
            </div>
        </div>
    </div>
);