import React from "react";

export const MaxUsageForm = ({ 
    maxUsage, 
    setMaxUsage, 
    maxUsageCount, 
    setMaxUsageCount,
    errors
}) => (
    <div className="border rounded settings-forms">
        <div className="d-flex justify-content-between">
            
            <label className="fw-bold">Maximumgebruik</label>
            <div className="Maximum-usage-checkbox-container">
            <input
                className="form-check-input me-3 checkbox"
                type="checkbox"
                checked={maxUsage}
                onChange={() => setMaxUsage(!maxUsage)}
            />
            Ja
            </div>
        </div>
        {maxUsage && (
            <div className="d-flex">
                <label className="fw-bold">Aantal keer te gebruiken</label>
                <div>
                    <input 
                        type="number" 
                        className={`form-control number-of-use-input ${errors.maxUsageCount ? 'is-invalid' : ''}`} 
                        placeholder="0" 
                        min={1}
                        value={maxUsageCount}
                        onChange={(e) => setMaxUsageCount(e.target.value)} 
                    />
                    {errors.maxUsageCount && <div className="invalid-feedback">{errors.maxUsageCount}</div>}
                </div>
            </div>
        )}
    </div>
);
