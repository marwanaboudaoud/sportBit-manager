import React from "react";

const DiscountTypeForm = ({ discountType, setDiscountType }) => (
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
                <div className="d-flex align-items-center">
                    <input type="number" className="form-control me-2 first-number-input" placeholder="0" max={9999} min={0} />
                    <span className="mb-3">,</span>
                    <input type="number" className="form-control ms-2 second-number-input" placeholder="00" max={99} min={0} />
                </div>
            </div>
        ) : (
            <div className="d-flex justify-content-between">
                <label className="fw-bold">Kortingspercentage</label>
                <input type="number" className="form-control first-number-input" placeholder="0" min={0} max={100} />
            </div>
        )}
    </div>
);

export default DiscountTypeForm;
