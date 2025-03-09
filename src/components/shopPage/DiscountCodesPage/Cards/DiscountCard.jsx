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
                <h5 className="card-title rockwell-normal">{title}</h5>
                <div className="d-flex align-items-center justify-content-center">
                    {!startDate && badge && (
                        <span className={`badge bg-${badge.variant} me-2 roboto-bold`}>{badge.text}</span>
                    )}

                    {startDate && expiryDate ? (
                        <span>
                            <span className="expiry-date roboto-regular">{startDate}</span>
                            <span className="mx-2 roboto-bold expiry-date">{expiryLabel || "tot"}</span>
                            <span className="expiry-date roboto-regular">{expiryDate}</span>
                        </span>
                    ) : expiryLabel && expiryDate ? (
                        <span>
                            <span className="until roboto-bold expiry-date ">{expiryLabel}</span>
                            <span className="expiry-date ms-2 roboto-regular">{expiryDate}</span>
                        </span>
                    ) : expiryDate ? (
                        <span className="expiry-date roboto-regular">{expiryDate}</span>
                    ) : null}
                </div>
            </div>
            <div className="card-footer-custom p-0">
                <div className="d-flex justify-content-between text-start px-3 pt-2 pb-3">
                    <div>
                        <span className="deal-name roboto-extraBold">{dealName}</span>
                        <p className="mb-0 deal-value roboto-regular">{discount}</p>
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
