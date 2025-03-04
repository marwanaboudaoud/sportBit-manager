import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export const ShopPage = () => {
    return (
        <div className='shop-page'>
            <div className='d-flex align-items-center'>
                <FontAwesomeIcon
                    icon={faCartShopping}
                    style={{
                        width: '30px',
                        height: '27px'
                    }}
                    className="me-3 mb-2"
                />
                <h2> Shop</h2>
            </div>
            <hr className="mt-2"  style={{ 
                height: "20px",
            }}  />
        </div>
    )
}

