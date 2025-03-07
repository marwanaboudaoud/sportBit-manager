import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Routes, Route, Navigate } from 'react-router-dom';
import {ShopPageNav} from '../components/shopPage/ShopPageNav';
import {Productgroepen} from '../components/shopPage/Productgroeps';
import {Abonnementen} from '../components/shopPage/Subscriptions';
import {Artikelen} from '../components/shopPage/Articles';
import {Kortingscodes} from '../components/shopPage/DiscountCodesPage/DiscountsCodes';
import {Rittenkaarten} from '../components/shopPage/TravelCards';
import {InsertDiscountCode} from '../components/shopPage/DiscountCodesPage/InsertDiscountCode';

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

            <hr className="mt-2" style={{
                height: "20px",
            }} />

            <ShopPageNav />

            <div className="mt-4">
                <Routes>
                    <Route path="/" element={<Navigate to="productgroepen" replace />} />
                    <Route path="productgroepen" element={<Productgroepen />} />
                    <Route path="abonnementen" element={<Abonnementen />} />
                    <Route path="rittenkaarten" element={<Rittenkaarten />} />
                    <Route path="artikelen" element={<Artikelen />} />
                    <Route path="kortingscodes" element={<Kortingscodes />} />
                    <Route path="kortingscodes/new" element={<InsertDiscountCode />} />
                </Routes>
            </div>
        </div>
    );
};
