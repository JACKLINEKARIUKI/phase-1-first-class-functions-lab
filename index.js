
const returnFirstTwoDrivers = function (drivers){
    return drivers.slice(0, 2);
}
const returnLastTwoDrivers = function (drivers){
    return drivers.slice(drivers.length - 2);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier){
    return function(fare){
        return fare * multiplier;
    }
}

function selectDifferentDrivers(drivers, selectDrivers){
    return selectDrivers(drivers);
}

const fareDoubler = function (fare) {
    return createFareMultiplier(2)(fare);
}

const fareTripler = function (fare) {
    return createFareMultiplier(3)(fare);
}