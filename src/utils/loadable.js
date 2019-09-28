import React from 'react';

export const loadable = {
    login: React.lazy(() => import('../pages/Login/Login')),
    market: React.lazy(() => import('../pages/Market/Market')),
    cart: React.lazy(() => import('../pages/Cart/Cart')),
}