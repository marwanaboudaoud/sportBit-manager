import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';


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
            <label className="roboto-bold">Type korting</label>
            <div className="custom-select-wrapper">
                <select
                    className="form-select"
                    value={discountType}
                    onChange={(e) => setDiscountType(e.target.value)}
                >
                    <option value="Bedrag">Bedrag</option>
                    <option value="Percentage">Percentage</option>
                </select>
                <div className="select-icon">
                    <FontAwesomeIcon icon={faCaretDown} />
                </div>
            </div>
        </div>
        {discountType === "Bedrag" ? (
            <div className="d-flex ">
                <label className="roboto-bold me-3">Kortingsbedrag</label>
                <div className="d-flex align-items-center ms-5">
                    <input
                        type="number"
                        className={`form-control me-2 first-number-input ${errors.discountValue ? 'is-invalid' : ''}`}
                        placeholder="0"
                        max={9999}
                        min={0}
                        value={discountValue}
                        onChange={(e) => {
                            if (e.target.value === '' || Number(e.target.value) >= 0) {
                                setDiscountValue(e.target.value)
                            }
                        }}
                    />
                    <span className="mb-3">,</span>

                    <input
                        type="number"
                        className={`form-control ms-2 second-number-input ${errors.discountCents ? 'is-invalid' : ''}`}
                        placeholder="00"
                        max={99}
                        min={0}
                        value={discountCents === '' ? '0' : discountCents}
                        onChange={(e) => setDiscountCents(e.target.value)}
                        onBlur={(e) => {
                            if (e.target.value === '') {
                                setDiscountCents('0');
                            }
                        }}
                    />

                    {(errors.discountValue || errors.discountCents) &&
                        <div className="invalid-feedback d-block ms-2">
                            {errors.discountValue || errors.discountCents}
                        </div>
                    }
                </div>
            </div>
        ) : (
            <div className="d-flex">
                <label className="roboto-bold">Kortingspercentage</label>
                <div className="position-relative discount-input-container d-flex">
                    <input
                        type="number"
                        className={`form-control ms-5 first-number-input ${errors.discountValue ? 'is-invalid' : ''}`}
                        placeholder="0"
                        min={0}
                        max={100}
                        value={discountValue}
                        onChange={(e) => {
                            if (e.target.value === '' || Number(e.target.value) >= 0) {
                                setDiscountValue(e.target.value);
                            }
                        }}
                    />
                    <span className="ms-2 mt-2">%</span>
                    </div>
                    {errors.discountValue &&
                        <div className="invalid-feedback">
                            {errors.discountValue}
                        </div>
                    }
            </div>
        )}
    </div>
);
