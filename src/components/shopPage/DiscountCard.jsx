import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export const DiscountsCards = ({
    title,
    badge,
    startDate,
    expiryLabel,
    expiryDate,
    dealName,
    discount,
    onDelete
}) => {
    return (
        <div className="card p-0 ms-2 mb-2">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <div className="d-flex align-items-center justify-content-center">
                    {!startDate && badge && (
                        <span className={`badge bg-${badge.variant} me-2`}>{badge.text}</span>
                    )}

                    {startDate && expiryDate ? (
                        <span>
                            <span className="expiry-date">{startDate}</span>
                            <span className="fw-bold mx-2">{expiryLabel || "tot"}</span>
                            <span className="expiry-date">{expiryDate}</span>
                        </span>
                    ) : expiryLabel && expiryDate ? (
                        <span>
                            <span className="fw-bold until">{expiryLabel}</span>
                            <span className="expiry-date ms-2">{expiryDate}</span>
                        </span>
                    ) : expiryDate ? (
                        <span className="expiry-date">{expiryDate}</span>
                    ) : null}
                </div>
            </div>
            <div className="card-footer-custom p-0">
                <div className="d-flex justify-content-between text-start px-3 pt-2 pb-3">
                    <div>
                        <span className="fw-bold deal-name">{dealName}</span>
                        <p className="mb-0">{discount}</p>
                    </div>
                    <button
                        className="btn btn-link p-0 trash-button"
                        onClick={() => onDelete && onDelete()}
                        aria-label="Delete"
                    >
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </div>
            </div>
        </div>
    );
};
