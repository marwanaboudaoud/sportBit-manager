import React from "react";

export const DiscountTypeForm = ({
    discountType,
    setDiscountType,
    discountValue,
    setDiscountValue,
    discountCents,
    setDiscountCents,
    errors
}) => (
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
        {discountType === "Bedrag" ? (
            <div className="d-flex justify-content-between">
                <label className="fw-bold">Kortingsbedrag</label>
                <div className="d-flex align-items-center discount-input-container">
                    <input
                        type="number"
                        className={`form-control me-2 first-number-input ${errors.discountValue ? 'is-invalid' : ''}`}
                        placeholder="0"
                        max={9999}
                        min={0}
                        value={discountValue}
                        onChange={(e) => setDiscountValue(e.target.value)}
                    />
                    <span className="mb-3">,</span>
                 
                        <input
                            type="number"
                            className={`form-control ms-2 second-number-input ${errors.discountCents ? 'is-invalid' : ''}`}
                            placeholder="00"
                            max={99}
                            min={0}
                            value={discountCents}
                            onChange={(e) => setDiscountCents(e.target.value)}
                        />
                        {(errors.discountValue || errors.discountCents) &&
                            <div className="invalid-feedback d-block ms-2">
                                {errors.discountValue || errors.discountCents}
                            </div>
                        }
                    </div>
                </div>
        ) : (
            <div className="d-flex justify-content-between">
                <label className="fw-bold">Kortingspercentage</label>
                <div className="position-relative discount-input-container">
                    <input
                        type="number"
                        className={`form-control first-number-input ${errors.discountValue ? 'is-invalid' : ''}`}
                        placeholder="0"
                        min={0}
                        max={100}
                        value={discountValue}
                        onChange={(e) => setDiscountValue(e.target.value)}
                    />
                    {errors.discountValue &&
                        <div className="invalid-feedback">
                            {errors.discountValue}
                        </div>
                    }
                </div>
            </div>
        )}
    </div>
);
