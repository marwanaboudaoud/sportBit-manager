import React from "react";

const ValidityForm = () => (
    <div className="border rounded settings-forms">
        <div className="d-flex justify-content-between">
            <label className="fw-bold">Geldig van datum</label>
            <input type="date" className="form-control" />
        </div>
        <div className="d-flex justify-content-between">
            <label className="fw-bold">Geldig tot datum<br /> <span className="optional">(optioneel)</span></label>
            <input type="date" className="form-control" />
        </div>
    </div>
);

export default ValidityForm;
