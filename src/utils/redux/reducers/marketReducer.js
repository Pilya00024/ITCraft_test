import * as types from '../actions/actionTypes';

const productList = [
    {
        id: 1,
        name: "Chevrolet Camaro",
        description: "FEDERAL EMISSIONS, ENGINE, ECOTEC 2.0L T, 4 SPD AUTO W/ OD, BLACK BOWTIES, FRONT",
        inCart: false,
    },
    {
        id: 2,
        name: "Nissan Rogue Sport",
        description: "Pearl White 2019 Nissan Rogue Sport SV FWD CVT with Xtronic 2.0L DOHCRecent Arrival! 25/32 City/Highway MPG Price does not include tax, title, and license fees. Price includes: $3,500 - Nissan Customer Cash - 2019 Rogue Sport. Exp. 09/30",
        inCart: false,
    },
    {
        id: 3,
        name: "2020 Hyundai Elantra",
        description: "FUEL EFFICIENT 40 MPG Hwy/30 MPG City! Blind Spot Monitor, Apple CarPlay, Lane Keeping Assist, Smart Device Integration, Back-Up Camera, Dual Zone A/C, WINTER WEATHER PACKAGE, Alloy Wheels, Cross-Traffic Alert, Bluetooth, Satellite Radio, iPod/MP3 Input.",
        inCart: false,
    },
    {
        id: 4,
        name: "2019 Ford F-250 Super Duty",
        description: "Call Joe Marchese Direct at 518-766-5000 for the Best Deals around On NEW Ford and Pre Owned Inventory! AD CREATED BY AUTOMOTIVE ENHANCEMENT Thank you for Choosing Marchese Ford ! Call Us TOLL FREE 1-866-696-9921 Trades Welcome! Financing Always Available!",
        inCart: false,
    },
    {
        id: 5,
        name: "2020 Ford Mustang",
        description: "RWD INTRODUCING THE ALL NEW and EXCLUSIVE *JACKSON ADVANTAGE* The most value for your money. Guaranteed! When you purchase from Casey Jackson Ford, you become family and being a part of a family comes with perks, here are just a few you get with the*JACKSON ADVANTAGE* (OVER $4,500 VALUE)",
        inCart: false,
    },
    {
        id: 6,
        name: "2020 Hyundai Santa Fe",
        description: "Heated Seats, Lane Keeping Assist, Smart Device Integration, Blind Spot Monitor, Apple CarPlay, Alloy Wheels, Back-Up Camera, TOW HITCH, Tow Hitch, Onboard Communications System, iPod/MP3 Input, Remote Engine Start, Satellite Radio. MACHINE GRAY exterior and GRAY interior, SEL trim.",
        inCart: false,
    }
];

 const marketList = (state = productList, {type, id}) => {
     switch (type) {
        case types.CHANGE_PRODUCT_STATUS: 
            return [...state].map(product => {
                if(product.id === id) {
                    product.inCart = !product.inCart;
                }
                return product;
            });
        case types.CLEAR_CART: 
            return [...state].map(product => {
                product.inCart = false;
                return product;
            });
        default: 
            return state;
     }
 }

 export default marketList;