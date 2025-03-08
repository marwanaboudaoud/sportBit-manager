import React from "react";

export const MaxUsageForm = ({ 
    maxUsage, 
    setMaxUsage, 
    maxUsageCount, 
    setMaxUsageCount,
    errors
}) => (
    <div className="border rounded settings-forms">
        <div className="d-flex">
            <label className="roboto-bold">Maximumgebruik</label>
            <div className="ms-5">
            <input
                className="form-check-input me-2 checkbox"
                type="checkbox"
                checked={maxUsage}
                onChange={() => setMaxUsage(!maxUsage)}
            />
            <span className="roboto-regular">Ja</span>
            </div>
        </div>
        {maxUsage && (
            <div className="d-flex">
                <label className="roboto-bold">Aantal keer te gebruiken</label>
                <div>
                    <input 
                        type="number" 
                        className={`form-control number-of-use-input ${errors.maxUsageCount ? 'is-invalid' : ''}`} 
                        placeholder="0" 
                        value={maxUsageCount}
                        onChange={(e) => setMaxUsageCount(e.target.value)} 
                    />
                    {errors.maxUsageCount && <div className="invalid-feedback">{errors.maxUsageCount}</div>}
                </div>
            </div>
        )}
    </div>
);
