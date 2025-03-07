import React from "react";

const MaxUsageForm = ({ maxUsage, setMaxUsage }) => (
    <div className="border rounded settings-forms">
        <div className="d-flex">
            <label className="fw-bold">Maximumgebruik</label>
            <input
                className="form-check-input me-3 checkbox"
                type="checkbox"
                checked={maxUsage}
                onChange={() => setMaxUsage(!maxUsage)}
            />
            Ja
        </div>
        {maxUsage && (
            <div className="d-flex">
                <label className="fw-bold">Aantal keer te gebruiken</label>
                <input type="number" className="form-control number-of-use-input" placeholder="0" min={0} />
            </div>
        )}
    </div>
);

export default MaxUsageForm;
