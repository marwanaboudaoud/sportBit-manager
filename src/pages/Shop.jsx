import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Routes, Route, Navigate } from 'react-router-dom';
import {ShopPageNav} from '../components/shopPage/ShopPageNav';
import {Productgroepen} from '../components/shopPage/Productgroeps';
import {Abonnementen} from '../components/shopPage/Subscriptions';
import {Artikelen} from '../components/shopPage/Articles';
import {DiscountsCodes} from '../components/shopPage/DiscountCodesPage/DiscountsCodes';
import {Rittenkaarten} from '../components/shopPage/TravelCards';
import {InsertDiscountCode} from '../components/shopPage/DiscountCodesPage/InsertDiscountCode';

export const ShopPage = () => {
    return (
        <div className='shop-page'>
            <div className='d-flex align-items-center'>
                <FontAwesomeIcon
                    icon={faCartShopping}
                    className="me-3 mb-2 shop-logo"
                />
                <h2 className='roboto-bold'> Shop</h2>
            </div>

            <hr className="mt-2 mb-4" />

            <ShopPageNav />

            <div className="mt-4">
                <Routes>
                    <Route path="/" element={<Navigate to="productgroepen" replace />} />
                    <Route path="productgroepen" element={<Productgroepen />} />
                    <Route path="abonnementen" element={<Abonnementen />} />
                    <Route path="rittenkaarten" element={<Rittenkaarten />} />
                    <Route path="artikelen" element={<Artikelen />} />
                    <Route path="discount-codes" element={<DiscountsCodes/>} />
                    <Route path="discount-codes/new" element={<InsertDiscountCode />} />
                </Routes>
            </div>
        </div>
    );
};
