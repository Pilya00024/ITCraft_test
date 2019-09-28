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
        description: "FUEL EFFICIENT 40 MPG Hwy/30 MPG City! Blind Spot Monitor, Apple CarPlay, Lane Keeping Assist, Smart Device Integration, Back-Up Camera, Dual Zone A/C, WINTER WEATHER PACKAGE, Alloy Wheels, Cross-Traffic Alert, Bluetooth, Satellite Radio, iPod/MP3 Input. QUARTZ WHITE PEARL exterior and BLACK interior, SEL trim. READ MORE! Gates Hyundai Ph: 859-624-1211 KEY FEATURES INCLUDE iPod/MP3 Input, Aluminum Wheels, Blind Spot Monitor MP3 Player, Keyless Entry, Remote Trunk Release, Child Safety Locks, Steering Wheel Controls. OPTION PACKAGES WINTER WEATHER PACKAGE Mudguards, All-Weather Floor Mats. Hyundai SEL with QUARTZ WHITE PEARL exterior and BLACK interior features a 4 Cylinder Engine with 147 HP at 6200 RPM*. Horsepower calculations based on trim engine configuration. Fuel economy calculations based on original manufacturer data for trim engine configuration. Please confirm the accuracy of the included equipment by calling us prior to purchase.",
        inCart: false,
    },
    {
        id: 4,
        name: "2019 Ford F-250 Super Duty",
        description: "Call Joe Marchese Direct at 518-766-5000 for the Best Deals around On NEW Ford and Pre Owned Inventory! AD CREATED BY AUTOMOTIVE ENHANCEMENT Thank you for Choosing Marchese Ford ! Call Us TOLL FREE 1-866-696-9921 Trades Welcome! Financing Always Available! Information deemed reliable, but not guaranteed. Interested parties should confirm all data before relying on it to make a purchase decision. All prices and specifications are subject to change without notice. Prices may not include additional fees such as government fees and taxes, title and registration fees, finance charges, dealer document preparation fees, processing fees, and emission testing and compliance charges.",
        inCart: false,
    },
    {
        id: 5,
        name: "2020 Ford Mustang",
        description: "RWD INTRODUCING THE ALL NEW and EXCLUSIVE *JACKSON ADVANTAGE* The most value for your money. Guaranteed! When you purchase from Casey Jackson Ford, you become family and being a part of a family comes with perks, here are just a few you get with the*JACKSON ADVANTAGE* (OVER $4,500 VALUE) 1. Jackson Advantage 24/7 Roadside Assistance, 2. Rain Repellent (military Air Force grade w/ 3 free re-applications), 3. Deposit Protection, 4. I.D. Theft Protection (entire family), 5. Headlight Restoration (w/1 free re-app), 6. A/C System Refresh, 7. Jackson Advantage Customer Welcome Kit, and much more, call or see dealer for complete *JACKSON ADVANTAGE* details! Or visit us at www.caseyjacksonford.com. 2020 Ford Mustang",
        inCart: false,
    },
    {
        id: 6,
        name: "2020 Hyundai Santa Fe",
        description: "Heated Seats, Lane Keeping Assist, Smart Device Integration, Blind Spot Monitor, Apple CarPlay, Alloy Wheels, Back-Up Camera, TOW HITCH, Tow Hitch, Onboard Communications System, iPod/MP3 Input, Remote Engine Start, Satellite Radio. MACHINE GRAY exterior and GRAY interior, SEL trim. CLICK NOW! Gates Hyundai Ph: 859-624-1211 KEY FEATURES INCLUDE Heated Driver Seat, Satellite Radio, Aluminum Wheels Rear Spoiler, MP3 Player, Keyless Entry, Privacy Glass, Steering Wheel Controls. OPTION PACKAGES Hyundai SEL with MACHINE GRAY exterior and GRAY interior features a 4 Cylinder Engine with 185 HP at 6000 RPM*. WHO WE ARE Your Gates price includes 1000 retail bonus cash. Conditional price includes Hmfc/Loyalty/Military/College Grad/Disaster relief rebates.This special offer cannot be combones with special APR or lease offer. Pricing does not include tax, title, lic or $499 document fee. Offer is good through 9/30/2019. Pricing details visit www.gateshyundai.com Horsepower calculations based on trim engine configuration. Please confirm the accuracy of the included equipment by calling us prior to purchase.",
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
            })
        default: 
        return state;
        
     }
 }

 export default marketList;